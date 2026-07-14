'use client'

import { motion } from 'framer-motion'
import { Search, Bell, LayoutDashboard, Folder, Sparkles, Building2, FileText, Calendar, Settings, CheckCircle2, Clock, Check, ShieldCheck } from 'lucide-react'

export default function PlatformInActionSection() {
  return (
    <section className="relative overflow-hidden bg-bg px-6 py-24 lg:py-32" id="platform-action" aria-labelledby="platform-heading">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 text-center">
        
        {/* HEADER */}
        <div className="flex flex-col items-center max-w-[700px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#5B5FEF]/20 bg-[#5B5FEF]/10 px-3 py-1"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#818CF8]">
              PLATFORM IN ACTION
            </span>
          </motion.div>

          <motion.h2 
            id="platform-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-6 font-display text-4xl font-extrabold leading-[1.15] tracking-[-0.02em] text-white lg:text-5xl"
          >
            Everything You Need.<br />
            <span className="text-white/40">One Intelligent Dashboard.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base leading-relaxed text-white/50"
          >
            From discovering universities to managing applications, verifying documents, tracking deadlines and receiving offers—everything happens inside one unified workspace.
          </motion.p>
        </div>

        {/* MASSIVE DASHBOARD MOCKUP */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          viewport={{ once: true }}
          className="relative flex w-full max-w-[1100px] flex-col overflow-hidden rounded-[20px] border border-white/10 bg-[#0A0A0A] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] md:flex-row"
        >
          {/* LEFT SIDEBAR (Hidden on mobile) */}
          <div className="hidden w-[220px] flex-col border-r border-white/5 bg-[#050505] p-4 md:flex shrink-0">
            <div className="flex items-center gap-2 mb-8 px-2 mt-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-br from-[#818CF8] to-[#5B5FEF] text-[10px] font-extrabold text-white">E</div>
              <span className="text-[13px] font-bold text-white tracking-wide">EDUING<span className="text-[#818CF8]">.in</span></span>
            </div>
            
            <div className="flex flex-col gap-1 flex-1">
              {[
                { icon: LayoutDashboard, label: 'Dashboard', active: true },
                { icon: Folder, label: 'Applications', active: false },
                { icon: Sparkles, label: 'AI Discovery', active: false },
                { icon: Building2, label: 'Universities', active: false },
                { icon: FileText, label: 'Documents', active: false },
                { icon: Calendar, label: 'Calendar', active: false },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors cursor-pointer ${item.active ? 'bg-white/10 text-white' : 'text-white/50 hover:bg-white/5 hover:text-white/80'}`}>
                  <item.icon size={14} className={item.active ? 'text-[#818CF8]' : ''} />
                  <span className="text-[12px] font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-1 mt-auto">
              <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-white/50 transition-colors hover:bg-white/5 hover:text-white/80 cursor-pointer">
                <Settings size={14} />
                <span className="text-[12px] font-medium">Settings</span>
              </div>
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="flex flex-1 flex-col bg-[#08080C]">
            
            {/* Top Navigation */}
            <div className="flex h-14 items-center justify-between border-b border-white/5 px-4 lg:px-6">
              <div className="flex w-full max-w-[200px] items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 transition-colors focus-within:border-white/20 focus-within:bg-white/10 lg:max-w-[300px]">
                <Search size={12} className="text-white/40" />
                <span className="text-[11px] text-white/40">Search universities...</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="hidden lg:flex items-center gap-2">
                  <span className="text-[10px] font-medium text-white/50">Profile</span>
                  <div className="h-1.5 w-16 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[85%] rounded-full bg-[#818CF8]" />
                  </div>
                  <span className="text-[10px] font-bold text-white/80">85%</span>
                </div>
                
                <div className="h-4 w-[1px] bg-white/10 hidden lg:block" />

                <div className="relative cursor-pointer">
                  <Bell size={14} className="text-white/50 hover:text-white transition-colors" />
                  <span className="absolute -top-0.5 -right-0.5 flex h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></span>
                </div>
                
                <div className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-[#818CF8] to-[#5B5FEF] text-[10px] font-bold text-white">
                  JS
                </div>
              </div>
            </div>

            {/* Dashboard Workspace */}
            <div className="flex flex-col gap-4 p-4 lg:p-6 overflow-y-auto max-h-[600px] scrollbar-hide">
              
              {/* Row 1: Quick Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="group flex flex-col rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-all duration-200 hover:-translate-y-1 hover:border-white/15">
                  <div className="flex items-center gap-2 mb-2">
                    <Folder size={12} className="text-[#818CF8]" />
                    <span className="text-[11px] font-medium text-white/60">Applications</span>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="font-display text-[22px] font-bold text-white leading-none">4</span>
                    <span className="text-[9px] font-medium text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded mb-0.5">Active</span>
                  </div>
                </div>
                
                <div className="group flex flex-col rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03] p-3 transition-all duration-200 hover:-translate-y-1 hover:border-emerald-500/40">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={12} className="text-emerald-400" />
                    <span className="text-[11px] font-medium text-emerald-400/80">Offers</span>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="font-display text-[22px] font-bold text-white leading-none">1</span>
                    <span className="text-[9px] font-medium text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded mb-0.5">Received</span>
                  </div>
                </div>

                <div className="group flex flex-col rounded-xl border border-orange-500/20 bg-orange-500/[0.03] p-3 transition-all duration-200 hover:-translate-y-1 hover:border-orange-500/40">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={12} className="text-orange-400" />
                    <span className="text-[11px] font-medium text-orange-400/80">Deadlines</span>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="font-display text-[22px] font-bold text-white leading-none">3</span>
                    <span className="text-[9px] font-medium text-orange-400 bg-orange-500/10 px-1.5 py-0.5 rounded mb-0.5">Upcoming</span>
                  </div>
                </div>

                <div className="group flex flex-col rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-all duration-200 hover:-translate-y-1 hover:border-white/15">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck size={12} className="text-cyan-400" />
                    <span className="text-[11px] font-medium text-white/60">Documents</span>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="font-display text-[22px] font-bold text-white leading-none">87%</span>
                    <span className="text-[9px] font-medium text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded mb-0.5">Verified</span>
                  </div>
                </div>
              </div>

              {/* Row 2: Main Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                
                {/* Col 1 (2 Spans) */}
                <div className="lg:col-span-2 flex flex-col gap-4">
                  
                  {/* Application Timeline */}
                  <div className="flex flex-col rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-200 hover:border-white/10">
                    <h4 className="text-[12px] font-bold text-white mb-4">Application Journey: BITS Pilani</h4>
                    
                    <div className="relative flex justify-between">
                      {/* Line */}
                      <div className="absolute top-[9px] left-[20px] right-[20px] h-[2px] bg-white/10 -z-10" />
                      <div className="absolute top-[9px] left-[20px] right-[20%] h-[2px] bg-emerald-500 -z-10" />
                      
                      {[
                        { label: 'Submitted', active: true, color: 'emerald' },
                        { label: 'Docs Verified', active: true, color: 'emerald' },
                        { label: 'Under Review', active: true, color: 'emerald' },
                        { label: 'Interview', active: true, color: 'emerald' },
                        { label: 'Offer', active: false, color: 'white/20' }
                      ].map((step, i) => (
                        <div key={i} className="flex flex-col items-center gap-2">
                          <div className={`flex h-5 w-5 items-center justify-center rounded-full ${step.active ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]' : 'bg-[#151515] border border-white/20'}`}>
                            {step.active && <Check size={10} className="text-white" strokeWidth={3} />}
                          </div>
                          <span className={`text-[9px] font-bold hidden sm:block ${step.active ? 'text-emerald-400' : 'text-white/40'}`}>{step.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Split row inside Col 1: Notifications & Analytics */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Notification Feed */}
                    <div className="flex flex-col rounded-xl border border-white/5 bg-white/[0.02] p-4">
                      <h4 className="text-[12px] font-bold text-white mb-3">Recent Activity</h4>
                      <div className="flex flex-col gap-3">
                        <div className="flex gap-3 items-start">
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                            <CheckCircle2 size={10} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[11px] font-medium text-white/90">Offer received from VIT Chennai</span>
                            <span className="text-[9px] text-white/40">2 hours ago</span>
                          </div>
                        </div>
                        <div className="flex gap-3 items-start">
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#818CF8]/20 text-[#818CF8]">
                            <Sparkles size={10} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[11px] font-medium text-white/90">AI Recommendation updated</span>
                            <span className="text-[9px] text-white/40">5 hours ago</span>
                          </div>
                        </div>
                        <div className="flex gap-3 items-start">
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                            <FileText size={10} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[11px] font-medium text-white/90">12th Marksheet verified</span>
                            <span className="text-[9px] text-white/40">1 day ago</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Analytics Widget */}
                    <div className="flex flex-col justify-between rounded-xl border border-white/5 bg-white/[0.02] p-4">
                      <h4 className="text-[12px] font-bold text-white mb-3">Analytics</h4>
                      <div className="flex flex-col gap-3 flex-1 justify-end">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-white/60">Acceptance Rate</span>
                          <span className="text-[10px] font-bold text-white">75%</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                          <motion.div initial={{ width: 0 }} whileInView={{ width: '75%' }} transition={{ duration: 1 }} className="h-full bg-[#818CF8]" />
                        </div>

                        <div className="flex items-center justify-between mt-2">
                          <span className="text-[10px] text-white/60">Profile Strength</span>
                          <span className="text-[10px] font-bold text-white">High</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                          <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-emerald-400" />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Col 2 (1 Span) */}
                <div className="flex flex-col gap-4">
                  
                  {/* AI Recommendations */}
                  <div className="flex flex-col rounded-xl border border-[#5B5FEF]/20 bg-gradient-to-b from-[#5B5FEF]/10 to-transparent p-4 transition-all duration-200 hover:-translate-y-1 hover:border-[#5B5FEF]/40">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles size={12} className="text-[#818CF8]" />
                      <h4 className="text-[12px] font-bold text-white">AI Recommendations</h4>
                    </div>
                    <div className="flex flex-col gap-2">
                      {[
                        { name: 'BITS Pilani', score: '98%' },
                        { name: 'Manipal Univ', score: '95%' },
                        { name: 'IIIT Hyderabad', score: '93%' }
                      ].map((uni, i) => (
                        <div key={i} className="flex items-center justify-between rounded bg-black/40 px-2 py-1.5 border border-white/5">
                          <span className="text-[10px] font-medium text-white/80">{uni.name}</span>
                          <span className="text-[9px] font-bold text-[#818CF8] bg-[#818CF8]/10 px-1.5 py-0.5 rounded">{uni.score} Match</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Document Vault Summary */}
                  <div className="flex flex-col rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-200 hover:-translate-y-1 hover:border-white/10">
                    <h4 className="text-[12px] font-bold text-white mb-3">Document Vault</h4>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-white/60">10th Marksheet</span>
                        <span className="text-[9px] font-bold text-emerald-400">Verified</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-white/60">12th Marksheet</span>
                        <span className="text-[9px] font-bold text-emerald-400">Verified</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-white/60">Income Cert.</span>
                        <span className="text-[9px] font-bold text-orange-400">Pending</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-white/60">Passport Photo</span>
                        <span className="text-[9px] font-bold text-blue-400">Uploaded</span>
                      </div>
                    </div>
                  </div>

                  {/* Upcoming Deadlines */}
                  <div className="flex flex-col rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-200 hover:-translate-y-1 hover:border-white/10">
                    <h4 className="text-[12px] font-bold text-white mb-3">Upcoming Deadlines</h4>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between rounded bg-orange-500/10 px-2 py-1.5 border border-orange-500/20">
                        <span className="text-[10px] font-medium text-white/80">BITS Pilani</span>
                        <span className="text-[9px] font-bold text-orange-400">3 days</span>
                      </div>
                      <div className="flex items-center justify-between rounded bg-white/5 px-2 py-1.5">
                        <span className="text-[10px] font-medium text-white/80">Manipal</span>
                        <span className="text-[9px] font-bold text-white/60">5 days</span>
                      </div>
                      <div className="flex items-center justify-between rounded bg-white/5 px-2 py-1.5">
                        <span className="text-[10px] font-medium text-white/80">IIIT</span>
                        <span className="text-[9px] font-bold text-white/60">7 days</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
