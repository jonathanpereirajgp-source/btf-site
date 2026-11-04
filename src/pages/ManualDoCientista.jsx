import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check, Play, Plus, Minus, Sparkles, BookOpen, LineChart, FileText, ShieldCheck, Compass, Target } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import { Section } from '../components/Section.jsx'
import BrandMark from '../components/BrandMark.jsx'
import YouTubePlayer from '../components/YouTubePlayer.jsx'
import { photos, manualTeam, team, manualHero, manualBenefits, manualDiferenciais, manualFaq } from '../data/site.js'

const PLANS = [
  {
    tag: 'Mensal',
    price: 'R$ 54,90',
    period: 'por mês',
    subline: 'flexibilidade total',
    href: 'https://pay.hotmart.com/D87516442B?off=nvfhb1yx',
    featured: false,
  },
  {
    tag: 'Semestral',
    price: '6× R$ 47,84',
    period: 'por mês',
    subline: 'economia + compromisso',
    href: 'https://pay.hotmart.com/D87516442B?off=n60rqz6k&bid=1789555457738',
    featured: true,
  },
  {
    tag: 'Anual',
    price: '12× R$ 39,90',
    period: 'por mês',
    subline: 'melhor custo-benefício',
    href: 'https://pay.hotmart.com/D87516442B?off=mlv832pk&bid=1789555473517',
    featured: false,
  },
]

const BENEFIT_ICONS = [LineChart, Sparkles, FileText, ShieldCheck, Compass, Target]

// Map trio names to team photos already loaded on the site
const teamPhotoByName = {
  'Graziella': team.find(t => t.name.startsWith('Graziella')),
  'Thaise':    team.find(t => t.name.startsWith('Thaise')),
  'Cláudio':   team.find(t => t.name.startsWith('Cláudio')),
}

