'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, Mail, Building2, MapPin, 
  GraduationCap, Bug, Lightbulb,
  Clock, ChevronDown, CheckCircle2, AlertCircle, ArrowRight
} from 'lucide-react';

const subjects = [
  'General Question',
  'Student Support',
  'University Partnership',
  'Feedback',
  'Bug Report',
  'Media',
  'Other'
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Question',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setFormData({ name: '', email: '', subject: 'General Question', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputClass = "w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 text-[15px] text-white outline-none transition-all focus:border-[#818CF8] focus:bg-white/[0.05] focus:shadow-[0_0_15px_rgba(129,140,248,0.1)] placeholder:text-white/30 backdrop-blur-sm";

  return (
    <main className="flex flex-col bg-bg text-white overflow-hidden pb-32">
      
      {/* SECTION 1 — PREMIUM HERO */}
      <section className="relative flex flex-col items-center justify-center px-6 pt-32 pb-24 text-center">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#818CF8]/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 mx-auto max-w-[900px] flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#818CF8]/20 bg-[#818CF8]/10 px-3 py-1"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#818CF8]">
              CONTACT
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-5xl font-extrabold leading-[1.15] tracking-tight text-white md:text-6xl lg:text-7xl mb-6"
          >
            Let&apos;s Build the <span className="bg-gradient-to-r from-[#818CF8] to-[#5B5FEF] bg-clip-text text-transparent">Future</span><br />
            of University Admissions.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/50 mb-10 max-w-[600px] leading-relaxed"
          >
            Whether you&apos;re a student, university, or potential partner, we&apos;d love to hear from you. Our team usually responds within one business day.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              { icon: Zap, label: 'Usually replies within 24 hours', color: 'text-yellow-400' },
              { icon: Mail, label: 'General Support', color: 'text-blue-400' },
              { icon: Building2, label: 'University Partnerships', color: 'text-emerald-400' },
              { icon: MapPin, label: 'Bengaluru, India', color: 'text-orange-400' },
            ].map((pill, i) => (
              <div key={i} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
                <pill.icon size={12} className={pill.color} />
                <span className="text-[12px] font-bold tracking-wide text-white/80">{pill.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — CHOOSE WHY YOU'RE HERE */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px] flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold text-white mb-12"
          >
            How can we help?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {[
              { icon: GraduationCap, title: 'Student Support', desc: 'Questions about admissions, applications, profile or documents.', color: 'text-blue-400' },
              { icon: Building2, title: 'University Partnerships', desc: 'Interested in onboarding your university onto EDUING.', color: 'text-emerald-400' },
              { icon: Lightbulb, title: 'Feedback', desc: 'Ideas, feature requests and suggestions.', color: 'text-yellow-400' },
              { icon: Bug, title: 'Report an Issue', desc: 'Found a bug? Tell us so we can improve.', color: 'text-red-400' }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04] hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.05)] cursor-pointer"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ${card.color} group-hover:scale-110 transition-transform`}>
                  <card.icon size={24} />
                </div>
                <h3 className="text-[17px] font-bold text-white">{card.title}</h3>
                <p className="text-[13px] text-white/50 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 & 4 — CONTACT FORM AND OTHER WAYS */}
      <section className="px-6 py-24 bg-[#050505]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
            
            {/* SECTION 3 - PREMIUM CONTACT FORM */}
            <div className="lg:col-span-3">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col rounded-3xl border border-white/5 bg-[#0A0A0A] p-6 md:p-10 shadow-2xl relative overflow-hidden"
              >
                <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>

                <AnimatePresence mode="wait">
                  {status === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-8 overflow-hidden"
                      role="status"
                    >
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                        <CheckCircle2 size={20} />
                        <p className="text-[14px] font-medium">Message sent successfully! We&apos;ll get back to you soon.</p>
                      </div>
                    </motion.div>
                  )}
                  
                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-8 overflow-hidden"
                      role="alert"
                    >
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                        <AlertCircle size={20} />
                        <p className="text-[14px] font-medium">Something went wrong sending your message. Please try again.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6" id="contact-form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-[13px] font-bold text-white/70 ml-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={inputClass}
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[13px] font-bold text-white/70 ml-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={inputClass}
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <label htmlFor="subject" className="text-[13px] font-bold text-white/70 ml-1">How can we help?</label>
                    <div className="flex flex-wrap gap-2">
                      {subjects.map((subj) => (
                        <button
                          key={subj}
                          type="button"
                          onClick={() => setFormData({ ...formData, subject: subj })}
                          className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-all ${
                            formData.subject === subj
                              ? 'border-[#818CF8] bg-[#818CF8]/10 text-[#818CF8] shadow-[0_0_15px_rgba(129,140,248,0.2)]'
                              : 'border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          {subj}
                        </button>
                      ))}
                    </div>
                    {/* Hidden select for compatibility or strict testing if needed */}
                    <select 
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="sr-only"
                      aria-hidden="true"
                    >
                      {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[13px] font-bold text-white/70 ml-1">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell us what you need help with..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#818CF8] to-[#5B5FEF] px-6 py-4 text-[15px] font-bold text-white shadow-[0_0_20px_rgba(91,95,239,0.3)] transition-all hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(91,95,239,0.5)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 mt-2"
                    id="contact-submit"
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center gap-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>

            {/* SECTION 4 - OTHER WAYS TO REACH US */}
            <div className="lg:col-span-2 flex flex-col">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-white mb-8"
              >
                Other Ways to Reach Us
              </motion.h2>

              <div className="flex flex-col gap-4">
                {[
                  { icon: Mail, title: 'Email', subtitle: 'General enquiries', val: 'eduing.in2026@gmail.com', desc: 'Usually replies within one business day', color: 'text-[#818CF8]', link: 'mailto:eduing.in2026@gmail.com' },
                  { icon: Building2, title: 'University Partnerships', subtitle: 'Partner with EDUING', val: 'Priority support', color: 'text-emerald-400' },
                  { icon: MapPin, title: 'Location', subtitle: 'Bengaluru', val: 'Karnataka, India', color: 'text-orange-400' },
                  { icon: Clock, title: 'Working Hours', subtitle: 'Monday – Friday', val: '9:00 AM – 6:00 PM IST', color: 'text-blue-400' }
                ].map((info, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                    viewport={{ once: true }}
                    className="group relative flex flex-col rounded-2xl border border-white/5 bg-[#0A0A0A] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 ${info.color}`}>
                        <info.icon size={18} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[15px] font-bold text-white">{info.title}</span>
                        <span className="text-[13px] text-white/50 mt-0.5">{info.subtitle}</span>
                        {info.link ? (
                          <a href={info.link} className="text-[14px] font-medium text-white/90 mt-2 hover:text-[#818CF8] transition-colors">{info.val}</a>
                        ) : (
                          <span className="text-[14px] font-medium text-white/90 mt-2">{info.val}</span>
                        )}
                        {info.desc && <span className="text-[11px] text-white/40 mt-1">{info.desc}</span>}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5 — FAQ */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-[800px] flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold text-white mb-12 text-center"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="w-full flex flex-col gap-3">
            {[
              { q: 'How quickly do you reply?', a: 'Our dedicated support team typically responds to all inquiries within one business day.' },
              { q: 'Is EDUING free for students?', a: 'Yes, the core application tracking and discovery features are completely free for students.' },
              { q: 'How can universities partner with EDUING?', a: 'Universities can partner with us by filling out the contact form above and selecting "University Partnership". Our enterprise team will reach out to schedule a demo.' },
              { q: 'Can I report bugs or suggest features?', a: 'Absolutely. We actively listen to user feedback. Select "Bug Report" or "Feedback" in the contact form.' },
              { q: 'Do you offer technical support?', a: 'Yes, we offer full technical support for students facing issues with their profiles or applications.' }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-xl border border-white/5 bg-[#0A0A0A] transition-colors hover:bg-white/[0.02]"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <span className="text-[15px] font-bold text-white/90">{faq.q}</span>
                  <ChevronDown size={16} className={`text-white/50 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-5 pb-5 text-[14px] text-white/50 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — UNIVERSITY PARTNER CTA */}
      <section className="px-6 py-24 pb-32 overflow-hidden">
        <div className="mx-auto max-w-[1000px]">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center rounded-3xl border border-emerald-500/20 bg-[#0A0A0A] px-6 py-16 text-center shadow-[0_0_50px_rgba(16,185,129,0.1)] overflow-hidden"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                <Building2 size={24} />
              </div>
              <h2 className="mb-6 font-display text-4xl md:text-5xl font-extrabold text-white">
                Bring Your University to EDUING
              </h2>
              <p className="mb-10 max-w-[600px] text-[16px] text-white/50 leading-relaxed">
                Join India&apos;s next-generation university admissions ecosystem and receive structured, verified student applications directly to your dashboard.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button 
                  onClick={() => {
                    setFormData(prev => ({ ...prev, subject: 'University Partnership' }));
                    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3.5 text-[15px] font-bold text-white transition-all hover:bg-emerald-600 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                >
                  Become a Partner <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
                <button 
                  onClick={() => {
                    setFormData(prev => ({ ...prev, subject: 'University Partnership' }));
                    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/10 hover:border-white/20"
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
