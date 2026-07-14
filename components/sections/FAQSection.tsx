'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'

const faqs = [
  {
    q: 'Can I apply to multiple universities?',
    a: 'Yes. Your single EDUING profile acts as a universal application. You can submit it to any partner university without re-entering your information or uploading duplicate documents.'
  },
  {
    q: 'Do I need to create multiple accounts?',
    a: 'No. One EDUING account gives you access to the entire university network. You can manage all your applications, documents, and communication from a single unified dashboard.'
  },
  {
    q: 'How does AI recommend programs?',
    a: 'Our recommendation engine analyzes your academic background, test scores, and career goals. It then matches your profile against historical admission data to suggest programs where you have the highest probability of acceptance.'
  },
  {
    q: 'Can I track every application?',
    a: 'Yes. The dashboard provides real-time status updates for every application you submit. You will receive notifications when your documents are verified, when your application is under review, and when an offer is made.'
  },
  {
    q: 'Are my documents secure?',
    a: 'All uploaded documents are encrypted and stored securely. They are only shared with the specific universities you choose to apply to, ensuring complete privacy and data protection.'
  },
  {
    q: 'Is EDUING free for students?',
    a: "Yes. Creating a profile and using the platform's core features are completely free for students. Standard university application fees still apply and are processed directly by the respective institutions."
  }
]

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="mb-4 overflow-hidden rounded-[16px] border border-white/5 bg-white/[0.02] transition-colors duration-200 hover:border-white/15">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${q.replace(/\s+/g, '-')}`}
        className="flex w-full items-center justify-between p-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/50 focus-visible:outline-offset-2"
      >
        <h3 className="text-[15px] font-medium text-white">{q}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex h-5 w-5 shrink-0 items-center justify-center text-white/40"
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${q.replace(/\s+/g, '-')}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 pr-12 text-[14px] leading-relaxed text-white/50">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative bg-bg px-6 py-24 lg:py-32" id="faq" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-[900px]">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1">
            <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/70">
              FAQ
            </span>
          </div>
          <h2 id="faq-heading" className="mb-4 font-display text-3xl font-extrabold tracking-[-0.02em] text-white lg:text-4xl">
            Everything You Need to Know
          </h2>
          <p className="text-base text-white/50">
            Common questions about using EDUING.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mb-12 flex flex-col">
          {faqs.map((faq, i) => (
            <motion.div 
              key={faq.q}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <FAQItem
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 text-sm"
        >
          <span className="text-white/50">Still have questions?</span>
          <button className="group flex items-center gap-1 font-medium text-white transition-colors hover:text-white/80">
            Contact our team <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
