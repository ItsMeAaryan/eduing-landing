'use client'
import { motion, useReducedMotion } from 'framer-motion'
import HeroDashboardMockup from './HeroDashboardMockup'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.eduing.in'

// Realistic mock data rendered directly in the component

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section aria-label="Hero Overview" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg px-[5%] pb-20 pt-[140px]">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Premium Blur Glow 1 */}
        <motion.div
          animate={reduceMotion ? {} : { scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15], x: [0, 40, 0], y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-[10%] top-[0%] h-[700px] w-[700px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(91,95,239,0.35) 0%, transparent 70%)' }}
        />
        {/* Premium Blur Glow 2 */}
        <motion.div
          animate={reduceMotion ? {} : { scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1], x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -right-[5%] bottom-[10%] h-[600px] w-[600px] rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.25) 0%, transparent 70%)' }}
        />
        <div
          className="absolute inset-0 [background-size:60px_60px]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)',
          }}
        />
      </div>

      <div className="relative z-10 flex w-full max-w-[1280px] flex-wrap items-center gap-[60px]">
        {/* LEFT: Text and CTAs */}
        <div className="flex w-full flex-[1_1_100%] flex-col text-left lg:flex-[1_1_500px]">
          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 font-display text-[clamp(36px,8vw,72px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-white"
          >
            Apply to India&apos;s
            <br />
            Top Universities
            <br />
            <span className="bg-gradient-to-br from-[#818CF8] via-[#5B5FEF] to-[#A78BFA] bg-clip-text text-transparent">
              In One Place
            </span>
          </motion.h1>

          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.24, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 max-w-[560px] text-[clamp(17px,1.5vw,19px)] leading-relaxed text-white/70 font-medium"
          >
            Explore universities, compare programs, submit applications, and track every step of your admission journey—all from a single account.
          </motion.p>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.24, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8"
          >
            <div className="relative flex flex-wrap gap-4 group">
              <div
                className="pointer-events-none absolute -inset-4 z-0 rounded-full bg-[#5B5FEF]/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />

              <motion.a
                href={APP_URL}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(91,95,239,0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="relative z-10 inline-flex items-center justify-center rounded-full border border-white/10 bg-white px-8 py-4 text-[15px] font-semibold text-black no-underline transition-all duration-300 hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#5B5FEF] focus-visible:outline-offset-2"
              >
                Start Application
              </motion.a>

              <motion.a
                href="#universities"
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                whileTap={{ scale: 0.98 }}
                className="relative z-10 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-[15px] font-medium text-white no-underline backdrop-blur-md transition-all duration-300 hover:border-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#5B5FEF] focus-visible:outline-offset-2"
              >
                Explore Universities
              </motion.a>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] font-medium text-white/50">
              <div className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> 500+ Universities</div>
              <div className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> One Profile</div>
              <div className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> Track Applications</div>
              <div className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> Secure Platform</div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: realistic SaaS dashboard mockup */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-12 flex w-full flex-[1_1_100%] justify-center overflow-visible lg:mt-0 lg:flex-[1_1_600px] [perspective:1000px] -mb-[160px] sm:-mb-[100px] md:-mb-[60px] lg:mb-0"
          aria-hidden="true"
        >
          <HeroDashboardMockup />
        </motion.div>
      </div>
    </section>
  )
}
