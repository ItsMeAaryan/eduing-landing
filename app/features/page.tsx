import type { Metadata } from 'next';
import Features from '@/components/landing/Features';
import CTASection from '@/components/sections/CTASection';
import ApplicationTrackingSection from '@/components/sections/ApplicationTrackingSection';
import UniversityComparisonSection from '@/components/sections/UniversityComparisonSection';
import SmartDocumentVaultSection from '@/components/sections/SmartDocumentVaultSection';
import UniversitiesFeatureSection from '@/components/sections/UniversitiesFeatureSection';
import PlatformInActionSection from '@/components/sections/PlatformInActionSection';

export const metadata: Metadata = {
  title: 'Features',
  description: 'Discover the features of EDUING.in — the ultimate platform for university admissions.',
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-bg pt-14">
      <div
        className="px-6 pb-10 pt-20 text-center"
        style={{ background: 'radial-gradient(ellipse at top, rgba(91,95,239,0.15) 0%, transparent 60%)' }}
      >
        <h1 className="mb-5 font-display text-[clamp(40px,5vw,64px)] font-extrabold tracking-[-0.03em] text-white">
          Powerful features for a
          <br />
          <span className="text-accent-lighter">seamless admission journey</span>
        </h1>
        <p className="mx-auto max-w-[600px] text-lg text-white/60">
          Everything you need to discover, apply, and get admitted to top universities across India without the
          usual stress.
        </p>
      </div>
      <Features />
      <ApplicationTrackingSection />
      <UniversityComparisonSection />
      <SmartDocumentVaultSection />
      <UniversitiesFeatureSection />
      <PlatformInActionSection />
      <CTASection />
    </main>
  );
}
