'use client';

import { useState, FormEvent } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // TODO: wire up to a real backend/email endpoint (e.g. an API route
    // that sends via Resend/SendGrid, or a form service). Previously this
    // silently wrote to localStorage, which meant every "sent" message was
    // actually lost — never delivered to anyone.
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputFocusClass =
    'w-full px-4 py-3 text-[15px] bg-surface-2 border border-white/[0.08] text-text-primary rounded-lg focus:outline-none focus:border-accent transition-colors';

  return (
    <section className="section-padding pt-40 bg-surface-alt" id="contact">
      <div className="container-main">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="section-label">CONTACT</span>
            <h1 className="section-title mb-4">Get in touch</h1>
            <p className="text-white/50 text-[17px]">
              Have a question or want to partner? We&apos;d love to hear from you.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatedSection delay={0.1}>
            <div className="mob-card h-full">
              <h2 className="text-[22px] font-bold text-white mb-8">Contact Information</h2>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-[18px] flex-shrink-0 bg-accent/[0.15]" aria-hidden="true">
                    📧
                  </div>
                  <div>
                    <p className="text-[15px] font-medium text-white mb-1">Email</p>
                    <a
                      href="mailto:eduing.in2026@gmail.com"
                      className="text-[14px] text-accent-lighter hover:text-white transition-colors"
                    >
                      eduing.in2026@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-[18px] flex-shrink-0 bg-gold/[0.15]" aria-hidden="true">
                    📍
                  </div>
                  <div>
                    <p className="text-[15px] font-medium text-white mb-1">Location</p>
                    <p className="text-[14px] text-white/45">Bengaluru, Karnataka, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/[0.08]">
                <h3 className="text-[16px] font-bold text-white mb-2">For University Partnerships</h3>
                <p className="text-[14px] mb-2 text-white/45">
                  Interested in bringing EDUING.in to your institution?
                </p>
                <a
                  href="mailto:eduing.in2026@gmail.com"
                  className="text-[14px] font-medium text-accent-lighter hover:text-white transition-colors"
                >
                  eduing.in2026@gmail.com →
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mob-card h-full">
              <h2 className="text-[22px] font-bold text-white mb-8">Send a Message</h2>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-lg bg-success/10 border border-success/25" role="status">
                  <p className="text-[14px] font-medium text-success">
                    Message sent successfully! We&apos;ll get back to you soon.
                  </p>
                </div>
              )}
              {status === 'error' && (
                <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/25" role="alert">
                  <p className="text-[14px] font-medium text-red-400">
                    Something went wrong sending your message. Please email us directly instead.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-5" id="contact-form">
                <div>
                  <label htmlFor="name" className="block text-[14px] font-medium text-white mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputFocusClass}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[14px] font-medium text-white mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputFocusClass}
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[14px] font-medium text-white mb-2">Subject</label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={inputFocusClass}
                  >
                    <option>General Inquiry</option>
                    <option>University Partnership</option>
                    <option>Student Support</option>
                    <option>Technical Issue</option>
                    <option>Press &amp; Media</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[14px] font-medium text-white mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputFocusClass} resize-none`}
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  id="contact-submit"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Message →'}
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
