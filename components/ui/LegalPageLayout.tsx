import AnimatedSection from '@/components/ui/AnimatedSection';

export type LegalSection = {
  title: string;
  content?: string;
  list?: string[];
};

export function LegalSectionBlock({ section }: { section: LegalSection }) {
  return (
    <div>
      <h2 className="mb-3 text-xl font-bold text-white">{section.title}</h2>
      {section.content && <p className="text-[15px] leading-relaxed text-white/55">{section.content}</p>}
      {section.list && (
        <ul className="ml-2 mt-2 flex list-inside list-disc flex-col gap-2 text-[15px] leading-relaxed text-white/55">
          {section.list.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function LegalPageLayout({
  title,
  effectiveDate,
  id,
  children,
}: {
  title: string;
  effectiveDate: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section-padding bg-[#08080A] pt-40" id={id}>
      <div className="mx-auto max-w-[900px]">
        <AnimatedSection>
          <span className="section-label">LEGAL</span>
          <h1 className="section-title mb-2 text-[40px]">{title}</h1>
          <p className="mb-12 text-[15px] text-white/40">Effective Date: {effectiveDate}</p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mob-card">
            <div className="flex flex-col gap-10">{children}</div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
