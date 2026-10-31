'use client'
import { motion, type Variants } from 'framer-motion'
import { ReactNode } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

/** Fades + lifts its child into view once, when scrolled to. */
export default function Reveal({
  children, delay = 0, y = 28, className = '', as = 'div',
}: { children: ReactNode; delay?: number; y?: number; className?: string; as?: 'div' | 'li' | 'section' }) {
  const M = motion[as]
  return (
    <M
      initial={{ opacity: 0, y, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      className={className}
    >
      {children}
    </M>
  )
}

/** Parent that staggers `RevealItem` children. */
export const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
export const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}
