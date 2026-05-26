import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { Section } from '../components/Section.jsx'
import BrandMark from '../components/BrandMark.jsx'
import RotatingWord from '../components/RotatingWord.jsx'
import { services, partners, team, differentiators, ambientalAreas, stock, photos } from '../data/site.js'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
}

export default function Home() {
  return (
    <>
      {/* ─────────────── HERO — DARK ─────────────── */}
      <section className="relative bg-ink-900 text-paper paper-grain overflow-hidden">
        <BrandMark kind="padronagem" tone="light" size="xxl" position="r" style={{ opacity: 0.028 }} />
        <BrandMark kind="icon" tone="light" size="md" position="bl" style={{ opacity: 0.03, transform: 'rotate(-15deg) translate(-25%, 25%)' }} />

        <div className="wrap pt-36 pb-24 lg:pt-44 lg:pb-32 relative">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="label label-dark mb-12"
              >
                <span className="dot-moss" /> Consultoria científica em dados
              </motion.p>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="display-xl font-display text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.1] tracking-tighter2 text-paper"
              >
                <span className="block">Inteligência analítica</span>
                <span className="block italic font-light text-paper/80 mt-1">aplicada à</span>
                <span className="block mt-2 text-copper">
                  <RotatingWord
                    words={[
                      'ciência ambiental.',
                      'ecologia.',
                      'engenharia de dados.',
                      'modelagem científica.',
                    ]}
                  />
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.2 }}
                className="mt-12 text-lg lg:text-xl leading-[1.65] text-paper/70 max-w-2xl"
              >
                Desenvolvemos soluções analíticas avançadas para projetos ambientais, científicos
                e corporativos, integrando ciência de dados, engenharia de dados e expertise
                técnica em sistemas ambientais complexos.
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.32 }}
                className="mt-14 flex flex-wrap gap-4"
              >
                <Link to="/contato" className="btn-primary">
                  Iniciar uma conversa <ArrowUpRight size={16} />
                </Link>
                <Link to="/servicos" className="btn-outline-dark">
                  Conhecer serviços
                </Link>
              </motion.div>
            </div>

            <motion.figure
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 figure-editorial on-ink"
            >
              <div className="aspect-[4/5] frame">
                <img src="/team/equipe-trio.jpg" alt="Fundadores BTF" className="object-[50%_72%]" />
                <figcaption className="absolute bottom-5 left-5 z-20 bg-moss-deep text-paper px-3.5 py-[3px] rounded-md shadow-[0_8px_20px_-10px_rgba(0,0,0,0.4)] text-center leading-snug">
                  <span className="text-[10.5px] font-normal tracking-tight">Fundadores BTF Soluções em Dados</span>
                </figcaption>
              </div>
            </motion.figure>
          </div>
        </div>

        {/* stat row */}
        <div className="wrap relative">
          <div className="grid sm:grid-cols-3 gap-10 lg:gap-14 py-16 border-t border-paper/12">
            <Fact n="01" t="Ciência aplicada" d="Time formado por doutores em Ecologia e Ciências Naturais." dark />
            <Fact n="02" t="Engenharia robusta" d="Pipelines auditáveis em R, Python e Power BI." dark />
            <Fact n="03" t="Foco em método" d="Soluções construídas a partir do problema, não do hype." dark />
          </div>
        </div>
      </section>

      {/* ─────────────── SOBRE — LIGHT ─────────────── */}
      <Section tone="paper" className="py-32 lg:py-44 relative overflow-hidden">
        <BrandMark kind="icon" tone="moss" size="lg" position="tr" style={{ opacity: 0.18 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-3"><p className="label">Sobre a BTF</p></div>
            <div className="lg:col-span-9">
              <h2 className="display-lg font-display text-3xl sm:text-4xl lg:text-[52px] leading-[1.18] tracking-tighter2 text-ink-900 max-w-[20ch]">
                Nascemos da integração entre <em className="text-ink-700">ciência</em>, tecnologia e inteligência analítica.
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-7 grid md:grid-cols-2 gap-x-12 gap-y-7 text-ink-700 text-[17px] leading-[1.75]">
              <p>
                Reunimos especialistas com sólida formação em Ecologia, Ciências Naturais,
                Biologia, Estatística e Ciência de Dados, combinando conhecimento científico
                aprofundado com expertise em automação, engenharia e análise de dados.
              </p>
              <p>
                Compreendemos não apenas os dados, mas também os sistemas ecológicos e
                biológicos que os originam. Isso nos permite desenvolver soluções
                contextualizadas e estrategicamente orientadas.
              </p>
              <div className="md:col-span-2 pt-6">
                <Link to="/sobre" className="btn-text">Conheça a BTF <ArrowRight size={14} /></Link>
              </div>
            </div>

            <figure className="lg:col-span-5 figure-editorial">
              <div className="aspect-[4/5] frame">
                <img src={stock.forestCanopy} alt="Sistemas ambientais complexos" />
              </div>
            </figure>
          </div>
        </div>
      </Section>

      {/* ─────────────── SERVIÇOS — DARK ─────────────── */}
      <Section tone="ink" className="py-32 lg:py-44 relative overflow-hidden">
        <BrandMark kind="chave" tone="light" size="lg" position="centerR" style={{ opacity: 0.03 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-3"><p className="label label-dark">Serviços</p></div>
            <div className="lg:col-span-9">
              <h2 className="display-lg font-display text-3xl sm:text-4xl lg:text-[56px] leading-[1.15] tracking-tighter2 text-paper max-w-[20ch]">
                Quatro pilares para transformar dados em decisões.
              </h2>
            </div>
          </div>

          <div className="border-t border-paper/15">
            {services.map((s, i) => (
              <motion.article
                key={s.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="row-hover on-ink grid lg:grid-cols-12 gap-8 py-12 lg:py-16 border-b border-paper/15 group cursor-default"
              >
                <div className="lg:col-span-1 num-tag text-[13px] tracking-tight pt-3 transition-colors duration-500 group-hover:text-paper/70">
                  /{String(i + 1).padStart(2, '0')}
                </div>
                <div className="lg:col-span-5">
                  <h3 className="font-display text-3xl lg:text-[44px] leading-[1.12] tracking-tighter2 text-paper transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
                    {s.title}
                  </h3>
                </div>
                <div className="lg:col-span-5 text-paper/70 text-[16px] leading-[1.7]">
                  <p>{s.short}</p>
                  <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-paper/55">
                    {s.items.slice(0, 4).map(it => (<li key={it}>· {it}</li>))}
                  </ul>
                </div>
                <div className="lg:col-span-1 flex lg:justify-end items-start pt-3">
                  <Link
                    to={`/servicos/${s.slug}`}
                    aria-label={`Saber mais sobre ${s.title}`}
                    className="w-11 h-11 border border-paper/30 rounded-full grid place-items-center text-paper transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-paper group-hover:bg-paper group-hover:text-ink-900 group-hover:rotate-45"
                  >
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>

      {/* ─────────────── ESPECIALIDADE — LIGHT WARM ─────────────── */}
      <Section tone="warm" className="relative overflow-hidden">
        <div className="grid lg:grid-cols-12 min-h-[640px]">
          <figure className="lg:col-span-6 relative figure-editorial">
            <div className="absolute inset-0 frame">
              <img src={photos.sistemaHome} alt="Sistema ambiental complexo" />
            </div>
            <figcaption className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 bg-copper text-paper px-6 py-3.5 rounded-md shadow-[0_18px_40px_-14px_rgba(0,0,0,0.55)] text-center whitespace-nowrap">
              <div className="text-[10px] tracking-[0.18em] uppercase text-paper/80 mb-1">Especialidade</div>
              <div className="text-[14px] font-semibold tracking-tight">Ciência ecológica aplicada</div>
            </figcaption>
          </figure>

          <div className="lg:col-span-6 px-6 md:px-12 lg:px-20 py-24 lg:py-32 flex flex-col justify-center relative">
            <BrandMark kind="padronagem" tone="moss" size="lg" position="br" style={{ opacity: 0.22 }} />

            <p className="label mb-10 relative">Diferencial técnico</p>
            <h2 className="display-lg font-display text-3xl sm:text-4xl lg:text-[52px] leading-[1.15] tracking-tighter2 text-ink-900 max-w-[18ch] relative">
              Compreendemos o <em className="text-ink-700">sistema</em> por trás do dado.
            </h2>
            <p className="mt-10 text-ink-700 text-[17px] leading-[1.75] max-w-md relative">
              Combinamos engenharia analítica com conhecimento ecológico aprofundado. O resultado:
              interpretações mais consistentes, modelagens mais robustas e soluções mais alinhadas
              às demandas reais do setor ambiental.
            </p>
            <div className="mt-12 relative">
              <Link to="/especialidade" className="btn-text">Ver áreas de atuação <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>

        <div className="wrap py-24 lg:py-28 border-t border-ink-900/10">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3"><p className="label">Áreas</p></div>
            <div className="lg:col-span-9">
              <div className="border-t border-ink-900/15">
                {ambientalAreas.map((a, i) => (
                  <div key={a} className="row-hover grid grid-cols-12 gap-4 py-6 border-b border-ink-900/15 items-baseline group">
                    <span className="col-span-2 lg:col-span-1 num-tag text-[12px] tracking-tight">
                      /{String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="col-span-10 lg:col-span-11 font-display text-xl lg:text-[28px] leading-[1.3] tracking-tighter2 text-ink-900 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
                      {a}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ─────────────── PORTFOLIO PREVIEW — DARK ─────────────── */}
      <Section tone="ink" className="py-32 lg:py-40 relative overflow-hidden">
        <BrandMark kind="padronagem" tone="light" size="xxl" position="l" style={{ opacity: 0.022 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 mb-20 items-end">
            <div className="lg:col-span-3"><p className="label label-dark">Trabalho</p></div>
            <div className="lg:col-span-6">
              <h2 className="display-lg font-display text-3xl sm:text-4xl lg:text-[52px] leading-[1.15] tracking-tighter2 text-paper max-w-[22ch]">
                Projetos onde ciência e dados geram decisão.
              </h2>
            </div>
            <div className="lg:col-span-3 flex lg:justify-end">
              <Link to="/portfolio" className="btn-text-dark">Ver portfólio <ArrowRight size={14} /></Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              { img: stock.notebookData, tag: 'Dashboards & BI', title: 'Monitoramento ambiental em tempo real' },
              { img: stock.topoMap,      tag: 'Engenharia de Dados', title: 'Pipeline integrado de dados de campo' },
              { img: stock.chartsLaptop, tag: 'Ciência de Dados', title: 'Modelagem ecológica preditiva' },
            ].map((c, i) => (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <figure className="figure-editorial on-ink">
                  <div className="aspect-[4/3] frame mb-6">
                    <img src={c.img} alt={c.title} />
                  </div>
                </figure>
                <div className="text-[11px] tracking-[0.18em] uppercase text-paper/55 mb-3">
                  <span className="num-tag">/{String(i + 1).padStart(2, '0')}</span> · {c.tag}
                </div>
                <h3 className="font-display text-xl lg:text-[24px] leading-[1.25] tracking-tighter2 text-paper">{c.title}</h3>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>

      {/* ─────────────── TIME — LIGHT ─────────────── */}
      <Section tone="paper" className="py-32 lg:py-44 relative overflow-hidden">
        <BrandMark kind="icon" tone="moss" size="md" position="bl" style={{ opacity: 0.2, transform: 'rotate(20deg) translate(-30%, 30%)' }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-3"><p className="label">Time</p></div>
            <div className="lg:col-span-9 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <h2 className="display-lg font-display text-3xl sm:text-4xl lg:text-[56px] leading-[1.12] tracking-tighter2 text-ink-900 max-w-[20ch]">
                Doutorado em ciência. Fluência em método.
              </h2>
              <Link to="/time" className="btn-text">Conhecer o time <ArrowRight size={14} /></Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {team.map((m, i) => (
              <motion.figure
                key={m.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="figure-editorial group"
              >
                <div className="aspect-[4/5] frame">
                  <img src={m.photo} alt={m.name} />
                </div>
                <figcaption className="pt-6">
                  <div className="text-[11px] tracking-[0.18em] uppercase text-ink-500 mb-2.5">{m.title}</div>
                  <h3 className="font-display text-2xl lg:text-[28px] leading-[1.2] tracking-tighter2 text-ink-900">{m.name}</h3>
                  <div className="text-[14px] text-ink-600 mt-1.5 leading-snug">{m.role}</div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </Section>

      {/* ─────────────── DIFERENCIAIS + PARCEIROS — DARK ─────────────── */}
      <Section tone="ink" className="py-32 lg:py-40 relative overflow-hidden">
        <BrandMark kind="duasChaves" tone="light" size="lg" position="tr" style={{ opacity: 0.03 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-3"><p className="label label-dark">Diferenciais</p></div>
            <div className="lg:col-span-9">
              <h2 className="display-lg font-display text-3xl sm:text-4xl lg:text-[52px] leading-[1.15] tracking-tighter2 text-paper max-w-[24ch]">
                Por que consultorias e empresas científicas escolhem a BTF.
              </h2>
            </div>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-14 max-w-5xl ml-auto mb-24">
            {differentiators.map((d, i) => (
              <li key={d} className="flex gap-5 items-baseline border-t border-paper/15 py-5">
                <span className="num-tag text-[12px] tracking-tight w-10 shrink-0">
                  /{String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-paper/85 text-[16px] leading-[1.55]">{d}</span>
              </li>
            ))}
          </ul>

          <div className="grid lg:grid-cols-12 gap-12 pt-20 border-t border-paper/15">
            <div className="lg:col-span-3"><p className="label label-dark">Parceiros</p></div>
            <div className="lg:col-span-9">
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4">
                {partners.map((p) => (
                  <li key={p} className="text-paper/80 text-[16px] leading-snug">{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

function Fact({ n, t, d, dark }) {
  return (
    <div>
      <div className="num-tag text-[12px] tracking-tight mb-4">/{n}</div>
      <div className={`font-display text-2xl lg:text-[26px] leading-[1.2] tracking-tighter2 mb-3 ${dark ? 'text-paper' : 'text-ink-900'}`}>{t}</div>
      <div className={`text-[15px] leading-[1.65] ${dark ? 'text-paper/65' : 'text-ink-600'}`}>{d}</div>
    </div>
  )
}
