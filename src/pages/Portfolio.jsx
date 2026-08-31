import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import { Section } from '../components/Section.jsx'
import BrandMark from '../components/BrandMark.jsx'
import { portfolioCases, partners, stock, photos } from '../data/site.js'

const caseImage = [
  photos.dashboardMonitoramento,
  stock.topoMap,
  photos.modelagemEcologica,
  stock.labNotebook,
  stock.forestRiver,
  stock.scienceField,
]

export default function Portfolio() {
  return (
    <>
      <PageHeader
        eyebrow="Portfólio"
        title="Soluções que viraram inteligência operacional."
        sub="Atuamos com empresas e consultorias ambientais, científicas e tecnológicas, estruturando dados, automatizando fluxos e gerando insights orientados à decisão."
        mark="padronagem"
      />

      {/* Partners — LIGHT */}
      <Section tone="paper" className="py-28 relative overflow-hidden">
        <BrandMark kind="icon" tone="moss" size="md" position="tr" style={{ opacity: 0.22 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3"><p className="label">Parceiros</p></div>
            <div className="lg:col-span-9">
              <h2 className="display-lg font-display text-2xl lg:text-[36px] leading-[1.25] tracking-tighter2 text-ink-900 mb-12 max-w-2xl">
                Organizações com as quais já colaboramos.
              </h2>
              <div className="border-t border-ink-900/15">
                {partners.map((p, i) => (
                  <div key={p} className="row-hover grid grid-cols-12 gap-4 py-6 border-b border-ink-900/15 items-baseline group">
                    <span className="col-span-2 lg:col-span-1 num-tag text-[13px] tracking-tight">
                      /{String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="col-span-10 lg:col-span-11 font-display text-xl lg:text-[28px] leading-[1.2] tracking-tighter2 text-ink-900 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
                      {p}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Cases — DARK */}
      <Section tone="ink" className="py-32 lg:py-40 relative overflow-hidden">
        <BrandMark kind="padronagem" tone="light" size="xxl" position="r" style={{ opacity: 0.025 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-3"><p className="label label-dark">Projetos</p></div>
            <div className="lg:col-span-9">
              <h2 className="display-lg font-display text-3xl lg:text-[56px] leading-[1.15] tracking-tighter2 text-paper max-w-[18ch]">
                Tipos de projetos que desenvolvemos.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-20 lg:gap-y-28">
            {portfolioCases.map((c, i) => (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.85, delay: (i % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className={`group ${i % 2 === 1 ? 'lg:mt-24' : ''}`}
              >
                <figure className="figure-editorial on-ink mb-8">
                  <div className="aspect-[4/3] frame">
                    <img src={caseImage[i] || stock.forestCanopy} alt={c.title} />
                  </div>
                </figure>
                <div className="flex items-center justify-between text-[11px] tracking-[0.18em] uppercase text-paper/55 mb-4">
                  <span><span className="num-tag">/{String(i + 1).padStart(2, '0')}</span> · {c.client}</span>
                </div>
                <h3 className="font-display text-2xl lg:text-[36px] leading-[1.18] tracking-tighter2 text-paper">
                  {c.title}
                </h3>
                <p className="mt-5 text-paper/70 text-[16px] leading-[1.7] max-w-md">{c.summary}</p>
                <div className="mt-6 flex flex-wrap gap-x-5 text-[13px] text-paper/55">
                  {c.tags.map(t => <span key={t}>· {t}</span>)}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA — LIGHT */}
      <Section tone="warm" className="py-32 relative overflow-hidden">
        <BrandMark kind="chave" tone="moss" size="md" position="bl" style={{ opacity: 0.25 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <h3 className="display-lg font-display text-3xl lg:text-[52px] leading-[1.18] tracking-tighter2 text-ink-900 max-w-[18ch]">
                Seu projeto pode ser o próximo case.
              </h3>
            </div>
            <div className="lg:col-span-4 flex flex-wrap gap-4">
              <Link to="/contato" className="btn-primary">Iniciar conversa</Link>
              <Link to="/servicos" className="btn-outline">Ver serviços <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
