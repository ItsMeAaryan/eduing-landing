'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';

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

export default function UniversitySection() {
  if (!benefits || !recentApps || !barData) return null;

  return (
    <section
      className="section-padding"
      style={{ background: '#06060A', position: 'relative', overflow: 'hidden' }}
      id="universities"
    >
      {/* Subtle glow */}
      <div style={{
        position: 'absolute', top: '50%', right: '-10%', width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(91,95,239,0.05) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none'
      }} />

      <div className="container-main">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Left Column */}
          <div className="w-full lg:w-1/2">
            <AnimatedSection>
              <span className="section-label">FOR UNIVERSITIES</span>
              <h2 className="section-title mb-8">
                Reach more students.<br />
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>Manage less paperwork.</span>
              </h2>
              <p
                className="mb-10"
                style={{ fontSize: '18px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}
              >
                Join EDUING.in to streamline your admissions and connect with qualified applicants nationwide.
              </p>

              {/* Benefits List */}
              <div className="flex flex-col gap-5 mb-10">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div style={{
                      width: '24px', height: '24px', borderRadius: '50%',
                      background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="#22C55E" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: '500' }}>{benefit}</span>
                  </div>
                ))}
              </div>

              <a href="/auth/register" className="btn-primary">
                Register your university →
              </a>
            </AnimatedSection>
          </div>

          {/* Right Column — University Dashboard Preview */}
          <div className="w-full lg:w-1/2">
            <AnimatedSection delay={0.2}>
              <div className="mob-card" style={{ padding: '40px' }}>
                {/* Mini Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <p style={{ fontSize: '24px', fontWeight: '800', color: 'white' }}>847</p>
                    <p style={{ fontSize: '11px', fontWeight: '600', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginTop: '4px' }}>
                      Apps
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-xl" style={{ background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.1)' }}>
                    <p style={{ fontSize: '24px', fontWeight: '800', color: '#22C55E' }}>312</p>
                    <p style={{ fontSize: '11px', fontWeight: '600', color: 'rgba(34,197,94,0.5)', textTransform: 'uppercase', marginTop: '4px' }}>
                      Selected
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-xl" style={{ background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.1)' }}>
                    <p style={{ fontSize: '24px', fontWeight: '800', color: '#F59E0B' }}>234</p>
                    <p style={{ fontSize: '11px', fontWeight: '600', color: 'rgba(245,158,11,0.5)', textTransform: 'uppercase', marginTop: '4px' }}>
                      Pending
                    </p>
                  </div>
                </div>

                {/* Mini Bar Chart */}
                <div className="mb-8">
                   <div className="flex justify-between items-center mb-4">
                     <p style={{ fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                       Application Trend
                     </p>
                     <span style={{ fontSize: '11px', color: '#818CF8', fontWeight: '600' }}>+12% this month</span>
                   </div>
                  <div className="flex items-end gap-3" style={{ height: '100px' }}>
                    {barData.map((bar, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${bar.height}%` }}
                          transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                          className="w-full rounded-t-md"
                          style={{
                            background: i === barData.length - 2 
                              ? 'linear-gradient(180deg, #818CF8, #5B5FEF)' 
                              : 'rgba(255,255,255,0.08)',
                          }}
                        />
                        <span style={{ fontSize: '10px', fontWeight: '600', color: 'rgba(255,255,255,0.2)' }}>
                          {bar.month}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Applications Table */}
                <div style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', overflow: 'hidden', background: 'rgba(0,0,0,0.2)' }}>
                  {recentApps.map((app, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-4 py-3.5"
                      style={{
                        borderBottom: i < recentApps.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                      }}
                    >
                      <div className="flex flex-col">
                        <span style={{ fontSize: '14px', fontWeight: '600', color: 'white' }}>{app.name}</span>
                        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
                          {app.program}
                        </span>
                      </div>
                      <span
                        style={{
                          fontSize: '11px', fontWeight: '700', borderRadius: '6px',
                          background: app.status === 'New' ? 'rgba(91,95,239,0.1)' : app.status === 'Shortlisted' ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.05)',
                          color: app.status === 'New' ? '#818CF8' : app.status === 'Shortlisted' ? '#22C55E' : 'rgba(255,255,255,0.4)',
                          padding: '4px 10px',
                          textTransform: 'uppercase',
                        }}
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
