'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import Image from 'next/image'
import WordReveal from '@/components/ui/WordReveal'
import Reveal from '@/components/ui/Reveal'
import { APP_URL } from '@/lib/links'

export default function CTASection() {
  return (
    <section className="section" aria-labelledby="cta-heading">
      <div className="container-x">
        <div className="card-night grain relative isolate overflow-hidden px-6 py-20 text-center sm:px-12 sm:py-28">
          <motion.div aria-hidden className="absolute -left-32 -top-32 -z-10 h-[460px] w-[460px] rounded-full bg-brand/70 blur-[110px]"
            animate={{ x: [0, 80, 0], y: [0, 40, 0] }} transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div aria-hidden className="absolute -bottom-40 -right-24 -z-10 h-[420px] w-[420px] rounded-full bg-gold/40 blur-[110px]"
            animate={{ x: [0, -70, 0], y: [0, -50, 0] }} transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }} />
          <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

          <motion.div
            initial={{ y: 20, opacity: 0, rotate: -10 }} whileInView={{ y: 0, opacity: 1, rotate: 0 }} viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 12 }}
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-[26px] bg-white shadow-glow"
          >
            <Image src="/eduing-logo.png" alt="" width={52} height={54} className="animate-float" />
          </motion.div>

          <Reveal><span className="inline-flex items-center gap-2 rounded-chip bg-white/10 px-3.5 py-1.5 text-[12px] font-semibold text-white/80"><span className="h-1.5 w-1.5 rounded-full bg-gold" />Ready to get started</span></Reveal>
          <WordReveal
            id="cta-heading"
            className="mx-auto mt-6 max-w-[18ch] text-display font-bold text-white"
            parts={['Stop managing applications.\nStart managing ', { text: 'your future.', className: 'text-gold' }]}
          />
          <Reveal delay={0.15}><p className="mx-auto mt-6 max-w-[52ch] text-[17px] leading-relaxed text-white/60">Create one profile, discover the right programs, and manage every application from one modern workspace.</p></Reveal>

          <Reveal delay={0.2} className="mt-10 flex justify-center">
            <a href={APP_URL} className="btn group bg-white !px-8 !py-4 text-[#17142B] hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(245,184,41,0.6)]">
              Start Your Journey
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white transition-transform duration-300 group-hover:translate-x-1"><ArrowRight size={15} /></span>
            </a>
          </Reveal>

          <Reveal delay={0.25} className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13.5px] font-medium text-white/55">
            {['One Profile', 'AI Discovery', 'Secure Documents', 'Real-Time Tracking'].map((t) => (
              <span key={t} className="flex items-center gap-1.5"><Check size={15} className="text-gold" />{t}</span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
