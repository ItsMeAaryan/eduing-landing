'use client'

import { motion } from 'framer-motion'
import {
  AlertCircle, Check, Clock, Database, FileText, FolderLock, LayoutDashboard, Search, Sparkles, UserCircle, UserRound, XCircle, Zap, Bell,
} from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import Reveal from '@/components/ui/Reveal'

const EASE = [0.16, 1, 0.3, 1] as const

const oldWay = [
  { label: 'Fill the same details again', icon: FileText },
  { label: 'Upload documents again', icon: Database },
  { label: 'Track applications separately', icon: LayoutDashboard },
  { label: 'Miss deadlines', icon: AlertCircle },
  { label: 'No central dashboard', icon: XCircle },
  { label: 'Multiple logins', icon: UserCircle },
]
const newWay = [
  { label: 'One profile', icon: UserRound },
  { label: 'Documents stored once', icon: FolderLock },
  { label: 'AI program discovery', icon: Search },
  { label: 'Track everything', icon: LayoutDashboard },
  { label: 'Real-time updates', icon: Bell },
  { label: 'One dashboard', icon: Sparkles },
]

export default function TestimonialsSection() {
  return (
    <section className="section" id="comparison" aria-labelledby="comparison-heading">
      <div className="container-x">
        <SectionHeader
          id="comparison-heading"
          eyebrow="Why students switch"
          title={['Stop repeating applications. ', { text: 'Start applying smarter.', className: 'text-gradient' }]}
          subtitle="Traditional admissions make you repeat the same process at every university. EDUING lets you create one profile and manage everything from a single workspace."
        />

        <div className="mt-16 grid gap-4 lg:grid-cols-2">
          <Reveal className="card relative overflow-hidden p-7 sm:p-9">
            <div className="mb-8 flex items-center justify-between gap-3">
              <h3 className="text-[22px] font-bold text-ink/55">Traditional admissions</h3>
              <span className="flex items-center gap-1.5 rounded-chip bg-coral/10 px-3 py-1 text-[12px] font-semibold text-coral"><Clock size={13} />Time consuming</span>
            </div>
            <ul className="flex flex-col gap-4">
              {oldWay.map(({ label, icon: Icon }, i) => (
                <li key={label} className="flex items-center gap-4 text-[16px] text-ink/50">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-surface-2 text-ink/40"><Icon size={18} /></span>
                  <span className="relative">
                    {label}
                    <motion.span
                      aria-hidden
                      className="absolute left-0 top-1/2 h-[2px] w-full origin-left bg-coral/70"
                      initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.12, ease: EASE }}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="relative overflow-hidden rounded-card bg-brand p-7 text-white shadow-glow sm:p-9">
            <div aria-hidden className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/40 blur-3xl" />
            <div aria-hidden className="absolute -bottom-24 -left-10 h-60 w-60 rounded-full bg-white/20 blur-3xl" />
            <div className="relative mb-8 flex items-center justify-between gap-3">
              <h3 className="text-[22px] font-bold">With EDUING</h3>
              <span className="flex items-center gap-1.5 rounded-chip bg-white/15 px-3 py-1 text-[12px] font-semibold"><Zap size={13} className="text-gold" />Smart workflow</span>
            </div>
            <ul className="relative flex flex-col gap-4">
              {newWay.map(({ label, icon: Icon }, i) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease: EASE }}
                  className="flex items-center gap-4 text-[16px] font-semibold"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/15"><Icon size={18} /></span>
                  <span className="flex-1">{label}</span>
                  <motion.span
                    initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: '-80px' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.5 + i * 0.12 }}
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-gold text-[#17142B]"
                  >
                    <Check size={14} strokeWidth={3} />
                  </motion.span>
                </motion.li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[['One profile', 'Create once, use everywhere'], ['Unlimited applications', 'Apply without limits'], ['AI recommendations', 'Smart program matching'], ['Secure documents', 'Bank-grade security']].map(([t, s], i) => (
            <Reveal key={t} delay={i * 0.06} className="card p-5 text-center sm:p-6">
              <div className="font-display text-[17px] font-bold text-ink">{t}</div>
              <div className="mt-1 text-[13px] text-ink/55">{s}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
