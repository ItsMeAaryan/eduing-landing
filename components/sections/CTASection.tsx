'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.eduing.in';

export default function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden bg-bg">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(91,95,239,0.1) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-main text-center">
        <AnimatedSection>
          <h2 className="section-title mb-8 text-[clamp(32px,6vw,56px)]">
            Ready to start your
            <br />
            <span className="text-accent">university journey?</span>
          </h2>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={APP_URL}
              rel="noopener noreferrer"
              className="btn-primary px-10 py-4 text-base"
            >
              Create your profile →
            </a>
            <a
              href="/about"
              className="rounded-full border border-white/10 px-10 py-4 text-base font-semibold text-white no-underline transition-colors duration-200 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-lighter focus-visible:outline-offset-2"
            >
              Learn more
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
