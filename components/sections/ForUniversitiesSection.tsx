'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, BarChart3, Check, ClipboardCheck, FileCheck2, LayoutDashboard, Sparkles, Users } from 'lucide-react'
import WordReveal from '@/components/ui/WordReveal'
import Reveal from '@/components/ui/Reveal'
import Counter from '@/components/ui/Counter'
import { UNI_URL } from '@/lib/links'

const EASE = [0.16, 1, 0.3, 1] as const
const features = [
  { icon: LayoutDashboard, label: 'Admission dashboard' },
  { icon: Users, label: 'Student application review' },
  { icon: Sparkles, label: 'AI candidate insights' },
  { icon: FileCheck2, label: 'Document verification' },
  { icon: BarChart3, label: 'Department analytics' },
  { icon: ClipboardCheck, label: 'Seat management' },
]

export default function ForUniversitiesSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const consoleY = useTransform(scrollYProgress, [0, 1], [80, -80])
  const orbY = useTransform(scrollYProgress, [0, 1], [-60, 120])

  return (
    <section ref={ref} id="for-universities" aria-labelledby="uni-heading" className="section">
      <div className="container-x">
        <div className="card-night grain relative overflow-hidden px-6 py-14 sm:px-12 sm:py-20">
          <motion.div aria-hidden style={{ y: orbY }} className="absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-brand/60 blur-[110px]" />
          <div aria-hidden className="absolute -bottom-32 right-0 h-[360px] w-[360px] rounded-full bg-gold/25 blur-[110px]" />

          <div className="relative grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="flex flex-col items-start gap-6">
              <Reveal><span className="inline-flex items-center gap-2 rounded-chip bg-white/10 px-3.5 py-1.5 text-[12px] font-semibold text-white/80"><span className="h-1.5 w-1.5 rounded-full bg-gold" />For universities</span></Reveal>
              <WordReveal id="uni-heading" className="text-display font-bold text-white" parts={['Built for universities, ', { text: 'not just students.', className: 'text-gold' }]} />
              <Reveal delay={0.1}><p className="max-w-[46ch] text-[17px] leading-relaxed text-white/60">Manage admissions, review applications, verify documents and gain AI-powered insights — all from one modern dashboard.</p></Reveal>
              <ul className="grid w-full gap-2.5 sm:grid-cols-2">
                {features.map(({ icon: Icon, label }, i) => (
                  <motion.li key={label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.06, ease: EASE, duration: 0.6 }}
                    className="flex items-center gap-3 rounded-2xl bg-white/[0.06] px-4 py-3 text-[14.5px] font-medium text-white/85">
                    <Icon size={17} className="text-gold" />{label}
                  </motion.li>
                ))}
              </ul>
              <Reveal delay={0.2}>
                <a href={UNI_URL} rel="noopener noreferrer" className="btn-gold group">
                  Explore the university portal <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </Reveal>
            </div>

            <motion.div style={{ y: consoleY }} className="relative">
              <div className="rounded-[26px] border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl sm:p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-coral" /><span className="h-2.5 w-2.5 rounded-full bg-gold" /><span className="h-2.5 w-2.5 rounded-full bg-mint" /><span className="ml-2 text-[12px] font-semibold uppercase tracking-wider text-white/45">Admin console</span></div>
                  <span className="flex items-center gap-1.5 rounded-chip bg-mint/15 px-2.5 py-1 text-[11px] font-semibold text-mint"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint" />Live</span>
                </div>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  {[['Admissions today', 142, ''], ['Pending reviews', 38, ''], ['Verified docs', 1204, ''], ['Seat occupancy', 86, '%']].map(([l, v, s]) => (
                    <div key={l as string} className="rounded-2xl bg-white/[0.07] p-3">
                      <div className="text-[10.5px] text-white/50">{l}</div>
                      <div className="font-display text-[24px] font-bold text-white"><Counter to={v as number} suffix={s as string} /></div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-[1.3fr_1fr]">
                  <div className="rounded-2xl bg-white/[0.07] p-4">
                    <div className="mb-3 flex items-center justify-between text-[12.5px]"><span className="flex items-center gap-1.5 font-semibold text-white"><Sparkles size={13} className="text-gold" />AI candidate insights</span><span className="text-white/40">just now</span></div>
                    {[['Computer Science', '245 highly matched', 98], ['Data Science & ML', '162 highly matched', 95], ['Electronics Eng.', '156 highly matched', 92]].map(([p, s, m], i) => (
                      <div key={p as string} className="mb-2.5 last:mb-0">
                        <div className="mb-1 flex justify-between text-[12px]"><span className="font-medium text-white">{p}</span><span className="font-bold text-gold">{m}%</span></div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-white/10"><motion.div className="h-full rounded-full bg-gradient-to-r from-brand-2 to-gold" initial={{ width: 0 }} whileInView={{ width: `${m}%` }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.2 + i * 0.12, ease: EASE }} /></div>
                        <div className="mt-0.5 text-[10.5px] text-white/40">{s}</div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-2xl bg-white/[0.07] p-4">
                    <div className="mb-3 text-[12.5px] font-semibold text-white">Applications / week</div>
                    <div className="flex h-24 items-end gap-1.5">
                      {[35, 52, 44, 70, 58, 86, 74].map((h, i) => (
                        <motion.div key={i} className={`flex-1 rounded-t-md ${i === 5 ? 'bg-gold' : 'bg-white/20'}`} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1 + i * 0.06, ease: EASE }} />
                      ))}
                    </div>
                    <div className="mt-3 flex flex-col gap-1.5 text-[11px] text-white/60">
                      {['Document verified', 'Offer letter sent', 'Fee processed'].map((a) => <span key={a} className="flex items-center gap-1.5"><Check size={12} className="text-mint" />{a}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
