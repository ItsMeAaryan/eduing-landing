'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, Sparkles, TrendingUp, IndianRupee, Award, Briefcase, GraduationCap, MapPin, Building2 } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import Reveal from '@/components/ui/Reveal'
import TiltCard from '@/components/ui/TiltCard'

type Program = {
  name: string; count: number; avg: string; high: string; recruiters: string
  fees: [string, string, string]; outcomes: string[]; top: { uni: string; match: number }[]
}

const DATA: Record<string, Program[]> = {
  Engineering: [
    { name: 'Computer Science', count: 128, avg: '₹8.5 LPA', high: '₹42 LPA', recruiters: '150+', fees: ['₹1.2L', '₹3.5L', '₹8.0L'], outcomes: ['Software Engineer', 'AI Engineer', 'Data Scientist', 'Cloud Engineer'], top: [{ uni: 'BITS Pilani', match: 96 }, { uni: 'VIT Vellore', match: 93 }, { uni: 'Manipal MAHE', match: 91 }] },
    { name: 'AI & Machine Learning', count: 64, avg: '₹9.2 LPA', high: '₹48 LPA', recruiters: '90+', fees: ['₹1.5L', '₹3.9L', '₹9.0L'], outcomes: ['ML Engineer', 'Research Engineer', 'Data Scientist'], top: [{ uni: 'IIIT Hyderabad', match: 94 }, { uni: 'SRM', match: 90 }, { uni: 'Amity', match: 86 }] },
    { name: 'Electronics & Communication', count: 96, avg: '₹6.8 LPA', high: '₹30 LPA', recruiters: '110+', fees: ['₹1.0L', '₹2.9L', '₹7.2L'], outcomes: ['VLSI Engineer', 'Embedded Developer', 'Network Engineer'], top: [{ uni: 'NIT Trichy', match: 92 }, { uni: 'Jadavpur', match: 89 }, { uni: 'Anna University', match: 87 }] },
  ],
  MBA: [
    { name: 'MBA — Finance', count: 84, avg: '₹11 LPA', high: '₹34 LPA', recruiters: '120+', fees: ['₹2.5L', '₹9.0L', '₹24L'], outcomes: ['Investment Analyst', 'Product Manager', 'Consultant'], top: [{ uni: 'NMIMS', match: 93 }, { uni: 'Symbiosis', match: 91 }, { uni: 'Christ', match: 85 }] },
  ],
  Medical: [
    { name: 'MBBS', count: 72, avg: '₹10 LPA', high: '₹25 LPA', recruiters: '300+ hospitals', fees: ['₹0.6L', '₹6.5L', '₹18L'], outcomes: ['Physician', 'Surgeon', 'Researcher'], top: [{ uni: 'BHU', match: 92 }, { uni: 'Manipal MAHE', match: 90 }, { uni: 'Amity', match: 82 }] },
  ],
  Law: [
    { name: 'BA LLB (Hons.)', count: 41, avg: '₹7.5 LPA', high: '₹18 LPA', recruiters: '70+', fees: ['₹1.6L', '₹3.2L', '₹6.0L'], outcomes: ['Corporate Lawyer', 'Litigator', 'Legal Analyst'], top: [{ uni: 'Symbiosis', match: 94 }, { uni: 'Christ', match: 88 }, { uni: 'Jadavpur', match: 86 }] },
  ],
  Design: [
    { name: 'B.Des — UX & Interaction', count: 36, avg: '₹7.0 LPA', high: '₹22 LPA', recruiters: '60+', fees: ['₹2.0L', '₹4.1L', '₹7.5L'], outcomes: ['UX Designer', 'Product Designer', 'UX Researcher'], top: [{ uni: 'MIT ID Pune', match: 91 }, { uni: 'Symbiosis', match: 89 }, { uni: 'Amity', match: 84 }] },
  ],
  Commerce: [
    { name: 'B.Com (Hons.)', count: 110, avg: '₹5.2 LPA', high: '₹14 LPA', recruiters: '95+', fees: ['₹0.4L', '₹1.4L', '₹3.8L'], outcomes: ['Chartered Accountant', 'Financial Analyst', 'Auditor'], top: [{ uni: 'Christ', match: 95 }, { uni: 'NMIMS', match: 90 }, { uni: 'LPU', match: 85 }] },
  ],
}
const categories = Object.keys(DATA)
const filters = [
  { label: 'High placement', icon: TrendingUp }, { label: 'Low fees', icon: IndianRupee },
  { label: 'NIRF top 100', icon: Award }, { label: 'Scholarships', icon: GraduationCap },
  { label: 'Hostel', icon: Building2 }, { label: 'Near me', icon: MapPin },
]

