'use client'
import { ReactNode } from 'react'
import Reveal from './Reveal'

/** Back-compat wrapper — prefer <Reveal>. */
export default function AnimatedSection({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return <Reveal delay={delay} className={className}>{children}</Reveal>
}
