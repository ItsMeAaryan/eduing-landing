'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, CheckSquare, Users, Clock, Activity, Zap } from 'lucide-react'

const features = [
  'Admission Dashboard',
  'Student Application Review',
  'AI Candidate Insights',
  'Document Verification',
  'Department Analytics',
  'Seat Management'
]

export default function ForUniversitiesSection() {
  return (
    <section className="relative overflow-hidden bg-bg px-6 py-24 lg:py-32" id="for-universities" aria-labelledby="for-universities-heading">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-16 md:flex-row md:items-center lg:gap-16">
        
        {/* LEFT COLUMN */}
        <div className="flex w-full flex-col md:w-2/5 lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 self-start"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/70">
              FOR UNIVERSITIES
            </span>
          </motion.div>

          <motion.h2 
            id="for-universities-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-6 font-display text-4xl font-extrabold leading-[1.15] tracking-[-0.02em] text-white lg:text-5xl"
          >
            Built for Universities,<br />
            <span className="text-white/40">Not Just Students.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-10 text-base leading-relaxed text-white/50"
          >
            Manage admissions, review applications, communicate with applicants, verify documents and gain AI-powered insights — all from one modern dashboard.
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
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <CheckCircle2 size={12} className="text-white/70" />
                </div>
                <span className="text-[14px] font-medium text-white/80">{feature}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a href="/universities" className="group inline-flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2.5 text-[14px] font-medium text-white transition-all duration-200 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/50">
              Learn More <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN - Dashboard Mockup */}
        <div className="w-full flex-1 md:w-3/5 lg:w-1/2">
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative flex w-full flex-col overflow-hidden rounded-[16px] border border-white/10 bg-[#0A0A0A] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-5 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-3 space-x-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>
                <div className="h-4 w-[1px] bg-white/10 mx-1" />
                <span className="text-[11px] font-medium tracking-wider text-white/40">ADMIN CONSOLE</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-bold text-emerald-400">Live</span>
                </div>
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#5B5FEF] to-[#818CF8]" />
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="flex flex-col gap-4 p-5 bg-[#050505]">
              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { label: 'Admissions Today', value: '142', icon: Activity, trend: '+12%', positive: true },
                  { label: 'Pending Reviews', value: '38', icon: Clock, trend: '-5%', positive: false },
                  { label: 'Verified Docs', value: '1,204', icon: CheckSquare, trend: '+24%', positive: true },
                  { label: 'Seat Occupancy', value: '86%', icon: Users, trend: '+2%', positive: true },
                ].map((stat, i) => (
                  <div key={i} className="group flex flex-col justify-between rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-all duration-200 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04]">
                    <div className="mb-2 flex items-center justify-between">
                      <stat.icon size={14} className="text-white/30 transition-colors group-hover:text-white/60" />
                      <span className={`text-[10px] font-bold ${stat.positive ? 'text-emerald-400/80' : 'text-red-400/80'}`}>{stat.trend}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-medium text-white/50">{stat.label}</span>
                      <span className="font-display text-[18px] font-bold text-white">{stat.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {/* AI Insights Widget */}
                <div className="group flex flex-col rounded-xl border border-[#5B5FEF]/20 bg-gradient-to-b from-[#5B5FEF]/10 to-transparent p-4 sm:col-span-2 transition-all duration-200 hover:-translate-y-1 hover:border-[#5B5FEF]/40">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Zap size={14} className="text-[#5B5FEF]" />
                      <h4 className="text-[12px] font-bold text-white">AI Candidate Insights</h4>
                    </div>
                    <span className="text-[10px] text-white/40">Updated just now</span>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    {[
                      { name: 'Computer Science', match: '98%', applicants: 245 },
                      { name: 'Data Science & ML', match: '95%', applicants: 182 },
                      { name: 'Electronics Eng.', match: '92%', applicants: 156 },
                    ].map((prog, i) => (
                      <div key={i} className="flex items-center justify-between rounded-lg border border-white/5 bg-black/40 px-3 py-2 transition-colors duration-200 hover:border-white/10 hover:bg-white/5">
                        <div className="flex flex-col">
                          <span className="text-[11px] font-bold text-white">{prog.name}</span>
                          <span className="text-[10px] text-white/40">{prog.applicants} highly matched applicants</span>
                        </div>
                        <div className="flex items-center gap-1.5 rounded-full bg-[#5B5FEF]/20 px-2 py-0.5">
                          <span className="text-[10px] font-bold text-[#818CF8]">{prog.match}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="group flex flex-col rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-200 hover:-translate-y-1 hover:border-white/15">
                  <div className="mb-4 flex items-center justify-between">
                    <h4 className="text-[12px] font-bold text-white">Recent Activity</h4>
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    {[
                      { action: 'Document Verified', time: '2m ago' },
                      { action: 'Offer Letter Sent', time: '15m ago' },
                      { action: 'New Application', time: '1h ago' },
                      { action: 'Fee Processed', time: '2h ago' },
                    ].map((activity, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="relative flex h-2 w-2 shrink-0 items-center justify-center">
                          <div className="absolute h-full w-full rounded-full bg-white/20" />
                          <div className="h-1 w-1 rounded-full bg-white/60" />
                        </div>
                        <div className="flex flex-1 items-center justify-between">
                          <span className="text-[11px] text-white/70">{activity.action}</span>
                          <span className="text-[9px] text-white/30">{activity.time}</span>
                        </div>
                      </div>
                    ))}
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
