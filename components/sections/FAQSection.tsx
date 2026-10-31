'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, MessageCircle, Plus } from 'lucide-react'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import WordReveal from '@/components/ui/WordReveal'

const faqs = [
  {
    q: 'Can I apply to multiple universities?',
    a: 'Yes. Your single EDUING profile acts as a universal application. You can submit it to any partner university without re-entering your information or uploading duplicate documents.',
  },
  {
    q: 'Do I need to create multiple accounts?',
    a: 'No. One EDUING account gives you access to the entire university network. You can manage all your applications, documents, and communication from a single unified dashboard.',
  },
  {
    q: 'How does AI recommend programs?',
    a: 'Our recommendation engine analyzes your academic background, test scores, and career goals. It then matches your profile against historical admission data to suggest programs where you have the highest probability of acceptance.',
  },
  {
    q: 'Can I track every application?',
    a: 'Yes. The dashboard provides real-time status updates for every application you submit. You will receive notifications when your documents are verified, when your application is under review, and when an offer is made.',
  },
  {
    q: 'Are my documents secure?',
    a: 'All uploaded documents are encrypted and stored securely. They are only shared with the specific universities you choose to apply to, ensuring complete privacy and data protection.',
  },
  {
    q: 'Is EDUING free for students?',
    a: "Yes. Creating a profile and using the platform's core features are completely free for students. Standard university application fees still apply and are processed directly by the respective institutions.",
  },
]

function FAQItem({ q, a, isOpen, onToggle, i }: { q: string; a: string; isOpen: boolean; onToggle: () => void; i: number }) {
  const id = `faq-answer-${i}`
  return (
    <div className={`overflow-hidden rounded-[22px] border transition-all duration-300 ${isOpen ? 'border-brand/25 bg-surface shadow-lift' : 'border-line/[0.07] bg-surface/70 hover:bg-surface'}`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={id}
        className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
      >
        <h3 className="font-sans text-[16px] font-semibold text-ink sm:text-[17px]">{q}</h3>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${isOpen ? 'bg-brand text-white' : 'bg-surface-2 text-ink/60'}`}
        >
          <Plus size={17} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={id}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="px-5 pb-6 text-[15px] leading-relaxed text-ink/60 sm:px-6">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  return (
    <section className="section" id="faq" aria-labelledby="faq-heading">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal><span className="eyebrow"><span className="eyebrow-dot" />FAQ</span></Reveal>
          <WordReveal id="faq-heading" className="mt-5 text-display font-bold text-ink" parts={['Everything you ', { text: 'need to know.', className: 'text-gradient' }]} />
          <Reveal delay={0.1}><p className="mt-5 max-w-[38ch] text-[17px] text-ink/60">Common questions about using EDUING.</p></Reveal>
          <Reveal delay={0.15} className="card-night mt-8 flex items-center gap-4 p-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold text-[#17142B]"><MessageCircle size={20} /></span>
            <div className="flex-1">
              <div className="text-[15px] font-semibold">Still have questions?</div>
              <Link href="/contact" className="group mt-0.5 inline-flex items-center gap-1 text-[14px] text-white/70 transition-colors hover:text-white">
                Contact our team <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <FAQItem i={i} q={f.q} a={f.a} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
