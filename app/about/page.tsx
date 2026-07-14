'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, CheckCircle2, Sparkles, ShieldCheck, Eye, Users, Lightbulb, Search, Send, Activity, BookOpen, User, Building2, Check, AlertCircle } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="flex flex-col bg-bg text-white overflow-hidden pb-32">
      
      {/* 1. HERO SECTION */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#818CF8]/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 mx-auto max-w-[900px] flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-5xl font-extrabold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl mb-6"
          >
            We&apos;re Building The Future Of<br />
            <span className="text-white/40">University Admissions In India.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-white/50 mb-10 max-w-[600px] leading-relaxed"
          >
            EDUING is replacing the chaos of multiple portals, missed deadlines, and repeated forms with one intelligent, seamless platform for students and universities.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {['Student First', 'AI Powered', 'Built In India', 'One Profile'].map((pill, i) => (
              <div key={i} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
                <Sparkles size={12} className="text-[#818CF8]" />
                <span className="text-[12px] font-bold tracking-wider text-white/80 uppercase">{pill}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. WHY WE BUILT EDUING */}
      <section className="px-6 py-24 relative">
        <div className="mx-auto max-w-[1200px] flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Timeline */}
          <div className="flex-1 w-full flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 self-start"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-orange-400">THE PROBLEM</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-display text-4xl font-extrabold mb-12 text-white"
            >
              The Broken System
            </motion.h2>

            <div className="relative flex flex-col gap-6 pl-4 border-l border-white/10 ml-2">
              {[
                { title: 'Student decides to apply', desc: 'The journey begins with hope and excitement.', active: false },
                { title: '20+ university portals', desc: 'Navigating completely different systems and UI.', active: false },
                { title: 'Repeated forms', desc: 'Entering the same marks and details dozens of times.', active: false },
                { title: 'Missed deadlines', desc: 'Losing track of varying admission schedules.', active: false },
                { title: 'No centralized tracking', desc: 'Zero visibility into application statuses.', active: false },
                { title: 'EDUING', desc: 'The single solution that fixes everything.', active: true, color: 'text-emerald-400', bg: 'bg-emerald-500' }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col"
                >
                  <div className={`absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full ring-4 ring-[#08080A] ${step.bg || 'bg-white/20'}`} />
                  <span className={`text-[15px] font-bold ${step.color || 'text-white'}`}>{step.title}</span>
                  <span className="text-[13px] text-white/40 mt-1">{step.desc}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Mockup */}
          <div className="flex-1 w-full relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative flex flex-col rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 shadow-2xl"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-[12px] font-bold text-white/50">Application Status</span>
                  <span className="text-[10px] bg-red-500/10 text-red-400 px-2 py-1 rounded">Critical Error</span>
                </div>
                
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-lg border border-red-500/20 bg-red-500/5">
                    <AlertCircle size={16} className="text-red-400" />
                    <div className="flex flex-col">
                      <span className="text-[13px] font-bold text-white">Portal {i+1} Login Failed</span>
                      <span className="text-[10px] text-white/40">Deadline missed by 2 hours.</span>
                    </div>
                  </div>
                ))}

                <div className="mt-4 flex items-center justify-center p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20">
                  <div className="flex flex-col items-center text-center gap-2">
                    <Sparkles size={24} className="text-emerald-400" />
                    <span className="text-[14px] font-bold text-white">There is a better way.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. OUR MISSION */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center">
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent"
          >
            <div className="bg-[#0A0A0A] rounded-xl p-10 border border-white/5 shadow-[0_0_40px_rgba(255,255,255,0.02)]">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#818CF8] uppercase block mb-6">OUR MISSION</span>
              <h3 className="font-display text-2xl md:text-4xl font-bold leading-tight text-white">
                To build India&apos;s default university admissions infrastructure, where technology removes friction and amplifies opportunity for every student.
              </h3>
            </div>
          </motion.div>

          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mt-12"
          />
        </div>
      </section>

      {/* 4. CORE PRINCIPLES */}
      <section className="px-6 py-24 bg-[#050505]">
        <div className="mx-auto max-w-[1200px] flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold text-white mb-16"
          >
            Core Principles
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {[
              { icon: User, title: 'Student First', desc: 'Every feature begins with improving the student\'s experience.' },
              { icon: Eye, title: 'Transparency', desc: 'Admissions should be clear and easy.' },
              { icon: ShieldCheck, title: 'Privacy', desc: 'Students own and control their data.' },
              { icon: Sparkles, title: 'AI With Purpose', desc: 'AI assists—not replaces—decision making.' },
              { icon: Users, title: 'Accessibility', desc: 'Designed for every student.' },
              { icon: Lightbulb, title: 'Innovation', desc: 'Continuously improving admissions.' }
            ].map((principle, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:bg-white/[0.04] hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.05)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 group-hover:bg-[#818CF8]/10 group-hover:text-[#818CF8] transition-colors">
                  <principle.icon size={18} />
                </div>
                <h3 className="text-[18px] font-bold text-white">{principle.title}</h3>
                <p className="text-[14px] text-white/50 leading-relaxed">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW EDUING WORKS */}
      <section className="px-6 py-32 overflow-hidden">
        <div className="mx-auto max-w-[1200px] flex flex-col items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-bold text-white mb-20"
          >
            The New Standard.
          </motion.h2>

          <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4 lg:gap-0 relative">
            {/* Desktop Connector Line */}
            <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-white/10 -z-10" />

            {[
              { icon: User, label: 'Create Profile' },
              { icon: Search, label: 'Discover' },
              { icon: Send, label: 'Submit Once' },
              { icon: Activity, label: 'Track' },
              { icon: CheckCircle2, label: 'Receive Offers' },
              { icon: BookOpen, label: 'Enroll' }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-4 flex-1"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#5B5FEF]/30 bg-[#0A0A0A] shadow-[0_0_20px_rgba(91,95,239,0.15)] relative z-10">
                  <step.icon size={20} className="text-[#818CF8]" />
                </div>
                <span className="text-[13px] font-bold text-white/80">{step.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STUDENT + UNIVERSITY ECOSYSTEM */}
      <section className="px-6 py-24 bg-[#050505]">
        <div className="mx-auto max-w-[1200px] flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold text-white mb-16 text-center"
          >
            One Ecosystem. Two Powerful Experiences.
          </motion.h2>

          <div className="flex flex-col lg:flex-row gap-6 w-full">
            
            {/* Student Workspace */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="flex-1 flex flex-col rounded-3xl border border-white/5 bg-[#0A0A0A] overflow-hidden"
            >
              <div className="p-8 border-b border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                    <User size={14} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Student Workspace</h3>
                </div>
                <p className="text-sm text-white/50">Everything a student needs to get accepted.</p>
              </div>
              <div className="p-8 bg-black/20 flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['AI Discovery', 'One Profile', 'Applications Tracking', 'Document Vault', 'Offer Management'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl bg-white/5 p-3 border border-white/5">
                      <Check size={14} className="text-blue-400" />
                      <span className="text-[13px] font-medium text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* University Workspace */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-1 flex flex-col rounded-3xl border border-white/5 bg-[#0A0A0A] overflow-hidden"
            >
              <div className="p-8 border-b border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    <Building2 size={14} />
                  </div>
                  <h3 className="text-xl font-bold text-white">University Workspace</h3>
                </div>
                <p className="text-sm text-white/50">Enterprise tools for modern admission teams.</p>
              </div>
              <div className="p-8 bg-black/20 flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Admissions Dashboard', 'Automated Verification', 'AI Analytics', 'Seat Management', 'Student Pipeline'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl bg-white/5 p-3 border border-white/5">
                      <Check size={14} className="text-emerald-400" />
                      <span className="text-[13px] font-medium text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 7. MEET THE FOUNDERS */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-[1200px] flex flex-col items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold text-white mb-16"
          >
            Meet The Founders
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[
              { name: 'Aaryan Sharma', role: 'Co-Founder', mission: 'Building the solution I wish I had during my own admissions.', github: '#', linkedin: '#' },
              { name: 'Lakshya Pandey', role: 'Co-Founder', mission: 'Committed to making higher education more accessible through innovation.', github: '#', linkedin: '#' },
              { name: 'Prince Mittal', role: 'CTO & Lead Developer', mission: 'Engineering invisible, effortless technology for students.', github: '#', linkedin: '#' }
            ].map((founder, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center rounded-2xl border border-white/5 bg-[#0A0A0A] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white/10 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] text-center"
              >
                <div className="h-20 w-20 rounded-full bg-white/5 mb-6 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors">
                  <User size={24} className="text-white/40" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{founder.name}</h3>
                <span className="text-sm font-medium text-[#818CF8] mb-4">{founder.role}</span>
                <p className="text-sm text-white/50 mb-8 italic">&quot;{founder.mission}&quot;</p>
                <div className="flex items-center gap-3 mt-auto">
                  <a href={founder.github} className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors">
                    <Github size={14} />
                  </a>
                  <a href={founder.linkedin} className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors">
                    <Linkedin size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="px-6 py-32 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#5B5FEF]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="mx-auto max-w-[800px] flex flex-col items-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
          >
            The Future Of University Admissions Starts Here.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-white/50 mb-10 max-w-[500px]"
          >
            Join thousands of students and universities building a faster, smarter, and fairer admissions ecosystem.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a href="/register" className="group inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-[15px] font-bold text-black transition-transform hover:scale-[1.02]">
              Start Your Journey <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/features" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/10 hover:border-white/20">
              Explore Features
            </a>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
