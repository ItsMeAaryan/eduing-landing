'use client'

import { APP_URL } from '@/lib/links'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react'

const features = [
  'Compare up to 5 universities',
  'AI Match Score',
  'Placement insights',
  'Fee comparison',
  'Scholarship availability',
  'NIRF rankings',
  'Hostel availability',
  'Save comparisons'
]

const comparisonData = [
  { label: 'AI Match', type: 'match', values: ['98%', '95%', '91%'] },
  { label: 'Average Package', type: 'text', values: ['₹28 LPA', '₹12 LPA', '₹9.5 LPA'] },
  { label: 'Tuition Fees', type: 'text', values: ['₹5.5L', '₹2.3L', '₹2.0L'] },
  { label: 'Scholarships', type: 'badge', values: ['Available', 'Available', 'Limited'] },
  { label: 'Hostel', type: 'badge', values: ['Available', 'Available', 'Available'] },
  { label: 'NIRF Ranking', type: 'text', values: ['28', '11', '32'] },
  { label: 'Highest Package', type: 'text', values: ['₹60L', '₹48L', '₹52L'] },
  { label: 'Placement Rate', type: 'text', values: ['96%', '94%', '92%'] },
]

export default function UniversityComparisonSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 lg:pb-32" id="university-comparison" aria-labelledby="comparison-heading">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-16 md:flex-row md:items-center lg:gap-16">
        
        {/* LEFT COLUMN */}
        <div className="flex w-full flex-col md:w-2/5 lg:w-[45%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line/10 bg-surface-2 px-3 py-1 self-start"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-ink/70">
              UNIVERSITY COMPARISON
            </span>
          </motion.div>

          <motion.h2 
            id="comparison-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-6 font-display text-4xl font-extrabold leading-[1.15] tracking-[-0.02em] text-ink lg:text-5xl"
          >
            Compare Universities<br />
            <span className="bg-gradient-to-br from-brand via-brand to-brand-2 bg-clip-text text-transparent">Like Never Before.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-10 text-base leading-relaxed text-ink/50"
          >
            Stop opening dozens of university websites. Compare placements, tuition fees, scholarships, rankings, facilities, eligibility, and AI compatibility in one intelligent comparison workspace.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-line/10 bg-surface-2">
                  <CheckCircle2 size={12} className="text-ink/70" />
                </div>
                <span className="text-[14px] font-medium text-ink/80">{feature}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a href={APP_URL} rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-lg bg-surface-2 px-4 py-2.5 text-[14px] font-medium text-ink transition-all duration-200 hover:bg-ink/[0.06] hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/50">
              Compare Universities <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN - Dashboard Mockup */}
        <div className="w-full flex-1 md:w-3/5 lg:w-[55%] relative">
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative flex w-full flex-col overflow-hidden rounded-[16px] border border-line/10 bg-surface shadow-card shadow-lift"
          >
            {/* Top Recommendation Card (Floating overlapping or just top part of the dashboard) */}
            <div className="bg-mint/[0.03] border-b border-mint/10 p-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 h-[200px] w-[200px] rounded-full bg-mint/10 blur-[60px] pointer-events-none" />
              <div className="relative z-10 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-mint" />
                    <span className="text-[12px] font-bold text-mint">AI Recommendation</span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-mint/20 bg-mint/10 px-2 py-0.5">
                    <span className="text-[10px] font-bold text-mint">98% Match</span>
                  </div>
                </div>
                <p className="text-[12px] text-emerald-100/70 max-w-[90%] leading-relaxed">
                  Based on your profile, <strong className="text-emerald-100">BITS Pilani</strong> offers the strongest combination of:
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {['Career Outcomes', 'Placement', 'Research Opportunities', 'Scholarship Fit'].map((tag, i) => (
                    <div key={i} className="flex items-center gap-1.5 rounded bg-mint/10 px-2 py-1">
                      <CheckCircle2 size={10} className="text-mint" />
                      <span className="text-[10px] font-medium text-emerald-100/90">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="flex flex-col p-5 bg-surface shadow-card">
              
              {/* Header Row */}
              <div className="grid grid-cols-4 gap-2 mb-4 items-end">
                <div className="col-span-1 text-[11px] font-medium text-ink/40 pb-2 border-b border-line/[0.08]">
                  Compare
                </div>
                <div className="col-span-1 flex flex-col items-center gap-1.5 pb-2 border-b border-line/[0.08]">
                  <div className="flex h-7 w-7 items-center justify-center rounded bg-ink text-[9px] font-extrabold text-[#1d4ed8]">BITS</div>
                  <span className="text-[10px] font-bold text-ink text-center">BITS Pilani</span>
                </div>
                <div className="col-span-1 flex flex-col items-center gap-1.5 pb-2 border-b border-line/[0.08] opacity-70 hover:opacity-100 transition-opacity">
                  <div className="flex h-7 w-7 items-center justify-center rounded bg-ink text-[9px] font-extrabold text-canvas">VIT</div>
                  <span className="text-[10px] font-bold text-ink text-center">VIT Chennai</span>
                </div>
                <div className="col-span-1 flex flex-col items-center gap-1.5 pb-2 border-b border-line/[0.08] opacity-70 hover:opacity-100 transition-opacity">
                  <div className="flex h-7 w-7 items-center justify-center rounded bg-ink text-[9px] font-extrabold text-[#b91c1c]">SRM</div>
                  <span className="text-[10px] font-bold text-ink text-center">SRM Univ</span>
                </div>
              </div>

              {/* Data Rows */}
              <div className="flex flex-col gap-1 relative">
                {comparisonData.map((row, i) => (
                  <div key={i} className="grid grid-cols-4 gap-2 items-center py-2.5 rounded-lg hover:bg-white/[0.02] transition-colors duration-200">
                    <div className="col-span-1 text-[10px] font-medium text-ink/60 pl-2">
                      {row.label}
                    </div>
                    
                    {row.values.map((val, j) => {
                      const isHighlighted = j === 0; // BITS Pilani column is highlighted
                      return (
                        <div key={j} className="col-span-1 flex justify-center">
                          {row.type === 'match' ? (
                            <div className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold ${isHighlighted ? 'bg-mint/20 text-mint' : 'bg-surface-2 text-ink/60'}`}>
                              {val}
                            </div>
                          ) : row.type === 'badge' ? (
                            <div className={`flex items-center gap-1 rounded border px-2 py-0.5 text-[9px] font-medium ${val === 'Available' ? (isHighlighted ? 'border-mint/20 bg-mint/10 text-mint' : 'border-line/10 bg-surface-2 text-ink/70') : 'border-coral/20 bg-coral/10 text-coral'}`}>
                              {val}
                            </div>
                          ) : (
                            <span className={`text-[11px] font-medium ${isHighlighted ? 'text-ink' : 'text-ink/50'}`}>
                              {val}
                            </span>
                          )}
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Subtle overlay gradient on BITS column to highlight it */}
            <div className="absolute top-[200px] bottom-0 left-[25%] w-[25%] bg-gradient-to-b from-mint/0 via-mint/[0.02] to-mint/[0.05] pointer-events-none rounded-b-xl border-x border-mint/[0.05]" />

          </motion.div>
        </div>

      </div>
    </section>
  )
}
