'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import {
  Bell, BookOpen, Building2, CalendarDays, ChevronLeft, ChevronRight, FileText, LayoutDashboard,
  MessageSquare, Plus, Search, Settings, Sparkles, Sun, Moon, Clock, MoreHorizontal, HelpCircle,
} from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

/* ── tiny illustrative tiles, echoing the playful shapes in the reference ── */
function Shapes({ v }: { v: number }) {
  const sets = [
    <g key="a"><circle cx="34" cy="34" r="20" fill="#F5B829" /><rect x="52" y="20" width="34" height="34" rx="8" fill="#4B2FC9" transform="rotate(12 69 37)" /><circle cx="70" cy="62" r="7" fill="#17142B" /></g>,
    <g key="b"><path d="M14 64 L44 14 L74 64Z" fill="#7C66F6" /><circle cx="70" cy="34" r="16" fill="#F5B829" /><rect x="22" y="44" width="22" height="22" rx="6" fill="#17142B" /></g>,
    <g key="c"><rect x="16" y="16" width="40" height="40" rx="20" fill="#4B2FC9" /><rect x="46" y="34" width="34" height="26" rx="6" fill="#F5B829" /><circle cx="30" cy="66" r="6" fill="#F46846" /></g>,
    <g key="d"><path d="M20 60 Q 46 6 76 46" stroke="#17142B" strokeWidth="9" fill="none" strokeLinecap="round" /><circle cx="26" cy="28" r="12" fill="#F5B829" /><rect x="54" y="52" width="22" height="16" rx="5" fill="#7C66F6" /></g>,
  ]
  return <svg viewBox="0 0 90 80" className="h-[72px] w-[84px]">{sets[v]}</svg>
}

function Ring({ pct, label, sub, tone }: { pct: number; label: string; sub: string; tone: string }) {
  const c = 2 * Math.PI * 22
  return (
    <div className="flex items-center gap-3 rounded-[18px] bg-surface p-3.5 shadow-card">
      <svg viewBox="0 0 56 56" className="h-14 w-14 -rotate-90">
        <circle cx="28" cy="28" r="22" fill="none" strokeWidth="6" className="stroke-ink/10" />
        <motion.circle
          cx="28" cy="28" r="22" fill="none" strokeWidth="6" strokeLinecap="round" className={tone}
          strokeDasharray={c} initial={{ strokeDashoffset: c }} whileInView={{ strokeDashoffset: c * (1 - pct / 100) }}
          viewport={{ once: true }} transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
      <div className="min-w-0">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-ink/40">{sub}</div>
        <div className="text-[14px] font-bold text-ink">{label}</div>
        <div className="text-[11px] text-ink/50">{pct}% complete</div>
      </div>
    </div>
  )
}

