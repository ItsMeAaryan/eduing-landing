'use client'

import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { ArrowRight, BadgeCheck, Check, FileText, Search, Sparkles } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import Reveal from '@/components/ui/Reveal'

const EASE = [0.16, 1, 0.3, 1] as const

const steps = [
  { n: '01', title: 'Create your profile', text: 'Add your marks, entrance scores and documents once. Verified and ready for every application.' },
  { n: '02', title: 'AI finds your best matches', text: 'We compare your profile with real admission data and surface programs where you’ll actually get in.' },
  { n: '03', title: 'Apply everywhere', text: 'One tap per university. Track every application, document check and offer in one place.' },
]

function StepVisual({ i }: { i: number }) {
  if (i === 0) {
    return (
      <div className="card flex flex-col gap-4 p-6">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white font-bold">JS</span>
          <div><div className="flex items-center gap-1.5 font-bold text-ink">John Smith <BadgeCheck size={16} className="text-mint" /></div><div className="text-[13px] text-ink/55">B.Tech Computer Science</div></div>
        </div>
        {[['Full name', 'John Smith'], ['12th score', '91.4%'], ['JEE Main', '96.2 percentile']].map(([l, v], k) => (
          <motion.div key={l} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + k * 0.1, ease: EASE, duration: 0.6 }} className="flex items-center justify-between rounded-2xl bg-surface-2 px-4 py-3 text-[14px]">
            <span className="text-ink/50">{l}</span><span className="font-semibold text-ink">{v}</span>
          </motion.div>
        ))}
        <div className="flex items-center gap-2 rounded-2xl border border-dashed border-brand/40 bg-brand-soft/60 px-4 py-3 text-[13px] font-medium text-brand"><FileText size={15} />Documents uploaded · 5 files</div>
        <div>
          <div className="mb-1.5 flex justify-between text-[12px]"><span className="text-ink/50">Profile complete</span><b className="text-ink">92%</b></div>
          <div className="h-2.5 overflow-hidden rounded-full bg-ink/10"><motion.div className="h-full rounded-full bg-gradient-to-r from-brand to-gold" initial={{ width: 0 }} animate={{ width: '92%' }} transition={{ duration: 1.2, ease: EASE }} /></div>
        </div>
        <span className="btn-dark !py-3">Continue <ArrowRight size={16} /></span>
      </div>
    )
  }
  if (i === 1) {
    return (
      <div className="card-night flex flex-col gap-4 p-6">
        <div className="flex items-center justify-between rounded-2xl bg-white/[0.08] px-4 py-3 text-[14px]">
          <span className="flex items-center gap-2"><Search size={15} className="text-gold" />Searching… Computer Science</span><b className="text-gold">96%</b>
        </div>
        <div className="text-[12px] font-semibold uppercase tracking-wider text-white/45">Best matches</div>
        {[['Engineering', 'Scholarship available'], ['AI & ML', 'Placement priority'], ['Cyber Security', 'Low fees']].map(([p, tag], k) => (
          <motion.div key={p} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + k * 0.12, ease: EASE, duration: 0.6 }} className="flex items-center justify-between rounded-2xl bg-white/[0.06] px-4 py-3.5">
            <span className="flex items-center gap-2 font-semibold"><Sparkles size={15} className="text-brand-2" />{p}</span>
            <span className="rounded-chip bg-gold/15 px-2.5 py-1 text-[11.5px] font-semibold text-gold">{tag}</span>
          </motion.div>
        ))}
        <div className="flex items-end gap-2 pt-2">
          {[40, 65, 52, 88, 70, 96].map((h, k) => (
            <motion.div key={k} className={`flex-1 rounded-t-xl ${k === 5 ? 'bg-gold' : 'bg-white/15'}`} initial={{ height: 0 }} animate={{ height: h }} transition={{ delay: 0.3 + k * 0.06, ease: EASE, duration: 0.8 }} />
          ))}
        </div>
      </div>
    )
  }
  return (
    <div className="card flex flex-col gap-4 p-6">
      <div className="grid grid-cols-2 gap-3">
        {[['Applications sent', '12', 'bg-brand-soft text-brand'], ['Under review', '4', 'bg-surface-2 text-ink'], ['Offers received', '2', 'bg-gold-soft text-[#8A5F00] dark:text-gold'], ['Docs verified', '✓', 'bg-mint/10 text-mint']].map(([l, v, c], k) => (
          <motion.div key={l} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 + k * 0.08, ease: EASE, duration: 0.5 }} className={`rounded-2xl p-4 ${c}`}>
            <div className="text-[12px] font-medium opacity-75">{l}</div>
            <div className="font-display text-[30px] font-bold leading-tight">{v}</div>
          </motion.div>
        ))}
      </div>
      {['Application submitted', 'Documents verified', 'University review', 'Offer received'].map((t, k) => (
        <motion.div key={t} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 + k * 0.1, ease: EASE, duration: 0.5 }} className="flex items-center gap-3 text-[14px]">
          <span className={`flex h-6 w-6 items-center justify-center rounded-full ${k < 3 ? 'bg-mint text-white' : 'border-2 border-dashed border-ink/20'}`}>{k < 3 && <Check size={13} />}</span>
          <span className={k < 3 ? 'font-medium text-ink' : 'text-ink/45'}>{t}</span>
        </motion.div>
      ))}
    </div>
  )
}

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  useMotionValueEvent(scrollYProgress, 'change', (v) => setActive(Math.min(2, Math.floor(v * 3))))

  return (
    <section id="how-it-works" aria-labelledby="how-heading" className="relative pt-24 sm:pt-32">
      <div className="container-x">
        <SectionHeader
          id="how-heading"
          eyebrow="How it works"
          title={['One profile. Three simple steps. ', { text: 'Hundreds of universities.', className: 'text-gradient' }]}
          subtitle="Everything from profile creation to application tracking happens in one seamless workflow."
        />
      </div>

      {/* Desktop: pinned, scroll-driven */}
      <div ref={ref} className="relative hidden h-[300vh] lg:block">
        <div className="sticky top-0 flex h-screen items-center">
          <div className="container-x grid grid-cols-[1fr_1.05fr] items-center gap-16">
            <div className="relative flex flex-col gap-3">
              <div aria-hidden className="absolute bottom-6 left-[27px] top-6 w-[2px] bg-ink/10">
                <motion.div className="w-full origin-top bg-gradient-to-b from-brand to-gold" style={{ scaleY: scrollYProgress, height: '100%' }} />
              </div>
              {steps.map((s, i) => (
                <div key={s.n} className={`relative flex gap-5 rounded-[24px] p-4 transition-all duration-500 ${active === i ? 'bg-surface shadow-lift' : 'opacity-50'}`}>
                  <span className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-display text-[17px] font-bold transition-colors duration-500 ${active >= i ? 'bg-brand text-white' : 'bg-surface-2 text-ink/50'}`}>{s.n}</span>
                  <div>
                    <h3 className="text-[22px] font-bold tracking-tight text-ink">{s.title}</h3>
                    <p className="mt-1 max-w-[42ch] text-[15px] leading-relaxed text-ink/60">{s.text}</p>
                  </div>
                </div>
              ))}
              <p className="mt-4 pl-4 text-[15px] text-ink/55">Students save <strong className="text-ink">40+ hours</strong> by applying once.</p>
            </div>
            <div className="relative h-[520px]" style={{ perspective: 1400 }}>
              <div aria-hidden className="absolute inset-10 rounded-full bg-brand/20 blur-3xl" />
              <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, rotateX: -35, y: 80, scale: 0.92 }}
                  animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                  exit={{ opacity: 0, rotateX: 25, y: -60, scale: 0.94 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className="w-full max-w-[460px]"
                  style={{ transformOrigin: 'center bottom' }}
                >
                  <StepVisual i={active} />
                </motion.div>
              </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / tablet: stacked */}
      <div className="container-x mt-14 flex flex-col gap-10 pb-24 lg:hidden">
        {steps.map((s, i) => (
          <Reveal key={s.n} className="flex flex-col gap-5">
            <div className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand font-display font-bold text-white">{s.n}</span>
              <div><h3 className="text-[20px] font-bold text-ink">{s.title}</h3><p className="mt-1 text-[15px] text-ink/60">{s.text}</p></div>
            </div>
            <StepVisual i={i} />
          </Reveal>
        ))}
        <p className="text-center text-[15px] text-ink/55">Students save <strong className="text-ink">40+ hours</strong> by applying once.</p>
      </div>
    </section>
  )
}
