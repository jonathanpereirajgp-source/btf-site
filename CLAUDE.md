# CLAUDE.md — Site BTF Soluções em Dados

Este arquivo carrega em toda sessão. Consolida o contexto do projeto para que
nenhuma sessão futura dependa da conversa original (que foi perdida).
Leia antes de qualquer alteração.

> Documento de origem: `docs/BTF-CONTEXTO-RECUPERADO.md` (briefing, conteúdo do
> cliente e log de decisões de design). O `git log` é o registro de decisões
> visuais já tomadas — respeite-o.

---

## O que é este projeto

Site institucional (one-brand, marketing) da **BTF Soluções em Dados**, uma
consultoria científica em ciência e engenharia de dados aplicadas a projetos
ambientais, científicos e corporativos. Time de doutores em Ecologia / Ciências
Naturais.

- **Produção:** https://btf-site.vercel.app/
- **Repo:** github.com/jonathanpereirajgp-source/btf-site (`main`)
- **Natureza:** site estático SPA. Conteúdo institucional, não é app.
- **Backend:** Hoje sem backend. O formulário de contato precisa de endpoint — o
  caminho previsto é uma função serverless em `/api/` do próprio Vercel (Vite SPA
  suporta). Decisão já tomada, não precisa reconfirmar.

**Direção criativa (do briefing):** diferenciado, nada genérico, com animações,
leve, bonito, inovador. Explicitamente **sem "cara de IA"** e sem layout genérico.
Referência principal que o cliente aprovou: clam.com.br. Estética editorial:
tipografia grande, muito respiro ("silêncio visual" do manual de marca),
alternância de seções claras e escuras.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Build | Vite 5 |
| UI | React 18 (SPA, client-side) |
| Linguagem | JavaScript + JSX (**não** TypeScript, apesar de `@types/*` instalados) |
| Roteamento | react-router-dom v6 (`BrowserRouter`, client-side) |
| Estilo | Tailwind CSS 3.4 + camada `@layer components` em `src/index.css` |
| Animação | framer-motion v11 |
| Ícones | lucide-react |
| Processamento de imagem | sharp (script offline, devDependency) |
| Deploy | Vercel (`vercel.json` reescreve tudo para `/`) |

Não há: SSR, TanStack, Next.js, testes, ESLint, TypeScript checking, backend/API.
Se for necessário adicionar algum, **pergunte antes** — o projeto foi mantido
deliberadamente simples.

### Comandos

```bash
npm install
npm run dev        # Vite dev server (porta 5173, host exposto)
npm run build      # build de produção → dist/
npm run preview    # servir o build local
node scripts/process-photos.mjs   # tratamento editorial de fotos (offline)
```

---

## Deploy

- Push em `main` dispara **deploy automático** no Vercel (produção).
- **Não há branch de staging.**
- PRs geram **preview deploys** no Vercel.

---

## Estrutura de pastas

```
index.html                 # entry HTML; <head> com fontes, favicon, preload I Brand
vite.config.js             # React plugin, porta 5173
tailwind.config.js         # TOKENS de cor, fontes, spacing (ler antes de estilizar)
postcss.config.js          # tailwind + autoprefixer
vercel.json                # SPA rewrite (tudo → index.html)
scripts/process-photos.mjs # pipeline sharp: resize + desatura + contraste + sharpen
public/
  brand/       # logos e ícones oficiais (SVG): icon-*, logo-extensa-*
  grafismos/   # grafismos da marca (Phyllomedusa): padronagem, chave, ponto
  fonts/       # Ibrand.woff / Ibrand.woff2 (fonte display self-hosted)
  photos/      # fotografia própria do cliente (já tratada)
  team/         # fotos da equipe e da equipe em grupo
  _redirects    # regra estilo Netlify (redundante com vercel.json)
src/
  main.jsx           # bootstrap: BrowserRouter + StrictMode
  App.jsx            # rotas + transição de página (AnimatePresence) + ScrollToTop
  index.css          # design system: @font-face, tokens CSS, @layer components
  data/site.js       # ÚNICA fonte de verdade de conteúdo (serviços, time, etc.)
  components/        # reutilizáveis (ver abaixo)
  pages/             # uma por rota
```

**Regra:** todo conteúdo textual/estruturado (serviços, time, parceiros, valores,
cases, stack, áreas) vive em `src/data/site.js`. Não hardcode conteúdo novo dentro
de página — adicione ao `site.js` e consuma. (Exceção herdada: o preview de
portfólio na Home tem 3 cards inline; os cases reais estão no `site.js`.)

