import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import HowItWorks from '@/components/landing/HowItWorks';
import StatsBar from '@/components/sections/StatsBar';
import UniversitySection from '@/components/sections/UniversitySection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import ProblemSection from '@/components/sections/ProblemSection';
import DownloadSection from '@/components/sections/DownloadSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <UniversitySection />
      <Features />
      <HowItWorks />
      <ProblemSection />
      <TestimonialsSection />
      <FAQSection />
      <DownloadSection />
      <CTASection />
    </main>
  );
}
