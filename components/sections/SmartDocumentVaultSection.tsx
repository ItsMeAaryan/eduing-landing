'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, Check, Lock, UploadCloud, AlertCircle, FileText, Sparkles, Database } from 'lucide-react'

const features = [
  'Upload documents once',
  'AI document verification',
  'Secure encrypted cloud storage',
  'One-click reuse across universities',
  'Document expiry reminders',
  'Verification history'
]

export default function SmartDocumentVaultSection() {
  return (
    <section className="relative overflow-hidden bg-bg px-6 pb-24 lg:pb-32" id="document-vault" aria-labelledby="vault-heading">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-16 md:flex-row md:items-center lg:gap-16">
        
        {/* LEFT COLUMN */}
        <div className="flex w-full flex-col md:w-2/5 lg:w-[45%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 self-start"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/70">
              SMART DOCUMENT VAULT
            </span>
          </motion.div>

          <motion.h2 
            id="vault-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-6 font-display text-4xl font-extrabold leading-[1.15] tracking-[-0.02em] text-white lg:text-5xl"
          >
            Upload Once.<br />
            <span className="bg-gradient-to-br from-[#818CF8] via-[#5B5FEF] to-[#A78BFA] bg-clip-text text-transparent">Use Everywhere.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-10 text-base leading-relaxed text-white/50"
          >
            Never upload the same documents repeatedly. Store all your verified academic documents securely in one place and instantly reuse them across every university application.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <CheckCircle2 size={12} className="text-white/70" />
                </div>
                <span className="text-[14px] font-medium text-white/80">{feature}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a href="/documents" className="group inline-flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2.5 text-[14px] font-medium text-white transition-all duration-200 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/50">
              Manage Documents <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN - Dashboard Mockup */}
        <div className="w-full flex-1 md:w-3/5 lg:w-[55%] relative">
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative flex w-full flex-col overflow-hidden rounded-[16px] border border-white/10 bg-[#0A0A0A] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-5 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-3 space-x-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>
                <div className="h-4 w-[1px] bg-white/10 mx-1" />
                <span className="text-[11px] font-medium tracking-wider text-white/40">VAULT WORKSPACE</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5">
                <ShieldCheck size={10} className="text-emerald-400" />
                <span className="text-[10px] font-bold text-emerald-400">End-to-End Encrypted</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 p-5 bg-[#050505] lg:flex-row">
              
              {/* Main Document List */}
              <div className="flex flex-[2] flex-col gap-3">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-[12px] font-bold text-white">Document Vault</h4>
                  <span className="text-[10px] text-white/40">5 Files</span>
                </div>

                {/* 10th Marksheet - Verified */}
                <div className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-all duration-200 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                      <FileText size={14} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[12px] font-bold text-white">10th Marksheet</span>
                      <span className="text-[10px] text-white/40">1.2 MB • PDF</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-1">
                    <Check size={10} className="text-emerald-400" strokeWidth={3} />
                    <span className="text-[9px] font-bold text-emerald-400">Verified</span>
                  </div>
                </div>

                {/* 12th Marksheet - Pending */}
                <div className="group flex flex-col justify-center rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-all duration-200 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04]">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                        <FileText size={14} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[12px] font-bold text-white">12th Marksheet</span>
                        <span className="text-[10px] text-white/40">2.4 MB • PDF</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2 py-1">
                      <Clock size={10} className="text-amber-400" />
                      <span className="text-[9px] font-bold text-amber-400">Verifying...</span>
                    </div>
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '60%' }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }} className="h-full rounded-full bg-amber-500" />
                  </div>
                </div>

                {/* Aadhaar Card - Encrypted */}
                <div className="group flex items-center justify-between rounded-xl border border-cyan-500/20 bg-cyan-500/[0.02] p-3 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-cyan-500/[0.05]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                      <FileText size={14} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[12px] font-bold text-white">Aadhaar Card</span>
                      <span className="text-[10px] text-white/40">Secure ID Vault</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2 py-1">
                    <Lock size={10} className="text-cyan-400" />
                    <span className="text-[9px] font-bold text-cyan-400">Encrypted</span>
                  </div>
                </div>

                {/* Transfer Certificate - Missing */}
                <div className="group flex items-center justify-between rounded-xl border border-red-500/30 bg-red-500/[0.02] p-3 transition-all duration-200 hover:-translate-y-1 hover:border-red-500/50 hover:bg-red-500/[0.05]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                      <AlertCircle size={14} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[12px] font-bold text-red-400">Transfer Cert.</span>
                      <span className="text-[10px] text-red-400/60">Required</span>
                    </div>
                  </div>
                  <button className="flex items-center gap-1.5 rounded-full bg-red-500 px-3 py-1 text-[10px] font-bold text-white transition-colors hover:bg-red-600">
                    <UploadCloud size={10} /> Upload
                  </button>
                </div>
                
              </div>

              {/* Side Widgets */}
              <div className="flex flex-1 flex-col gap-4">
                
                {/* Storage Widget */}
                <div className="group relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-[#5B5FEF]/20 bg-gradient-to-b from-[#5B5FEF]/10 to-transparent p-4 transition-all duration-200 hover:-translate-y-1 hover:border-[#5B5FEF]/40">
                  <div className="absolute right-3 top-3">
                    <Database size={12} className="text-[#818CF8]/50" />
                  </div>
                  <h4 className="text-[11px] font-bold text-white/70 self-start mb-2">Cloud Storage</h4>
                  <div className="relative flex h-16 w-16 items-center justify-center">
                    <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 36 36">
                      <path
                        className="text-white/5"
                        strokeWidth="3"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <motion.path
                        className="text-[#818CF8]"
                        strokeWidth="3"
                        strokeDasharray="87, 100"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        initial={{ strokeDasharray: "0, 100" }}
                        whileInView={{ strokeDasharray: "87, 100" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center">
                      <span className="text-[14px] font-bold text-white">87%</span>
                    </div>
                  </div>
                  <span className="mt-2 text-[9px] text-white/50">Used Space</span>
                </div>

                {/* AI Suggestions Widget */}
                <div className="group flex flex-col rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-all duration-200 hover:-translate-y-1 hover:border-white/15">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Sparkles size={12} className="text-[#F59E0B]" />
                    <h4 className="text-[11px] font-bold text-white">AI Suggestion</h4>
                  </div>
                  <p className="text-[10px] text-white/60 mb-2 leading-relaxed">
                    Upload your <strong>Transfer Certificate</strong> to avoid delays.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-red-500/20 px-1.5 py-0.5 text-[8px] font-bold text-red-400">Due in 3d</span>
                    <span className="rounded bg-white/10 px-1.5 py-0.5 text-[8px] font-bold text-white/70">High Priority</span>
                  </div>
                </div>

                {/* Recent Activity Widget */}
                <div className="group flex flex-col rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-all duration-200 hover:-translate-y-1 hover:border-white/15">
                  <h4 className="text-[11px] font-bold text-white mb-2">Recent Activity</h4>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      <span className="text-[9px] text-white/60 leading-tight">10th Marksheet verified</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      <span className="text-[9px] text-white/60 leading-tight">Passport Photo uploaded</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#818CF8]" />
                      <span className="text-[9px] text-white/60 leading-tight">Income cert. reused for BITS</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