---

## Sistema de design

### Cores (fonte da verdade: `tailwind.config.js`)

As 3 cores da marca do manual estão implementadas como tokens Tailwind. Use os
tokens, **nunca** hex solto no JSX.

| Marca | Token Tailwind | Hex |
|---|---|---|
| Verde Bioindicador | `moss` (DEFAULT) | `#AED140` |
| Laranja Destaque | `copper` (DEFAULT) | `#F04F27` |
| Azul escuro (fundo) | `ink-900` | `#0B1622` |

Variações disponíveis:
- `ink`: 900 `#0B1622` · 800 `#142235` · 700 `#243549` · 600 · 500 · 400 (texto/fundos)
- `paper`: DEFAULT `#FFFFFF` · `warm` `#F7F5EF` · `soft` `#FAFAF7`
- `moss`: DEFAULT · `dark #9DBE36` · `deep #7A9628` · `soft #C3DC6E` · `tint #E6F0C6`
- `copper`: DEFAULT · `dark #D3431F` · `soft #F47559`
- `rule` `#1f2c3d`

> Nota: `#071d3c` (Azul Oxford do manual) e `#0B1622` (ink-900 aplicado) são cores
> diferentes por decisão, não por erro. O quase-preto sustenta melhor áreas escuras
> grandes e é coerente com a referência aprovada (clam.com.br). **NÃO substituir
> ink-900.** Se o Oxford for necessário, entra como token novo (`oxford`) em
> superfícies intermediárias e bordas — aditivo, nunca substitutivo.

**Regras de cor já estabelecidas (dos commits — respeitar):**
- Numeradores `/01 /02...` sempre em **laranja** (`.num-tag`, `#F04F27`).
- Palavras-chave em destaque via `<em>` ficam **verdes** (`.em-editorial`).
- Hover de botão em fundo escuro vira **laranja com texto branco**
  (`.btn-primary:hover`, `.btn-outline-dark:hover`).
- Seleção de texto (`::selection`) é verde.

### Tipografia

Duas famílias, definidas em `tailwind.config.js` (`fontFamily`) e carregadas em
`index.css` / `index.html`:

- **Display (títulos h1–h4):** `"I Brand"` — fonte da marca, self-hosted em
  `public/fonts/Ibrand.woff2`, peso único 400, com preload no `index.html`.
- **Corpo:** `Montserrat` (Google Fonts, pesos 300–700). É a fonte do manual.
- Ênfase itálica (`em`, `.em-editorial`): pede `Fraunces` mas **Fraunces não está
  carregada** (sem `@font-face` nem link) → cai para Georgia serif itálico. Se for
  importante, carregue Fraunces; senão, ciente do fallback.

Escala de título é aplicada por classes explícitas `text-[NNpx]` responsivas nas
páginas (ex.: `text-[40px] sm:text-[56px] lg:text-[80px]`), com
`tracking-tighter2` (-0.02em) e `leading` apertado.

> `display-xl` / `display-lg` aparecem como className mas **não estão definidas**
> em lugar nenhum (no-op). O tamanho vem sempre do `text-[..]` ao lado. São
> resíduo inofensivo; não confie nelas para estilo.

### Spacing / layout

- Container: `.wrap` = `max-w-[1280px] mx-auto` com padding lateral responsivo.
- Grid editorial de 12 colunas recorrente: rótulo em `lg:col-span-3`, conteúdo em
  `lg:col-span-9`.
- Seções alternam tom claro/escuro; ritmo vertical típico `py-32 lg:py-44`.
- `maxWidth` custom: `7xl` 1280px, `8xl` 1440px.

### Átomos e utilitários (em `src/index.css`, `@layer components`)

- Botões: `.btn-primary` (verde→laranja no hover), `.btn-solid`, `.btn-outline`,
  `.btn-outline-dark`, `.btn-text`, `.btn-text-dark`.
- Rótulo de seção: `.label` / `.label-dark` (uppercase, tracking largo).
- `.num-tag` (numerador laranja), `.dot-moss`, `.dot-copper`, `.rule-moss`.
- `.link-anim` (sublinhado animado), `.row-hover` (hover de linha em listas).
- `.figure-editorial > .frame` (moldura de imagem com sombra, grão e zoom no hover;
  variante `.on-ink` para fundo escuro), `.paper-grain` (ruído sutil em seções).
