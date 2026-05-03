import type { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'About — EDUING.in',
  description: 'Learn about EDUING.in, our mission to simplify university admissions across India, and meet our founder Aaryan Sharma.',
  openGraph: {
    title: 'About — EDUING.in',
    description: 'Learn about EDUING.in, our mission to simplify university admissions across India.',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding" style={{ background: '#08080A', paddingTop: '160px' }} id="about-hero">
        <div className="mx-auto text-center" style={{ maxWidth: '900px' }}>
          <AnimatedSection>
            <span className="section-label">OUR MISSION</span>
            <h1 className="section-title mb-6">
              About <span style={{ color: '#6366F1' }}>EDUING.in</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '18px', lineHeight: 1.7, maxWidth: '700px', margin: '0 auto' }}>
              We&apos;re building India&apos;s most student-friendly university admissions platform —
              one that removes the chaos of applying to multiple colleges and replaces it with
              a seamless, unified experience.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding" style={{ background: '#0C0C10' }} id="about-problem">
        <div className="mx-auto" style={{ maxWidth: '900px' }}>
          <AnimatedSection>
            <span className="section-label">THE PROBLEM</span>
            <h2 className="section-title mb-8" style={{ fontSize: '36px' }}>Why We Built This</h2>
            <div className="mob-card">
              <p className="text-[16px] leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Every year, millions of students across India go through the painful process of
                applying to universities. They fill the same forms repeatedly, navigate confusing
                eligibility criteria, miss deadlines because there&apos;s no central tracking, and
                struggle to compare institutions objectively.
              </p>
              <p className="text-[16px] leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>
                The system is fragmented — each university has its own portal, its own format,
                its own timeline. Students waste weeks on administrative work that should take hours.
              </p>
              <p className="text-[16px] leading-relaxed font-medium text-white">
                We knew there had to be a better way. That&apos;s why we built EDUING.in.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Solution */}
      <section className="section-padding" style={{ background: '#08080A' }} id="about-solution">
        <div className="mx-auto" style={{ maxWidth: '900px' }}>
          <AnimatedSection>
            <span className="section-label">WHAT WE DO</span>
            <h2 className="section-title mb-8" style={{ fontSize: '36px' }}>Our Solution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mob-card">
                <span className="block mb-3" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
                  FOR STUDENTS
                </span>
                <h3 className="text-[20px] font-bold text-white mb-3">For Students</h3>
                <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Create one comprehensive profile. Discover universities across India.
                  Apply with a single click. Track every application in real-time.
                  No repeated forms, no missed deadlines.
                </p>
              </div>
              <div className="mob-card">
                <span className="block mb-3" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
                  FOR UNIVERSITIES
                </span>
                <h3 className="text-[20px] font-bold text-white mb-3">For Universities</h3>
                <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Receive structured, verified applications. Access a wider pool of qualified
                  applicants. Use analytics to make data-driven admission decisions.
                  Reduce administrative overhead significantly.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding" style={{ background: '#0C0C10' }} id="about-founder">
        <div className="mx-auto" style={{ maxWidth: '900px' }}>
          <AnimatedSection>
            <span className="section-label text-center block">FOUNDER</span>
            <h2 className="section-title mb-8 text-center" style={{ fontSize: '36px' }}>Meet the Founder</h2>
            <div className="mob-card max-w-[600px] mx-auto text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-[32px] mx-auto mb-4"
                style={{ background: 'rgba(79,70,229,0.15)' }}
              >
                👨‍💻
              </div>
              <h3 className="text-[22px] font-bold text-white mb-1">Aaryan Sharma</h3>
              <p className="text-[15px] font-medium mb-1" style={{ color: '#6366F1' }}>Founder & CEO</p>
              <p className="text-[14px] mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
                B.Tech CSE, Dayananda Sagar University
              </p>
              <blockquote
                className="text-[16px] leading-relaxed italic text-left pl-5"
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  borderLeft: '3px solid #4F46E5',
                }}
              >
                &ldquo;I experienced the frustration of college admissions firsthand —
                filling the same details on dozens of portals, missing deadlines, and
                not knowing where I stood. EDUING.in is the solution I wish I had.
                We&apos;re building it so that no student has to go through that chaos again.&rdquo;
              </blockquote>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding" style={{ background: '#08080A' }} id="about-vision">
        <div className="mx-auto text-center" style={{ maxWidth: '900px' }}>
          <AnimatedSection>
            <span className="section-label">VISION</span>
            <h2 className="section-title mb-6" style={{ fontSize: '36px' }}>Our Vision</h2>
            <p className="mb-10" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '18px', lineHeight: 1.7, maxWidth: '700px', margin: '0 auto' }}>
              To become India&apos;s default university admissions infrastructure — where every
              student applies through one platform, and every university receives structured,
              verified applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { value: '2026', label: 'Launch Year' },
                { value: '500+', label: 'Target Universities' },
                { value: '20+', label: 'States Covered' },
              ].map((stat) => (
                <div key={stat.label} className="mob-card px-8 py-5 text-center">
                  <p className="text-[28px] font-bold" style={{ color: '#6366F1' }}>{stat.value}</p>
                  <p className="text-[13px] mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding" style={{ background: '#0C0C10' }} id="about-cta">
        <div className="mx-auto text-center" style={{ maxWidth: '700px' }}>
          <AnimatedSection>
            <div
              className="mx-auto"
              style={{
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '24px',
                padding: '64px 48px',
                background: '#111114',
              }}
            >
              <h2 className="text-[36px] font-bold text-white mb-4">Want to Know More?</h2>
              <p className="mb-8" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '17px' }}>
                We&apos;d love to hear from you. Reach out for partnerships, press, or just to say hello.
              </p>
              <a href="/contact" className="btn-primary">
                Contact Us →
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
