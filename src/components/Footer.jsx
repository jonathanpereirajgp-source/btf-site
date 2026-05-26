import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-paper paper-grain relative overflow-hidden">
      <div className="wrap py-28 lg:py-36 relative">
        {/* Closing statement */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 pb-24 border-b border-paper/10">
          <div className="lg:col-span-7">
            <p className="label label-dark mb-10">— Próximo passo</p>
            <h2 className="font-display text-[36px] sm:text-5xl lg:text-[64px] leading-[1.12] tracking-tighter2 text-paper max-w-[18ch]">
              Trabalhamos próximos ao cliente para entender o problema antes de propor uma solução.
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-paper/65 text-[17px] leading-[1.65] mb-10 max-w-md">
              Conte sobre o seu projeto. Nosso time retorna em até dois dias úteis com uma proposta técnica orientada às necessidades reais do seu desafio.
            </p>
            <Link to="/contato" className="btn-outline-dark self-start">
              Iniciar uma conversa <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-12 py-20">
          <div className="md:col-span-5">
            <img src="/brand/logo-extensa-branco.svg" alt="BTF Soluções em Dados" className="h-9 mb-8" />
            <p className="text-paper/55 max-w-sm leading-[1.7] text-[15px]">
              Consultoria científica em ciência e engenharia de dados aplicadas a projetos
              ambientais, científicos e corporativos.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="label label-dark mb-6">— Navegação</p>
            <ul className="space-y-3 text-paper/80 text-[15px]">
              <li><Link to="/sobre" className="link-anim hover:text-paper">Sobre</Link></li>
              <li><Link to="/servicos" className="link-anim hover:text-paper">Serviços</Link></li>
              <li><Link to="/especialidade" className="link-anim hover:text-paper">Especialidade</Link></li>
              <li><Link to="/portfolio" className="link-anim hover:text-paper">Portfólio</Link></li>
              <li><Link to="/time" className="link-anim hover:text-paper">Time</Link></li>
              <li><Link to="/contato" className="link-anim hover:text-paper">Contato</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="label label-dark mb-6">— Contato</p>
            <ul className="space-y-3 text-paper/80 text-[15px]">
              <li>
                <a href="mailto:contato@btfdados.com.br" className="link-anim hover:text-paper">
                  contato@btfdados.com.br
                </a>
              </li>
              <li>
                <a href="#" className="link-anim hover:text-paper">LinkedIn — /company/btf-dados</a>
              </li>
              <li>
                <a href="#" className="link-anim hover:text-paper">Instagram — @btf.dados</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-10 border-t border-paper/10 text-[12px] text-paper/40 tracking-tight">
          <span>© {new Date().getFullYear()} BTF Soluções em Dados</span>
          <span>Ciência aplicada · Inteligência analítica · Engenharia de dados</span>
        </div>
      </div>
    </footer>
  )
}