function Dashboard() {
  return (
    <div className="flex h-[700px] w-[1180px] gap-4 rounded-[34px] bg-canvas p-4 text-left">
      {/* sidebar */}
      <aside className="flex w-[200px] shrink-0 flex-col rounded-[26px] bg-surface p-4 shadow-card">
        <div className="mb-6 flex items-center gap-2 font-display text-[17px] font-bold text-ink">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand text-[11px] text-white">e</span>EDUING
        </div>
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-2 text-lg font-bold text-white ring-4 ring-gold-soft">AS</div>
          <div className="text-[14px] font-bold text-ink">Aarav Sharma</div>
          <div className="text-[11px] text-ink/50">Jaipur, Rajasthan</div>
        </div>
        <nav className="flex flex-col gap-1 text-[13px]">
          {[
            [LayoutDashboard, 'Dashboard', true], [Building2, 'Universities'], [FileText, 'Applications', false, '3'],
            [BookOpen, 'Documents'], [MessageSquare, 'Messages', false, '2'], [CalendarDays, 'Calendar'], [Settings, 'Settings'],
          ].map(([Icon, label, active, badge]) => {
            const I = Icon as typeof LayoutDashboard
            return (
              <div key={label as string} className={`flex items-center gap-2.5 rounded-xl px-3 py-2 ${active ? 'bg-brand-soft font-semibold text-brand' : 'text-ink/60'}`}>
                <I size={15} />{label as string}
                {badge && <span className="ml-auto rounded-full bg-gold px-1.5 text-[10px] font-bold text-[#17142B]">{badge as string}</span>}
              </div>
            )
          })}
        </nav>
        <div className="relative mt-auto overflow-hidden rounded-[20px] bg-night p-4 pt-7 text-center text-white">
          <span className="absolute left-1/2 top-0 flex h-9 w-9 -translate-x-1/2 -translate-y-1/3 items-center justify-center rounded-full border-4 border-surface bg-gold text-[#17142B]"><HelpCircle size={16} /></span>
          <div className="text-[13px] font-bold">Need guidance?</div>
          <div className="mb-3 text-[10.5px] text-white/60">Talk to an admission expert</div>
          <div className="rounded-full bg-white py-1.5 text-[11px] font-semibold text-[#17142B]">Book a call</div>
        </div>
      </aside>

      {/* main */}
      <div className="flex min-w-0 flex-1 flex-col gap-4 rounded-[26px] bg-surface-2 p-5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1 rounded-full bg-surface p-1 text-[12px] font-medium shadow-card">
            {['Engineering', 'Medical', 'Management'].map((t, i) => (
              <span key={t} className={`rounded-full px-3 py-1.5 ${i === 0 ? 'bg-ink text-canvas' : 'text-ink/50'}`}>{t}</span>
            ))}
          </div>
          <div className="flex flex-1 items-center gap-2 rounded-full bg-surface px-4 py-2 text-[12px] text-ink/40 shadow-card"><Search size={14} />Search universities, programs…</div>
          <div className="flex items-center gap-1 rounded-full bg-surface p-1 text-[11px] shadow-card">
            <span className="flex items-center gap-1 rounded-full bg-gold px-2 py-1 font-semibold text-[#17142B]"><Sun size={11} />Light</span>
            <span className="flex items-center gap-1 px-2 text-ink/50"><Moon size={11} />Dark</span>
          </div>
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-surface shadow-card"><Bell size={15} className="text-ink/70" /><span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-coral" /></span>
          <span className="rounded-full bg-brand px-4 py-2 text-[12px] font-semibold text-white">+ New application</span>
        </div>

        <div className="flex gap-4">
          <div className="flex w-[300px] shrink-0 flex-col justify-center">
            <div className="font-display text-[34px] font-bold leading-[1.05] tracking-tight text-ink">
              Hi, Aarav! 👋<br />Where do you want to <span className="text-gold">study</span> next?
            </div>
            <p className="mt-3 text-[12.5px] text-ink/50">Your profile is 92% complete — 3 universities are waiting on you.</p>
          </div>
          <div className="flex flex-1 gap-3">
            <div className="flex w-14 items-center justify-center rounded-[22px] border-2 border-dashed border-ink/10 text-ink/30"><Plus /></div>
            {[['IIT Bombay', 'Engineering'], ['NID', 'Design'], ['AIIMS', 'Medicine'], ['NLSIU', 'Law']].map(([n, s], i) => (
              <div key={n} className={`flex flex-1 flex-col items-center justify-end rounded-[22px] p-3 text-center shadow-card ${i === 3 ? 'bg-night text-white' : 'bg-surface'}`}>
                <Shapes v={i} />
                <div className={`mt-2 text-[13px] font-bold ${i === 3 ? 'text-white' : 'text-ink'}`}>{n}</div>
                <div className={`text-[10.5px] ${i === 3 ? 'text-white/50' : 'text-ink/45'}`}>{s}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid flex-1 grid-cols-[1fr_300px] gap-4">
          <div className="flex min-w-0 flex-col gap-4">
            <div className="grid grid-cols-3 gap-3">
              <Ring pct={92} label="Profile" sub="Step 1" tone="stroke-brand" />
              <Ring pct={60} label="Documents" sub="Step 2" tone="stroke-gold" />
              <Ring pct={30} label="Applications" sub="Step 3" tone="stroke-mint" />
            </div>
            <div className="flex-1 rounded-[22px] bg-surface p-4 shadow-card">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-[15px] font-bold text-ink">Your applications</div>
                <div className="flex items-center gap-2 text-[11px] text-ink/45"><span className="flex -space-x-1.5">{['bg-brand', 'bg-gold', 'bg-mint'].map((c) => <span key={c} className={`h-5 w-5 rounded-full border-2 border-surface ${c}`} />)}</span>View all</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-[18px] bg-night p-4 text-white">
                  <div className="mb-3 flex items-start justify-between">
                    <div className="text-[14px] font-bold leading-snug">VIT Chennai<br /><span className="text-[11px] font-normal text-white/55">B.Tech Computer Science</span></div>
                    <span className="rounded-full bg-gold px-2 py-0.5 text-[10px] font-bold text-[#17142B]">Offer 🎉</span>
                  </div>
                  <div className="mb-1.5 h-1.5 overflow-hidden rounded-full bg-white/15"><div className="h-full w-full rounded-full bg-gold" /></div>
                  <div className="flex justify-between text-[10.5px] text-white/50"><span>Updated 2h ago</span><span className="text-white">Accept offer →</span></div>
                </div>
                <div className="rounded-[18px] bg-brand-soft p-4">
                  <div className="mb-3 flex items-start justify-between">
                    <div className="text-[14px] font-bold leading-snug text-ink">SRM University<br /><span className="text-[11px] font-normal text-ink/55">B.Tech Information Tech</span></div>
                    <span className="rounded-full bg-surface px-2 py-0.5 text-[10px] font-semibold text-brand">Under review</span>
                  </div>
                  <div className="mb-1.5 h-1.5 overflow-hidden rounded-full bg-ink/10"><div className="h-full w-3/4 rounded-full bg-brand" /></div>
                  <div className="flex justify-between text-[10.5px] text-ink/50"><span>Updated 1d ago</span><span className="text-brand">75%</span></div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-3 rounded-[16px] border border-line/10 p-3 text-[12px]">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gold-soft text-gold"><Sparkles size={15} /></span>
                <div className="flex-1"><strong className="text-ink">Manipal MAHE</strong><span className="text-ink/50"> · AI match 91% · scholarship eligible</span></div>
                <span className="rounded-full bg-ink px-3 py-1 text-[11px] font-semibold text-canvas">Apply</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-[22px] bg-surface p-4 shadow-card">
              <div className="mb-3 flex items-center justify-between text-[14px] font-bold text-ink">May 2026<span className="flex gap-1 text-ink/40"><ChevronLeft size={15} /><ChevronRight size={15} /></span></div>
              <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-ink/40">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => <span key={i}>{d}</span>)}
                {[11, 12, 13, 14, 15, 16, 17].map((d) => (
                  <span key={d} className={`mx-auto flex h-7 w-7 items-center justify-center rounded-full text-[11.5px] font-semibold ${d === 15 ? 'bg-gold text-[#17142B]' : d === 13 ? 'bg-brand text-white' : 'text-ink/70'}`}>{d}</span>
                ))}
              </div>
              <div className="mt-3 flex flex-col gap-2 text-[11.5px]">
                {[['JEE counselling round 2', '10:30 – 12:00', 'bg-brand'], ['Ashoka interview', '4:00 PM · Online', 'bg-gold']].map(([t, s, c]) => (
                  <div key={t} className="flex items-center gap-2.5 rounded-xl bg-surface-2 p-2.5">
                    <span className={`h-8 w-1 rounded-full ${c}`} />
                    <div className="flex-1"><div className="font-semibold text-ink">{t}</div><div className="text-ink/45">{s}</div></div>
                    <MoreHorizontal size={14} className="text-ink/30" />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 rounded-[22px] bg-surface p-4 shadow-card">
              <div className="mb-2 text-[14px] font-bold text-ink">Deadline alert</div>
              <div className="rounded-xl bg-coral/10 p-3 text-[11.5px]">
                <div className="flex items-center gap-1.5 font-semibold text-coral"><Clock size={12} />2 days left</div>
                <div className="mt-1 text-ink/70">KREA University · Round 2 application closes Friday</div>
              </div>
              <div className="mt-3 flex gap-2 text-[11px] font-semibold">
                <span className="flex-1 rounded-full border border-line/15 py-1.5 text-center text-ink/70">Remind me</span>
                <span className="flex-1 rounded-full bg-brand py-1.5 text-center text-white">Finish now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Scales the fixed-size dashboard down to fit any viewport. */
function Fit({ children, w = 1180, h = 700 }: { children: React.ReactNode; w?: number; h?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [s, setS] = useState(1)
  useEffect(() => {
    const el = ref.current!
    const ro = new ResizeObserver(([e]) => setS(Math.min(1, e.contentRect.width / w)))
    ro.observe(el)
    return () => ro.disconnect()
  }, [w])
  return (
    <div ref={ref} className="w-full" style={{ height: h * s }}>
      <div style={{ width: w, height: h, transform: `scale(${s})`, transformOrigin: 'top left' }}>{children}</div>
    </div>
  )
}

export default function DashboardShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.25'] })
  const rotateX = useTransform(scrollYProgress, [0, 1], [32, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1])
  const y = useTransform(scrollYProgress, [0, 1], [60, 0])

  return (
    <section aria-labelledby="showcase-heading" className="relative pb-10 pt-16 sm:pt-24">
      <div className="container-x">
        <SectionHeader
          id="showcase-heading"
          eyebrow="Your admission HQ"
          title={['Every application, deadline and offer — ', { text: 'one calm dashboard.', className: 'text-gradient' }]}
          subtitle="Track progress, get AI-matched programs and never miss a deadline. This is what your EDUING workspace looks like."
        />
        <div ref={ref} className="mt-14" style={{ perspective: 1400 }}>
          <motion.div
            style={{ rotateX, scale, y, transformOrigin: 'center top' }}
            className="rounded-[40px] border border-line/10 bg-surface/60 p-2 shadow-lift backdrop-blur sm:p-3"
          >
            <Fit><Dashboard /></Fit>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
