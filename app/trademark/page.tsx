import type { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Trademark — EDUING.in',
  description: 'Trademark notice and brand guidelines for EDUING.in.',
  openGraph: {
    title: 'Trademark — EDUING.in',
    description: 'Trademark and brand usage guidelines for EDUING.in.',
  },
};

export default function TrademarkPage() {
  return (
    <section className="section-padding" style={{ background: '#08080A', paddingTop: '160px' }} id="trademark">
      <div className="mx-auto" style={{ maxWidth: '900px' }}>
        <AnimatedSection>
          <span className="section-label">LEGAL</span>
          <h1 className="section-title mb-2" style={{ fontSize: '40px' }}>Trademark Notice</h1>
          <p className="text-[15px] mb-12" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Effective: April 2026
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mob-card">
            <div className="flex flex-col gap-10">
              {/* Trademarks */}
              <div>
                <h2 className="text-[20px] font-bold text-white mb-3">Trademarks</h2>
                <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  <strong className="text-white">EDUING</strong> and <strong className="text-white">EDUING.in</strong> are
                  trademarks of EDUING.in. The EDUING logo, brand name, and associated visual identity
                  are proprietary and protected under applicable trademark and intellectual property laws
                  of India.
                </p>
              </div>

              {/* Logo & Visual Identity */}
              <div>
                <h2 className="text-[20px] font-bold text-white mb-4">Logo & Visual Identity</h2>
                <p className="text-[15px] leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  The EDUING.in logo consists of:
                </p>
                <div
                  className="flex items-center justify-center py-10 mb-6 rounded-xl"
                  style={{ background: '#18181C', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="flex items-baseline gap-0 select-none">
                    <span className="text-4xl font-extrabold text-white tracking-tight">EDU</span>
                    <span className="text-4xl font-extrabold tracking-tight" style={{ color: '#4F46E5' }}>ING</span>
                    <span className="text-2xl font-bold ml-[1px]" style={{ color: '#F59E0B' }}>.in</span>
                  </div>
                </div>
                <ul className="list-disc list-inside text-[15px] leading-relaxed flex flex-col gap-2 ml-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  <li><strong className="text-white">&ldquo;EDU&rdquo;</strong> — displayed in white (#FAFAFA), representing education</li>
                  <li><strong className="text-white">&ldquo;ING&rdquo;</strong> — displayed in Indigo (#4F46E5), our primary brand color</li>
                  <li><strong className="text-white">&ldquo;.in&rdquo;</strong> — displayed in Gold (#F59E0B), representing India</li>
                </ul>
              </div>

              {/* Brand Colors */}
              <div>
                <h2 className="text-[20px] font-bold text-white mb-4">Brand Colors</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  {[
                    { name: 'Primary Indigo', hex: '#4F46E5', color: '#4F46E5' },
                    { name: 'Secondary Gold', hex: '#F59E0B', color: '#F59E0B' },
                    { name: 'Primary Text', hex: '#FAFAFA', color: '#FAFAFA' },
                  ].map((c) => (
                    <div key={c.name} className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-lg flex-shrink-0"
                        style={{ background: c.color, border: c.name === 'Primary Text' ? '1px solid rgba(255,255,255,0.15)' : 'none' }}
                      />
                      <div>
                        <p className="text-[14px] font-medium text-white">{c.name}</p>
                        <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{c.hex}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Permitted Use */}
              <div>
                <h2 className="text-[20px] font-bold text-white mb-3">Permitted Use</h2>
                <ul className="list-disc list-inside text-[15px] leading-relaxed flex flex-col gap-2 ml-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  <li>Press mentions and editorial references with proper credit</li>
                  <li>Educational or academic references to the platform</li>
                  <li>Linking to EDUING.in from partner university websites</li>
                  <li>Social media mentions with appropriate attribution</li>
                </ul>
              </div>

              {/* Not Permitted */}
              <div>
                <h2 className="text-[20px] font-bold text-white mb-3">Not Permitted</h2>
                <ul className="list-disc list-inside text-[15px] leading-relaxed flex flex-col gap-2 ml-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  <li>Commercial use of the EDUING brand without written license</li>
                  <li>Modifying, distorting, or altering the logo in any way</li>
                  <li>Using the EDUING name to imply endorsement or partnership without agreement</li>
                  <li>Creating derivative works based on our brand identity</li>
                  <li>Using our trademarks in domain names, social media handles, or app names</li>
                </ul>
              </div>

              {/* Licensing */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
                <h2 className="text-[20px] font-bold text-white mb-3">Licensing & Permissions</h2>
                <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  For trademark licensing requests, press kit access, or brand usage permissions,
                  please contact us at:<br />
                  <strong className="text-white">Email:</strong>{' '}
                  <a href="mailto:eduing.in2026@gmail.com" className="hover:text-white transition-colors" style={{ color: '#818CF8' }}>
                    eduing.in2026@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
