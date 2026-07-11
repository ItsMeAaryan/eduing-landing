'use client'
import { motion, useReducedMotion } from 'framer-motion'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.eduing.in'

const STATS = [
  { title: 'Applied', value: '4', icon: '📝' },
  { title: 'Offers', value: '2', icon: '🎉', highlight: true },
  { title: 'Pending', value: '2', icon: '⏳' },
]

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg px-[5%] pb-20 pt-[140px]">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <motion.div
          animate={reduceMotion ? {} : { scale: [1, 1.1, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[30%] top-[30%] h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]"
          style={{ background: 'radial-gradient(circle, #5B5FEF 0%, transparent 70%)' }}
        />
        <div
          className="absolute inset-0 [background-size:80px_80px]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            maskImage: 'radial-gradient(ellipse 70% 50% at 50% 50%, black, transparent)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 50% at 50% 50%, black, transparent)',
          }}
        />
      </div>

      <div className="relative z-10 flex w-full max-w-[1280px] flex-wrap items-center gap-[60px]">
        {/* LEFT: Text and CTAs */}
        <div className="flex flex-[1_1_500px] flex-col text-left">
          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 font-display text-[clamp(48px,6vw,72px)] font-extrabold leading-[1.05] tracking-[-0.04em] text-white"
          >
            Apply to India&apos;s
            <br />
            Top Universities
            <br />
            <span className="bg-gradient-to-br from-[#818CF8] via-accent to-[#A78BFA] bg-clip-text text-transparent">
              In One Place
            </span>
          </motion.h1>

          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 max-w-[540px] text-[clamp(18px,2vw,20px)] leading-relaxed text-text-secondary"
          >
            Explore universities, compare programs, submit applications, and track every step of your admission journey—all from a single account.
          </motion.p>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex flex-wrap gap-4"
          >
            <div
              className="pointer-events-none absolute left-20 top-1/2 -z-10 h-[60px] w-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent opacity-60 blur-[40px]"
              aria-hidden="true"
            />

            <a href={APP_URL} rel="noopener noreferrer" className="no-underline">
              <motion.button
                whileHover={{ scale: 1.03, y: -2, boxShadow: '0 10px 25px rgba(91,95,239,0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full border-none bg-white px-9 py-4 text-base font-semibold text-bg transition-shadow duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-lighter focus-visible:outline-offset-2"
              >
                Start Application
              </motion.button>
            </a>

            <a href="#universities" className="no-underline">
              <motion.button
                whileHover={{ borderColor: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.05)' }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full border border-white/15 bg-transparent px-9 py-4 text-base font-medium text-white transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-lighter focus-visible:outline-offset-2"
              >
                Explore Universities
              </motion.button>
            </a>
          </motion.div>
        </div>

        {/* RIGHT: decorative mockup */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex flex-[1_1_500px] justify-center [perspective:1000px]"
          aria-hidden="true"
        >
          <motion.div
            animate={reduceMotion ? {} : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="flex w-full max-w-[600px] flex-col overflow-hidden rounded-3xl border border-white/[0.08] p-7 shadow-[0_30px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl [transform:rotateY(-5deg)_rotateX(5deg)] [transform-style:preserve-3d]"
            style={{ background: 'linear-gradient(145deg, rgba(30,30,35,0.9) 0%, rgba(15,15,20,0.9) 100%)' }}
          >
            <div className="mb-6 flex items-center justify-between border-b border-white/5 pb-5">
              <div className="flex items-center gap-3.5">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-accent to-violet" />
                <div>
                  <div className="text-[15px] font-semibold text-white">Rahul Sharma</div>
                  <div className="text-[13px] text-white/50">Profile 100% Complete</div>
                </div>
              </div>
              <div className="rounded-full bg-success/15 px-3.5 py-1.5 text-xs font-semibold text-success">
                Verified
              </div>
            </div>

            <div className="mb-5 rounded-2xl border border-white/5 bg-white/[0.03] p-5">
              <div className="mb-4 text-sm font-semibold text-white">Application Progress</div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success text-sm text-white">✓</div>
                  <div className="text-xs text-white/80">Submitted</div>
                </div>
                <div className="mx-3 mb-6 h-0.5 flex-1 rounded-full bg-success/50" />
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm text-white">⏳</div>
                  <div className="text-xs text-white/80">Review</div>
                </div>
                <div className="mx-3 mb-6 h-0.5 flex-1 rounded-full bg-white/10" />
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-white/30">🎓</div>
                  <div className="text-xs text-white/40">Admitted</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.title}
                  className={`rounded-2xl p-4 text-left ${
                    stat.highlight
                      ? 'border border-accent/30 bg-accent/10 shadow-[0_10px_20px_rgba(91,95,239,0.1)]'
                      : 'border border-white/5 bg-white/[0.03]'
                  }`}
                >
                  <div className="mb-2 text-2xl">{stat.icon}</div>
                  <div className="font-display text-2xl font-bold text-white">{stat.value}</div>
                  <div className={`text-[13px] ${stat.highlight ? 'text-accent-lighter' : 'text-white/50'}`}>
                    {stat.title}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
