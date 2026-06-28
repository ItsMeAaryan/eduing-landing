'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

export default function CTASection() {
  return (
    <section className="section-padding" style={{ background: '#06060A', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '800px', height: '400px', background: 'radial-gradient(circle, rgba(91,95,239,0.1) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none'
      }} />

      <div className="container-main text-center">
        <AnimatedSection>
          <h2 className="section-title mb-8" style={{ fontSize: 'clamp(32px, 6vw, 56px)' }}>
            Ready to start your<br />
            <span style={{ color: 'var(--indigo)' }}>university journey?</span>
          </h2>
          
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="app.eduing.in" className="btn-primary" style={{ padding: '16px 40px', fontSize: '16px' }}>
              Create your profile →
            </a>
            <a href="/about" style={{
              padding: '16px 40px', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)',
              color: 'white', fontWeight: '600', fontSize: '16px', textDecoration: 'none', transition: 'all 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              Learn more
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
