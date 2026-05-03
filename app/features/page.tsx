import Features from '@/components/landing/Features';
import CTASection from '@/components/sections/CTASection';

export const metadata = {
  title: 'Features | EDUING.in',
  description: 'Discover the features of EDUING.in - the ultimate platform for university admissions.',
};

export default function FeaturesPage() {
  return (
    <main className="pt-14 bg-[#06060A] min-h-screen">
      <div style={{ padding: '80px 24px 40px', textAlign: 'center', background: 'radial-gradient(ellipse at top, rgba(91,95,239,0.15) 0%, transparent 60%)' }}>
        <h1 style={{
          fontFamily: 'Syne, sans-serif', fontSize: 'clamp(40px, 5vw, 64px)',
          fontWeight: '800', color: '#FFFFFF', letterSpacing: '-0.03em', margin: '0 0 20px',
        }}>
          Powerful features for a<br/>
          <span style={{ color: '#818CF8' }}>seamless admission journey</span>
        </h1>
        <p style={{
          fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: 'rgba(255,255,255,0.6)',
          maxWidth: '600px', margin: '0 auto',
        }}>
          Everything you need to discover, apply, and get admitted to top universities across India without the usual stress.
        </p>
      </div>
      <Features />
      <CTASection />
    </main>
  );
}
