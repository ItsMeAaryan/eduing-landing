import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

const problems = [
  {
    icon: '📋',
    title: 'Multiple Portals',
    description: 'Different formats on every university website',
  },
  {
    icon: '🔄',
    title: 'Repetitive Forms',
    description: 'Fill the same information again and again',
  },
  {
    icon: '❓',
    title: 'Confusing Eligibility',
    description: 'Hard to understand requirements at each college',
  },
  {
    icon: '⏰',
    title: 'Missed Deadlines',
    description: 'No central tracking for all deadlines',
  },
  {
    icon: '📊',
    title: 'No Tracking System',
    description: 'Zero visibility into application progress',
  },
  {
    icon: '🔍',
    title: 'Limited Comparison',
    description: 'Difficult to compare universities objectively',
  },
];

export default function ProblemSection() {
  if (!problems || problems.length === 0) return null;

  return (
    <section className="section-padding" style={{ background: '#06060A' }} id="problems">
      <div className="container-main">
        <AnimatedSection>
          <span className="section-label" style={{ background: 'rgba(245,158,11,0.1)', color: '#F59E0B', borderColor: 'rgba(245,158,11,0.2)' }}>THE PROBLEM</span>
          <SectionHeading
            title="The Problem We Solve"
            subtitle="Students across India face fragmented, confusing admission processes"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {problems.map((problem, index) => (
            <AnimatedSection key={index} delay={index * 0.08}>
              <div className="mob-card h-full" style={{ padding: '32px' }}>
                <div className="text-[40px] mb-4" style={{ filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.5))' }}>{problem.icon}</div>
                <h3 className="text-[18px] font-bold text-white mb-2">{problem.title}</h3>
                <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{problem.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
