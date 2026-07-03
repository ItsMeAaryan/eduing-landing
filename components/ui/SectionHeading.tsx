import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  children?: ReactNode;
}

export default function SectionHeading({ title, subtitle, centered = true, children }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="section-title mb-4">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-4 mb-4 max-w-2xl text-lg leading-relaxed text-white/60">{subtitle}</p>
      )}
      {children}
    </div>
  );
}
