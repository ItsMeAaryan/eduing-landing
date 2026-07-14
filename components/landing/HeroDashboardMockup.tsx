'use client'
import { motion, useReducedMotion } from 'framer-motion'

export default function HeroDashboardMockup() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      animate={reduceMotion ? {} : { y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="flex w-[800px] max-w-none flex-col overflow-hidden rounded-3xl border border-white/[0.08] shadow-[0_30px_60px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl origin-top scale-[0.4] sm:scale-[0.6] md:scale-[0.75] lg:scale-100 lg:w-full lg:max-w-[720px] [transform:rotateY(-5deg)_rotateX(5deg)] [transform-style:preserve-3d] min-h-[480px]"
      style={{ background: 'linear-gradient(145deg, rgba(22,22,26,0.95) 0%, rgba(15,15,20,0.95) 100%)' }}
    >
      {/* Top Bar */}
      <div className="flex h-14 items-center justify-between border-b border-white/5 bg-white/[0.02] px-6">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 font-display text-[15px] font-bold tracking-wide text-white">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#818CF8] to-[#5B5FEF] text-white shadow-lg">
              E
            </div>
            EDUING
          </div>
          <div className="flex h-8 w-64 items-center gap-2 rounded-md border border-white/10 bg-black/20 px-3 text-[13px] text-white/40 shadow-inner transition-colors duration-200 hover:border-white/20 hover:text-white/60">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <span>Search applications...</span>
            <div className="ml-auto flex gap-1">
              <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-[9px] font-medium text-white/50">⌘</kbd>
              <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-[9px] font-medium text-white/50">K</kbd>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3 mr-2">
            <span className="text-[10px] font-medium text-white/40">Last synced 2 min ago</span>
            <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2 py-1">
              <div className="h-1 w-12 overflow-hidden rounded-full bg-white/10">
                <motion.div initial={{ width: 0 }} animate={{ width: '92%' }} transition={{ duration: 0.24 }} className="h-full bg-emerald-400" />
              </div>
              <span className="text-[9px] font-bold text-white/70">92%</span>
            </div>
          </div>
          <button className="relative flex h-8 w-8 items-center justify-center rounded-full text-white/50 transition-colors duration-200 hover:bg-white/10 hover:text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            <span className="absolute -top-0.5 -right-0.5 flex h-[14px] w-[14px] items-center justify-center rounded-full bg-[#5B5FEF] ring-2 ring-[#16161A] text-[8px] font-bold text-white">3</span>
          </button>
          <button className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400 p-[2px] transition-transform duration-200 hover:scale-105">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[#16161A] text-[11px] font-bold text-white">
              JS
            </div>
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-[#16161A]"></span>
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <div className="flex w-16 flex-col items-center border-r border-white/5 bg-white/[0.01] py-4">
          <div className="flex w-full flex-col items-center gap-2">
            <button className="group relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white shadow-sm transition-all duration-200 hover:-translate-y-[1px] hover:bg-white/15">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>
              <div className="absolute left-12 z-50 rounded bg-white/10 px-2 py-1 text-[10px] font-medium text-white opacity-0 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100 pointer-events-none whitespace-nowrap">Dashboard</div>
            </button>
            <button className="group relative flex h-10 w-10 items-center justify-center rounded-xl text-white/40 transition-all duration-200 hover:-translate-y-[1px] hover:bg-white/5 hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              <div className="absolute left-12 z-50 rounded bg-white/10 px-2 py-1 text-[10px] font-medium text-white opacity-0 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100 pointer-events-none whitespace-nowrap">Applications</div>
            </button>
            <button className="group relative flex h-10 w-10 items-center justify-center rounded-xl text-white/40 transition-all duration-200 hover:-translate-y-[1px] hover:bg-white/5 hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
              <div className="absolute left-12 z-50 rounded bg-white/10 px-2 py-1 text-[10px] font-medium text-white opacity-0 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100 pointer-events-none whitespace-nowrap">Saved Universities</div>
            </button>
            <button className="group relative flex h-10 w-10 items-center justify-center rounded-xl text-white/40 transition-all duration-200 hover:-translate-y-[1px] hover:bg-white/5 hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
              <div className="absolute left-12 z-50 rounded bg-white/10 px-2 py-1 text-[10px] font-medium text-white opacity-0 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100 pointer-events-none whitespace-nowrap">Scholarships</div>
            </button>
            <button className="group relative flex h-10 w-10 items-center justify-center rounded-xl text-white/40 transition-all duration-200 hover:-translate-y-[1px] hover:bg-white/5 hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
              <div className="absolute left-12 z-50 rounded bg-white/10 px-2 py-1 text-[10px] font-medium text-white opacity-0 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100 pointer-events-none whitespace-nowrap">Documents</div>
            </button>
          </div>
          <div className="mt-auto">
            <button className="group relative flex h-10 w-10 items-center justify-center rounded-xl text-white/40 transition-all duration-200 hover:-translate-y-[1px] hover:bg-white/5 hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
              <div className="absolute left-12 z-50 rounded bg-white/10 px-2 py-1 text-[10px] font-medium text-white opacity-0 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100 pointer-events-none whitespace-nowrap">Settings</div>
            </button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex flex-1 gap-6 overflow-y-auto bg-black/20 p-6">
          {/* Left Col: Application Cards */}
          <div className="flex flex-[3] flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-[14px] font-bold text-white">Your Applications</h2>
              <button className="text-[12px] font-medium text-[#818CF8] transition-colors duration-200 hover:text-white">View All</button>
            </div>

            <motion.div
              className="group relative flex flex-col gap-3 rounded-2xl border border-emerald-500/40 bg-emerald-500/[0.04] p-4 shadow-[0_8px_24px_-8px_rgba(16,185,129,0.25)] transition-all duration-200 hover:-translate-y-1 hover:border-emerald-500/60 hover:bg-emerald-500/[0.06] hover:shadow-[0_8px_24px_-8px_rgba(16,185,129,0.35)]"
            >
              <motion.div 
                animate={reduceMotion ? {} : { opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent pointer-events-none"
              />
              <div className="relative z-10 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/30 bg-white overflow-hidden shadow-inner">
                    <span className="text-[12px] font-extrabold text-[#1e40af]">VIT</span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-[13px] font-bold text-white">VIT Chennai</h3>
                    <p className="text-[11px] font-medium text-white/50">B.Tech Computer Science</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/15 px-2.5 py-1 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                  <span className="text-[10px]">✨</span>
                  <span className="text-[10px] font-bold text-emerald-400">Offer Received</span>
                </div>
              </div>
              
              <div className="relative z-10 mt-1 flex flex-col gap-1.5">
                <div className="flex justify-between text-[10px] font-medium text-white/40">
                  <span>Application Progress</span>
                  <span className="text-white/70">100%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.24, ease: 'easeOut' }}
                    className="h-full rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                  />
                </div>
              </div>

              <div className="relative z-10 mt-1 flex items-center justify-between border-t border-emerald-500/20 pt-3">
                <span className="text-[10px] font-medium text-white/40">Updated 2h ago</span>
                <button className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400/90 transition-all duration-200 hover:text-emerald-300">
                  View Details <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
            </motion.div>

            <motion.div
              className="group relative flex flex-col gap-3 rounded-2xl border border-orange-500/20 bg-white/[0.02] p-4 shadow-[0_4px_12px_-4px_rgba(249,115,22,0.1)] transition-all duration-200 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-white/[0.04] hover:shadow-[0_8px_24px_-8px_rgba(249,115,22,0.2)]"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white overflow-hidden shadow-inner">
                    <span className="text-[12px] font-extrabold text-[#b91c1c]">SRM</span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-[13px] font-bold text-white">SRM University</h3>
                    <p className="text-[11px] font-medium text-white/50">B.Tech Information Tech</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 px-2.5 py-1">
                  <motion.div
                    animate={reduceMotion ? {} : { opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="h-1.5 w-1.5 rounded-full bg-orange-400"
                  />
                  <span className="text-[10px] font-bold text-orange-400">Under Review</span>
                </div>
              </div>
              
              <div className="mt-1 flex flex-col gap-1.5">
                <div className="flex justify-between text-[10px] font-medium text-white/40">
                  <span>Application Progress</span>
                  <span className="text-white/70">75%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    transition={{ duration: 0.24, ease: 'easeOut' }}
                    className="h-full rounded-full bg-orange-500"
                  />
                </div>
              </div>

              <div className="mt-1 flex items-center justify-between border-t border-white/5 pt-3">
                <span className="text-[10px] font-medium text-white/40">Updated 1d ago</span>
                <button className="flex items-center gap-1 text-[11px] font-semibold text-white/70 transition-all duration-200 hover:text-white group-hover:text-orange-400">
                  View Details <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
            </motion.div>

            <motion.div
              className="group relative flex flex-col gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4 shadow-[0_4px_12px_-4px_rgba(255,255,255,0.05)] transition-all duration-200 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04] hover:shadow-[0_8px_24px_-8px_rgba(255,255,255,0.1)]"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white overflow-hidden shadow-inner">
                    <span className="text-[13px] font-extrabold text-[#ea580c]">MU</span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-[13px] font-bold text-white">Manipal University</h3>
                    <p className="text-[11px] font-medium text-white/50">B.Tech Software Eng</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/60" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  <span className="text-[10px] font-bold text-white/60">Docs Pending</span>
                </div>
              </div>
              
              <div className="mt-1 flex flex-col gap-1.5">
                <div className="flex justify-between text-[10px] font-medium text-white/40">
                  <span>Application Progress</span>
                  <span className="text-white/70">40%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '40%' }}
                    transition={{ duration: 0.24, ease: 'easeOut' }}
                    className="h-full rounded-full bg-white/40"
                  />
                </div>
              </div>

              <div className="mt-1 flex items-center justify-between border-t border-white/5 pt-3">
                <span className="text-[10px] font-medium text-white/40">Updated 3d ago</span>
                <button className="flex items-center gap-1 text-[11px] font-semibold text-white/70 transition-all duration-200 hover:text-white group-hover:text-white">
                  View Details <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Col: Widgets */}
          <div className="flex flex-[2] flex-col gap-5">
            <div className="flex flex-col gap-3">
              <h2 className="text-[13px] font-bold text-white">Recommended for you</h2>
              <motion.div
                className="group relative overflow-hidden rounded-2xl border border-[#818CF8]/30 bg-gradient-to-b from-[#818CF8]/10 to-transparent p-4 shadow-[0_4px_24px_-8px_rgba(129,140,248,0.2)] backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-[#818CF8]/50 hover:shadow-[0_8px_32px_-8px_rgba(129,140,248,0.3)]"
              >
                <div className="relative z-10 flex flex-col gap-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white text-sm shadow-inner overflow-hidden">
                        <span className="text-[10px] font-extrabold text-[#1d4ed8]">BITS</span>
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-[13px] font-bold text-white">BITS Pilani</h3>
                        <p className="text-[11px] font-medium text-white/60">96% Match</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-2 flex items-center justify-between border-t border-white/5 pt-3">
                    <div className="text-[10px] font-medium text-white/50">Based on your profile</div>
                    <button className="flex items-center gap-1 rounded-full bg-[#5B5FEF] px-3 py-1.5 text-[11px] font-bold text-white transition-all duration-200 hover:bg-[#818CF8] hover:shadow-[0_0_12px_rgba(129,140,248,0.6)]">
                      Apply <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-[13px] font-bold text-white">Upcoming Deadlines</h2>
              <div className="flex flex-col gap-2">
                <motion.div
                  className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-3 shadow-[0_2px_8px_-2px_rgba(255,255,255,0.02)] transition-all duration-200 hover:-translate-y-[1px] hover:border-white/10 hover:bg-white/[0.04]"
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[12px] font-bold text-white">Ashoka University</span>
                    <span className="text-[10px] font-medium text-white/50">Round 2 Application</span>
                  </div>
                  <div className="flex flex-col items-end gap-0.5">
                    <span className="rounded bg-orange-500/10 px-1.5 py-0.5 text-[10px] font-bold text-orange-400">2 Days Left</span>
                  </div>
                </motion.div>

                <motion.div
                  className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-3 shadow-[0_2px_8px_-2px_rgba(255,255,255,0.02)] transition-all duration-200 hover:-translate-y-[1px] hover:border-white/10 hover:bg-white/[0.04]"
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[12px] font-bold text-white">KREA University</span>
                    <span className="text-[10px] font-medium text-white/50">Financial Aid</span>
                  </div>
                  <div className="flex flex-col items-end gap-0.5">
                    <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-bold text-white/70">1 Week Left</span>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-[13px] font-bold text-white">Quick Stats</h2>
              <div className="grid grid-cols-3 gap-2">
                <motion.div
                  className="flex flex-col items-center justify-center gap-1 rounded-xl border border-white/5 bg-white/[0.02] py-3 shadow-[0_2px_8px_-2px_rgba(255,255,255,0.02)] transition-all duration-200 hover:-translate-y-[1px] hover:border-white/10 hover:bg-white/[0.04]"
                >
                  <span className="text-[16px] font-extrabold text-white">3</span>
                  <span className="text-[9px] font-medium uppercase tracking-wider text-white/50">Applied</span>
                </motion.div>
                <motion.div
                  className="flex flex-col items-center justify-center gap-1 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.05] py-3 shadow-[0_2px_8px_-2px_rgba(16,185,129,0.05)] transition-all duration-200 hover:-translate-y-[1px] hover:border-emerald-500/40 hover:bg-emerald-500/[0.1]"
                >
                  <span className="text-[16px] font-extrabold text-emerald-400">1</span>
                  <span className="text-[9px] font-medium uppercase tracking-wider text-emerald-400/70">Offers</span>
                </motion.div>
                <motion.div
                  className="flex flex-col items-center justify-center gap-1 rounded-xl border border-white/5 bg-white/[0.02] py-3 shadow-[0_2px_8px_-2px_rgba(255,255,255,0.02)] transition-all duration-200 hover:-translate-y-[1px] hover:border-white/10 hover:bg-white/[0.04]"
                >
                  <span className="text-[16px] font-extrabold text-white">12</span>
                  <span className="text-[9px] font-medium uppercase tracking-wider text-white/50">Saved</span>
                </motion.div>
              </div>
            </div>

            <div className="mt-1 flex flex-col gap-2 rounded-xl border border-white/5 bg-white/[0.01] p-3 shadow-[0_2px_8px_-2px_rgba(255,255,255,0.02)]">
              <div className="flex items-center gap-2 text-[10px] text-white/50">
                <span className="flex h-3 w-3 items-center justify-center rounded-full bg-emerald-500/20 text-[7px] text-emerald-400">✓</span> Documents verified
              </div>
              <div className="flex items-center gap-2 text-[10px] text-white/50">
                <span className="flex h-3 w-3 items-center justify-center rounded-full bg-[#818CF8]/20 text-[7px] text-[#818CF8]">✨</span> AI recommended BITS Pilani
              </div>
              <div className="flex items-center gap-2 text-[10px] text-white/50">
                <span className="flex h-3 w-3 items-center justify-center rounded-full bg-orange-400/20 text-[7px] text-orange-400">!</span> Deadline reminder tomorrow
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
