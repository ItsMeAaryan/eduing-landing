'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Bell, CalendarDays, Home, MessageSquare, Plus, Search, Users, X } from 'lucide-react'
import WordReveal from '@/components/ui/WordReveal'
import Reveal from '@/components/ui/Reveal'
import { APK_URL } from '@/lib/links'

function Phone({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative w-[250px] rounded-[44px] bg-[#111] p-[9px] shadow-[0_40px_80px_-30px_rgba(23,20,43,0.6)] sm:w-[270px] ${className}`}>
      <div className="relative h-[520px] overflow-hidden rounded-[36px] bg-[#F5F3EE] sm:h-[560px]">
        <div className="absolute left-1/2 top-2.5 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-[#111]" />
        <div className="flex items-center justify-between px-6 pt-3 text-[11px] font-semibold text-[#17142B]"><span>9:41</span><span>●●● ▮</span></div>
        {children}
      </div>
    </div>
  )
}

function HomeScreen() {
  return (
    <div className="flex h-full flex-col px-4 pt-6 text-[#17142B]">
      <div className="mb-4 flex items-center justify-between">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">≡</span>
        <div className="flex gap-2"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm"><Search size={15} /></span><span className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm"><Bell size={15} /></span></div>
      </div>
      <div className="font-display text-[25px] font-semibold leading-[1.1] tracking-tight">Start your journey<br />& get admitted ✌️</div>
      <div className="mt-4 rounded-[22px] bg-white p-3">
        <div className="flex -space-x-2">{['#4B2FC9', '#F5B829', '#16A373', '#F46846'].map((c, i) => <span key={i} className="h-9 w-9 rounded-full border-2 border-white" style={{ background: c }} />)}<span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-dashed border-[#17142B]/20 bg-white text-[10px] font-bold">12+</span></div>
        <div className="mt-3 flex items-center justify-between rounded-full bg-[#17142B] py-2 pl-3 pr-2 text-[11px] text-white">You have 3 deadlines this week<X size={13} className="text-white/60" /></div>
      </div>
      <div className="mt-4 flex items-center justify-between text-[14px] font-semibold">Applications<span className="text-[11px] font-normal text-[#17142B]/50">See all ›</span></div>
      <div className="mt-2 rounded-[22px] bg-white p-3.5">
        <div className="text-[14px] font-semibold">BITS Pilani · CS</div>
        <div className="mt-0.5 text-[11px] text-[#17142B]/50">Documents verified, waiting for review…</div>
        <div className="mt-3 flex items-center justify-between text-[10px] text-[#17142B]/50"><span>Progress</span><span>65%</span></div>
        <div className="mt-1 h-2 overflow-hidden rounded-full bg-[#17142B]/10"><div className="h-full w-[65%] rounded-full bg-[#4B2FC9]" /></div>
      </div>
      <div className="mt-auto mb-3 flex items-center justify-between rounded-[26px] bg-white px-4 py-2 text-[9px] text-[#17142B]/50">
        <span className="flex flex-col items-center text-[#4B2FC9]"><Home size={16} />Home</span>
        <span className="flex flex-col items-center"><MessageSquare size={16} />Chat</span>
        <span className="-mt-7 flex h-12 w-12 items-center justify-center rounded-full bg-[#F5B829] text-[#17142B] shadow-lg"><Plus size={20} /></span>
        <span className="flex flex-col items-center"><CalendarDays size={16} />Dates</span>
        <span className="flex flex-col items-center"><Users size={16} />Mentors</span>
      </div>
    </div>
  )
}

function StatsScreen() {
  const bars = [[2, 5], [3, 5], [1, 4], [3, 5], [5, 6], [3, 7]]
  return (
    <div className="flex h-full flex-col px-4 pt-6 text-[#17142B]">
      <div className="mb-3 flex items-center justify-between"><span className="text-[20px]">←</span><span className="rounded-full bg-white px-3 py-1 text-[11px] shadow-sm">May 26 ▾</span></div>
      <div className="font-display text-[28px] font-semibold tracking-tight">Progress</div>
      <div className="mt-2 inline-flex w-max items-center gap-2 rounded-full bg-white px-3 py-1.5"><b className="text-[20px]">72%</b><span className="text-[10px] leading-tight text-[#17142B]/50">profile<br />strength</span></div>
      <div className="mt-4 grid grid-cols-6 items-end gap-1.5">
        {bars.map(([a, b], i) => (
          <div key={i} className="flex flex-col gap-1">
            {Array.from({ length: 4 }).map((_, k) => (
              <span key={k} className={`h-7 rounded-lg text-center text-[8px] leading-7 ${k < Math.round((a / b) * 4) ? (i === 4 ? 'bg-[#4B2FC9] text-white' : 'bg-[#C9C0FF]') : 'bg-[#17142B]/5'}`}>{k === 3 && `${a}/${b}`}</span>
            ))}
            <span className="text-center text-[8px] text-[#17142B]/50">{['M', 'T', 'W', 'T', 'F', 'S'][i]}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-[22px] bg-[#7C66F6] p-3.5 text-white">
        <div className="mb-2 flex items-center gap-2 text-[10px]"><span className="rounded-full border border-white/40 px-2 py-0.5">Ongoing</span><span className="ml-auto text-white/70">VIT · Round 1</span></div>
        <div className="text-[14px] font-semibold">Upload 12th marksheet</div>
        <div className="mt-2 h-1.5 rounded-full bg-white/25"><div className="h-full w-1/2 rounded-full bg-white" /></div>
      </div>
      <div className="mt-2 rounded-[22px] bg-[#17142B] p-3.5 text-white">
        <div className="mb-2 flex justify-between text-[10px] text-white/60"><span>Status</span><span>Priority</span><span>Deadline</span></div>
        <div className="flex justify-between text-[11px] font-semibold"><span>Ongoing</span><span className="rounded-full bg-[#F46846] px-2">High</span><span>12 Jun</span></div>
      </div>
    </div>
  )
}

export default function DownloadSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const r1 = useTransform(scrollYProgress, [0, 0.5, 1], [-28, -8, 6])
  const r2 = useTransform(scrollYProgress, [0, 0.5, 1], [28, 10, -6])
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -40])
  const y2 = useTransform(scrollYProgress, [0, 1], [160, -10])

  return (
    <section ref={ref} id="download" className="section overflow-hidden" aria-labelledby="download-heading">
      <div className="container-x">
        <div className="relative grid items-center gap-12 overflow-hidden rounded-card bg-gradient-to-br from-brand-soft via-surface to-gold-soft px-6 py-14 sm:px-12 lg:grid-cols-2 lg:py-0">
          <div className="relative z-10 flex flex-col items-start gap-6 lg:py-20">
            <Reveal><span className="eyebrow"><span className="eyebrow-dot" />Mobile app</span></Reveal>
            <WordReveal id="download-heading" className="text-display font-bold text-ink" parts={['Get the ', { text: 'EDUING app', className: 'text-gradient' }]} />
            <Reveal delay={0.1}><p className="max-w-[44ch] text-[17px] leading-relaxed text-ink/60">Take your university search and application journey anywhere. Manage your profile and track applications on the go.</p></Reveal>
            <Reveal delay={0.15} className="flex flex-col items-start gap-3">
              <a href={APK_URL} rel="noopener noreferrer" className="btn-dark group !rounded-2xl !px-6 !py-4">
                <svg viewBox="0 0 512 512" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 0 24 10 24 23v466c0 13 10 23 23 23 4.5 0 8.5-1.3 12-3.5L304 256 59 3.5C55.5 1.3 51.5 0 47 0zm351.7 187.6L126.4 34 325.3 234.3l73.4-46.7zM304 256l172.6 98.6c4.5 2.2 8.5 3.5 13 3.5 13 0 23-10 23-23V178c0-13-10-23-23-23-4.5 0-8.5 1.3-13 3.5L304 256z" /></svg>
                <span className="flex flex-col items-start leading-tight"><span className="text-[11px] font-medium opacity-70">Download for</span><span className="text-[17px]">Android</span></span>
              </a>
              <span className="text-[13px] text-ink/45">iOS app coming soon</span>
            </Reveal>
          </div>
          <div className="relative flex h-[440px] origin-top scale-[0.7] items-center justify-center sm:h-[640px] sm:scale-100" style={{ perspective: 1600 }}>
            <motion.div style={{ rotateY: r1, y: y1, x: '-88%' }} className="absolute left-1/2 z-10"><Phone><HomeScreen /></Phone></motion.div>
            <motion.div style={{ rotateY: r2, y: y2, x: '-8%' }} className="absolute left-1/2"><Phone><StatsScreen /></Phone></motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
