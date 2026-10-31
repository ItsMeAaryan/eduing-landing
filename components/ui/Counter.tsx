'use client'
import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

/** Counts up from 0 when scrolled into view. */
export default function Counter({ to, suffix = '', prefix = '', duration = 1.8 }: { to: number; suffix?: string; prefix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration, ease: [0.16, 1, 0.3, 1], onUpdate: (x) => setV(Math.round(x)) })
    return () => c.stop()
  }, [inView, to, duration])
  return <span ref={ref} className="tabular-nums">{prefix}{v.toLocaleString('en-IN')}{suffix}</span>
}
