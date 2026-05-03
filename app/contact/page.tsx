'use client';

import { useState, FormEvent } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (typeof window !== 'undefined') {
      try {
        const existing = JSON.parse(window.localStorage.getItem('eduing_contacts') || '[]');
        existing.push({
          ...formData,
          timestamp: new Date().toISOString(),
        });
        window.localStorage.setItem('eduing_contacts', JSON.stringify(existing));
      } catch (error) {
        console.error('Error saving to localStorage:', error);
      }
    }

    setSubmitted(true);
    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });

    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputStyle = {
    background: '#18181C',
    border: '1px solid rgba(255,255,255,0.08)',
    color: '#FAFAFA',
    borderRadius: '8px',
  };

  const inputFocusClass = 'w-full px-4 py-3 text-[15px] focus:outline-none focus:border-accent transition-colors';

  return (
    <>
      <section className="section-padding" style={{ background: '#08080A', paddingTop: '160px' }} id="contact">
        <div className="container-main">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="section-label">CONTACT</span>
              <h1 className="section-title mb-4">Get in touch</h1>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '17px' }}>
                Have a question or want to partner? We&apos;d love to hear from you.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left — Contact Info */}
            <AnimatedSection delay={0.1}>
              <div className="mob-card h-full">
                <h2 className="text-[22px] font-bold text-white mb-8">Contact Information</h2>

                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-[18px] flex-shrink-0"
                      style={{ background: 'rgba(79,70,229,0.15)' }}
                    >
                      📧
                    </div>
                    <div>
                      <p className="text-[15px] font-medium text-white mb-1">Email</p>
                      <a
                        href="mailto:aaryanlsichey007@gmail.com"
                        className="text-[14px] hover:text-white transition-colors"
                        style={{ color: '#818CF8' }}
                      >
                        aaryanlsichey007@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-[18px] flex-shrink-0"
                      style={{ background: 'rgba(34,197,94,0.15)' }}
                    >
                      📞
                    </div>
                    <div>
                      <p className="text-[15px] font-medium text-white mb-1">Phone</p>
                      <a
                        href="tel:7908732866"
                        className="text-[14px] hover:text-white transition-colors"
                        style={{ color: '#818CF8' }}
                      >
                        7908732866
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-[18px] flex-shrink-0"
                      style={{ background: 'rgba(245,158,11,0.15)' }}
                    >
                      📍
                    </div>
                    <div>
                      <p className="text-[15px] font-medium text-white mb-1">Location</p>
                      <p className="text-[14px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        Bengaluru, Karnataka, India
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="mt-10 pt-8"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <h3 className="text-[16px] font-bold text-white mb-2">For University Partnerships</h3>
                  <p className="text-[14px] mb-2" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    Interested in bringing EDUING.in to your institution?
                  </p>
                  <a
                    href="mailto:aaryanlsichey007@gmail.com"
                    className="text-[14px] font-medium hover:text-white transition-colors"
                    style={{ color: '#818CF8' }}
                  >
                    aaryanlsichey007@gmail.com →
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Right — Contact Form */}
            <AnimatedSection delay={0.2}>
              <div className="mob-card h-full">
                <h2 className="text-[22px] font-bold text-white mb-8">Send a Message</h2>

                {submitted && (
                  <div
                    className="mb-6 p-4 rounded-lg"
                    style={{
                      background: 'rgba(34,197,94,0.1)',
                      border: '1px solid rgba(34,197,94,0.25)',
                    }}
                  >
                    <p className="text-[14px] font-medium" style={{ color: '#22C55E' }}>
                      ✅ Message sent successfully! We&apos;ll get back to you soon.
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
                      style={inputStyle}
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
                      style={inputStyle}
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
                      style={inputStyle}
                    >
                      <option>General Inquiry</option>
                      <option>University Partnership</option>
                      <option>Student Support</option>
                      <option>Technical Issue</option>
                      <option>Press & Media</option>
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
                      style={inputStyle}
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center" id="contact-submit">
                    Send Message →
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
