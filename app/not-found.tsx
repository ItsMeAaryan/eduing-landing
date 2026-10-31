import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Page Not Found | EDUING.in',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center">
      <div aria-hidden className="bg-dots absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div aria-hidden className="absolute left-1/2 top-1/2 -z-10 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-[110px]" />
      <div className="relative flex items-center font-display text-[clamp(110px,22vw,220px)] font-bold leading-none tracking-[-0.06em] text-ink">
        4
        <span className="mx-2 flex h-[0.78em] w-[0.78em] animate-float items-center justify-center rounded-full bg-surface shadow-lift">
          <Image src="/eduing-logo.png" alt="" width={120} height={124} className="h-[62%] w-auto" />
        </span>
        4
      </div>
      <h1 className="mt-4 text-[clamp(26px,4vw,40px)] font-bold tracking-tight text-ink">This page skipped class.</h1>
      <p className="mx-auto mt-3 max-w-[42ch] text-[16px] leading-relaxed text-ink/60">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary"><ArrowLeft size={16} />Return Home</Link>
        <Link href="/contact" className="btn-ghost">Contact support</Link>
      </div>
    </main>
  );
}
