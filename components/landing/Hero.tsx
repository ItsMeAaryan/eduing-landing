'use client'

import dynamic from 'next/dynamic'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight, BadgeCheck, CheckCircle2, PartyPopper, Sparkles } from 'lucide-react'
import { useRef } from 'react'
import WordReveal from '@/components/ui/WordReveal'
import { APP_URL } from '@/lib/links'

const Hero3D = dynamic(() => import('./Hero3D'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-40 w-40 animate-pulse rounded-full bg-brand/15 blur-2xl" />
    </div>
  ),
})

const EASE = [0.16, 1, 0.3, 1] as const

function FloatChip({ className, delay, children, depth = 1, mx, my }: {
  className: string; delay: number; children: React.ReactNode; depth?: number
  mx: ReturnType<typeof useSpring>; my: ReturnType<typeof useSpring>
}) {
  const x = useTransform(mx, (v) => v * 18 * depth)
  const y = useTransform(my, (v) => v * 14 * depth)
  return (
    <motion.div style={{ x, y }} className={`absolute z-10 ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay }}
        className="animate-float rounded-tile border border-white/60 bg-surface/80 p-3 shadow-lift backdrop-blur-xl dark:border-white/10"
        style={{ animationDelay: `${delay}s` }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const mx = useSpring(rawX, { stiffness: 60, damping: 18 })
  const my = useSpring(rawY, { stiffness: 60, damping: 18 })

  return (
    <section
      ref={ref}
      aria-labelledby="hero-heading"
      onPointerMove={(e) => {
        if (e.pointerType !== 'mouse') return
        rawX.set(e.clientX / window.innerWidth - 0.5)
        rawY.set(e.clientY / window.innerHeight - 0.5)
      }}
      className="relative isolate pb-10 pt-28 [overflow-x:clip] sm:pt-36"
    >
      {/* backdrop */}
      <div aria-hidden className="bg-dots absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div aria-hidden className="absolute -right-40 top-10 -z-10 h-[620px] w-[620px] rounded-full bg-brand/20 blur-[120px]" />
      <div aria-hidden className="absolute -left-32 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-gold/25 blur-[120px]" />

      <div className="container-x grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div style={{ y: textY, opacity: fade }} className="relative z-10 flex flex-col items-start gap-7">
          <motion.span
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}
            className="eyebrow"
          >
            <Sparkles size={13} className="text-brand" />
            India&apos;s unified admissions platform
          </motion.span>

          <WordReveal
            as="h1"
            id="hero-heading"
            delay={0.1}
            className="text-hero font-bold text-ink"
            parts={[
              'Apply to India’s\n',
              { text: 'top universities,', className: 'text-gradient' },
              '\nall in one ',
              { text: 'place.', className: 'hero-underline' },
            ]}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE, delay: 0.55 }}
            className="max-w-[46ch] text-[17px] leading-relaxed text-ink/65 sm:text-lg"
          >
            Explore universities, compare programs, submit applications, and track every step of your
            admission journey — all from a single account.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a href={APP_URL} className="btn-primary group">
              <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-shine bg-white/25" aria-hidden />
              Start Application
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#how-it-works" className="btn-ghost">See how it works</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.95 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {[['AK', 'bg-brand'], ['PS', 'bg-gold text-[#17142B]'], ['RV', 'bg-mint'], ['NJ', 'bg-coral']].map(([t, c]) => (
                  <span key={t} className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-canvas text-[11px] font-bold text-white ${c}`}>{t}</span>
                ))}
              </div>
              <div className="text-[13px] leading-tight text-ink/60">
                <strong className="block text-[15px] text-ink">50K+ students</strong>
                applying with one profile
              </div>
            </div>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-[13px] font-medium text-ink/60">
              {['500+ Universities', 'One Profile', 'Secure Platform'].map((t) => (
                <li key={t} className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-mint" />{t}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* 3D stage */}
        <motion.div style={{ y: sceneY }} className="relative mx-auto h-[380px] w-full max-w-[620px] sm:h-[520px] lg:h-[600px]">
          <div aria-hidden className="absolute inset-[12%] rounded-full bg-gradient-to-br from-brand-soft via-surface to-gold-soft opacity-90 dark:opacity-40" />
          <div aria-hidden className="absolute inset-[6%] animate-spin-slow rounded-full border border-dashed border-ink/10" />
          <div aria-hidden className="absolute bottom-[8%] left-1/2 h-8 w-1/2 -translate-x-1/2 rounded-[50%] bg-ink/20 blur-xl" />
          <Hero3D />

          <FloatChip className="left-0 top-[14%] sm:-left-4" delay={1.2} mx={mx} my={my} depth={1.4}>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-[11px] font-bold text-white">BITS</span>
              <div className="pr-1 text-[12px] leading-tight">
                <strong className="block text-[13px] text-ink">BITS Pilani</strong>
                <span className="text-mint">96% match</span>
              </div>
            </div>
          </FloatChip>

          <FloatChip className="right-0 top-[6%]" delay={1.4} mx={mx} my={my} depth={-1}>
            <div className="flex items-center gap-2 pr-1 text-[12.5px] font-semibold text-ink">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-soft text-gold"><PartyPopper size={16} /></span>
              Offer received · VIT
            </div>
          </FloatChip>

          <FloatChip className="bottom-[10%] right-[2%]" delay={1.6} mx={mx} my={my} depth={1.8}>
            <div className="w-[170px] text-[12px]">
              <div className="mb-2 flex items-center justify-between text-ink/60"><span>Profile</span><strong className="text-ink">92%</strong></div>
              <div className="h-2 overflow-hidden rounded-full bg-ink/10">
                <motion.div className="h-full rounded-full bg-gradient-to-r from-brand to-gold" initial={{ width: 0 }} animate={{ width: '92%' }} transition={{ duration: 1.6, delay: 1.9, ease: EASE }} />
              </div>
            </div>
          </FloatChip>

          <FloatChip className="bottom-[22%] left-[2%]" delay={1.8} mx={mx} my={my} depth={-1.6}>
            <div className="flex items-center gap-2 pr-1 text-[12.5px] font-semibold text-ink">
              <BadgeCheck size={18} className="text-mint" /> Documents verified
            </div>
          </FloatChip>
        </motion.div>
      </div>
    </section>
  )
}
