'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUp, ArrowUpRight, Linkedin, Twitter } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import { APP_URL, UNI_URL } from '@/lib/links'

type L = { label: string; href: string; external?: boolean; soon?: boolean }
const columns: { title: string; links: L[] }[] = [
  {
    title: 'Platform',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Students', href: '/#how-it-works' },
      { label: 'Universities', href: UNI_URL, external: true },
      { label: 'Download App', href: '/#download' },
      { label: 'AI Discovery', href: '/#universities' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '', soon: true },
      { label: 'Blog', href: '', soon: true },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'FAQ', href: '/#faq' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Trademark', href: '/trademark' },
    ],
  },
]

export default function Footer() {
  return (
    <footer id="footer" className="px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="relative overflow-hidden rounded-[36px] bg-surface pt-16 shadow-card sm:pt-20">
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_2fr]">
            <div className="flex flex-col items-start gap-5">
              <Link href="/" aria-label="EDUING Home"><Logo size={36} /></Link>
              <p className="font-display text-[22px] font-semibold leading-tight text-ink">One profile.<br />Every university.</p>
              <p className="max-w-[34ch] text-[14.5px] leading-relaxed text-ink/55">Simplifying university admissions through one intelligent platform powered by AI.</p>
              <div className="flex gap-2">
                <a href="https://twitter.com/eduing_in" rel="noopener noreferrer" target="_blank" aria-label="EDUING on X / Twitter" className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-2 text-ink/70 transition hover:bg-brand hover:text-white"><Twitter size={16} /></a>
                <a href="https://www.linkedin.com/company/eduing-in" rel="noopener noreferrer" target="_blank" aria-label="EDUING on LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-2 text-ink/70 transition hover:bg-brand hover:text-white"><Linkedin size={16} /></a>
                <a href={APP_URL} rel="noopener noreferrer" className="btn-primary !py-2 !text-[14px]">Open app <ArrowUpRight size={15} /></a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              {columns.map((c) => (
                <nav key={c.title} aria-label={`${c.title} navigation`}>
                  <h3 className="mb-5 font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-ink/40">{c.title}</h3>
                  <ul className="flex flex-col gap-3.5">
                    {c.links.map((l) => (
                      <li key={l.label}>
                        {l.soon ? (
                          <span className="inline-flex items-center gap-2 text-[15px] text-ink/35">{l.label}<span className="rounded-chip bg-gold-soft px-2 py-0.5 text-[10px] font-bold uppercase text-[#8A5F00] dark:text-gold">Soon</span></span>
                        ) : l.external ? (
                          <a href={l.href} rel="noopener noreferrer" className="group inline-flex items-center gap-1 text-[15px] text-ink/70 transition-colors hover:text-brand">
                            {l.label}<ArrowUpRight size={13} className="opacity-0 transition group-hover:opacity-100" />
                          </a>
                        ) : (
                          <Link href={l.href} className="text-[15px] text-ink/70 transition-colors hover:text-brand">{l.label}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </div>

          <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-line/10 py-6 text-[13.5px] text-ink/50 sm:flex-row sm:items-center">
            <span>© {new Date().getFullYear()} EDUING. Made in India for Indian students.</span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 rounded-chip bg-surface-2 px-4 py-2 font-medium text-ink/70 transition hover:text-ink"
            >
              Back to top <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* giant wordmark */}
        <div aria-hidden className="pointer-events-none select-none overflow-hidden">
          <motion.div
            initial={{ y: '40%' }} whileInView={{ y: '8%' }} viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center font-display text-[25vw] font-extrabold leading-[0.8] tracking-[-0.06em]"
            style={{ background: 'linear-gradient(180deg, rgb(var(--brand) / 0.9), rgb(var(--brand) / 0.05) 85%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}
          >
            EDUING
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
