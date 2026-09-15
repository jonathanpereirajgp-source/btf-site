import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import { Section } from '../components/Section.jsx'
import BrandMark from '../components/BrandMark.jsx'
import { values, differentiatorsAbout, photos } from '../data/site.js'

export default function Sobre() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre a BTF"
        title="Uma empresa de consultoria estatística fundamentada no método científico."
        sub="A BTF Soluções em Dados nasceu da integração entre ciência, tecnologia e inteligência analítica aplicada, atuando em projetos ambientais, científicos e corporativos de alta complexidade com rigor técnico e resultados confiáveis."
        mark="padronagem"
      />

      {/* ORIGEM */}
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
              <h2 className="font-display text-3xl lg:text-[44px] leading-[1.2] tracking-tighter2 text-ink-900 max-w-[18ch]">
                Ciência aplicada, <em className="text-ink-700">metodologia robusta</em>, decisões consistentes.
              </h2>
              <div className="mt-12 space-y-6 text-ink-700 text-[17px] leading-[1.75]">
                <p>
                  Nosso time reúne especialistas com sólida formação em Biologia, Ecologia,
                  Ciências Naturais, Estatística e Ciência de Dados. Combinamos conhecimento
                  científico aprofundado com expertise em automação, tecnologia e análise de
                  dados para entregar soluções de alto nível.
                </p>
                <p>
                  Atuamos em todas as etapas do ciclo analítico: da coleta e integração de
                  dados ao ETL e padronização, passando por modelagem estatística, machine
                  learning, visualização avançada, automação de relatórios e desenvolvimento
                  de pipelines escaláveis.
                </p>
                <p>
                  Mais do que análises, construímos soluções inteligentes e integradas que
                  aumentam a eficiência operacional, reduzem o tempo de processamento e
                  ampliam a confiabilidade das informações utilizadas em processos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* MISSÃO — DARK com foto Missão */}
      <Section tone="ink" className="py-32 lg:py-40 relative overflow-hidden">
        <BrandMark kind="padronagem" tone="light" size="xl" position="centerR" style={{ opacity: 0.028 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <p className="label label-dark mb-8">01 / Missão</p>
              <p className="font-display text-3xl sm:text-4xl lg:text-[56px] leading-[1.18] tracking-tighter2 text-paper max-w-[22ch]">
                Transformar dados complexos em soluções inteligentes por meio da integração
                entre <em>ciência</em>, tecnologia e inteligência analítica.
              </p>
            </div>
            <figure className="lg:col-span-5 figure-editorial on-ink">
              <div className="aspect-[4/5] frame">
                <img src={photos.missao} alt="Corredeira em rio" />
              </div>
            </figure>
          </div>
        </div>
      </Section>

      {/* VISÃO — LIGHT WARM com foto Visão */}
      <Section tone="warm" className="py-32 lg:py-40 relative overflow-hidden">
        <BrandMark kind="chave" tone="moss" size="md" position="tl" style={{ opacity: 0.2 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <figure className="lg:col-span-5 figure-editorial order-2 lg:order-1">
              <div className="aspect-[4/5] frame">
                <img src={photos.visao} alt="Borboletas monarcas" />
              </div>
            </figure>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <p className="label mb-8">02 / Visão</p>
              <p className="font-display text-3xl sm:text-4xl lg:text-[56px] leading-[1.18] tracking-tighter2 text-ink-900 max-w-[22ch]">
                Ser referência em soluções analíticas e inteligência de dados aplicadas a
                projetos ambientais, científicos e corporativos de <em className="text-ink-700">alta complexidade</em>.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* VALORES — LIGHT com foto Valores lateral */}
      <Section tone="paper" className="py-32 lg:py-40 relative overflow-hidden">
        <BrandMark kind="chave" tone="moss" size="md" position="bl" style={{ opacity: 0.2 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-3"><p className="label">Valores</p></div>
            <div className="lg:col-span-9">
              <h2 className="font-display text-3xl lg:text-[52px] leading-[1.15] tracking-tighter2 text-ink-900 max-w-[20ch]">
                Princípios que orientam <em className="text-ink-700">decisões técnicas</em>.
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-7 grid md:grid-cols-2 gap-x-10">
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
                    <div className="font-display text-lg lg:text-[22px] leading-[1.25] tracking-tighter2 text-ink-900 mb-2 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
                      {v.k}
                    </div>
                    <div className="text-ink-600 text-[14px] leading-[1.6]">{v.d}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <figure className="lg:col-span-5 figure-editorial lg:sticky lg:top-32">
              <div className="aspect-[4/5] frame">
                <img src={photos.valores} alt="Campos rupestres" />
              </div>
            </figure>
          </div>
        </div>
      </Section>

      {/* DIFERENCIAIS — DARK */}
      <Section tone="ink" className="py-32 lg:py-40 relative overflow-hidden">
        <BrandMark kind="duasChaves" tone="light" size="lg" position="tl" style={{ opacity: 0.03 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-3"><p className="label label-dark">Diferenciais</p></div>
            <div className="lg:col-span-9">
              <h2 className="font-display text-3xl lg:text-[52px] leading-[1.15] tracking-tighter2 text-paper max-w-[24ch]">
                O que torna o trabalho da BTF distinto.
              </h2>
            </div>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-14 max-w-5xl ml-auto">
            {differentiatorsAbout.map((d, i) => (
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
