import { motion } from 'framer-motion'
import BrandMark from './BrandMark.jsx'

export default function PageHeader({ eyebrow, title, sub, image, mark = 'padronagem' }) {
  return (
    <header className="relative bg-ink-900 text-paper paper-grain overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-32">
      <BrandMark kind={mark} tone="light" size="lg" position="r" style={{ opacity: 0.03 }} />
      <BrandMark kind="icon" tone="light" size="md" position="bl" style={{ opacity: 0.03, transform: 'rotate(-10deg) translate(-30%, 30%)' }} />

      <div className="wrap relative">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3 lg:pt-3">
            {eyebrow && <p className="label label-dark">{eyebrow}</p>}
          </div>
          <div className="lg:col-span-9">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="display-xl font-display text-[40px] sm:text-[56px] lg:text-[80px] leading-[1.08] tracking-tighter2 text-paper max-w-[20ch]"
            >
              {title}
            </motion.h1>
            {sub && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="mt-12 text-lg leading-[1.65] max-w-2xl text-paper/70"
              >
                {sub}
              </motion.p>
            )}
          </div>
        </div>

        {image && (
          <motion.figure
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-20 lg:mt-28 figure-editorial on-ink"
          >
            <div className="aspect-[21/9] frame">
              <img src={image} alt="" />
            </div>
          </motion.figure>
        )}
      </div>
    </header>
  )
}
