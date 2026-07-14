'use client'

import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, Clock, Database, LayoutDashboard, Search, ShieldCheck, Sparkles, XCircle, FileText, UserCircle } from 'lucide-react'

export default function TestimonialsSection() {
  return (
    <section className="relative bg-bg px-6 py-24 lg:py-32 overflow-hidden" id="comparison" aria-labelledby="comparison-heading">
      <div className="mx-auto max-w-[1200px]">
        
        {/* Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
            <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/70">
              WHY STUDENTS SWITCH
            </span>
          </div>
          <h2 id="comparison-heading" className="mb-6 font-display text-4xl font-extrabold leading-[1.15] tracking-[-0.02em] text-white lg:text-5xl">
            Stop Repeating Applications.<br />
            <span className="text-white/40">Start Applying Smarter.</span>
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-white/50">
            Traditional admissions require repeating the same process across every university. EDUING lets you create one profile and manage everything from a single workspace.
          </p>
        </div>

        {/* Comparison Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-12">
          
          {/* Left: Traditional Process */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22 }}
            viewport={{ once: true }}
            className="group relative flex flex-col overflow-hidden rounded-[24px] border border-white/5 bg-[#0A0A0A] p-8 transition-all duration-200 hover:-translate-y-1 hover:border-white/10"
          >
            <div className="mb-8 flex items-center justify-between">
              <h3 className="font-display text-xl font-bold text-white/60">Traditional Admissions</h3>
              <div className="flex items-center gap-1.5 rounded-full border border-red-500/10 bg-red-500/5 px-2.5 py-1 text-[10px] font-medium text-red-400/80">
                <Clock size={12} /> Time Consuming
              </div>
            </div>

            <div className="relative flex flex-col gap-0 pl-4">
              {/* Vertical connector line */}
              <div className="absolute bottom-6 left-[23px] top-4 w-[1px] bg-white/5 group-hover:bg-white/10 transition-colors duration-200" />
              
              {/* Items */}
              {[
                { label: 'Fill Same Details Again', icon: FileText, warning: false },
                { label: 'Upload Documents Again', icon: Database, warning: false },
                { label: 'Track Applications Separately', icon: LayoutDashboard, warning: false },
                { label: 'Miss Deadlines', icon: AlertCircle, warning: true },
                { label: 'No Central Dashboard', icon: XCircle, warning: true },
                { label: 'Multiple Logins', icon: UserCircle, warning: false }
              ].map((item, i) => (
                <div key={i} className="relative z-10 flex items-start gap-4 pb-8 last:pb-0 group/item">
                  <div className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border bg-black transition-colors duration-200 ${item.warning ? 'border-red-500/20 text-red-400' : 'border-white/10 text-white/30'}`}>
                    <div className={`h-1.5 w-1.5 rounded-full transition-colors duration-200 ${item.warning ? 'bg-red-500/50 group-hover/item:bg-red-400' : 'bg-white/20 group-hover/item:bg-white/40'}`} />
                  </div>
                  <div className="mt-[-2px] flex items-center gap-3">
                    <item.icon size={16} className={`transition-colors duration-200 ${item.warning ? 'text-red-400/50 group-hover/item:text-red-400/80' : 'text-white/30 group-hover/item:text-white/50'}`} />
                    <span className={`text-[14px] transition-colors duration-200 ${item.warning ? 'text-red-100/60 group-hover/item:text-red-100/90' : 'text-white/40 group-hover/item:text-white/70'}`}>
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: With EDUING */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay: 0.1 }}
            viewport={{ once: true }}
            className="group relative flex flex-col overflow-hidden rounded-[24px] border border-emerald-500/10 bg-gradient-to-b from-emerald-500/[0.03] to-[#0A0A0A] p-8 transition-all duration-200 hover:-translate-y-1 hover:border-emerald-500/20 hover:shadow-[0_8px_32px_-8px_rgba(16,185,129,0.1)]"
          >
            <div className="mb-8 flex items-center justify-between">
              <h3 className="font-display text-xl font-bold text-white">With EDUING</h3>
              <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold text-emerald-400">
                <Sparkles size={12} /> Smart Workflow
              </div>
            </div>

            <div className="relative flex flex-col gap-0 pl-4">
              {/* Vertical connector line */}
              <div className="absolute bottom-6 left-[23px] top-4 w-[1px] bg-emerald-500/20 group-hover:bg-emerald-500/40 transition-colors duration-200 group-hover:shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              
              {/* Items */}
              {[
                { label: 'One Profile', icon: UserCircle },
                { label: 'Documents Stored Once', icon: Database },
                { label: 'AI Program Discovery', icon: Search },
                { label: 'Track Everything', icon: LayoutDashboard },
                { label: 'Real-Time Updates', icon: Clock },
                { label: 'One Dashboard', icon: LayoutDashboard }
              ].map((item, i) => (
                <div key={i} className="relative z-10 flex items-start gap-4 pb-8 last:pb-0 group/item">
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-black transition-all duration-200 group-hover/item:border-emerald-400 group-hover/item:shadow-[0_0_8px_rgba(16,185,129,0.4)]">
                    <CheckCircle2 size={10} className="text-emerald-400" />
                  </div>
                  <div className="mt-[-2px] flex items-center gap-3">
                    <item.icon size={16} className="text-emerald-400/80 transition-colors duration-200 group-hover/item:text-emerald-400" />
                    <span className="text-[14px] font-medium text-white transition-colors duration-200 group-hover/item:text-white">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom Metrics */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            { label: 'One Profile', desc: 'Create once, use everywhere', icon: UserCircle },
            { label: 'Unlimited Applications', desc: 'Apply without limits', icon: FileText },
            { label: 'AI Recommendations', desc: 'Smart program matching', icon: Sparkles },
            { label: 'Documents Stored Securely', desc: 'Bank-grade security', icon: ShieldCheck }
          ].map((metric, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2 + i * 0.05 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center justify-center rounded-[16px] border border-white/5 bg-[#0A0A0A] p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:bg-white/[0.02]"
            >
              <metric.icon size={20} className="mb-3 text-white/30 group-hover:text-emerald-400 transition-colors duration-200" />
              <div className="text-[13px] font-bold text-white">{metric.label}</div>
              <div className="mt-1 text-[11px] text-white/40">{metric.desc}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
