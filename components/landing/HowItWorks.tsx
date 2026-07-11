'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { HOW_IT_WORKS_STEPS } from '@/lib/content'

type Step = (typeof HOW_IT_WORKS_STEPS)[number]

function StepItem({ step }: { step: Step }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex items-start gap-8"
    >
      <div className="flex w-12 flex-shrink-0 flex-col items-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className={`flex h-12 w-12 items-center justify-center rounded-full text-[13px] font-bold tracking-wide text-white transition-all duration-500 border-transparent bg-gradient-to-br from-[#5B5FEF] to-[#818CF8] shadow-[0_4px_15px_rgba(91,95,239,0.3)]`}
        >
          {step.num}
        </motion.div>
      </div>

      <div className="flex-1 pb-[52px]">
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-2.5 font-display text-[22px] font-bold leading-tight tracking-[-0.02em] text-white"
        >
          {step.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="max-w-[480px] text-[15px] leading-[1.7] text-white/45"
        >
          {step.desc}
        </motion.p>
      </div>
    </motion.div>
  )
}

export default function HowItWorks() {
  const containerRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 0.8', 'end 0.3'] })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="how-it-works" className="relative bg-bg px-6 py-[120px]">
      <div className="mx-auto max-w-[680px] relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-[72px]"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.12] px-3.5 py-1.5">
            <span className="text-xs font-semibold uppercase tracking-[0.08em] text-accent-lighter">
              How It Works
            </span>
          </div>
          <h2 className="mb-3.5 font-display text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white">
            Simple. Fast. Effective.
          </h2>
          <p className="text-base text-white/40">Four steps to your dream university.</p>
        </motion.div>

        <div ref={containerRef} className="relative">
          <div className="absolute bottom-6 left-[23px] top-6 w-0.5 rounded-full bg-white/[0.06]">
            <motion.div
              className="w-full origin-top rounded-full bg-gradient-to-b from-accent to-[#A78BFA]"
              style={{ height: reduceMotion ? '100%' : lineHeight }}
            />
          </div>

          {HOW_IT_WORKS_STEPS.map((s) => (
            <StepItem key={s.num} step={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
