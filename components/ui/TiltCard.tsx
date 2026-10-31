'use client'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import { ReactNode, useRef } from 'react'

/** Card that tilts toward the cursor in 3D with a moving glare highlight. */
export default function TiltCard({ children, className = '', max = 8, glare = true }: {
  children: ReactNode; className?: string; max?: number; glare?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const sx = useSpring(px, { stiffness: 180, damping: 18 })
  const sy = useSpring(py, { stiffness: 180, damping: 18 })
  const rotateY = useTransform(sx, [0, 1], [-max, max])
  const rotateX = useTransform(sy, [0, 1], [max, -max])
  const gx = useTransform(sx, (v) => `${v * 100}%`)
  const gy = useTransform(sy, (v) => `${v * 100}%`)
  const glareBg = useTransform([gx, gy], ([x, y]) =>
    `radial-gradient(500px circle at ${x} ${y}, rgb(255 255 255 / 0.22), transparent 45%)`)

  function onMove(e: React.PointerEvent) {
    if (reduce || e.pointerType !== 'mouse') return
    const r = ref.current!.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
  }
  function reset() { px.set(0.5); py.set(0.5) }

  return (
    <div style={{ perspective: 1200 }} className="h-full">
      <motion.div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={reset}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className={`relative h-full ${className}`}
      >
        {children}
        {glare && (
          <motion.div aria-hidden className="pointer-events-none absolute inset-0 rounded-[inherit]" style={{ background: glareBg }} />
        )}
      </motion.div>
    </div>
  )
}
