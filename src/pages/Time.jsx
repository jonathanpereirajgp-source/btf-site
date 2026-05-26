import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import { Section } from '../components/Section.jsx'
import BrandMark from '../components/BrandMark.jsx'
import { team } from '../data/site.js'

export default function Time() {
  return (
    <>
      <PageHeader
        eyebrow="— Time"
        title="Doutorado em ciência. Fluência em método."
        sub="Um time multidisciplinar que combina formação acadêmica de alto nível com prática técnica em engenharia e ciência de dados."
        mark="duasChaves"
      />

      {/* Group editorial spread */}
      <Section tone="paper" className="py-24 lg:py-32 relative overflow-hidden">
        <BrandMark kind="padronagem" tone="moss" size="md" position="bl" style={{ opacity: 0.22 }} />

        <div className="wrap relative">
          <figure className="figure-editorial">
            <div className="aspect-[3/2] frame">
              <img
                src="/team/equipe-laptop.jpg"
                alt="Fundadores BTF analisando resultados"
                className="object-center"
              />
            </div>

            <figcaption className="mt-10 border-t border-ink-900/15">
              <div className="grid sm:grid-cols-3 sm:divide-x divide-ink-900/15">
                <InfoCell label="Equipe" value="Fundadores BTF Soluções em Dados" />
                <InfoCell label="Base" value="Belo Horizonte · Minas Gerais" align="sm:items-center sm:text-center" />
                <InfoCell label="Formação" value="3 doutorados em ciência" align="sm:items-end sm:text-right" />
              </div>
            </figcaption>
          </figure>
        </div>
      </Section>

      {/* Individual editorial spreads */}
      {team.map((m, i) => {
        const isDark = i % 2 === 0
        return (
          <Section
            key={m.name}
            tone={isDark ? 'ink' : 'warm'}
            className="py-32 lg:py-40 relative overflow-hidden"
          >
            <BrandMark
              kind={i === 0 ? 'padronagem' : i === 1 ? 'chave' : 'icon'}
              tone={isDark ? 'light' : 'moss'}
              size="lg"
              position={i % 2 === 0 ? 'tr' : 'bl'}
              style={{ opacity: isDark ? 0.028 : 0.22 }}
            />

            <div className="wrap relative">
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className={`grid lg:grid-cols-12 gap-12 lg:gap-16 items-start ${i % 2 === 1 ? 'lg:[&>:first-child]:order-2' : ''}`}
              >
                <figure className={`lg:col-span-5 figure-editorial ${isDark ? 'on-ink' : ''}`}>
                  <div className="aspect-[4/5] frame">
                    <img src={m.photo} alt={m.name} />
                  </div>
                </figure>

                <div className="lg:col-span-7 lg:pt-8">
                  <p className={`label ${isDark ? 'label-dark' : ''} mb-8`}>
                    /{String(i + 1).padStart(2, '0')} — Sócio·a fundador·a
                  </p>
                  <h2 className={`display-xl font-display text-4xl lg:text-[72px] leading-[1.05] tracking-tighter2 ${isDark ? 'text-paper' : 'text-ink-900'}`}>
                    {m.name}
                  </h2>
                  <div className={`mt-5 text-[17px] leading-[1.5] ${isDark ? 'text-paper/75' : 'text-ink-700'}`}>{m.role}</div>
                  <div className={`mt-2 italic text-[14px] ${isDark ? 'text-paper/55' : 'text-ink-500'}`}>{m.title}</div>

                  <p className={`mt-10 text-[17px] leading-[1.75] max-w-xl ${isDark ? 'text-paper/75' : 'text-ink-700'}`}>{m.bio}</p>

                  <div className={`mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[13px] border-t pt-6 max-w-xl ${isDark ? 'text-paper/60 border-paper/15' : 'text-ink-600 border-ink-900/15'}`}>
                    {m.tags.map(t => <span key={t}>· {t}</span>)}
                  </div>
                </div>
              </motion.div>
            </div>
          </Section>
        )
      })}

      {/* CTA */}
      <Section tone="paper" className="py-28 border-t border-ink-900/10 relative overflow-hidden">
        <BrandMark kind="icon" tone="moss" size="md" position="br" style={{ opacity: 0.2 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <h3 className="display-lg font-display text-3xl lg:text-[48px] leading-[1.18] tracking-tighter2 text-ink-900 max-w-[22ch]">
                Quer conversar diretamente com o time?
              </h3>
            </div>
            <div className="lg:col-span-4">
              <Link to="/contato" className="btn-primary">Entrar em contato <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

function InfoCell({ label, value, align = '' }) {
  return (
    <div className={`py-7 sm:px-8 first:sm:pl-0 last:sm:pr-0 flex flex-col gap-2 ${align}`}>
      <div className="text-[11px] tracking-[0.2em] uppercase text-ink-500 flex items-center gap-2">
        <span className="dot-moss" /> {label}
      </div>
      <div className="text-ink-900 text-[15px] leading-[1.5]">{value}</div>
    </div>
  )
}
