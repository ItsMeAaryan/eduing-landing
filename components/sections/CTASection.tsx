'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.eduing.in'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-bg px-6 py-32 lg:py-40" aria-labelledby="cta-heading">
      {/* Subtle radial glow background */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #5B5FEF 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="mx-auto flex max-w-[900px] flex-col items-center text-center relative z-10">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/70">
            READY TO GET STARTED
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2 
          id="cta-heading"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-6 font-display text-4xl font-extrabold leading-[1.15] tracking-[-0.02em] text-white md:text-5xl lg:text-6xl"
        >
          Stop Managing Applications.<br />
          Start Managing <span className="text-[#5B5FEF]">Your Future.</span>
        </motion.h2>

        {/* Supporting text */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10 max-w-[600px] text-base leading-relaxed text-white/50"
        >
          Create one profile, discover the right programs, and manage every application from one modern workspace.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={APP_URL}
            className="flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-[15px] font-bold text-black transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(255,255,255,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Start Your Journey
          </a>
        </motion.div>

        {/* Trust Row */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px] font-medium text-white/40"
        >
          {[
            'One Profile',
            'AI Discovery',
            'Secure Documents',
            'Real-Time Tracking'
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2 transition-colors duration-200 hover:text-white/70">
              <Check size={14} className="text-[#5B5FEF]/70" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
