import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — EDUING.in',
  description: 'Learn about EDUING.in, our mission to simplify university admissions across India, and meet the team behind it.',
  openGraph: {
    title: 'About — EDUING.in',
    description: 'Learn about EDUING.in, our mission to simplify university admissions across India.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