- Easing assinatura do projeto: `cubic-bezier(0.22, 1, 0.36, 1)`. Use SEMPRE esse
  para manter coerência de movimento.

---

## Animação (framer-motion)

- **Transição de página:** `App.jsx` — `AnimatePresence mode="wait"`, fade + slide
  vertical, `key={location.pathname}`.
- **Barra de progresso de scroll:** `ScrollProgress.jsx` (`useScroll` + `useSpring`).
- **Palavra rotativa no hero:** `RotatingWord.jsx` (dissolve com blur, ciclo lento).
- **Entrada de seção:** padrão `initial/whileInView` com `viewport={{ once: true }}`
  e `fadeUp` (opacity + y). Usado em cards de serviço, time, cases, valores.
- Movimento de imagem (zoom no hover) e sublinhados são CSS, não framer.
- `@media (prefers-reduced-motion: reduce)` já desliga transições — mantenha.

---

## Rotas / páginas (todas em pt-BR)

| Rota | Arquivo | Estado |
|---|---|---|
| `/` | `pages/Home.jsx` | Completa. Hero + sobre + serviços + especialidade + preview portfólio + time + diferenciais/parceiros. |
| `/sobre` | `pages/Sobre.jsx` | Completa. Origem, missão/visão, valores, diferenciais. |
| `/servicos` e `/servicos/:slug` | `pages/Servicos.jsx` | Completa. Índice + 4 serviços alternando tom; `:slug` faz scroll até a âncora. |
| `/especialidade` | `pages/Especialidade.jsx` | Completa. Tese, pull quote, áreas ambientais, CTA. |
| `/portfolio` | `pages/Portfolio.jsx` | Completa, mas cases são **ilustrativos** ("tipos de projetos"), não cases reais nomeados. |
| `/time` | `pages/Time.jsx` | Completa. Spread do grupo + 3 sócios fundadores. |
| `/contato` | `pages/Contato.jsx` | UI completa; **formulário não envia** (só simula sucesso — sem backend). |
| `*` | `pages/NotFound.jsx` | 404 editorial. |

Rotas dos serviços (slugs em `site.js`): `ciencia-de-dados`, `engenharia-de-dados`,
`dashboards-bi`, `automacao`.

---

## Componentes reutilizáveis (`src/components/`)

- `Navbar.jsx` — header fixo, transparente no topo e escuro/blur ao rolar (>40px);
  logo verde encolhe; menu mobile; CTA "Falar com a BTF".
- `Footer.jsx` — statement de fechamento + navegação + contatos + copyright.
- `Section.jsx` — wrapper com prop `tone` (`paper` | `warm` | `soft` | `ink`).
- `PageHeader.jsx` — cabeçalho escuro padrão das páginas internas (eyebrow, título,
  sub, imagem opcional, grafismo de marca `mark`).
- `BrandMark.jsx` — grafismo decorativo da marca (padronagem/chave/duasChaves/icon),
  posicionado absoluto; use dentro de pai `relative overflow-hidden`.
- `RotatingWord.jsx` — palavra que rotaciona com dissolve.
- `ScrollProgress.jsx` — barra de progresso no topo.

---

## Assets (`public/`)

- `brand/` — logos oficiais SVG: `icon-{azul,branco,laranja,verde,verde-laranja}.svg`,
  `logo-extensa-{azul,branco,verde,verde-laranja}.svg`. Favicon = `icon-verde.svg`.
- `grafismos/` — grafismos orgânicos derivados da *Phyllomedusa*: `padronagem-*`,
  `chave-*`, `duas-chaves-*`, `ponto-*` em variações de cor.
- `fonts/` — `Ibrand.woff` / `.woff2` (fonte display da marca).
- `photos/` — fotografia própria do cliente, já tratada: `sistema-home.jpg`,
  `engenharia-de-dados.jpg`, `sistema-especialidade.jpg`, `especialidade-hero.jpg`.
- `team/` — `claudio.jpg`, `graziella.jpg`, `thaise.jpg`, `equipe-{trio,laptop,grafico}.jpg`.
- **Imagens Unsplash (stock):** `data/site.js` → objeto `stock` faz hotlink de
  URLs externas do Unsplash em vários pontos (preview de portfólio, cases, alguns
  serviços, spreads da Sobre). São placeholders de qualidade, **não** assets do
  cliente. Trocar por fotografia própria quando disponível.

