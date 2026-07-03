import type { Metadata } from 'next';
import LegalPageLayout from '@/components/ui/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Trademark — EDUING.in',
  description: 'Trademark notice and brand guidelines for EDUING.in.',
  openGraph: {
    title: 'Trademark — EDUING.in',
    description: 'Trademark and brand usage guidelines for EDUING.in.',
  },
};

const brandColors = [
  { name: 'Primary Indigo', hex: '#5B5FEF' },
  { name: 'Secondary Gold', hex: '#F59E0B' },
  { name: 'Primary Text', hex: '#FFFFFF' },
];

export default function TrademarkPage() {
  return (
    <LegalPageLayout title="Trademark Notice" effectiveDate="April 2026" id="trademark">
      <div>
        <h2 className="mb-3 text-xl font-bold text-white">Trademarks</h2>
        <p className="text-[15px] leading-relaxed text-white/55">
          <strong className="text-white">EDUING</strong> and <strong className="text-white">EDUING.in</strong> are
          trademarks of EDUING.in. The EDUING logo, brand name, and associated visual identity are proprietary and
          protected under applicable trademark and intellectual property laws of India.
        </p>
      </div>

      <div>
        <h2 className="mb-4 text-xl font-bold text-white">Logo &amp; Visual Identity</h2>
        <p className="mb-6 text-[15px] leading-relaxed text-white/55">The EDUING.in logo consists of:</p>
        <div className="mb-6 flex items-center justify-center rounded-xl border border-white/[0.06] bg-surface-2 py-10">
          <div className="flex select-none items-baseline gap-0">
            <span className="text-4xl font-extrabold tracking-tight text-white">EDU</span>
            <span className="text-4xl font-extrabold tracking-tight text-accent">ING</span>
            <span className="ml-px text-2xl font-bold text-gold">.in</span>
          </div>
        </div>
        <ul className="ml-2 flex list-inside list-disc flex-col gap-2 text-[15px] leading-relaxed text-white/55">
          <li>
            <strong className="text-white">&ldquo;EDU&rdquo;</strong> — displayed in white (#FFFFFF), representing
            education
          </li>
          <li>
            <strong className="text-white">&ldquo;ING&rdquo;</strong> — displayed in Indigo (#5B5FEF), our primary
            brand color
          </li>
          <li>
            <strong className="text-white">&ldquo;.in&rdquo;</strong> — displayed in Gold (#F59E0B), representing
            India
          </li>
        </ul>
      </div>

      <div>
        <h2 className="mb-4 text-xl font-bold text-white">Brand Colors</h2>
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
          {brandColors.map((c) => (
            <div key={c.name} className="flex items-center gap-3">
              <div
                className={`h-12 w-12 flex-shrink-0 rounded-lg ${
                  c.name === 'Primary Text' ? 'border border-white/15' : ''
                }`}
                style={{ background: c.hex }}
              />
              <div>
                <p className="text-sm font-medium text-white">{c.name}</p>
                <p className="text-[13px] text-white/40">{c.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-3 text-xl font-bold text-white">Permitted Use</h2>
        <ul className="ml-2 flex list-inside list-disc flex-col gap-2 text-[15px] leading-relaxed text-white/55">
          <li>Press mentions and editorial references with proper credit</li>
          <li>Educational or academic references to the platform</li>
          <li>Linking to EDUING.in from partner university websites</li>
          <li>Social media mentions with appropriate attribution</li>
        </ul>
      </div>

      <div>
        <h2 className="mb-3 text-xl font-bold text-white">Not Permitted</h2>
        <ul className="ml-2 flex list-inside list-disc flex-col gap-2 text-[15px] leading-relaxed text-white/55">
          <li>Commercial use of the EDUING brand without written license</li>
          <li>Modifying, distorting, or altering the logo in any way</li>
          <li>Using the EDUING name to imply endorsement or partnership without agreement</li>
          <li>Creating derivative works based on our brand identity</li>
          <li>Using our trademarks in domain names, social media handles, or app names</li>
        </ul>
      </div>

      <div className="border-t border-white/[0.08] pt-4">
        <h2 className="mb-3 text-xl font-bold text-white">Licensing &amp; Permissions</h2>
        <p className="text-[15px] leading-relaxed text-white/55">
          For trademark licensing requests, press kit access, or brand usage permissions, please contact us at:
          <br />
          <strong className="text-white">Email:</strong>{' '}
          <a href="mailto:eduing.in2026@gmail.com" className="text-accent-lighter transition-colors hover:text-white">
            eduing.in2026@gmail.com
          </a>
        </p>
      </div>
    </LegalPageLayout>
  );
}
