import { ReactNode } from 'react'
import Reveal from './Reveal'
import WordReveal from './WordReveal'

type Part = string | { text: string; className?: string }

/** Shared hero for inner pages: eyebrow, animated headline, subtitle, decorative orbs. */
export default function PageHero({ eyebrow, title, subtitle, children }: { eyebrow: string; title: Part[]; subtitle?: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div aria-hidden className="bg-dots absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      <div aria-hidden className="absolute -top-40 left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand/15 blur-[120px]" />
      <div aria-hidden className="absolute right-[10%] top-40 -z-10 h-56 w-56 rounded-full bg-gold/25 blur-[90px]" />
      <div className="container-x flex flex-col items-center text-center">
        <Reveal><span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span></Reveal>
        <WordReveal as="h1" parts={title} className="mt-6 max-w-[20ch] text-[clamp(40px,5.6vw,80px)] font-bold leading-[1] tracking-[-0.045em] text-ink" />
        {subtitle && <Reveal delay={0.2}><p className="mx-auto mt-6 max-w-[58ch] text-[17px] leading-relaxed text-ink/60 sm:text-lg">{subtitle}</p></Reveal>}
        {children}
      </div>
    </section>
  )
}
