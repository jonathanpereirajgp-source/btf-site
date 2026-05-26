import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import { Section } from '../components/Section.jsx'
import BrandMark from '../components/BrandMark.jsx'

export default function Contato() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nome: '', email: '', empresa: '', area: 'Ciência de Dados', mensagem: '' })

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 6000)
    setForm({ nome: '', email: '', empresa: '', area: 'Ciência de Dados', mensagem: '' })
  }

  return (
    <>
      <PageHeader
        eyebrow="— Contato"
        title="Conte sobre o seu projeto."
        sub="Nosso time retorna em até dois dias úteis com uma proposta técnica orientada às necessidades reais do seu desafio."
        mark="padronagem"
      />

      <Section tone="ink" className="pb-32 lg:pb-40 pt-24 lg:pt-32 relative overflow-hidden">
        <BrandMark kind="icon" tone="light" size="lg" position="bl" style={{ opacity: 0.025, transform: 'rotate(-12deg) translate(-25%, 30%)' }} />
        <BrandMark kind="chave" tone="light" size="md" position="tr" style={{ opacity: 0.032 }} />

        <div className="wrap relative">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="label label-dark mb-10">— Canais diretos</p>
              <ul className="space-y-8">
                <ChannelItem label="E-mail" value="contato@btfdados.com.br" href="mailto:contato@btfdados.com.br" />
                <ChannelItem label="LinkedIn" value="/company/btf-dados" href="#" />
                <ChannelItem label="Instagram" value="@btf.dados" href="#" />
              </ul>

              <div className="mt-14 pt-10 border-t border-paper/15">
                <p className="label label-dark mb-6">— Áreas de interesse</p>
                <ul className="space-y-2.5 text-paper/75 text-[15px] leading-[1.55]">
                  <li>· Ciência de Dados</li>
                  <li>· Engenharia de Dados</li>
                  <li>· Dashboards & Business Intelligence</li>
                  <li>· Automação de processos e relatórios</li>
                  <li>· Especialidade ambiental</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-8">
              <motion.form
                onSubmit={submit}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-12"
              >
                <Field label="Nome" value={form.nome} onChange={(v) => setForm({ ...form, nome: v })} required />
                <Field label="E-mail" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
                <Field label="Empresa ou organização" value={form.empresa} onChange={(v) => setForm({ ...form, empresa: v })} />

                <div>
                  <Label>Área de interesse</Label>
                  <select
                    value={form.area}
                    onChange={(e) => setForm({ ...form, area: e.target.value })}
                    className="w-full bg-transparent border-b border-paper/25 py-3 text-[17px] text-paper focus:border-paper focus:outline-none transition-colors duration-300"
                  >
                    <option className="text-ink-900">Ciência de Dados</option>
                    <option className="text-ink-900">Engenharia de Dados</option>
                    <option className="text-ink-900">Dashboards & BI</option>
                    <option className="text-ink-900">Automação de Processos</option>
                    <option className="text-ink-900">Especialidade ambiental</option>
                    <option className="text-ink-900">Outro</option>
                  </select>
                </div>

                <div>
                  <Label>Conte sobre o seu projeto</Label>
                  <textarea
                    rows={5}
                    required
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    className="w-full bg-transparent border-b border-paper/25 py-3 text-[17px] text-paper placeholder:text-paper/30 focus:border-paper focus:outline-none transition-colors duration-300 resize-none leading-[1.55]"
                    placeholder="Contexto, objetivos, prazos, dados disponíveis..."
                  />
                </div>

                <div className="flex items-center justify-between gap-4 flex-wrap pt-6">
                  <p className="text-[13px] text-paper/55">Resposta em até 2 dias úteis.</p>
                  <button type="submit" className="btn-primary">
                    {sent ? (<><Check size={16} /> Mensagem enviada</>) : (<>Enviar mensagem <ArrowRight size={14} /></>)}
                  </button>
                </div>
              </motion.form>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

function Label({ children }) {
  return <div className="text-[12px] tracking-[0.16em] uppercase text-paper/55 mb-3">{children}</div>
}

function Field({ label, value, onChange, type = 'text', required }) {
  return (
    <div>
      <Label>{label}{required && ' *'}</Label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-paper/25 py-3 text-[17px] text-paper placeholder:text-paper/30 focus:border-paper focus:outline-none transition-colors duration-300"
      />
    </div>
  )
}

function ChannelItem({ label, value, href }) {
  return (
    <li>
      <div className="text-[12px] tracking-[0.16em] uppercase text-paper/55 mb-2">{label}</div>
      <a href={href} className="font-display text-[22px] leading-[1.25] tracking-tighter2 text-paper link-anim">
        {value}
      </a>
    </li>
  )
}
