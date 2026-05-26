import { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import { Section } from '../components/Section.jsx'
import BrandMark from '../components/BrandMark.jsx'
import { services, stack, stock } from '../data/site.js'

const serviceImage = {
  'ciencia-de-dados':    'chartsLaptop',
  'engenharia-de-dados': 'topoMap',
  'dashboards-bi':       'notebookData',
  'automacao':           'labNotebook',
}

export default function Servicos() {
  const { slug } = useParams()
  const refs = useRef({})

  useEffect(() => {
    if (slug && refs.current[slug]) {
      refs.current[slug].scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [slug])

  return (
    <>
      <PageHeader
        eyebrow="— Serviços"
        title="Do dado bruto à decisão estratégica."
        sub="Trabalhamos próximos ao cliente para compreender desafios específicos e desenvolver soluções orientadas às necessidades reais de cada projeto."
        mark="chave"
      />

      {/* Index — LIGHT */}
      <Section tone="paper" className="relative overflow-hidden">
        <div className="wrap py-24">
          <div className="border-t border-ink-900/15">
            {services.map((s, i) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="row-hover group grid lg:grid-cols-12 gap-6 py-7 border-b border-ink-900/15 items-baseline"
              >
                <span className="lg:col-span-1 num-tag text-[13px] tracking-tight">/{String(i + 1).padStart(2, '0')}</span>
                <span className="lg:col-span-5 font-display text-2xl lg:text-[34px] leading-[1.2] tracking-tighter2 text-ink-900 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5">
                  {s.title}
                </span>
                <span className="lg:col-span-5 text-ink-600 text-[15px] leading-[1.55]">{s.short}</span>
                <span className="lg:col-span-1 lg:text-right">
                  <ArrowUpRight size={18} className="inline text-ink-500 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-ink-900 group-hover:rotate-45" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* Each service — alternating */}
      {services.map((s, i) => {
        const isDark = i % 2 === 0
        const imgKey = serviceImage[s.slug] || 'forestCanopy'
        return (
          <Section
            key={s.slug}
            tone={isDark ? 'ink' : 'warm'}
            className="py-32 lg:py-40 relative overflow-hidden"
          >
            <BrandMark
              kind={i % 2 === 0 ? 'padronagem' : 'chave'}
              tone={isDark ? 'light' : 'moss'}
              size="lg"
              position={i % 2 === 0 ? 'br' : 'tl'}
              style={{ opacity: isDark ? 0.03 : 0.22 }}
            />

            <div
              id={s.slug}
              ref={(el) => (refs.current[s.slug] = el)}
              className="wrap relative scroll-mt-32"
            >
              <div className="grid lg:grid-cols-12 gap-12 mb-16">
                <div className="lg:col-span-3">
                  <p className={`label ${isDark ? 'label-dark' : ''}`}>
                    — {String(i + 1).padStart(2, '0')} / Serviço
                  </p>
                </div>
                <div className="lg:col-span-9">
                  <h2 className={`display-xl font-display text-4xl sm:text-5xl lg:text-[80px] leading-[1.08] tracking-tighter2 ${isDark ? 'text-paper' : 'text-ink-900'} max-w-[14ch]`}>
                    {s.title}
                  </h2>
                </div>
              </div>

              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                <figure className={`lg:col-span-5 figure-editorial ${isDark ? 'on-ink' : ''}`}>
                  <div className="aspect-[4/5] frame">
                    <img src={stock[imgKey]} alt={s.title} />
                  </div>
                </figure>
                <div className="lg:col-span-7 lg:pt-2">
                  <p className={`text-[18px] leading-[1.75] ${isDark ? 'text-paper/75' : 'text-ink-700'} max-w-2xl`}>
                    {s.description}
                  </p>

                  <div className={`mt-14 border-t ${isDark ? 'border-paper/15' : 'border-ink-900/15'}`}>
                    <p className={`label ${isDark ? 'label-dark' : ''} py-7`}>— Inclui</p>
                    <ul>
                      {s.items.map((it, idx) => (
                        <li
                          key={it}
                          className={`flex items-baseline gap-6 py-4 border-t ${isDark ? 'border-paper/15' : 'border-ink-900/15'}`}
                        >
                          <span className="num-tag text-[12px] tracking-tight w-10">
                            /{String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className={`font-display text-lg lg:text-[22px] leading-[1.3] ${isDark ? 'text-paper' : 'text-ink-900'}`}>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-12">
                    <Link
                      to="/contato"
                      className={isDark ? 'btn-outline-dark' : 'btn-outline'}
                    >
                      Conversar sobre este serviço <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        )
      })}

      {/* Stack — LIGHT */}
      <Section tone="paper" className="py-32 relative overflow-hidden">
        <BrandMark kind="icon" tone="moss" size="md" position="tr" style={{ opacity: 0.22 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-3"><p className="label">— Stack</p></div>
            <div className="lg:col-span-9">
              <h2 className="display-lg font-display text-3xl lg:text-[44px] leading-[1.2] tracking-tighter2 text-ink-900 max-w-[24ch]">
                Tecnologias maduras, escolhidas pela fidelidade ao método.
              </h2>
            </div>
          </div>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-9 lg:col-start-4 flex flex-wrap gap-x-8 gap-y-4 text-[17px] text-ink-700 leading-snug">
              {stack.map((t, i) => (
                <span key={t} className="flex items-center gap-3">
                  <span className="num-tag text-[12px]">/{String(i + 1).padStart(2, '0')}</span>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
