export function Section({ id, className = '', children, tone = 'paper' }) {
  const tones = {
    paper: 'bg-paper text-ink-900',
    warm: 'bg-paper-warm text-ink-900',
    soft: 'bg-paper-soft text-ink-900',
    ink: 'bg-ink-900 text-paper paper-grain',
  }
  return (
    <section id={id} className={`relative ${tones[tone]} ${className}`}>
      {children}
    </section>
  )
}
