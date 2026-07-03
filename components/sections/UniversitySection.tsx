'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.eduing.in';

const benefits = [
  'Wider applicant reach across India',
  'Structured application pipeline',
  'Real-time analytics dashboard',
  'Verified student document access',
  'Reduced admin workload',
];

const recentApps = [
  { name: 'Priya S.', program: 'B.Tech CSE', status: 'New' },
  { name: 'Rahul V.', program: 'MBBS', status: 'Reviewed' },
  { name: 'Sneha P.', program: 'B.Tech ECE', status: 'Shortlisted' },
];

const barData = [
  { month: 'Jan', height: 35 },
  { month: 'Feb', height: 52 },
  { month: 'Mar', height: 45 },
  { month: 'Apr', height: 68 },
  { month: 'May', height: 85 },
  { month: 'Jun', height: 72 },
];

const statusStyles: Record<string, string> = {
  New: 'bg-accent/10 text-accent-lighter',
  Shortlisted: 'bg-success/10 text-success',
};

export default function UniversitySection() {
  return (
    <section className="section-padding relative overflow-hidden bg-bg" id="universities">
      {/* Subtle glow */}
      <div
        className="pointer-events-none absolute right-[-10%] top-1/2 h-[400px] w-[400px] rounded-full blur-[60px]"
        style={{ background: 'radial-gradient(circle, rgba(91,95,239,0.05) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-main">
        <div className="flex flex-col items-center gap-20 lg:flex-row">
          {/* Left Column */}
          <div className="w-full lg:w-1/2">
            <AnimatedSection>
              <span className="section-label">FOR UNIVERSITIES</span>
              <h2 className="section-title mb-8">
                Reach more students.
                <br />
                <span className="text-white/70">Manage less paperwork.</span>
              </h2>
              <p className="mb-10 text-lg leading-relaxed text-white/50">
                Join EDUING.in to streamline your admissions and connect with qualified applicants nationwide.
              </p>

              <div className="mb-10 flex flex-col gap-5">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-4">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-success/20 bg-success/10">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="#22C55E" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-base font-medium text-white">{benefit}</span>
                  </div>
                ))}
              </div>

              <a href={`${APP_URL}/register`} rel="noopener noreferrer" className="btn-primary">
                Register your university →
              </a>
            </AnimatedSection>
          </div>

          {/* Right Column — University Dashboard Preview */}
          <div className="w-full lg:w-1/2">
            <AnimatedSection delay={0.2}>
              <div className="mob-card p-10" aria-hidden="true">
                {/* Mini Stats */}
                <div className="mb-8 grid grid-cols-3 gap-4">
                  <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4 text-center">
                    <p className="text-2xl font-extrabold text-white">847</p>
                    <p className="mt-1 text-[11px] font-semibold uppercase text-white/30">Apps</p>
                  </div>
                  <div className="rounded-xl border border-success/10 bg-success/5 p-4 text-center">
                    <p className="text-2xl font-extrabold text-success">312</p>
                    <p className="mt-1 text-[11px] font-semibold uppercase text-success/50">Selected</p>
                  </div>
                  <div className="rounded-xl border border-gold/10 bg-gold/5 p-4 text-center">
                    <p className="text-2xl font-extrabold text-gold">234</p>
                    <p className="mt-1 text-[11px] font-semibold uppercase text-gold/50">Pending</p>
                  </div>
                </div>

                {/* Mini Bar Chart */}
                <div className="mb-8">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/30">
                      Application Trend
                    </p>
                    <span className="text-[11px] font-semibold text-accent-lighter">+12% this month</span>
                  </div>
                  <div className="flex h-[100px] items-end gap-3">
                    {barData.map((bar, i) => (
                      <div key={bar.month} className="flex flex-1 flex-col items-center gap-2">
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${bar.height}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                          className={`w-full rounded-t-md ${
                            i === barData.length - 2
                              ? 'bg-gradient-to-b from-[#818CF8] to-accent'
                              : 'bg-white/[0.08]'
                          }`}
                        />
                        <span className="text-[10px] font-semibold text-white/20">{bar.month}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Applications */}
                <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-black/20">
                  {recentApps.map((app, i) => (
                    <div
                      key={app.name}
                      className={`flex items-center justify-between px-4 py-3.5 ${
                        i < recentApps.length - 1 ? 'border-b border-white/5' : ''
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white">{app.name}</span>
                        <span className="text-xs text-white/40">{app.program}</span>
                      </div>
                      <span
                        className={`rounded-md px-2.5 py-1 text-[11px] font-bold uppercase ${
                          statusStyles[app.status] ?? 'bg-white/5 text-white/40'
                        }`}
                      >
                        {app.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
