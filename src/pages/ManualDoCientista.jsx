import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check, Play } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import { Section } from '../components/Section.jsx'
import BrandMark from '../components/BrandMark.jsx'
import YouTubePlayer from '../components/YouTubePlayer.jsx'
import { photos, manualServices, manualTeam, team } from '../data/site.js'

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
        eyebrow="Manual do Cientista"
        title="A raiz da BTF, ao lado dos pesquisadores em formação."
        sub="O Manual é a raiz da BTF, e, ao mesmo tempo, segue sendo um braço importante nos serviços prestados aos pesquisadores em formação e à comunidade acadêmica."
        mark="chave"
      />

      {/* MISSÃO */}
      <Section tone="paper" className="py-32 lg:py-40 relative overflow-hidden">
        <BrandMark kind="icon" tone="moss" size="md" position="tr" style={{ opacity: 0.2 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 lg:pt-4 space-y-6 text-ink-700 text-[18px] leading-[1.8]">
              <p>
                A missão do Manual é ensinar aos pesquisadores como aplicar o método científico
                corretamente e utilizar ferramentas analíticas robustas, garantindo sua
                independência para construir seu trabalho com menos dificuldades e em menor tempo.
              </p>
              <p>
                Mais do que ensinar estatística ou R, prestamos serviços importantes: criando uma
                comunidade de apoio, fortalecendo a formação científica e ajudando a transformar
                dados em informações seguras e relevantes.
              </p>
              <div className="pt-4">
                <button onClick={scrollToPlanos} className="btn-primary">
                  Acessar o método completo <ArrowUpRight size={14} />
                </button>
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
      <Section tone="ink" className="py-24 lg:py-32 relative overflow-hidden">
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

      {/* COMO NASCEU */}
      <Section tone="paper" className="py-32 lg:py-40 relative overflow-hidden">
        <BrandMark kind="chave" tone="moss" size="md" position="bl" style={{ opacity: 0.18 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-3"><p className="label">Como nasceu</p></div>
            <div className="lg:col-span-9">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[52px] leading-[1.18] tracking-tighter2 text-ink-900 max-w-[22ch]">
                Uma inquietação em 2021, o desejo de ajudar quem precisa de <em className="text-ink-700">estatística</em>.
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-9 lg:col-start-4 space-y-6 text-ink-700 text-[17px] leading-[1.8]">
              <p>
                A ideia do Manual surgiu de uma inquietação de Grazi em meados de 2021, época de
                pandemia. Nós nos conhecíamos e convivíamos há bastante tempo e fomos contemporâneos
                em diferentes universidades. Um certo dia nos reunimos e debatemos sobre como pode
                ser difícil para quem depende de ajuda com estatística concluir seu TCC, dissertação
                ou tese. Por vezes até mesmo um artigo científico.
              </p>
              <p>
                A análise estatística é um trabalho importante que na academia é feito de forma
                árdua e altruísta. Todo mundo ia tentando se ajudar para vencer mais uma etapa,
                mas naquele momento e com o distanciamento social muita gente estava com problemas
                estatísticos acumulados, e quem poderia ajudar também tinha suas demandas.
              </p>
              <p>
                Assim nasceu o Manual do Cientista como uma página no Instagram
                (<a href="https://www.instagram.com/manualdocientistajr/" target="_blank" rel="noreferrer" className="text-ink-900 link-anim">@manualdocientistajr</a>)
                para fazer divulgação de método científico, análises estatísticas, scripts e pacotes
                para o R. Nosso plano era, com o tempo, prestar consultorias, mentorias e vender
                cursos, unindo nosso conhecimento acadêmico e estatístico a um serviço que nós já
                fazíamos, mas não considerávamos como trabalho.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* O TRIO */}
      <Section tone="warm" className="py-32 lg:py-40 relative overflow-hidden">
        <BrandMark kind="chave" tone="moss" size="md" position="tr" style={{ opacity: 0.18 }} />

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

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-2xl lg:text-[36px] leading-[1.3] tracking-tighter2 text-ink-900 max-w-[36ch] pt-10 border-t border-ink-900/15"
            >
              A história do Manual nos conecta afetivamente para formar um trio que une
              <em className="text-ink-700"> amizade, ciência e propósito</em>.
            </motion.p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button onClick={scrollToPlanos} className="btn-primary">
                Comece pelo método completo <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* SERVIÇOS */}
      <Section tone="ink" className="py-32 lg:py-40 relative overflow-hidden">
        <BrandMark kind="duasChaves" tone="light" size="lg" position="tr" style={{ opacity: 0.03 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-3"><p className="label label-dark">Serviços</p></div>
            <div className="lg:col-span-9">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[52px] leading-[1.18] tracking-tighter2 text-paper max-w-[24ch]">
                O que oferecemos aos <em>pesquisadores</em> em formação.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {manualServices.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="border-t border-paper/15 pt-8 lg:pt-10"
              >
                <p className="num-tag text-[13px] tracking-tight mb-4">/{String(i + 1).padStart(2, '0')}</p>
                <h3 className="font-display text-2xl lg:text-[34px] leading-[1.15] tracking-tighter2 text-paper mb-6">
                  {s.title}
                </h3>
                <p className="text-paper/70 text-[16px] leading-[1.75]">{s.d}</p>
                {s.link && (
                  <button
                    onClick={scrollToPlanos}
                    className="btn-text-dark mt-8 inline-flex"
                  >
                    {s.link.label} <ArrowUpRight size={14} />
                  </button>
                )}
              </motion.article>
            ))}
          </div>

          <p className="mt-20 text-paper/70 text-[17px] leading-[1.75] max-w-3xl">
            Nosso conjunto de serviços não apenas ensina técnicas, mas forma pesquisadores mais
            independentes, seguros, preparados e conectados, reduzindo o sofrimento comum na
            carreira acadêmica e acelerando o caminho até resultados consistentes.
          </p>

          <div className="mt-14 flex flex-wrap gap-4">
            <button onClick={scrollToPlanos} className="btn-primary">
              Finalize sua inscrição <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </Section>

      {/* PLANOS */}
      <Section id="planos" tone="paper" className="py-32 lg:py-40 relative overflow-hidden">
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
                  <p className={`num-tag text-[13px] tracking-tight mb-2`}>/{String(i + 1).padStart(2, '0')}</p>
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

      {/* CTA FINAL */}
      <Section tone="ink" className="py-28 relative overflow-hidden">
        <BrandMark kind="icon" tone="light" size="md" position="br" style={{ opacity: 0.04 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <h3 className="font-display text-3xl lg:text-[48px] leading-[1.18] tracking-tighter2 text-paper max-w-[22ch]">
                Quer conversar antes de decidir?
              </h3>
              <p className="mt-6 text-paper/70 text-[17px] leading-[1.75] max-w-xl">
                Se você ainda tem dúvidas sobre qual plano faz mais sentido ou quer entender como
                o método se aplica ao seu projeto, fale direto com a equipe.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-wrap gap-4 justify-start lg:justify-end">
              <button onClick={scrollToPlanos} className="btn-primary">
                Ver planos <ArrowUpRight size={14} />
              </button>
              <Link to="/contato" className="btn-outline-dark">Falar com a BTF <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
