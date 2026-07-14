import dynamic from 'next/dynamic';
import Hero from '@/components/landing/Hero';
import StatsBar from '@/components/sections/StatsBar';

const UniversitySection = dynamic(() => import('@/components/sections/UniversitySection'), { ssr: true });
const Features = dynamic(() => import('@/components/landing/Features'), { ssr: true });
const HowItWorks = dynamic(() => import('@/components/landing/HowItWorks'), { ssr: true });
const ForUniversitiesSection = dynamic(() => import('@/components/sections/ForUniversitiesSection'), { ssr: true });

const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'), { ssr: true });
const FAQSection = dynamic(() => import('@/components/sections/FAQSection'), { ssr: true });
const CTASection = dynamic(() => import('@/components/sections/CTASection'), { ssr: true });
const DownloadSection = dynamic(() => import('@/components/sections/DownloadSection'), { ssr: true });

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <UniversitySection />
      <Features />
      <HowItWorks />
      <ForUniversitiesSection />

      <TestimonialsSection />
      <FAQSection />
      <DownloadSection />
      <CTASection />
    </main>
  );
}