function scrollToPlanos() {
  const el = document.getElementById('planos')
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function ManualDoCientista() {
  return (
    <>
      <PageHeader
        eyebrow={manualHero.eyebrow}
        title={manualHero.headline}
        sub={manualHero.sub}
        mark="chave"
      />

      {/* HERO CTA + foto trio */}
      <Section tone="paper" className="pt-10 pb-28 lg:pb-36 relative overflow-hidden">
        <BrandMark kind="icon" tone="moss" size="md" position="tr" style={{ opacity: 0.2 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 lg:pt-4 space-y-8">
              <div className="space-y-6 text-ink-700 text-[18px] leading-[1.8]">
                <p>
                  Há mais de 10 anos trabalhamos com análise de dados e pesquisa científica,
                  ajudando pesquisadores a dominarem a metodologia, interpretarem seus dados,
                  terem uma defesa tranquila e transformarem suas pesquisas em artigos de impacto.
                </p>
                <p>
                  Fundamos o Manual do Cientista com um único objetivo: facilitar a vida de alunos
                  de graduação e pós-graduação, oferecendo um método claro e prático para análise
                  de dados e escrita acadêmica.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button onClick={scrollToPlanos} className="btn-primary">
                  {manualHero.cta} <ArrowUpRight size={14} />
                </button>
                <a href="https://manualdocientista.com" target="_blank" rel="noreferrer" className="btn-outline">
                  Acessar o grupo CDP <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
            <figure className="lg:col-span-5 figure-editorial">
              <div className="aspect-[3/4] frame">
                <img src={photos.manualTrio} alt="Trio Manual do Cientista" className="object-[50%_35%]" />
                <figcaption className="absolute bottom-5 left-5 z-20 bg-moss-deep text-paper px-3.5 py-[3px] rounded-md shadow-[0_8px_20px_-10px_rgba(0,0,0,0.4)] text-center leading-snug">
                  <span className="text-[10.5px] font-normal tracking-tight">Fundadores Manual do Cientista</span>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </Section>

      {/* VÍDEO */}
      <Section tone="ink" className="py-24 lg:py-28 relative overflow-hidden">
        <BrandMark kind="padronagem" tone="light" size="xl" position="l" style={{ opacity: 0.028 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-3">
              <p className="label label-dark flex items-center gap-2"><Play size={12} /> Assista</p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-[1.18] tracking-tighter2 text-paper max-w-[26ch]">
                O Manual em três minutos, direto de quem vive a rotina científica.
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 lg:col-start-4">
              <figure className="figure-editorial on-ink">
                <div className="aspect-video frame">
                  <YouTubePlayer videoId="ULebxAV62DU" />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </Section>

      {/* BENEFÍCIOS */}
      <Section tone="paper" className="py-32 lg:py-40 relative overflow-hidden">
        <BrandMark kind="chave" tone="moss" size="md" position="tr" style={{ opacity: 0.18 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-3"><p className="label">Benefícios do curso</p></div>
            <div className="lg:col-span-9">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[52px] leading-[1.15] tracking-tighter2 text-ink-900 max-w-[24ch]">
                Conteúdos exclusivos para destravar sua pesquisa e <em className="text-ink-700">analisar dados</em> com confiança.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {manualBenefits.map((b, i) => {
              const Icon = BENEFIT_ICONS[i] || Sparkles
              return (
                <motion.article
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="border-t border-ink-900/15 pt-6"
                >
                  <div className="flex items-center justify-between mb-5">
                    <p className="num-tag text-[13px] tracking-tight">/{String(i + 1).padStart(2, '0')}</p>
                    <Icon size={18} className="text-moss-deep" />
                  </div>
                  <h3 className="font-display text-xl lg:text-[26px] leading-[1.2] tracking-tighter2 text-ink-900 mb-4">
                    {b.title}
                  </h3>
                  <p className="text-ink-700 text-[15px] leading-[1.7]">{b.d}</p>
                </motion.article>
              )
            })}
          </div>

          <div className="mt-16 flex flex-wrap gap-4">
            <button onClick={scrollToPlanos} className="btn-primary">
              Começar agora <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </Section>

      {/* PASSO A PASSO + imagem */}
      <Section tone="warm" className="relative overflow-hidden">
        <div className="grid lg:grid-cols-12 min-h-[560px]">
          <figure className="lg:col-span-6 relative figure-editorial">
            <div className="absolute inset-0 frame">
              <img src={photos.nascenteCristalina} alt="Método claro, do começo ao fim" />
            </div>
          </figure>
          <div className="lg:col-span-6 px-6 md:px-12 lg:px-20 py-24 lg:py-32 flex flex-col justify-center relative">
            <BrandMark kind="padronagem" tone="moss" size="md" position="br" style={{ opacity: 0.18 }} />
            <p className="label mb-8 relative">O método</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[48px] leading-[1.15] tracking-tighter2 text-ink-900 max-w-[18ch] relative">
              O passo a passo completo para <em className="text-ink-700">dominar</em> sua pesquisa.
            </h2>
            <p className="mt-8 text-ink-700 text-[17px] leading-[1.75] max-w-md relative">
              Da metodologia científica à escrita do artigo, cada módulo foi pensado para tornar
              sua jornada mais clara e prática.
            </p>
            <div className="mt-10 relative">
              <button onClick={scrollToPlanos} className="btn-outline">
                Ver detalhes dos planos <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* DIFERENCIAIS */}
      <Section tone="ink" className="py-32 lg:py-40 relative overflow-hidden">
        <BrandMark kind="duasChaves" tone="light" size="lg" position="tl" style={{ opacity: 0.03 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-3"><p className="label label-dark">Diferenciais</p></div>
            <div className="lg:col-span-9">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[52px] leading-[1.18] tracking-tighter2 text-paper max-w-[22ch]">
                Muito mais que um curso <em>online</em>.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {manualDiferenciais.map((d, i) => (
              <motion.article
                key={d.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="border-t border-paper/15 pt-8"
              >
                <p className="num-tag text-[13px] tracking-tight mb-4">/{String(i + 1).padStart(2, '0')}</p>
                <h3 className="font-display text-2xl lg:text-[30px] leading-[1.15] tracking-tighter2 text-paper mb-5">
                  {d.title}
                </h3>
                <p className="text-paper/70 text-[16px] leading-[1.7]">{d.d}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap gap-4">
            <button onClick={scrollToPlanos} className="btn-primary">
              Finalize sua inscrição <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </Section>

      {/* O TRIO */}
      <Section tone="paper" className="py-32 lg:py-40 relative overflow-hidden">
        <BrandMark kind="chave" tone="moss" size="md" position="bl" style={{ opacity: 0.18 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-3"><p className="label">O trio</p></div>
            <div className="lg:col-span-9">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[52px] leading-[1.18] tracking-tighter2 text-ink-900 max-w-[22ch]">
                Três histórias diferentes que se encontraram na <em className="text-ink-700">ciência</em>.
              </h2>
            </div>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {manualTeam.map((m, i) => {
              const teamRef = teamPhotoByName[m.name]
              const align = i % 2 === 0 ? 'lg:[&>:first-child]:order-1' : 'lg:[&>:first-child]:order-2'
              return (
                <motion.article
                  key={m.name}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  className={`grid lg:grid-cols-12 gap-10 lg:gap-14 items-start border-t border-ink-900/15 pt-10 lg:pt-14 ${align}`}
                >
                  <figure className="lg:col-span-4 figure-editorial">
                    <div className="aspect-[3/4] frame">
                      <img
                        src={teamRef?.photo}
                        alt={m.name}
                        className={teamRef?.imgPos || 'object-top'}
                      />
                    </div>
                  </figure>

                  <div className="lg:col-span-8">
                    <p className="num-tag text-[13px] tracking-tight mb-3">/{String(i + 1).padStart(2, '0')}</p>
                    <h3 className="font-display text-3xl lg:text-[48px] leading-[1.05] tracking-tighter2 text-ink-900 mb-6">
                      {m.name}
                    </h3>
                    <p className="text-ink-700 text-[17px] leading-[1.8]">{m.text}</p>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </Section>

      {/* PLANOS */}
      <Section id="planos" tone="warm" className="py-32 lg:py-40 relative overflow-hidden">
        <BrandMark kind="padronagem" tone="moss" size="xl" position="r" style={{ opacity: 0.18 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-3"><p className="label">Planos</p></div>
            <div className="lg:col-span-9">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[52px] leading-[1.18] tracking-tighter2 text-ink-900 max-w-[22ch]">
                Escolha o plano <em className="text-ink-700">ideal</em> e comece a estudar hoje.
              </h2>
              <p className="mt-8 text-ink-700 text-[17px] leading-[1.75] max-w-2xl">
                Acesso completo ao método, aos cursos e à comunidade. Pagamento seguro via Hotmart,
                acesso imediato após a confirmação.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {PLANS.map((p, i) => {
              const featured = p.featured
              return (
                <motion.article
                  key={p.tag}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative rounded-lg p-8 lg:p-10 border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col ${
                    featured
                      ? 'bg-ink-900 text-paper border-ink-900 lg:-mt-4 lg:mb-4 shadow-[0_30px_60px_-30px_rgba(11,22,34,0.5)]'
                      : 'bg-paper text-ink-900 border-ink-900/15 hover:border-ink-900/40'
                  }`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-moss-deep text-paper text-[10.5px] font-semibold tracking-[0.16em] uppercase px-3 py-1 rounded">
                      Mais escolhido
                    </span>
                  )}
                  <p className="num-tag text-[13px] tracking-tight mb-2">/{String(i + 1).padStart(2, '0')}</p>
                  <div className={`text-[11px] tracking-[0.22em] uppercase ${featured ? 'text-paper/60' : 'text-ink-500'} mb-6`}>
                    Plano {p.tag}
                  </div>
                  <div className="mb-2 font-display text-[40px] lg:text-[52px] leading-[1] tracking-tighter2">
                    {p.price}
                  </div>
                  <div className={`text-[14px] ${featured ? 'text-paper/60' : 'text-ink-500'} mb-6`}>
                    {p.period} · {p.subline}
                  </div>
                  <ul className={`space-y-3 text-[14px] leading-[1.5] mb-10 ${featured ? 'text-paper/80' : 'text-ink-700'}`}>
                    <li className="flex items-start gap-2"><Check size={14} className={featured ? 'text-moss mt-0.5' : 'text-copper mt-0.5'} /> Acesso completo ao método</li>
                    <li className="flex items-start gap-2"><Check size={14} className={featured ? 'text-moss mt-0.5' : 'text-copper mt-0.5'} /> Cursos de R e estatística</li>
                    <li className="flex items-start gap-2"><Check size={14} className={featured ? 'text-moss mt-0.5' : 'text-copper mt-0.5'} /> Comunidade e suporte</li>
                    <li className="flex items-start gap-2"><Check size={14} className={featured ? 'text-moss mt-0.5' : 'text-copper mt-0.5'} /> Materiais e atualizações</li>
                  </ul>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className={
                      featured
                        ? 'btn-primary justify-center mt-auto'
                        : 'btn bg-ink-900 text-paper hover:bg-ink-800 justify-center mt-auto'
                    }
                  >
                    Finalizar inscrição <ArrowUpRight size={14} />
                  </a>
                </motion.article>
              )
            })}
          </div>

          <p className="mt-10 text-center text-ink-500 text-[13px]">
            🔒 Pagamento seguro via Hotmart. Acesso liberado após a confirmação.
          </p>
        </div>
      </Section>

      {/* SOBRE O MANUAL (texto longo) */}
      <Section tone="paper" className="py-32 lg:py-40 relative overflow-hidden">
        <BrandMark kind="icon" tone="moss" size="md" position="tr" style={{ opacity: 0.18 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3"><p className="label">Sobre o Manual</p></div>
            <div className="lg:col-span-9">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[48px] leading-[1.18] tracking-tighter2 text-ink-900 max-w-[22ch] mb-10">
                Seu guia na <em className="text-ink-700">jornada acadêmica</em>.
              </h2>
              <div className="space-y-6 text-ink-700 text-[17px] leading-[1.8] max-w-3xl">
                <p>
                  Se você se sente perdido, sem apoio do seu orientador ou com dificuldade para
                  estruturar sua pesquisa, podemos ajudar. Com o nosso método você terá mais
                  segurança para interpretar seus resultados, ir para sua defesa sem sustos e
                  transformar sua pesquisa em um artigo publicável.
                </p>
                <p>
                  A ideia do Manual surgiu em 2021, na pandemia, de uma inquietação da Grazi.
                  Havia muita gente com problemas estatísticos acumulados e pouca gente disponível
                  para ajudar. Assim nasceu uma página no Instagram
                  (<a href="https://www.instagram.com/manualdocientistajr/" target="_blank" rel="noreferrer" className="text-ink-900 link-anim">@manualdocientistajr</a>)
                  para divulgar método científico, análises estatísticas, scripts e pacotes para R.
                </p>
                <p>
                  Hoje, o Manual do Cientista é um conjunto de serviços formais e informais:
                  cursos, mentorias, consultorias e uma comunidade de apoio que entende a realidade
                  de quem pesquisa, e caminha junto.
                </p>
                <div className="pt-4">
                  <button onClick={scrollToPlanos} className="btn-primary">
                    Finalize sua inscrição <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="ink" className="py-32 lg:py-40 relative overflow-hidden">
        <BrandMark kind="padronagem" tone="light" size="lg" position="l" style={{ opacity: 0.025 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-3"><p className="label label-dark">Dúvidas frequentes</p></div>
            <div className="lg:col-span-9">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[52px] leading-[1.18] tracking-tighter2 text-paper max-w-[22ch]">
                Tirando as principais <em>dúvidas</em>.
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-9 lg:col-start-4">
              <div className="border-t border-paper/15">
                {manualFaq.map((item, i) => (
                  <FaqRow key={item.q} index={i} q={item.q} a={item.a} />
                ))}
              </div>
              <div className="mt-14 flex flex-wrap gap-4">
                <button onClick={scrollToPlanos} className="btn-primary">
                  Ver planos <ArrowUpRight size={14} />
                </button>
                <Link to="/contato" className="btn-outline-dark">Falar com a BTF <ArrowRight size={14} /></Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* DISCLAIMER */}
      <Section tone="paper" className="py-16">
        <div className="wrap">
          <p className="text-center text-ink-500 text-[13px] max-w-2xl mx-auto leading-[1.7]">
            Este é o site oficial do Manual do Cientista. Todo o conteúdo disponível aqui é
            exclusivo e desenvolvido pelos nossos especialistas. Qualquer outra página que ofereça
            nossos cursos não está autorizada. Para garantir seu acesso ao material oficial,
            faça sua inscrição apenas por este site.
          </p>
        </div>
      </Section>
    </>
  )
}

function FaqRow({ index, q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-paper/15">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full py-6 flex items-start justify-between gap-6 text-left group"
      >
        <div className="flex items-baseline gap-5">
          <span className="num-tag text-[12px] tracking-tight shrink-0 w-10">
            /{String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-display text-xl lg:text-[26px] leading-[1.25] tracking-tighter2 text-paper">
            {q}
          </span>
        </div>
        <span className="shrink-0 mt-2 w-9 h-9 grid place-items-center border border-paper/30 rounded-full text-paper transition-all duration-500 group-hover:border-paper group-hover:bg-paper group-hover:text-ink-900">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="pl-[60px] pb-8 text-paper/75 text-[16px] leading-[1.75] max-w-3xl"
        >
          {a}
        </motion.div>
      )}
    </div>
  )
}
