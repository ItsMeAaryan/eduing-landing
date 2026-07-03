'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

// NOTE: these are placeholder/illustrative quotes, not verified real
// testimonials. Swap in real, attributable student/university quotes
// before launch — generic first-name-only quotes read as fabricated.
const testimonials = [
  { quote: 'The application process felt much simpler with everything available in one place.', name: 'Aarav M.', role: 'Maharashtra', color: '#4F46E5' },
  { quote: 'No more filling the same forms. My profile worked for every application.', name: 'Rahul V.', role: 'Delhi', color: '#6366F1' },
  { quote: 'Finally compared programs side by side before making my decision.', name: 'Sneha P.', role: 'Gujarat', color: '#818CF8' },
  { quote: 'Our admission workflow became organized and efficient with EDUING.', name: 'Admin', role: 'Manipal MAHE', color: '#22C55E' },
  { quote: 'Clear applicant analytics helped us understand our audience better.', name: 'Admissions', role: 'VIT Vellore', color: '#F59E0B' },
];

type Testimonial = (typeof testimonials)[number];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="mob-card flex h-full flex-col justify-between">
      <p className="mb-5 text-[15px] leading-relaxed text-white/70">{t.quote}</p>
      <div className="flex items-center gap-3">
        <div
          className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white"
          style={{ background: t.color }}
          aria-hidden="true"
        >
          {t.name[0]}
        </div>
        <div>
          <p className="text-sm font-medium text-white">{t.name}</p>
          <p className="text-[13px] text-white/35">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-[#08080A]" id="testimonials">
      <div className="container-main">
        <AnimatedSection>
          <span className="section-label">TESTIMONIALS</span>
          <h2 className="section-title mb-16">Loved by students across India</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <AnimatedSection key={t.name + i} delay={i * 0.08}>
              <TestimonialCard t={t} />
            </AnimatedSection>
          ))}
        </div>

        <div className="mx-auto mt-4 grid max-w-[732px] grid-cols-1 gap-4 md:grid-cols-2">
          {testimonials.slice(3).map((t, i) => (
            <AnimatedSection key={t.name + i} delay={(i + 3) * 0.08}>
              <TestimonialCard t={t} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
