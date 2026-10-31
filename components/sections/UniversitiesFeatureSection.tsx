'use client'

import { UNI_URL } from '@/lib/links'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, LayoutDashboard, FileText, CheckSquare, Sparkles, Building2, TrendingUp, Inbox } from 'lucide-react'

const features = [
  'Centralized application dashboard',
  'AI-assisted applicant screening',
  'Document verification',
  'Seat management',
  'Offer management',
  'Admission analytics',
  'Communication center',
  'Role-based access'
]

export default function UniversitiesFeatureSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 lg:pb-32" id="universities-feature" aria-labelledby="uni-heading">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-16 md:flex-row md:items-center lg:gap-16">
        
        {/* LEFT COLUMN */}
        <div className="flex w-full flex-col md:w-2/5 lg:w-[45%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-mint/20 bg-mint/10 px-3 py-1 self-start"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-mint">
              FOR UNIVERSITIES
            </span>
          </motion.div>

          <motion.h2 
            id="uni-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-6 font-display text-4xl font-extrabold leading-[1.15] tracking-[-0.02em] text-ink lg:text-5xl"
          >
            Built for Universities.<br />
            <span className="bg-gradient-to-br from-brand via-brand to-brand-2 bg-clip-text text-transparent">Not Just Students.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-10 text-base leading-relaxed text-ink/50"
          >
            EDUING is more than a student platform. Universities receive a complete admission management workspace that simplifies application review, communication, analytics, document verification, and enrollment management from one centralized dashboard.
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
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-mint/20 bg-mint/10">
                  <CheckCircle2 size={12} className="text-mint" />
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
            className="flex flex-wrap items-center gap-4"
          >
            <a href="/contact" className="group inline-flex items-center gap-2 rounded-lg bg-mint px-5 py-2.5 text-[14px] font-bold text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-200 hover:bg-mint hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500">
              Partner With EDUING <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a href={UNI_URL} rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-line/10 bg-surface-2 px-5 py-2.5 text-[14px] font-medium text-ink transition-all duration-200 hover:bg-ink/[0.06] hover:border-line/20">
              University Portal
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
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-line/[0.08] bg-white/[0.02] px-5 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-3 space-x-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-ink/10" />
                  <div className="h-2.5 w-2.5 rounded-full bg-ink/10" />
                  <div className="h-2.5 w-2.5 rounded-full bg-ink/10" />
                </div>
                <div className="h-4 w-[1px] bg-ink/[0.06] mx-1" />
                <span className="text-[11px] font-medium tracking-wider text-ink/40">EDUING FOR UNIVERSITIES</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 size={12} className="text-ink/40" />
                <span className="text-[10px] font-bold text-ink/70">VIT Admissions</span>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="flex flex-col gap-4 p-5 bg-surface shadow-card">
              
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-3">
                <div className="group flex flex-col rounded-xl border border-line/[0.08] bg-white/[0.02] p-3 transition-all duration-200 hover:-translate-y-1 hover:border-line/15 hover:bg-white/[0.04]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-medium text-ink/50">Applications</span>
                    <span className="text-[9px] font-bold text-mint bg-mint/10 px-1.5 py-0.5 rounded-full">+42 Today</span>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="font-display text-[20px] font-bold text-ink leading-none">2,184</span>
                  </div>
                </div>
                <div className="group flex flex-col rounded-xl border border-line/[0.08] bg-white/[0.02] p-3 transition-all duration-200 hover:-translate-y-1 hover:border-line/15 hover:bg-white/[0.04]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-medium text-ink/50">Verified Docs</span>
                    <FileText size={12} className="text-ink/30" />
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="font-display text-[20px] font-bold text-ink leading-none">1,862</span>
                  </div>
                </div>
                <div className="group flex flex-col rounded-xl border border-line/[0.08] bg-white/[0.02] p-3 transition-all duration-200 hover:-translate-y-1 hover:border-line/15 hover:bg-white/[0.04]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-medium text-ink/50">Enrollment</span>
                    <TrendingUp size={12} className="text-mint" />
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="font-display text-[20px] font-bold text-ink leading-none">74%</span>
                  </div>
                </div>
              </div>

              {/* Middle Section (Recent Apps + Quick Actions/Analytics) */}
              <div className="flex flex-col gap-4 lg:flex-row">
                
                {/* Recent Applications */}
                <div className="flex flex-[2] flex-col gap-3">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-[12px] font-bold text-ink">Recent Applications</h4>
                    <span className="text-[10px] text-ink/40">318 Pending</span>
                  </div>

                  <div className="group flex items-center justify-between rounded-xl border border-mint/20 bg-mint/[0.03] p-3 transition-all duration-200 hover:-translate-y-1 hover:border-mint/30 hover:bg-mint/[0.05]">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-mint to-mint text-[10px] font-bold text-white">
                        RS
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[12px] font-bold text-ink">Riya Sharma</span>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="text-[10px] text-ink/50">B.Tech CSE</span>
                          <span className="text-[10px] text-ink/30">•</span>
                          <span className="text-[10px] font-medium text-mint">95% AI Match</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center rounded-full border border-mint/20 bg-mint/10 px-2 py-0.5">
                      <span className="text-[9px] font-bold text-mint">Verified</span>
                    </div>
                  </div>

                  <div className="group flex items-center justify-between rounded-xl border border-line/[0.08] bg-white/[0.02] p-3 transition-all duration-200 hover:-translate-y-1 hover:border-line/10 hover:bg-white/[0.04]">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-coral to-coral text-[10px] font-bold text-white">
                        RM
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[12px] font-bold text-ink">Rahul Mehta</span>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="text-[10px] text-ink/50">MBA</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center rounded-full border border-coral/20 bg-coral/10 px-2 py-0.5">
                      <span className="text-[9px] font-bold text-coral">Docs Pending</span>
                    </div>
                  </div>

                  <div className="group flex items-center justify-between rounded-xl border border-line/[0.08] bg-white/[0.02] p-3 transition-all duration-200 hover:-translate-y-1 hover:border-line/10 hover:bg-white/[0.04]">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-[10px] font-bold text-white">
                        AS
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[12px] font-bold text-ink">Ananya Singh</span>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="text-[10px] text-ink/50">ECE</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-2 py-0.5">
                      <span className="text-[9px] font-bold text-blue-600 dark:text-blue-400">Interview Scheduled</span>
                    </div>
                  </div>
                </div>

                {/* Right Side Widgets (Quick Actions & Insights) */}
                <div className="flex flex-1 flex-col gap-3">
                  
                  {/* Quick Actions */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-line/[0.08] bg-white/[0.02] p-3 transition-colors hover:bg-white/[0.05] cursor-pointer">
                      <CheckSquare size={14} className="text-ink/60" />
                      <span className="text-[9px] font-bold text-ink/70">Review</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-line/[0.08] bg-white/[0.02] p-3 transition-colors hover:bg-white/[0.05] cursor-pointer">
                      <FileText size={14} className="text-ink/60" />
                      <span className="text-[9px] font-bold text-ink/70">Verify</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-line/[0.08] bg-white/[0.02] p-3 transition-colors hover:bg-white/[0.05] cursor-pointer">
                      <Inbox size={14} className="text-ink/60" />
                      <span className="text-[9px] font-bold text-ink/70">Send Offers</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-line/[0.08] bg-white/[0.02] p-3 transition-colors hover:bg-white/[0.05] cursor-pointer">
                      <LayoutDashboard size={14} className="text-ink/60" />
                      <span className="text-[9px] font-bold text-ink/70">Reports</span>
                    </div>
                  </div>

                  {/* Analytics Chart Widget */}
                  <div className="group relative flex flex-col rounded-xl border border-line/[0.08] bg-white/[0.02] p-4 transition-all duration-200 hover:-translate-y-1 hover:border-line/10">
                    <h4 className="text-[11px] font-bold text-ink mb-3">Application Trend</h4>
                    <div className="h-12 w-full flex items-end justify-between gap-1">
                      {[30, 45, 25, 60, 40, 75, 90].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className={`w-full rounded-t-sm ${i === 6 ? 'bg-mint' : 'bg-ink/[0.06] group-hover:bg-ink/10 transition-colors'}`}
                        />
                      ))}
                    </div>
                  </div>

                </div>
              </div>
              
              {/* AI Insights Widget */}
              <div className="group flex flex-col rounded-xl border border-brand/20 bg-gradient-to-b from-brand/10 to-transparent p-4 mt-1 transition-all duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_4px_20px_-4px_rgba(91,95,239,0.15)]">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={14} className="text-brand" />
                  <h4 className="text-[12px] font-bold text-ink">AI Insights</h4>
                </div>
                <ul className="flex flex-col gap-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand text-[10px] mt-0.5">●</span>
                    <span className="text-[11px] text-ink/70 leading-snug">AI detected <strong>18 high-potential</strong> applicants today.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand text-[10px] mt-0.5">●</span>
                    <span className="text-[11px] text-ink/70 leading-snug">Seat occupancy projected to reach 96%.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand text-[10px] mt-0.5">●</span>
                    <span className="text-[11px] text-ink/70 leading-snug">Scholarship allocation optimization available.</span>
                  </li>
                </ul>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
