import type { Metadata } from 'next';
import Features from '@/components/landing/Features';
import PageHero from '@/components/ui/PageHero';
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
    <main>
      <PageHero
        eyebrow="Features"
        title={['Powerful features for a ', { text: 'seamless admission journey.', className: 'text-gradient' }]}
        subtitle="Everything you need to discover, apply, and get admitted to top universities across India — without the usual stress."
      />
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
