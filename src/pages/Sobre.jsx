import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import { Section } from '../components/Section.jsx'
import BrandMark from '../components/BrandMark.jsx'
import { values, differentiators, stock } from '../data/site.js'

export default function Sobre() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre a BTF"
        title="Uma consultoria construída sobre método científico."
        sub="A BTF Soluções em Dados nasceu da integração entre ciência, tecnologia e inteligência analítica aplicada. Atuamos em projetos ambientais, científicos e corporativos de alta complexidade."
        mark="padronagem"
      />

      {/* Editorial intro */}
      <Section tone="paper" className="py-32 lg:py-40 relative overflow-hidden">
        <BrandMark kind="icon" tone="moss" size="md" position="tr" style={{ opacity: 0.22 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <figure className="lg:col-span-6 figure-editorial">
              <div className="aspect-[4/5] frame">
                <img src="/team/equipe-laptop.jpg" alt="Equipe BTF em análise técnica" className="object-[50%_25%]" />
              </div>
            </figure>
            <div className="lg:col-span-6 lg:pt-6">
              <p className="label mb-10">Origem</p>
              <h2 className="display-lg font-display text-3xl lg:text-[44px] leading-[1.2] tracking-tighter2 text-ink-900 max-w-[18ch]">
                Ciência aplicada, <em className="text-ink-700">engenharia robusta</em>, decisões consistentes.
              </h2>
              <div className="mt-12 space-y-6 text-ink-700 text-[17px] leading-[1.75]">
                <p>
                  Nosso time reúne especialistas com sólida formação em Ecologia, Ciências
                  Naturais, Biologia, Estatística e Ciência de Dados. Combinamos conhecimento
                  científico aprofundado com expertise em automação, engenharia e análise de dados.
                </p>
                <p>
                  Atuamos em todas as etapas do ciclo analítico: coleta e integração, ETL e
                  padronização, modelagem estatística, machine learning, visualização analítica,
                  automação de relatórios e desenvolvimento de pipelines escaláveis.
                </p>
                <p>
                  Mais do que análises, construímos soluções inteligentes que aumentam eficiência
                  operacional, reduzem tempo analítico e ampliam a confiabilidade das informações
                  utilizadas em processos técnicos e estratégicos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Statement spreads — DARK */}
      <Section tone="ink" className="py-32 lg:py-40 relative overflow-hidden">
        <BrandMark kind="padronagem" tone="light" size="xl" position="centerR" style={{ opacity: 0.028 }} />

        <div className="wrap space-y-28 lg:space-y-36 relative">
          <Statement label="01 / Missão">
            Transformar dados complexos em soluções inteligentes por meio da integração
            entre <em>ciência</em>, tecnologia e inteligência analítica.
          </Statement>

          <figure className="figure-editorial on-ink">
            <div className="aspect-[21/9] frame">
              <img src={stock.forestRoad} alt="Trabalho em campo" />
            </div>
          </figure>

          <Statement label="02 / Visão">
            Ser referência em soluções analíticas e inteligência de dados aplicadas a
            projetos ambientais, científicos e corporativos de <em>alta complexidade</em>.
          </Statement>
        </div>
      </Section>

      {/* Valores — LIGHT */}
      <Section tone="paper" className="py-32 lg:py-40 relative overflow-hidden">
        <BrandMark kind="chave" tone="moss" size="md" position="bl" style={{ opacity: 0.2 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-3"><p className="label">Valores</p></div>
            <div className="lg:col-span-9">
              <h2 className="display-lg font-display text-3xl lg:text-[52px] leading-[1.15] tracking-tighter2 text-ink-900 max-w-[20ch]">
                Princípios que orientam <em className="text-ink-700">decisões técnicas</em>.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-14">
            {values.map((v, i) => (
              <motion.div
                key={v.k}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="row-hover grid grid-cols-12 gap-4 py-7 border-t border-ink-900/15 group"
              >
                <span className="col-span-2 num-tag text-[12px] tracking-tight pt-1.5">
                  /{String(i + 1).padStart(2, '0')}
                </span>
                <div className="col-span-10">
                  <div className="font-display text-xl lg:text-[26px] leading-[1.25] tracking-tighter2 text-ink-900 mb-2 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
                    {v.k}
                  </div>
                  <div className="text-ink-600 text-[15px] leading-[1.65]">{v.d}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Diferenciais — DARK */}
      <Section tone="ink" className="py-32 lg:py-40 relative overflow-hidden">
        <BrandMark kind="duasChaves" tone="light" size="lg" position="tl" style={{ opacity: 0.03 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-3"><p className="label label-dark">Diferenciais</p></div>
            <div className="lg:col-span-9">
              <h2 className="display-lg font-display text-3xl lg:text-[52px] leading-[1.15] tracking-tighter2 text-paper max-w-[24ch]">
                O que torna o trabalho da BTF distinto.
              </h2>
            </div>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-14 max-w-5xl ml-auto">
            {differentiators.map((d, i) => (
              <li key={d} className="flex gap-5 items-baseline border-t border-paper/15 py-5">
                <span className="num-tag text-[12px] tracking-tight w-10 shrink-0">
                  /{String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-paper/85 text-[16px] leading-[1.55]">{d}</span>
              </li>
            ))}
          </ul>

          <div className="mt-20 flex flex-wrap gap-4">
            <Link to="/servicos" className="btn-primary">Explorar serviços</Link>
            <Link to="/contato" className="btn-outline-dark">Falar com a BTF <ArrowRight size={14} /></Link>
          </div>
        </div>
      </Section>
    </>
  )
}

function Statement({ label, children }) {
  return (
    <div className="grid lg:grid-cols-12 gap-8">
      <div className="lg:col-span-3"><p className="label label-dark">{label}</p></div>
      <div className="lg:col-span-9">
        <p className="display-lg font-display text-3xl sm:text-4xl lg:text-[56px] leading-[1.18] tracking-tighter2 text-paper max-w-[22ch]">
          {children}
        </p>
      </div>
    </div>
  )
}
