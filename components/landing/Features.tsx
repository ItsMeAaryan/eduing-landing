'use client'
import { motion } from 'framer-motion'
import { GraduationCap, BarChart3, FileText, ShieldCheck, type LucideIcon } from 'lucide-react'

type Feature = {
  key: string
  title: string
  desc: string
  icon: LucideIcon
  accent: string
}

const FEATURES: Feature[] = [
  {
    key: 'APPLY',
    title: 'Apply to multiple universities',
    desc: 'One universal profile is all you need to submit applications across hundreds of top institutions without repetitive forms.',
    icon: GraduationCap,
    accent: '#5B5FEF',
  },
  {
    key: 'TRACKING',
    title: 'Track application status',
    desc: 'Get real-time updates, interview schedules, and offer letters directly on your centralized dashboard.',
    icon: BarChart3,
    accent: '#10B981',
  },
  {
    key: 'DOCUMENTS',
    title: 'Upload & verify documents',
    desc: 'Store your academic records securely. Upload once, get verified instantly, and reuse them for every application.',
    icon: FileText,
    accent: '#F59E0B',
  },
  {
    key: 'SECURITY',
    title: 'Secure admission process',
    desc: 'End-to-end encryption and verified university partners ensure your personal data is always protected.',
    icon: ShieldCheck,
    accent: '#818CF8',
  },
]

function FeatureCard({ f, i }: { f: Feature; i: number }) {
  const Icon = f.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5 }}
      className="group relative cursor-default overflow-hidden rounded-3xl border border-white/5 bg-white/[0.03] p-10 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-2xl transition-colors duration-300 hover:bg-white/[0.06]"
      style={{ borderColor: 'rgba(255,255,255,0.05)' }}
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute -right-[50px] -top-[50px] h-[150px] w-[150px] rounded-full opacity-70 transition-transform duration-500 group-hover:scale-150"
        style={{ background: `radial-gradient(circle, ${f.accent}26 0%, transparent 70%)` }}
        aria-hidden="true"
      />

      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border"
        style={{
          background: `linear-gradient(135deg, ${f.accent}26, ${f.accent}0d)`,
          borderColor: `${f.accent}4d`,
          boxShadow: `0 8px 16px ${f.accent}1a`,
        }}
      >
        <Icon size={26} color={f.accent} strokeWidth={2} aria-hidden="true" />
      </motion.div>

      <div className="mb-3 text-xs font-bold uppercase tracking-[0.15em]" style={{ color: f.accent }}>
        {f.key}
      </div>

      <h3 className="mb-3 font-display text-2xl font-bold leading-tight tracking-[-0.02em] text-white">
        {f.title}
      </h3>

      <p className="text-base leading-[1.7] text-white/50">{f.desc}</p>
    </motion.div>
  )
}

export default function Features() {

  return (
    <section id="features" className="relative bg-bg px-6 py-[140px]">
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-lighter" />
            <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-accent-lighter">
              Platform Features
            </span>
          </div>

          <h2 className="mx-auto max-w-[700px] font-display text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-white">
            Everything you need
            <br />
            <span className="text-white/40">to get admitted easily</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.key} f={f} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
