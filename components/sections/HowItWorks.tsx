'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

const steps = [
  {
    num: '01',
    title: 'Create Your Profile',
    desc: 'Add your academic details, marks, and entrance scores once.',
  },
  {
    num: '02',
    title: 'Discover Universities',
    desc: 'Search and filter 500+ universities by state, program, and eligibility.',
  },
  {
    num: '03',
    title: 'Apply in Seconds',
    desc: 'Submit applications with your saved profile. No repeated data entry.',
  },
  {
    num: '04',
    title: 'Track & Get Admitted',
    desc: 'Real-time status updates from universities directly on your dashboard.',
  },
];

export default function HowItWorks() {
  return (
    <section
      className="section-padding"
      style={{ background: '#0C0C10' }}
      id="how-it-works"
    >
      <div className="mx-auto" style={{ maxWidth: '800px' }}>
        <AnimatedSection>
          <span className="section-label">HOW IT WORKS</span>
          <h2 className="section-title mb-4">Simple. Fast. Effective.</h2>
          <p
            className="mb-16"
            style={{ fontSize: '18px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}
          >
            Four steps to your dream university.
          </p>
        </AnimatedSection>

        {/* Steps — Vertical list */}
        <div className="flex flex-col">
          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div
                className="flex gap-8 py-8"
                style={{
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {/* Step Number */}
                <span
                  className="flex-shrink-0 w-8"
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.2)',
                  }}
                >
                  {step.num}
                </span>
                {/* Step Content */}
                <div>
                  <h3 className="text-[20px] font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p
                    className="text-[15px] leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.45)' }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
