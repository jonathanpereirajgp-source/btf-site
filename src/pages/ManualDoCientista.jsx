import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import { Section } from '../components/Section.jsx'
import BrandMark from '../components/BrandMark.jsx'
import { photos, manualServices, manualTeam } from '../data/site.js'

export default function ManualDoCientista() {
  return (
    <>
      <PageHeader
        eyebrow="Manual do Cientista"
        title="A raiz da BTF, ao lado dos pesquisadores em formação."
        sub="O Manual é a raiz da BTF, e, ao mesmo tempo, segue sendo um braço importante nos serviços prestados aos pesquisadores em formação e à comunidade acadêmica."
        mark="chave"
      />

      {/* MISSÃO DO MANUAL - LIGHT */}
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
            </div>
            <figure className="lg:col-span-5 figure-editorial">
              <div className="aspect-[3/4] frame">
                <img src={photos.manualTrio} alt="Trio Manual do Cientista" className="object-[50%_20%] scale-[1.05]" />
                <figcaption className="absolute bottom-5 left-5 z-20 bg-moss-deep text-paper px-3.5 py-[3px] rounded-md shadow-[0_8px_20px_-10px_rgba(0,0,0,0.4)] text-center leading-snug">
                  <span className="text-[10.5px] font-normal tracking-tight">Fundadores Manual do Cientista</span>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </Section>

      {/* COMO NASCEU - DARK */}
      <Section tone="ink" className="py-32 lg:py-40 relative overflow-hidden">
        <BrandMark kind="padronagem" tone="light" size="xl" position="centerR" style={{ opacity: 0.028 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-3"><p className="label label-dark">Como nasceu</p></div>
            <div className="lg:col-span-9">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[52px] leading-[1.18] tracking-tighter2 text-paper max-w-[22ch]">
                Uma inquietação em 2021, o desejo de ajudar quem precisa de <em>estatística</em>.
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-9 lg:col-start-4 space-y-6 text-paper/75 text-[17px] leading-[1.8]">
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
                (<a href="https://www.instagram.com/manualdocientistajr/" target="_blank" rel="noreferrer" className="text-paper link-anim">@manualdocientistajr</a>)
                para fazer divulgação de método científico, análises estatísticas, scripts e pacotes
                para o R. Nosso plano era, com o tempo, prestar consultorias, mentorias e vender
                cursos, unindo nosso conhecimento acadêmico e estatístico a um serviço que nós já
                fazíamos, mas não considerávamos como trabalho.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* TRIO - LIGHT */}
      <Section tone="warm" className="py-32 lg:py-40 relative overflow-hidden">
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

          <div className="space-y-14 lg:space-y-20">
            {manualTeam.map((m, i) => (
              <motion.article
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="grid lg:grid-cols-12 gap-10 border-t border-ink-900/15 pt-10 lg:pt-14"
              >
                <div className="lg:col-span-3">
                  <p className="num-tag text-[13px] tracking-tight mb-3">/{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="font-display text-2xl lg:text-[36px] leading-[1.1] tracking-tighter2 text-ink-900">
                    {m.name}
                  </h3>
                </div>
                <div className="lg:col-span-9 text-ink-700 text-[17px] leading-[1.8]">
                  <p>{m.text}</p>
                </div>
              </motion.article>
            ))}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-2xl lg:text-[36px] leading-[1.3] tracking-tighter2 text-ink-900 max-w-[36ch] pt-8 border-t border-ink-900/15"
            >
              A história do Manual nos conecta afetivamente para formar um trio que une
              <em className="text-ink-700"> amizade, ciência e propósito</em>.
            </motion.p>
          </div>
        </div>
      </Section>

      {/* SERVIÇOS - DARK */}
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
                  <a
                    href={s.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-text-dark mt-8 inline-flex"
                  >
                    {s.link.label} <ArrowUpRight size={14} />
                  </a>
                )}
              </motion.article>
            ))}
          </div>

          <p className="mt-20 text-paper/70 text-[17px] leading-[1.75] max-w-3xl">
            Nosso conjunto de serviços não apenas ensina técnicas, mas forma pesquisadores mais
            independentes, seguros, preparados e conectados, reduzindo o sofrimento comum na
            carreira acadêmica e acelerando o caminho até resultados consistentes.
          </p>
        </div>
      </Section>

      {/* CTA - LIGHT */}
      <Section tone="paper" className="py-28 relative overflow-hidden">
        <BrandMark kind="icon" tone="moss" size="md" position="br" style={{ opacity: 0.18 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <h3 className="font-display text-3xl lg:text-[48px] leading-[1.18] tracking-tighter2 text-ink-900 max-w-[22ch]">
                Quer conhecer o Manual do Cientista de perto?
              </h3>
            </div>
            <div className="lg:col-span-4 flex flex-wrap gap-4 justify-start lg:justify-end">
              <a href="https://manualdocientista.com" target="_blank" rel="noreferrer" className="btn-primary">
                Acessar plataforma <ArrowUpRight size={14} />
              </a>
              <Link to="/contato" className="btn-outline">Falar com a BTF <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
