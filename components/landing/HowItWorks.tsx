'use client'

import { motion } from 'framer-motion'
import { Check, CheckCircle2, FileText, Sparkles, ArrowRight } from 'lucide-react'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-bg px-6 py-24 lg:py-32 overflow-hidden" aria-labelledby="howitworks-heading">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#5B5FEF] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/70">
              How It Works
            </span>
          </div>
          <h2 id="howitworks-heading" className="mb-6 font-display text-4xl font-extrabold leading-[1.15] tracking-[-0.02em] text-white lg:text-5xl">
            One Profile.<br />
            Three Simple Steps.<br />
            <span className="text-white/40">Hundreds of Universities.</span>
          </h2>
          <p className="max-w-md text-base leading-relaxed text-white/50">
            Everything from profile creation to application tracking happens in one seamless workflow.
          </p>
        </div>

        {/* Workflow container */}
        <div className="relative flex flex-col lg:flex-row items-center lg:items-stretch lg:justify-between gap-8 lg:gap-6">
          
          {/* Connector Line (Desktop Horizontal, Mobile Vertical) */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block -translate-y-1/2 z-0" />
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent lg:hidden -translate-x-1/2 z-0" />
          
          {/* Step 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay: 0.1 }}
            viewport={{ once: true }}
            className="group relative z-10 w-full max-w-[340px] flex-1 flex-col overflow-hidden rounded-[20px] border border-white/5 bg-[#0A0A0A]/80 backdrop-blur-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.03] hover:shadow-[0_8px_32px_-8px_rgba(255,255,255,0.05)]"
          >
            <div className="mb-6">
              <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.1em] text-white/40">Step 1</div>
              <h3 className="font-display text-lg font-bold text-white">Create Your Profile</h3>
            </div>
            
            {/* UI Preview 1 */}
            <div className="flex flex-col gap-3 rounded-[12px] border border-white/5 bg-black/40 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#818CF8] to-[#5B5FEF] text-[13px] font-bold text-white">
                  JS
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[13px] font-bold text-white">John Smith</span>
                    <CheckCircle2 size={12} className="text-emerald-400" />
                  </div>
                  <div className="text-[11px] text-white/50">B.Tech Computer Science</div>
                </div>
              </div>
              
              <div className="mt-2 flex gap-2">
                <div className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-white/70">
                  <FileText size={10} /> Documents Uploaded
                </div>
              </div>

              <div className="mt-2 flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-[10px] font-semibold text-white/60">
                  <span>Profile Complete</span>
                  <span className="text-emerald-400">92%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '92%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="h-full rounded-full bg-emerald-500" 
                  />
                </div>
              </div>

              <button className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-lg bg-white px-3 py-2 text-[11px] font-bold text-black transition-opacity hover:opacity-90">
                Continue <ArrowRight size={12} />
              </button>
            </div>
          </motion.div>

          {/* Animated glowing dots connecting steps */}
          <div className="hidden lg:flex items-center justify-center z-10">
            <div className="relative h-2 w-2 rounded-full bg-white/20">
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-[#5B5FEF] blur-[4px]" 
              />
            </div>
          </div>

          {/* Step 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative z-10 w-full max-w-[340px] flex-1 flex-col overflow-hidden rounded-[20px] border border-white/5 bg-[#0A0A0A]/80 backdrop-blur-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.03] hover:shadow-[0_8px_32px_-8px_rgba(255,255,255,0.05)]"
          >
            <div className="mb-6">
              <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.1em] text-white/40">Step 2</div>
              <h3 className="font-display text-lg font-bold text-white">AI Finds Your Best Matches</h3>
            </div>

            {/* UI Preview 2 */}
            <div className="flex flex-col gap-3 rounded-[12px] border border-white/5 bg-black/40 p-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded bg-white/10">
                    <Sparkles size={10} className="text-[#F59E0B]" />
                  </div>
                  <span className="text-[11px] font-medium text-white/70">Searching... Computer Science</span>
                </div>
                <div className="relative flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.4, 0.1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute h-6 w-6 rounded-full bg-emerald-500/30 blur-sm"
                  />
                  <span className="relative z-10 text-[11px] font-bold text-emerald-400">96%</span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="text-[10px] font-semibold text-white/40 uppercase tracking-wider">Best Matches</div>
                
                <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 p-2">
                  <div className="text-[11px] font-medium text-white">Engineering</div>
                  <div className="text-[9px] font-bold text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded">Scholarship Available</div>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 p-2">
                  <div className="text-[11px] font-medium text-white">AI & ML</div>
                  <div className="text-[9px] font-bold text-[#F59E0B] bg-[#F59E0B]/10 px-1.5 py-0.5 rounded">Placement Priority</div>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 p-2">
                  <div className="text-[11px] font-medium text-white">Cyber Security</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Animated glowing dots connecting steps */}
          <div className="hidden lg:flex items-center justify-center z-10">
            <div className="relative h-2 w-2 rounded-full bg-white/20">
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-[#5B5FEF] blur-[4px]" 
              />
            </div>
          </div>

          {/* Step 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay: 0.3 }}
            viewport={{ once: true }}
            className="group relative z-10 w-full max-w-[340px] flex-1 flex-col overflow-hidden rounded-[20px] border border-white/5 bg-[#0A0A0A]/80 backdrop-blur-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.03] hover:shadow-[0_8px_32px_-8px_rgba(255,255,255,0.05)]"
          >
            <div className="mb-6">
              <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.1em] text-white/40">Step 3</div>
              <h3 className="font-display text-lg font-bold text-white">Apply Everywhere</h3>
            </div>

            {/* UI Preview 3 */}
            <div className="flex flex-col gap-3 rounded-[12px] border border-white/5 bg-black/40 p-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col rounded-lg border border-white/5 bg-white/5 p-2">
                  <span className="text-[10px] text-white/50">Applications Sent</span>
                  <span className="text-[14px] font-bold text-white">12</span>
                </div>
                <div className="flex flex-col rounded-lg border border-white/5 bg-white/5 p-2">
                  <span className="text-[10px] text-white/50">Under Review</span>
                  <span className="text-[14px] font-bold text-white">4</span>
                </div>
                <div className="flex flex-col rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-2 relative overflow-hidden">
                  <motion.div
                     animate={{ opacity: [0.1, 0.4, 0.1] }}
                     transition={{ duration: 2, repeat: Infinity }}
                     className="absolute inset-0 bg-emerald-500/10"
                  />
                  <span className="relative z-10 text-[10px] text-emerald-400">Offers Received</span>
                  <span className="relative z-10 text-[14px] font-bold text-emerald-400">2</span>
                </div>
                <div className="flex flex-col rounded-lg border border-white/5 bg-white/5 p-2">
                  <span className="text-[10px] text-white/50">Docs Verified</span>
                  <span className="text-[14px] font-bold text-white">✓</span>
                </div>
              </div>

              <div className="mt-1 flex flex-col gap-2 relative">
                <div className="absolute left-[7px] top-[10px] bottom-[10px] w-[1px] bg-white/10" />
                
                <div className="flex items-center gap-3 relative z-10">
                  <div className="h-4 w-4 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <Check size={8} className="text-emerald-400" />
                  </div>
                  <span className="text-[10px] text-white/70">Application Submitted</span>
                </div>
                <div className="flex items-center gap-3 relative z-10">
                  <div className="h-4 w-4 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <Check size={8} className="text-emerald-400" />
                  </div>
                  <span className="text-[10px] text-white/70">Documents Verified</span>
                </div>
                <div className="flex items-center gap-3 relative z-10">
                  <div className="h-4 w-4 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                    <div className="h-1.5 w-1.5 rounded-full bg-white/50" />
                  </div>
                  <span className="text-[10px] text-white/70">University Review</span>
                </div>
                <div className="flex items-center gap-3 relative z-10">
                  <div className="h-4 w-4 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  </div>
                  <span className="text-[10px] text-white/40">Offer Received</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Footer text */}
        <div className="mt-16 text-center">
          <p className="text-[13px] font-medium text-white/40">
            Students save <span className="text-white">40+ hours</span> by applying once.
          </p>
        </div>
      </div>
    </section>
  )
}
