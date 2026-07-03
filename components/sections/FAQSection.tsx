'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';

const faqs = [
  {
    q: 'How does EDUING.in help me with applications?',
    a: 'We provide a single platform where you create your academic profile once and use it to apply to multiple universities. This eliminates the need to fill out separate forms for each institution.',
  },
  {
    q: 'Are the university listings verified?',
    a: 'Yes, we work directly with university admissions departments to ensure all information regarding programs, fees, and eligibility is accurate and up-to-date.',
  },
  {
    q: 'Is my data secure on the platform?',
    a: 'We use industry-standard encryption to protect your personal and academic documents. Your data is only shared with universities you explicitly choose to apply to.',
  },
  {
    q: 'Can I track my application status?',
    a: 'Absolutely. Your dashboard provides real-time updates on every application you submit, from initial review to final admission decision.',
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-colors duration-300 hover:border-white/[0.15]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 p-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-lighter focus-visible:outline-offset-2"
      >
        <h3 className="text-lg font-semibold text-white">{q}</h3>
        <div
          className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/5 transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
          aria-hidden="true"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1V11M1 6H11" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-[15px] leading-relaxed text-white/50">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-bg" id="faq">
      <div className="container-main">
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-24">
          <div className="w-full lg:w-[40%]">
            <AnimatedSection>
              <span className="section-label">FAQ</span>
              <h2 className="section-title mb-6">
                Common
                <br />
                questions.
              </h2>
              <p className="max-w-[320px] text-[17px] leading-relaxed text-white/45">
                Everything you need to know about the platform and the admission process.
              </p>
            </AnimatedSection>
          </div>

          <div className="w-full lg:w-[60%]">
            <div className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <AnimatedSection key={faq.q} delay={i * 0.1}>
                  <FAQItem
                    q={faq.q}
                    a={faq.a}
                    isOpen={openIndex === i}
                    onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
