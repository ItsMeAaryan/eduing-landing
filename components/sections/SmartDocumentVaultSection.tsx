'use client'

import { APP_URL } from '@/lib/links'
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
    <section className="relative overflow-hidden px-6 pb-24 lg:pb-32" id="document-vault" aria-labelledby="vault-heading">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-16 md:flex-row md:items-center lg:gap-16">
        
        {/* LEFT COLUMN */}
        <div className="flex w-full flex-col md:w-2/5 lg:w-[45%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line/10 bg-surface-2 px-3 py-1 self-start"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-ink/70">
              SMART DOCUMENT VAULT
            </span>
          </motion.div>

          <motion.h2 
            id="vault-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-6 font-display text-4xl font-extrabold leading-[1.15] tracking-[-0.02em] text-ink lg:text-5xl"
          >
            Upload Once.<br />
            <span className="bg-gradient-to-br from-brand via-brand to-brand-2 bg-clip-text text-transparent">Use Everywhere.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-10 text-base leading-relaxed text-ink/50"
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
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-line/10 bg-surface-2">
                  <CheckCircle2 size={12} className="text-ink/70" />
                </div>
                <span className="text-[14px] font-medium text-ink/80">{feature}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a href={APP_URL} rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-lg bg-surface-2 px-4 py-2.5 text-[14px] font-medium text-ink transition-all duration-200 hover:bg-ink/[0.06] hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/50">
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
            className="relative flex w-full flex-col overflow-hidden rounded-[16px] border border-line/10 bg-surface shadow-card shadow-lift"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-line/[0.08] bg-white/[0.02] px-5 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-3 space-x-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-ink/10" />
                  <div className="h-2.5 w-2.5 rounded-full bg-ink/10" />
                  <div className="h-2.5 w-2.5 rounded-full bg-ink/10" />
                </div>
                <div className="h-4 w-[1px] bg-ink/[0.06] mx-1" />
                <span className="text-[11px] font-medium tracking-wider text-ink/40">VAULT WORKSPACE</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-mint/20 bg-mint/10 px-2 py-0.5">
                <ShieldCheck size={10} className="text-mint" />
                <span className="text-[10px] font-bold text-mint">End-to-End Encrypted</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 p-5 bg-surface shadow-card lg:flex-row">
              
              {/* Main Document List */}
              <div className="flex flex-[2] flex-col gap-3">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-[12px] font-bold text-ink">Document Vault</h4>
                  <span className="text-[10px] text-ink/40">5 Files</span>
                </div>

                {/* 10th Marksheet - Verified */}
                <div className="group flex items-center justify-between rounded-xl border border-line/[0.08] bg-white/[0.02] p-3 transition-all duration-200 hover:-translate-y-1 hover:border-line/15 hover:bg-white/[0.04]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-mint/10 text-mint">
                      <FileText size={14} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[12px] font-bold text-ink">10th Marksheet</span>
                      <span className="text-[10px] text-ink/40">1.2 MB • PDF</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-mint/10 px-2 py-1">
                    <Check size={10} className="text-mint" strokeWidth={3} />
                    <span className="text-[9px] font-bold text-mint">Verified</span>
                  </div>
                </div>

                {/* 12th Marksheet - Pending */}
                <div className="group flex flex-col justify-center rounded-xl border border-line/[0.08] bg-white/[0.02] p-3 transition-all duration-200 hover:-translate-y-1 hover:border-line/15 hover:bg-white/[0.04]">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:text-gold">
                        <FileText size={14} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[12px] font-bold text-ink">12th Marksheet</span>
                        <span className="text-[10px] text-ink/40">2.4 MB • PDF</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2 py-1">
                      <Clock size={10} className="text-amber-600 dark:text-gold" />
                      <span className="text-[9px] font-bold text-amber-600 dark:text-gold">Verifying...</span>
                    </div>
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-surface-2">
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
                      <span className="text-[12px] font-bold text-ink">Aadhaar Card</span>
                      <span className="text-[10px] text-ink/40">Secure ID Vault</span>
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
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
                      <AlertCircle size={14} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[12px] font-bold text-red-500">Transfer Cert.</span>
                      <span className="text-[10px] text-red-500/60">Required</span>
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
                <div className="group relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-brand/20 bg-gradient-to-b from-brand/10 to-transparent p-4 transition-all duration-200 hover:-translate-y-1 hover:border-brand/40">
                  <div className="absolute right-3 top-3">
                    <Database size={12} className="text-brand/50" />
                  </div>
                  <h4 className="text-[11px] font-bold text-ink/70 self-start mb-2">Cloud Storage</h4>
                  <div className="relative flex h-16 w-16 items-center justify-center">
                    <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 36 36">
                      <path
                        className="text-ink/5"
                        strokeWidth="3"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <motion.path
                        className="text-brand"
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
                      <span className="text-[14px] font-bold text-ink">87%</span>
                    </div>
                  </div>
                  <span className="mt-2 text-[9px] text-ink/50">Used Space</span>
                </div>

                {/* AI Suggestions Widget */}
                <div className="group flex flex-col rounded-xl border border-line/[0.08] bg-white/[0.02] p-3 transition-all duration-200 hover:-translate-y-1 hover:border-line/15">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Sparkles size={12} className="text-gold" />
                    <h4 className="text-[11px] font-bold text-ink">AI Suggestion</h4>
                  </div>
                  <p className="text-[10px] text-ink/60 mb-2 leading-relaxed">
                    Upload your <strong>Transfer Certificate</strong> to avoid delays.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-red-500/20 px-1.5 py-0.5 text-[8px] font-bold text-red-500">Due in 3d</span>
                    <span className="rounded bg-ink/[0.06] px-1.5 py-0.5 text-[8px] font-bold text-ink/70">High Priority</span>
                  </div>
                </div>

                {/* Recent Activity Widget */}
                <div className="group flex flex-col rounded-xl border border-line/[0.08] bg-white/[0.02] p-3 transition-all duration-200 hover:-translate-y-1 hover:border-line/15">
                  <h4 className="text-[11px] font-bold text-ink mb-2">Recent Activity</h4>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                      <span className="text-[9px] text-ink/60 leading-tight">10th Marksheet verified</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      <span className="text-[9px] text-ink/60 leading-tight">Passport Photo uploaded</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      <span className="text-[9px] text-ink/60 leading-tight">Income cert. reused for BITS</span>
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
