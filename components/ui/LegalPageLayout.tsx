import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/ui/PageHero';

export type LegalSection = {
  title: string;
  content?: string;
  list?: string[];
};

export function LegalSectionBlock({ section }: { section: LegalSection }) {
  return (
    <div className="scroll-mt-28">
      <h2 className="mb-3 font-sans text-[20px] font-bold tracking-tight text-ink">{section.title}</h2>
      {section.content && <p className="text-[15.5px] leading-relaxed text-ink/65">{section.content}</p>}
      {section.list && (
        <ul className="mt-3 flex flex-col gap-2.5 text-[15.5px] leading-relaxed text-ink/65">
          {section.list.map((item, j) => (
            <li key={j} className="flex gap-3"><span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />{item}</li>
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
    <main id={id}>
      <PageHero eyebrow="Legal" title={[title]}>
        <Reveal delay={0.25}><span className="chip mt-6">Effective date: {effectiveDate}</span></Reveal>
      </PageHero>
      <section className="pb-24">
        <div className="container-x max-w-[900px]">
          <Reveal className="card p-7 sm:p-12">
            <div className="flex flex-col gap-10">{children}</div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
