import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import { Section } from '../components/Section.jsx'
import BrandMark from '../components/BrandMark.jsx'
import { ambientalAreas, stock, photos } from '../data/site.js'

export default function Especialidade() {
  return (
    <>
      <PageHeader
        eyebrow="Especialidade"
        title="Onde a ciência ecológica encontra a engenharia de dados."
        sub="Expertise no desenvolvimento de soluções analíticas aplicadas a sistemas ambientais complexos, com base em conhecimento ecológico, biológico e estatístico."
        mark="duasChaves"
        image={photos.especialidadeHero}
      />

      {/* Tese — LIGHT */}
      <Section tone="paper" className="py-32 lg:py-40 relative overflow-hidden">
        <BrandMark kind="icon" tone="moss" size="lg" position="bl" style={{ opacity: 0.22, transform: 'rotate(15deg) translate(-30%, 25%)' }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-3"><p className="label">Tese</p></div>
            <div className="lg:col-span-9 space-y-8 text-ink-700 text-[18px] leading-[1.75] max-w-3xl">
              <p>
                A BTF possui expertise no desenvolvimento de soluções analíticas aplicadas a
                sistemas ambientais complexos, integrando ciência de dados, automação e
                modelagem estatística avançada ao conhecimento ecológico e biológico
                especializado.
              </p>
              <p>
                Compreendemos tanto a estrutura técnica dos dados quanto os processos
                ambientais e ecológicos relacionados às análises, o que permite
                interpretações mais consistentes, modelagens mais robustas e soluções
                analíticas mais alinhadas às demandas reais do setor ambiental.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Pull quote — DARK */}
      <Section tone="ink" className="relative overflow-hidden">
        <div className="grid lg:grid-cols-12 min-h-[640px]">
          <figure className="lg:col-span-7 relative figure-editorial on-ink">
            <div className="absolute inset-0 frame">
              <img src={photos.sistemaEspecialidade} alt="Sistemas ambientais complexos" />
            </div>
            <div className="absolute inset-0 bg-ink-900/30 z-[1]" />
          </figure>
          <div className="lg:col-span-5 px-6 md:px-12 lg:px-16 py-28 lg:py-36 flex flex-col justify-center relative">
            <BrandMark kind="padronagem" tone="light" size="lg" position="br" style={{ opacity: 0.04 }} />

            <p className="label label-dark mb-10 relative">Diferencial</p>
            <p className="relative display-lg font-display text-3xl lg:text-[44px] leading-[1.2] tracking-tighter2 text-paper max-w-[18ch]">
              Compreendemos o <em>sistema</em> por trás do dado. Não apenas a planilha.
            </p>
          </div>
        </div>
      </Section>

      {/* Áreas — LIGHT WARM */}
      <Section tone="warm" className="py-32 lg:py-40 relative overflow-hidden">
        <BrandMark kind="chave" tone="moss" size="md" position="tr" style={{ opacity: 0.25 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-3"><p className="label">Áreas de atuação</p></div>
            <div className="lg:col-span-9">
              <h2 className="display-lg font-display text-3xl lg:text-[52px] leading-[1.15] tracking-tighter2 text-ink-900 max-w-[22ch]">
                Onde aplicamos inteligência analítica.
              </h2>
            </div>
          </div>

          <div className="border-t border-ink-900/15">
            {ambientalAreas.map((a, i) => (
              <div key={a} className="row-hover grid grid-cols-12 gap-4 py-8 border-b border-ink-900/15 items-baseline group">
                <span className="col-span-2 lg:col-span-1 num-tag text-[13px] tracking-tight">
                  /{String(i + 1).padStart(2, '0')}
                </span>
                <span className="col-span-10 lg:col-span-11 font-display text-2xl lg:text-[36px] leading-[1.25] tracking-tighter2 text-ink-900 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5">
                  {a}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA — DARK */}
      <Section tone="ink" className="py-32 relative overflow-hidden">
        <BrandMark kind="padronagem" tone="light" size="xl" position="l" style={{ opacity: 0.028 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <h3 className="display-lg font-display text-3xl lg:text-[52px] leading-[1.18] tracking-tighter2 text-paper max-w-[22ch]">
                Tem um projeto ambiental que precisa de inteligência analítica?
              </h3>
            </div>
            <div className="lg:col-span-4 flex flex-wrap gap-4">
              <Link to="/contato" className="btn-primary">Iniciar conversa</Link>
              <Link to="/portfolio" className="btn-outline-dark">Portfólio <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
