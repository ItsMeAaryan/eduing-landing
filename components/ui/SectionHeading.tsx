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
        <p className="text-[18px] mt-4 max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{subtitle}</p>
      )}
      {children}
    </div>
  );
}
