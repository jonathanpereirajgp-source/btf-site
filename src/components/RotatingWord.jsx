import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

/**
 * Editorial rotating word — slow dissolve, soft blur.
 * Cinematic timing, silent presence.
 */
export default function RotatingWord({ words, interval = 4800, className = '' }) {
  const [i, setI] = useState(0)
  const longest = words.reduce((a, b) => (a.length >= b.length ? a : b))

  useEffect(() => {
    const id = setInterval(() => setI(v => (v + 1) % words.length), interval)
    return () => clearInterval(id)
  }, [words.length, interval])

  return (
    <span className={`relative inline-block whitespace-nowrap ${className}`}>
      <span aria-hidden className="invisible">{longest}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[i]}
          initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -8, filter: 'blur(6px)' }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 whitespace-nowrap"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
