'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Bell, Calendar, Sparkles, Activity } from 'lucide-react'

const features = [
  'Live status updates',
  'Deadline reminders',
  'Missing document alerts',
  'Offer tracking',
  'AI-powered notifications',
  'Centralized application timeline'
]

export default function ApplicationTrackingSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 lg:pb-32" id="application-tracking" aria-labelledby="tracking-heading">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-16 md:flex-row md:items-center lg:gap-16">
        
        {/* LEFT COLUMN */}
        <div className="flex w-full flex-col md:w-2/5 lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line/10 bg-surface-2 px-3 py-1 self-start"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-ink/70">
              APPLICATION TRACKING
            </span>
          </motion.div>

          <motion.h2 
            id="tracking-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-6 font-display text-4xl font-extrabold leading-[1.15] tracking-[-0.02em] text-ink lg:text-5xl"
          >
            Track Every Application<br />
            <span className="bg-gradient-to-br from-brand via-brand to-brand-2 bg-clip-text text-transparent">in Real Time.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-10 text-base leading-relaxed text-ink/50"
          >
            Monitor every application from submission to admission using one centralized dashboard. Never miss deadlines, document requests, interview invitations, or offer letters.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
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
        </div>

        {/* RIGHT COLUMN - Dashboard Mockup */}
        <div className="w-full flex-1 md:w-3/5 lg:w-1/2">
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
                <span className="text-[11px] font-medium tracking-wider text-ink/40">STUDENT DASHBOARD</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Bell size={14} className="text-ink/50 hover:text-ink transition-colors" />
                  <span className="absolute -top-1 -right-1 flex h-2 w-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></span>
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand text-[9px] font-bold text-white">
                  JS
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="flex flex-col gap-4 p-5 bg-surface shadow-card">
              
              {/* AI Notification Card */}
              <div className="group flex flex-col rounded-xl border border-brand/20 bg-gradient-to-b from-brand/10 to-transparent p-4 transition-all duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_4px_20px_-4px_rgba(91,95,239,0.15)]">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand/20 text-brand">
                    <Sparkles size={16} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[12px] font-bold text-ink">Action Required: BITS Pilani</h4>
                    <p className="text-[11px] text-ink/60 mt-0.5">Please upload your 12th-grade transcript by Oct 28 to complete the application process.</p>
                  </div>
                </div>
              </div>

              {/* Main tracking list */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-[12px] font-bold text-ink">Active Applications</h4>
                  <span className="text-[10px] text-ink/40 font-medium">4 Total</span>
                </div>
                
                {/* Application Items */}
                <div className="group relative flex flex-col overflow-hidden rounded-xl border border-mint/20 bg-mint/[0.03] p-3 transition-all duration-200 hover:-translate-y-1 hover:border-mint/30 hover:bg-mint/[0.05]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded bg-ink text-[8px] font-extrabold text-canvas">VIT</div>
                      <span className="text-[12px] font-bold text-ink">VIT Chennai</span>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full border border-mint/20 bg-mint/10 px-2 py-0.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulse" />
                      <span className="text-[9px] font-bold text-mint">Offer Received</span>
                    </div>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1, delay: 0.1 }} className="h-full rounded-full bg-mint" />
                  </div>
                </div>

                <div className="group relative flex flex-col overflow-hidden rounded-xl border border-line/[0.08] bg-white/[0.02] p-3 transition-all duration-200 hover:-translate-y-1 hover:border-line/10 hover:bg-white/[0.04]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded bg-ink text-[8px] font-extrabold text-canvas">SRM</div>
                      <span className="text-[12px] font-bold text-ink">SRM University</span>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full border border-coral/20 bg-coral/10 px-2 py-0.5">
                      <span className="text-[9px] font-bold text-coral">Under Review</span>
                    </div>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '75%' }} transition={{ duration: 1, delay: 0.2 }} className="h-full rounded-full bg-coral" />
                  </div>
                </div>

                <div className="group relative flex flex-col overflow-hidden rounded-xl border border-yellow-500/20 bg-yellow-500/[0.03] p-3 transition-all duration-200 hover:-translate-y-1 hover:border-yellow-500/30 hover:bg-yellow-500/[0.05]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded bg-ink text-[8px] font-extrabold text-canvas">BITS</div>
                      <span className="text-[12px] font-bold text-ink">BITS Pilani</span>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-2 py-0.5">
                      <span className="text-[9px] font-bold text-amber-600 dark:text-gold">Documents Pending</span>
                    </div>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '50%' }} transition={{ duration: 1, delay: 0.3 }} className="h-full rounded-full bg-yellow-500" />
                  </div>
                </div>

                <div className="group relative flex flex-col overflow-hidden rounded-xl border border-line/[0.08] bg-white/[0.02] p-3 transition-all duration-200 hover:-translate-y-1 hover:border-line/10 hover:bg-white/[0.04]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded bg-ink text-[8px] font-extrabold text-canvas">MU</div>
                      <span className="text-[12px] font-bold text-ink">Manipal University</span>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-2 py-0.5">
                      <span className="text-[9px] font-bold text-blue-600 dark:text-blue-400">App Submitted</span>
                    </div>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '25%' }} transition={{ duration: 1, delay: 0.4 }} className="h-full rounded-full bg-blue-500" />
                  </div>
                </div>

              </div>
              
              {/* Small widgets row */}
              <div className="grid grid-cols-2 gap-3 mt-1">
                <div className="flex items-center gap-3 rounded-xl border border-line/[0.08] bg-white/[0.02] p-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                    <Calendar size={14} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-ink/50">Next Deadline</span>
                    <span className="text-[11px] font-bold text-ink">Oct 28 (BITS)</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-line/[0.08] bg-white/[0.02] p-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-mint/10 text-mint">
                    <Activity size={14} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-ink/50">Success Rate</span>
                    <span className="text-[11px] font-bold text-ink">High</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
