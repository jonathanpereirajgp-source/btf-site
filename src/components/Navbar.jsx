import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/sobre', label: 'Sobre' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/especialidade', label: 'Especialidade' },
  { to: '/portfolio', label: 'Portfólio' },
  { to: '/time', label: 'Time' },
]

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location.pathname])

  return (
    <header
      style={{ transitionTimingFunction: EASE }}
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,backdrop-filter,box-shadow,border-color] duration-700 ${
        scrolled
          ? 'bg-ink-900/90 backdrop-blur-xl border-b border-paper/8 shadow-[0_18px_60px_-30px_rgba(0,0,0,0.45)]'
          : 'bg-transparent backdrop-blur-0 border-b border-transparent'
      }`}
    >
      <div
        style={{ transitionTimingFunction: EASE }}
        className={`wrap flex items-center justify-between transition-[height] duration-500 ${
          scrolled ? 'h-[68px]' : 'h-20'
        }`}
      >
        <Link to="/" className="flex items-center group" aria-label="BTF Soluções em Dados — Início">
          <img
            src="/brand/logo-extensa-verde.svg"
            alt="BTF Soluções em Dados"
            style={{ transitionTimingFunction: EASE }}
            className={`transition-all duration-500 ${scrolled ? 'h-8' : 'h-11'} w-auto block`}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-[14px] font-medium transition-colors duration-500 ${
                  isActive ? 'text-paper' : 'text-paper/65 hover:text-paper'
                }`
              }
              style={{ transitionTimingFunction: EASE }}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contato"
            style={{ transitionTimingFunction: EASE }}
            className={`hidden sm:inline-flex btn-primary transition-all duration-500 ${
              scrolled ? 'px-5 py-2.5 text-[12.5px]' : ''
            }`}
          >
            Falar com a BTF
          </Link>
          <button
            aria-label="Abrir menu"
            onClick={() => setOpen(v => !v)}
            className="lg:hidden p-2 text-paper"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-ink-900/95 backdrop-blur-md border-t border-paper/10`}
      >
        <div className="wrap py-6 flex flex-col gap-1">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `px-2 py-3 text-base font-medium ${
                  isActive ? 'text-paper' : 'text-paper/65'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contato" className="mt-3 btn-primary justify-center">
            Falar com a BTF
          </Link>
        </div>
      </div>
    </header>
  )
}
