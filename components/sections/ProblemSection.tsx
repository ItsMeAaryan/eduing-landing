import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

const problems = [
  { icon: '📋', title: 'Multiple Portals', description: 'Different formats on every university website' },
  { icon: '🔄', title: 'Repetitive Forms', description: 'Fill the same information again and again' },
  { icon: '❓', title: 'Confusing Eligibility', description: 'Hard to understand requirements at each college' },
  { icon: '⏰', title: 'Missed Deadlines', description: 'No central tracking for all deadlines' },
  { icon: '📊', title: 'No Tracking System', description: 'Zero visibility into application progress' },
  { icon: '🔍', title: 'Limited Comparison', description: 'Difficult to compare universities objectively' },
];

export default function ProblemSection() {
  return (
    <section className="section-padding bg-bg" id="problems" aria-label="The Problem We Solve">
      <div className="container-main">
        <AnimatedSection>
          <span className="section-label border-gold/20 bg-gold/10 text-gold">THE PROBLEM</span>
          <SectionHeading
            title="The Problem We Solve"
            subtitle="Students across India face fragmented, confusing admission processes"
          />
        </AnimatedSection>

        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <AnimatedSection key={problem.title} delay={index * 0.08}>
              <div className="mob-card h-full p-8">
                <div
                  className="mb-4 text-[40px]"
                  style={{ filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.5))' }}
                  aria-hidden="true"
                >
                  {problem.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{problem.title}</h3>
                <p className="text-[15px] leading-relaxed text-white/50">{problem.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
