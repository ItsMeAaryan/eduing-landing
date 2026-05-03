'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

const features = [
  {
    label: 'PROFILE',
    title: 'One profile. Apply everywhere.',
    desc: 'Build your academic profile once. Apply to hundreds of universities without filling forms again.',
    span: 'col-span-1 md:col-span-2',
    bg: '#13131A',
  },
  {
    label: 'DISCOVERY',
    title: 'Find your university',
    desc: 'Filter by state, program, fees, entrance exams, and more.',
    span: 'col-span-1',
    bg: '#111114',
  },
  {
    label: 'TRACKING',
    title: 'Track in real-time',
    desc: 'Live updates from universities directly on your dashboard.',
    span: 'col-span-1',
    bg: '#111114',
  },
  {
    label: 'DOCUMENTS',
    title: 'Upload once, use always',
    desc: 'Secure, reusable document storage for all your applications.',
    span: 'col-span-1',
    bg: '#111114',
  },
  {
    label: 'DEADLINES',
    title: 'Never miss a deadline',
    desc: 'Automated alerts and reminders keep you on schedule.',
    span: 'col-span-1',
    bg: '#111114',
  },
  {
    label: 'ANALYTICS',
    title: 'Universities get insights',
    desc: 'Applicant data, trends, and conversion metrics for institutions.',
    span: 'col-span-1',
    bg: '#111114',
  },
];

export default function FeaturesSection() {
  return (
    <section className="section-padding" style={{ background: '#08080A' }} id="features">
      <div className="container-main">
        <AnimatedSection>
          <span className="section-label">FEATURES</span>
          <h2 className="section-title mb-16" style={{ maxWidth: '600px' }}>
            Everything you need
            <br />
            to get admitted
          </h2>
        </AnimatedSection>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <AnimatedSection key={i} delay={i * 0.08} className={feature.span}>
              <div
                className="mob-card h-full"
                style={{ background: feature.bg }}
              >
                {/* Card Label */}
                <span
                  className="block mb-3"
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    color: 'rgba(255,255,255,0.3)',
                    textTransform: 'uppercase',
                  }}
                >
                  {feature.label}
                </span>
                {/* Card Title */}
                <h3 className="text-[20px] font-bold text-white mb-2">
                  {feature.title}
                </h3>
                {/* Card Description */}
                <p
                  className="text-[14px] leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                >
                  {feature.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
