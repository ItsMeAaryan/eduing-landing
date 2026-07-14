'use client'
import { motion } from 'framer-motion'
import { User, Activity, Sparkles, ShieldCheck, CheckCircle2, FileText, Check, Lock, ArrowRight } from 'lucide-react'

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-bg px-6 py-24 lg:py-32" aria-labelledby="features-heading">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-16 lg:flex-row lg:items-start lg:gap-24">
        
        {/* Left Column (40%) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-1 flex-col items-center text-center lg:max-w-[40%] lg:items-start lg:text-left"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-lighter" />
            <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-accent-lighter">
              Why Students Choose EDUING
            </span>
          </div>

          <h2 id="features-heading" className="mb-6 font-display text-4xl font-extrabold leading-[1.15] tracking-[-0.02em] text-white lg:text-5xl">
            One Profile.<br />
            Every University.<br />
            <span className="text-white/40">Zero Repetition.</span>
          </h2>

          <p className="mb-8 max-w-md text-base leading-relaxed text-white/50">
            Build your comprehensive academic profile once, and use it to seamlessly apply to hundreds of top universities worldwide without ever filling out repetitive forms.
          </p>

          <button className="group flex items-center gap-2 rounded-full bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 hover:shadow-[0_4px_16px_rgba(255,255,255,0.05)]">
            Learn how it works 
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Right Column (60%) */}
        <div className="relative flex w-full flex-1 justify-center lg:max-w-[60%] lg:justify-end">
          {/* Background Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5B5FEF]/10 blur-[100px]" aria-hidden="true" />
          
          <div className="grid w-full max-w-[600px] grid-cols-1 gap-5 sm:grid-cols-2">
            
            {/* Column 1 - Staggered */}
            <div className="flex flex-col gap-5 sm:mt-10">
              {/* Card 1: Single Profile */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.24, delay: 0.1 }}
                viewport={{ once: true }}
                className="group relative flex flex-col overflow-hidden rounded-[24px] border border-white/5 bg-white/[0.02] p-5 shadow-sm backdrop-blur-xl transition-all duration-200 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04] hover:shadow-[0_8px_32px_-8px_rgba(255,255,255,0.05)]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-display text-[14px] font-bold text-white">Single Profile</h3>
                  <User size={16} className="text-white/30 transition-colors duration-200 group-hover:text-[#5B5FEF]" />
                </div>
                <div className="flex flex-col gap-3 rounded-[16px] border border-white/5 bg-black/20 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#818CF8] to-[#5B5FEF] text-[13px] font-bold text-white shadow-inner">
                      JS
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <div className="text-[13px] font-bold text-white">John Smith</div>
                      <div className="text-[10px] font-medium text-white/50">B.Tech Computer Science</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-[9px] font-bold text-emerald-400">
                      <CheckCircle2 size={10} /> Verified
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[9px] font-bold text-white/70">
                      <FileText size={10} /> 5 Docs
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: AI Recommendations */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.24, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative flex flex-col overflow-hidden rounded-[24px] border border-white/5 bg-white/[0.02] p-5 shadow-sm backdrop-blur-xl transition-all duration-200 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04] hover:shadow-[0_8px_32px_-8px_rgba(255,255,255,0.05)]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-display text-[14px] font-bold text-white">AI Recommendations</h3>
                  <Sparkles size={16} className="text-white/30 transition-colors duration-200 group-hover:text-[#F59E0B]" />
                </div>
                <div className="flex flex-col gap-2 rounded-[16px] border border-white/5 bg-black/20 p-3">
                  <div className="flex items-center justify-between rounded-[12px] border border-white/5 bg-white/5 p-2.5 transition-colors duration-200 group-hover:bg-white/10">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-[9px] font-extrabold text-[#1d4ed8]">BITS</div>
                      <div className="text-[11px] font-bold text-white">BITS Pilani</div>
                    </div>
                    <div className="flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-bold text-emerald-400">
                      98% Match
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded-[12px] border border-white/5 bg-white/5 p-2.5 transition-colors duration-200 group-hover:bg-white/10">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-[9px] font-extrabold text-[#b91c1c]">SRM</div>
                      <div className="text-[11px] font-bold text-white">SRM University</div>
                    </div>
                    <div className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-bold text-emerald-400/80">
                      92% Match
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-5 sm:mt-0">
              {/* Card 3: Real-Time Tracking */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.24, delay: 0.15 }}
                viewport={{ once: true }}
                className="group relative flex flex-col overflow-hidden rounded-[24px] border border-white/5 bg-white/[0.02] p-5 shadow-sm backdrop-blur-xl transition-all duration-200 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04] hover:shadow-[0_8px_32px_-8px_rgba(255,255,255,0.05)]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-display text-[14px] font-bold text-white">Real-Time Tracking</h3>
                  <Activity size={16} className="text-white/30 transition-colors duration-200 group-hover:text-emerald-400" />
                </div>
                <div className="relative flex flex-col gap-4 rounded-[16px] border border-white/5 bg-black/20 p-5">
                  <div className="absolute bottom-6 left-[29px] top-6 w-[2px] bg-white/10" />
                  
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/20 text-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.2)]">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <div className="flex flex-col">
                      <div className="text-[12px] font-bold text-white">Application Submitted</div>
                      <div className="text-[10px] text-white/40">Oct 24, 10:30 AM</div>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/20">
                      <div className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                    </div>
                    <div className="flex flex-col">
                      <div className="text-[12px] font-bold text-white">Under Review</div>
                      <div className="text-[10px] text-orange-400/80">Pending decision</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 4: Secure Verification */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.24, delay: 0.25 }}
                viewport={{ once: true }}
                className="group relative flex flex-col overflow-hidden rounded-[24px] border border-white/5 bg-white/[0.02] p-5 shadow-sm backdrop-blur-xl transition-all duration-200 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04] hover:shadow-[0_8px_32px_-8px_rgba(255,255,255,0.05)]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-display text-[14px] font-bold text-white">Secure Verification</h3>
                  <ShieldCheck size={16} className="text-white/30 transition-colors duration-200 group-hover:text-cyan-400" />
                </div>
                <div className="flex flex-1 flex-col items-center justify-center gap-4 rounded-[16px] border border-white/5 bg-black/20 p-6 py-8">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 shadow-[0_0_16px_rgba(6,182,212,0.15)] transition-transform duration-200 group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(6,182,212,0.25)]">
                    <Lock size={24} className="text-cyan-400" />
                    <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-[#16161A]">
                      <Check size={12} className="text-emerald-400" strokeWidth={3} />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-[13px] font-bold text-white">End-to-End Encrypted</div>
                    <div className="mt-1 text-[11px] text-white/50">Bank-grade data security</div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