---

## Convenções de código (seguir)

1. **Idioma:** todo texto visível ao usuário em **português do Brasil, com
   acentuação correta**. Nomes de rota e arquivos de página também em pt-BR
   (`Servicos.jsx`, `/especialidade`).
2. **Sem travessão (em-dash) em texto visível.** Decisão explícita (commit
   "Remove em-dashes"). Use vírgula, ponto ou reticências.
3. **Componente:** `export default function Nome()`, JSX, sem TypeScript.
   Subcomponentes auxiliares (ex.: `Fact`, `Statement`, `Field`) ficam no rodapé
   do próprio arquivo da página.
4. **Estilo:** Tailwind utilitário no JSX + tokens do `tailwind.config.js`.
   Padrões repetidos viram classe em `@layer components` no `index.css`. Não
   introduza CSS-in-JS nem styled-components.
5. **Cores sempre via token** (`bg-ink-900`, `text-moss`, `.num-tag`), nunca hex
   inline no JSX. Novos valores de marca entram em `tailwind.config.js`.
6. **Movimento sempre com o easing `cubic-bezier(0.22, 1, 0.36, 1)`** e durações
   longas (0.6–1.1s) para o tom "cinemático/silencioso".
7. **Conteúdo em `src/data/site.js`**, componentes consomem por import.
8. **Numeradores** `/01`, `/02` com `String(i + 1).padStart(2, '0')` e `.num-tag`.
9. Imagens editoriais sempre dentro de `figure-editorial > .frame` (com `on-ink`
   quando o fundo é escuro).

---

## Pendências e pontos de atenção

Nada disto foi alterado nesta auditoria; está listado para decisão futura,
organizado por severidade.

### BLOQUEIA ENTREGA

- **Formulário sem endpoint.** `Contato.jsx` só faz `setSent(true)`; os dados são
  descartados. Precisa da função serverless em `/api/` (ver "Backend"/Deploy).
- **Cases de portfólio são ilustrativos**, não projetos reais nomeados (o copy diz
  "Tipos de projetos que desenvolvemos"). Trocar por cases reais.
- **Hotlink Unsplash** — o objeto `stock` em `site.js` referencia imagens externas
  do Unsplash. Risco de performance e de o link quebrar. Baixar, tratar com
  `process-photos.mjs` e servir de `public/`.
- **Links sociais `href="#"`** (LinkedIn e Instagram no `Footer.jsx` e
  `Contato.jsx`). Substituir pelas URLs reais.
- **`contato@btfdados.com.br` sem confirmação de caixa.** Verificar que o e-mail
  existe e recebe.
- **Domínio próprio não configurado** — o site está em `btf-site.vercel.app`.
  Apontar o domínio definitivo no Vercel.

### BUG VISUAL

- **Fraunces referenciada mas não carregada** → itálico de ênfase cai para Georgia.
  Carregar Fraunces ou assumir o fallback.
- **Classes `display-xl` / `display-lg` são no-op** (ver Tipografia). O tamanho vem
  sempre do `text-[..]` ao lado; as classes não fazem nada.

### COSMÉTICO

- `public/_redirects` (Netlify) é redundante com `vercel.json`. Inofensivo.
- `process-photos.mjs` grava em `public/photos/processed/`, pasta que não existe no
  repo; `site.js` aponta para as fotos já tratadas em `public/photos/*.jpg`. Script
  é ferramenta offline; a saída não é consumida diretamente.
- Sem testes, sem lint, sem typecheck. Combinar se o projeto crescer.

---

## Metodologia de trabalho

- **Auditoria READ-ONLY antes de alterar** qualquer componente, rota, token ou
  estilo compartilhado: leia o que existe, reporte, e só então proponha mudança.
  Não assuma estrutura.
- **Confirme escopo antes de decidir.** Havendo ambiguidade, apresente opções
  numeradas e aguarde resposta.
- **Respeite as decisões de design já tomadas** (registradas no `git log` e neste
  arquivo): numeradores laranja, keywords verdes, hover laranja, sem travessão,
  tags editoriais. Não reverta sem pedido explícito.
- **Reporte exaustivo** ao terminar: o que mudou (arquivo por arquivo), o que foi
  testado, o que ficou pendente, impactos e riscos.
