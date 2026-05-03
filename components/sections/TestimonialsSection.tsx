'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

const testimonials = [
  {
    quote: 'EDUING saved me hours. Applied to 5 universities in one afternoon.',
    name: 'Priya S.',
    role: 'Karnataka',
    color: '#4F46E5',
  },
  {
    quote: 'No more filling the same forms. My profile worked for every application.',
    name: 'Rahul V.',
    role: 'Delhi',
    color: '#6366F1',
  },
  {
    quote: 'Finally compared programs side by side before making my decision.',
    name: 'Sneha P.',
    role: 'Gujarat',
    color: '#818CF8',
  },
  {
    quote: 'Our admission workflow became organized and efficient with EDUING.',
    name: 'Admin',
    role: 'Manipal MAHE',
    color: '#22C55E',
  },
  {
    quote: 'Clear applicant analytics helped us understand our audience better.',
    name: 'Admissions',
    role: 'VIT Vellore',
    color: '#F59E0B',
  },
];

export default function TestimonialsSection() {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="section-padding" style={{ background: '#08080A' }} id="testimonials">
      <div className="container-main">
        <AnimatedSection>
          <span className="section-label">TESTIMONIALS</span>
          <h2 className="section-title mb-16">Loved by students across India</h2>
        </AnimatedSection>

        {/* Grid — 3 cols top, 2 cols bottom centered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.slice(0, 3).map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="mob-card h-full flex flex-col justify-between">
                <p
                  className="text-[15px] leading-relaxed mb-5"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold text-white"
                    style={{ background: t.color }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-white">{t.name}</p>
                    <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom row — 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 max-w-[732px] mx-auto">
          {testimonials.slice(3).map((t, i) => (
            <AnimatedSection key={i + 3} delay={(i + 3) * 0.08}>
              <div className="mob-card h-full flex flex-col justify-between">
                <p
                  className="text-[15px] leading-relaxed mb-5"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold text-white"
                    style={{ background: t.color }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-white">{t.name}</p>
                    <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
