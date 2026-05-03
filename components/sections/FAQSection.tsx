'use client';

import { useState } from 'react';
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

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding" style={{ background: '#06060A' }} id="faq">
      <div className="container-main">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          {/* Left: Heading */}
          <div className="w-full lg:w-[40%]">
            <AnimatedSection>
              <span className="section-label">FAQ</span>
              <h2 className="section-title mb-6">
                Common<br />questions.
              </h2>
              <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, maxWidth: '320px' }}>
                Everything you need to know about the platform and the admission process.
              </p>
            </AnimatedSection>
          </div>

          {/* Right: FAQ Accordion */}
          <div className="w-full lg:w-[60%]">
            <div className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    style={{
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: '16px',
                      padding: '24px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
                  >
                    <div className="flex justify-between items-center gap-4">
                      <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'white', fontFamily: 'DM Sans, sans-serif' }}>{faq.q}</h3>
                      <div style={{
                        width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s',
                        transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0)'
                      }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M6 1V11M1 6H11" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>
                    
                    <div style={{
                      maxHeight: openIndex === i ? '200px' : '0',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      opacity: openIndex === i ? 1 : 0,
                    }}>
                      <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginTop: '16px', lineHeight: 1.6 }}>
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
