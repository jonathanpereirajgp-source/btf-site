import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-paper text-ink-900">
      <div className="wrap text-center max-w-xl">
        <p className="label justify-center mb-8">Erro 404</p>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05] tracking-tighter2 mb-6">
          Página não encontrada.
        </h1>
        <p className="text-ink-600 mb-10">
          O caminho que você procurou não está no nosso pipeline.
        </p>
        <Link to="/" className="btn-primary">Voltar ao início <ArrowRight size={14} /></Link>
      </div>
    </section>
  )
}
