'use client'
import { motion, useReducedMotion } from 'framer-motion'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.eduing.in'

// Realistic mock data rendered directly in the component

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg px-[5%] pb-20 pt-[140px]">
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
        <div className="flex flex-[1_1_500px] flex-col text-left">
          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 font-display text-[clamp(44px,5.5vw,72px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-white"
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
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 max-w-[560px] text-[clamp(17px,1.5vw,19px)] leading-relaxed text-white/70 font-medium"
          >
            Explore universities, compare programs, submit applications, and track every step of your admission journey—all from a single account.
          </motion.p>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="relative flex flex-wrap gap-4 group">
              <div
                className="pointer-events-none absolute -inset-4 z-0 rounded-full bg-[#5B5FEF]/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />

              <a href={APP_URL} rel="noopener noreferrer" className="no-underline relative z-10">
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(91,95,239,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-full border border-white/10 bg-white px-8 py-4 text-[15px] font-semibold text-black transition-all duration-300 hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#5B5FEF] focus-visible:outline-offset-2"
                >
                  Start Application
                </motion.button>
              </a>

              <a href="#universities" className="no-underline relative z-10">
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-[15px] font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#5B5FEF] focus-visible:outline-offset-2"
                >
                  Explore Universities
                </motion.button>
              </a>
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
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex flex-[1_1_600px] justify-center [perspective:1000px]"
          aria-hidden="true"
        >
          <motion.div
            animate={reduceMotion ? {} : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="flex w-full max-w-[720px] overflow-hidden rounded-3xl border border-white/[0.08] shadow-[0_30px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl [transform:rotateY(-5deg)_rotateX(5deg)] [transform-style:preserve-3d] min-h-[480px]"
            style={{ background: 'linear-gradient(145deg, rgba(22,22,26,0.95) 0%, rgba(15,15,20,0.95) 100%)' }}
          >
            {/* Sidebar */}
            <div className="flex w-16 flex-col items-center border-r border-white/5 bg-white/[0.01] py-5 gap-6">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#818CF8] to-[#5B5FEF] shadow-lg mb-2 flex items-center justify-center text-white text-xs font-bold">
                E
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                  {/* Dashboard */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl text-white/30 transition-colors hover:text-white hover:bg-white/5 cursor-pointer">
                  {/* Universities */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl text-white/30 transition-colors hover:text-white hover:bg-white/5 cursor-pointer">
                  {/* Applications */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl text-white/30 transition-colors hover:text-white hover:bg-white/5 cursor-pointer">
                  {/* Scholarships */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
                </div>
              </div>
              <div className="mt-auto">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 overflow-hidden text-[11px] font-semibold cursor-pointer hover:text-white transition-colors">
                  RS
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex flex-1 flex-col overflow-hidden bg-black/20">
              {/* Top Bar */}
              <div className="flex h-14 items-center justify-between border-b border-white/5 px-6">
                <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-1.5 text-[13px] text-white/40 w-64 shadow-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  Search programs...
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative text-white/40 hover:text-white transition-colors cursor-pointer">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                    <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-[#5B5FEF] -mt-0.5 -mr-0.5 shadow-[0_0_8px_rgba(91,95,239,0.8)] border border-[#16161A]" />
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="flex-1 overflow-y-auto p-6 flex gap-6">
                {/* Left Col: Recent Applications */}
                <div className="flex flex-[3] flex-col gap-4">
                  <div className="flex items-center justify-between px-1">
                    <h3 className="text-[13px] font-semibold text-white/90">Recent Applications</h3>
                    <span className="text-[11px] font-medium text-[#818CF8] hover:text-white cursor-pointer transition-colors">View All</span>
                  </div>

                  {/* Highlighted Premium Card for VIT Chennai */}
                  <motion.div 
                    className="group relative overflow-hidden rounded-xl border border-emerald-500/30 bg-gradient-to-b from-white/[0.04] to-transparent p-4 shadow-[0_8px_30px_rgba(16,185,129,0.15)] transition-all hover:border-emerald-500/50 hover:shadow-[0_8px_40px_rgba(16,185,129,0.25)] backdrop-blur-xl"
                    whileHover={{ scale: 1.01 }}
                  >
                    {/* Soft animated border effect / glow */}
                    <motion.div
                      animate={reduceMotion ? {} : { 
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
                      }}
                      transition={{ duration: 6, ease: "linear", repeat: Infinity }}
                      className="absolute inset-0 z-0 opacity-30 [background-size:200%_200%]"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.2), rgba(20,184,166,0.2), transparent)' }}
                    />
                    
                    <div className="relative z-10 flex flex-col gap-3.5">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/20 text-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] border border-emerald-500/20">
                            🎓
                          </div>
                          <div className="flex flex-col">
                            <div className="text-[14px] font-medium text-white">VIT Chennai</div>
                            <div className="text-[12px] text-white/50">B.Tech Computer Science</div>
                          </div>
                        </div>
                        
                        {/* Modern Pill */}
                        <div className="relative flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 overflow-hidden mt-0.5">
                          <motion.div
                            animate={reduceMotion ? {} : { x: ['-100%', '200%'] }}
                            transition={{ duration: 2.5, ease: "linear", repeat: Infinity, repeatDelay: 1 }}
                            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                          />
                          <motion.div 
                            animate={reduceMotion ? {} : { opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                          />
                          <span className="text-[10px] font-medium text-emerald-300">Offer Received</span>
                        </div>
                      </div>

                      {/* Secondary line & Hover Action */}
                      <div className="flex items-center justify-between pt-2.5 border-t border-white/10">
                        <div className="text-[12px] font-medium text-emerald-400/90 flex items-center gap-1.5">
                          ✨ Admission Offer Ready
                        </div>
                        <div className="text-[12px] font-semibold text-white/40 transition-colors group-hover:text-white cursor-pointer flex items-center gap-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 duration-300">
                          View Offer Letter <span className="text-sm leading-none">→</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <div className="flex flex-col gap-2.5 mt-1">
                    <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-colors hover:bg-white/[0.04]">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10 text-sm border border-orange-500/10">🏛️</div>
                        <div className="flex flex-col">
                          <div className="text-[12px] font-medium text-white">SRM University</div>
                          <div className="text-[10px] text-white/50">B.Tech Information Tech</div>
                        </div>
                      </div>
                      <div className="rounded-full bg-orange-500/10 px-2.5 py-0.5 text-[9px] font-medium text-orange-400">
                        Under Review
                      </div>
                    </div>

                    <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-colors hover:bg-white/[0.04]">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-sm border border-blue-500/10">🏫</div>
                        <div className="flex flex-col">
                          <div className="text-[12px] font-medium text-white">Manipal University</div>
                          <div className="text-[10px] text-white/50">B.Tech Software Eng</div>
                        </div>
                      </div>
                      <div className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[9px] font-medium text-blue-400">
                        Submitted
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-colors hover:bg-white/[0.04]">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-sm border border-purple-500/10">🏢</div>
                        <div className="flex flex-col">
                          <div className="text-[12px] font-medium text-white">Amity University</div>
                          <div className="text-[10px] text-white/50">B.Tech AI & ML</div>
                        </div>
                      </div>
                      <div className="rounded-full bg-white/10 px-2.5 py-0.5 text-[9px] font-medium text-white/60">
                        Docs Pending
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Col: Widgets */}
                <div className="flex flex-[2] flex-col gap-6">
                  {/* AI Recommendations Widget */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 px-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#818CF8]" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      <h3 className="text-[12px] font-semibold text-white/90">AI Recommendations</h3>
                    </div>
                    
                    <div className="group relative overflow-hidden rounded-xl border border-[#818CF8]/20 bg-[#818CF8]/[0.03] p-3.5 shadow-[0_4px_20px_rgba(129,140,248,0.05)] transition-all hover:border-[#818CF8]/40 hover:bg-[#818CF8]/[0.05]">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-sm border border-white/5 shadow-inner">
                            🎯
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[12px] font-medium text-white">BITS Pilani</span>
                            <span className="text-[10px] text-white/50">B.Tech CS</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-white/5">
                        <div className="flex items-center gap-1.5 rounded-full bg-[#818CF8]/10 px-2 py-0.5 border border-[#818CF8]/20 shadow-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#818CF8] animate-pulse shadow-[0_0_5px_rgba(129,140,248,0.8)]" />
                          <span className="text-[9px] font-bold text-[#818CF8]">96% MATCH</span>
                        </div>
                        <span className="text-[10px] font-medium text-white/40 group-hover:text-white transition-colors cursor-pointer flex items-center gap-1">Apply <span>→</span></span>
                      </div>
                    </div>
                  </div>

                  {/* Upcoming Deadlines Widget */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 px-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-orange-400" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      <h3 className="text-[12px] font-semibold text-white/90">Upcoming Deadlines</h3>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.015] p-3 transition-colors hover:bg-white/[0.03]">
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[11px] font-medium text-white/90">Ashoka Univ.</span>
                          <span className="text-[9px] text-white/50">Round 2 App</span>
                        </div>
                        <div className="flex flex-col items-end gap-0.5">
                          <span className="text-[10px] font-medium text-orange-400">2 Days</span>
                          <span className="text-[9px] text-white/40">15 Oct</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.015] p-3 transition-colors hover:bg-white/[0.03]">
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[11px] font-medium text-white/90">KREA Univ.</span>
                          <span className="text-[9px] text-white/50">Financial Aid</span>
                        </div>
                        <div className="flex flex-col items-end gap-0.5">
                          <span className="text-[10px] font-medium text-white/70">1 Week</span>
                          <span className="text-[9px] text-white/40">20 Oct</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