export default function UniversitySection() {
  const [cat, setCat] = useState('Engineering')
  const [query, setQuery] = useState('Computer Science')
  const [active, setActive] = useState<string[]>(['High placement', 'Scholarships'])

  const program = useMemo(() => {
    const list = DATA[cat]
    const q = query.trim().toLowerCase()
    return list.find((p) => q && p.name.toLowerCase().includes(q)) ?? list[0]
  }, [cat, query])

  return (
    <section className="section relative overflow-hidden" id="universities" aria-labelledby="discovery-heading">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-8">
          <SectionHeader
            align="left"
            id="discovery-heading"
            eyebrow="AI program discovery"
            title={['Discover Your Perfect Program, ', { text: 'Powered by AI.', className: 'text-gradient' }]}
            subtitle="Search thousands of academic programs, compare universities, analyze placements, fees and scholarships — and get AI-powered recommendations from one place."
          />

          <Reveal delay={0.1} className="flex flex-col gap-5">
            <label className="group flex items-center gap-3 rounded-chip border border-line/10 bg-surface px-5 py-2 shadow-card transition focus-within:border-brand/50 focus-within:shadow-glow">
              <Search size={18} className="text-ink/40 transition group-focus-within:text-brand" />
              <input
                type="text"
                aria-label="Search academic programs"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Try “AI”, “Finance”, “UX”…"
                className="w-full bg-transparent py-2 text-[15px] text-ink outline-none placeholder:text-ink/35"
              />
              <span className="hidden items-center gap-1 rounded-chip bg-brand-soft px-3 py-1.5 text-[12px] font-semibold text-brand sm:flex"><Sparkles size={13} />AI</span>
            </label>

            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Program categories">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  role="tab"
                  aria-selected={cat === c}
                  onClick={() => { setCat(c); setQuery('') }}
                  className={`relative rounded-chip px-4 py-2 text-[14px] font-semibold transition-colors ${cat === c ? 'text-canvas' : 'bg-surface text-ink/65 shadow-card hover:text-ink'}`}
                >
                  {cat === c && <motion.span layoutId="cat-pill" className="absolute inset-0 -z-0 rounded-chip bg-ink" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
                  <span className="relative">{c}</span>
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map(({ label, icon: Icon }) => {
                const on = active.includes(label)
                return (
                  <button
                    key={label}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setActive((a) => (on ? a.filter((x) => x !== label) : [...a, label]))}
                    className={`chip transition ${on ? '!border-brand/40 !bg-brand-soft !text-brand' : 'hover:border-line/25'}`}
                  >
                    <Icon size={14} />{label}
                  </button>
                )
              })}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <TiltCard max={5} className="rounded-card">
            <div className="card relative overflow-hidden p-5 sm:p-7">
              <div aria-hidden className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gold/25 blur-3xl" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={program.name}
                  initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex flex-col gap-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="text-[12px] font-semibold uppercase tracking-wider text-ink/45">{cat}</div>
                      <div className="font-display text-[26px] font-bold tracking-tight text-ink">{program.name}</div>
                      <div className="text-[13px] text-ink/55">{program.count} programs found</div>
                    </div>
                    <span className="flex items-center gap-1.5 rounded-chip bg-mint/10 px-3 py-1.5 text-[12.5px] font-semibold text-mint"><Sparkles size={13} />Excellent match</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5">
                    {[['Average', program.avg, 'bg-brand-soft text-brand'], ['Highest', program.high, 'bg-gold-soft text-[#9A6B00] dark:text-gold'], ['Recruiters', program.recruiters, 'bg-surface-2 text-ink']].map(([l, v, c]) => (
                      <div key={l} className={`rounded-tile p-3.5 ${c}`}>
                        <div className="text-[11px] font-semibold uppercase tracking-wider opacity-70">{l}</div>
                        <div className="mt-1 font-display text-[18px] font-bold sm:text-[22px]">{v}</div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-tile bg-night p-4 text-white">
                    <div className="mb-3 flex items-center justify-between text-[13px]"><span className="font-semibold">Top AI matches for you</span><span className="text-white/50">based on your profile</span></div>
                    <div className="flex flex-col gap-2.5">
                      {program.top.map((t, i) => (
                        <div key={t.uni} className="flex items-center gap-3 text-[13px]">
                          <span className="w-5 text-white/40">{i + 1}</span>
                          <span className="flex-1 font-semibold">{t.uni}</span>
                          <div className="h-1.5 w-24 overflow-hidden rounded-full bg-white/10 sm:w-36">
                            <motion.div className="h-full rounded-full bg-gradient-to-r from-brand-2 to-gold" initial={{ width: 0 }} animate={{ width: `${t.match}%` }} transition={{ duration: 1, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }} />
                          </div>
                          <span className="w-10 text-right font-bold text-gold">{t.match}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <div className="mb-2 flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-ink/45"><Briefcase size={13} />Career outcomes</div>
                      <div className="flex flex-wrap gap-1.5">{program.outcomes.map((o) => <span key={o} className="rounded-chip bg-surface-2 px-2.5 py-1 text-[12px] font-medium text-ink/70">{o}</span>)}</div>
                    </div>
                    <div>
                      <div className="mb-2 flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-ink/45"><IndianRupee size={13} />Fees per year</div>
                      <div className="flex gap-2 text-[12px]">
                        {['Lowest', 'Avg', 'Highest'].map((l, i) => (
                          <div key={l} className="flex-1 rounded-xl border border-line/10 p-2 text-center"><div className="text-ink/45">{l}</div><div className="font-bold text-ink">{program.fees[i]}</div></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  )
}
