'use client'

import { motion } from 'framer-motion'
import { BadgeCheck, Bell, Check, FileText, Lock, ShieldCheck, Sparkles, UserRound } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import Reveal from '@/components/ui/Reveal'
import TiltCard from '@/components/ui/TiltCard'

const EASE = [0.16, 1, 0.3, 1] as const

function Tile({ children, className = '', delay = 0, dark = false }: { children: React.ReactNode; className?: string; delay?: number; dark?: boolean }) {
  return (
    <Reveal delay={delay} className={className}>
      <TiltCard max={6} className="rounded-card">
        <div className={`relative flex h-full flex-col overflow-hidden p-6 sm:p-7 ${dark ? 'card-night' : 'card'}`}>{children}</div>
      </TiltCard>
    </Reveal>
  )
}

function TileHead({ icon: Icon, title, text, dark = false }: { icon: typeof Sparkles; title: string; text: string; dark?: boolean }) {
  return (
    <div className="mb-6 flex items-start gap-3">
      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${dark ? 'bg-white/10 text-gold' : 'bg-brand-soft text-brand'}`}><Icon size={19} /></span>
      <div>
        <h3 className={`text-[19px] font-bold tracking-tight ${dark ? 'text-white' : 'text-ink'}`}>{title}</h3>
        <p className={`mt-1 text-[14px] leading-relaxed ${dark ? 'text-white/60' : 'text-ink/55'}`}>{text}</p>
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <section className="section relative" id="features" aria-labelledby="features-heading">
      <div className="container-x">
        <SectionHeader
          id="features-heading"
          eyebrow="Why students choose EDUING"
          title={['One Profile. Every University. ', { text: 'Zero Repetition.', className: 'text-gradient' }]}
          subtitle="Build your academic profile once and use it to apply to hundreds of universities — without ever filling the same form twice."
        />

        <div className="mt-16 grid auto-rows-[minmax(0,auto)] gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Single profile */}
          <Tile className="md:col-span-2 lg:row-span-2">
            <TileHead icon={UserRound} title="Single profile" text="Marks, entrance scores and documents — entered once, reused for every application." />
            <div className="relative flex flex-1 flex-col justify-center rounded-[22px] bg-surface-2 p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-2 text-xl font-bold text-white ring-4 ring-gold-soft">PS</div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5 text-[17px] font-bold text-ink">Priya Singh <BadgeCheck size={17} className="text-mint" /></div>
                  <div className="text-[13px] text-ink/55">B.Tech aspirant · Lucknow</div>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {[['12th', '94.2%'], ['JEE Main', '98.1 %ile'], ['CUET', '712']].map(([l, v]) => (
                  <div key={l} className="rounded-2xl bg-surface p-3 text-center shadow-card">
                    <div className="text-[11px] text-ink/45">{l}</div>
                    <div className="font-display text-[17px] font-bold text-ink">{v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Marksheets', 'Aadhaar', 'Photo', 'Scorecards', 'Certificates'].map((d, i) => (
                  <motion.span
                    key={d}
                    initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.12, ease: EASE, duration: 0.5 }}
                    className="flex items-center gap-1.5 rounded-chip bg-surface px-3 py-1.5 text-[12.5px] font-medium text-ink/70 shadow-card"
                  >
                    <FileText size={13} className="text-brand" />{d}<Check size={13} className="text-mint" />
                  </motion.span>
                ))}
              </div>
              <div className="mt-5">
                <div className="mb-1.5 flex justify-between text-[12px]"><span className="text-ink/55">Profile complete</span><strong className="text-ink">92%</strong></div>
                <div className="h-2.5 overflow-hidden rounded-full bg-ink/10">
                  <motion.div className="h-full rounded-full bg-gradient-to-r from-brand via-brand-2 to-gold" initial={{ width: 0 }} whileInView={{ width: '92%' }} viewport={{ once: true }} transition={{ duration: 1.6, ease: EASE }} />
                </div>
              </div>
            </div>
          </Tile>

          {/* Real-time tracking */}
          <Tile delay={0.08}>
            <TileHead icon={Bell} title="Real-time tracking" text="Know the moment anything changes." />
            <ol className="mt-auto flex flex-col gap-3">
              {[['Application submitted', 'Oct 24, 10:30 AM', 'done'], ['Documents verified', 'Oct 25', 'done'], ['Under review', 'Pending decision', 'now']].map(([t, s, st], i) => (
                <motion.li key={t} initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.18, ease: EASE, duration: 0.6 }} className="flex items-center gap-3">
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${st === 'done' ? 'bg-mint text-white' : 'bg-gold text-[#17142B]'}`}>
                    {st === 'done' ? <Check size={14} /> : <span className="h-2 w-2 animate-ping rounded-full bg-[#17142B]" />}
                  </span>
                  <div className="text-[13px]"><div className="font-semibold text-ink">{t}</div><div className="text-ink/45">{s}</div></div>
                </motion.li>
              ))}
            </ol>
          </Tile>

          {/* Secure */}
          <Tile delay={0.16}>
            <TileHead icon={ShieldCheck} title="Secure verification" text="Bank-grade encryption for every document." />
            <div className="relative mx-auto mt-auto flex h-36 w-36 items-center justify-center">
              <span className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-brand/30" />
              <span className="absolute inset-4 rounded-full bg-brand-soft" />
              <motion.span
                initial={{ scale: 0.6, rotate: -20 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 180, damping: 12, delay: 0.3 }}
                className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white shadow-glow"
              >
                <Lock size={26} />
                <span className="absolute -bottom-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-surface bg-mint"><Check size={12} /></span>
              </motion.span>
            </div>
          </Tile>

          {/* AI recommendations */}
          <Tile className="md:col-span-2" delay={0.1} dark>
            <div aria-hidden className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/50 blur-3xl" />
            <TileHead dark icon={Sparkles} title="AI recommendations" text="Programs ranked by your real chance of admission — not just by rank." />
            <div className="relative mt-auto grid gap-2.5 sm:grid-cols-2">
              {[['BITS Pilani', 'Computer Science', 98], ['SRM University', 'AI & ML', 92], ['Manipal MAHE', 'Data Science', 90], ['VIT Vellore', 'Cyber Security', 87]].map(([u, p, m], i) => (
                <motion.div key={u as string} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1, ease: EASE, duration: 0.6 }} className="flex items-center gap-3 rounded-2xl bg-white/[0.07] p-3 backdrop-blur">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[10px] font-bold text-[#17142B]">{(u as string).slice(0, 4).toUpperCase()}</span>
                  <div className="flex-1 text-[13px]"><div className="font-semibold">{u}</div><div className="text-white/50">{p}</div></div>
                  <span className="rounded-chip bg-gold px-2 py-0.5 text-[11.5px] font-bold text-[#17142B]">{m}%</span>
                </motion.div>
              ))}
            </div>
          </Tile>
        </div>
      </div>
    </section>
  )
}
