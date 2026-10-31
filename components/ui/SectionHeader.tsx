import { ReactNode } from 'react'
import Reveal from './Reveal'
import WordReveal from './WordReveal'

type Part = string | { text: string; className?: string }

export default function SectionHeader({
  eyebrow, title, subtitle, align = 'center', id, children,
}: { eyebrow: string; title: Part[]; subtitle?: ReactNode; align?: 'center' | 'left'; id?: string; children?: ReactNode }) {
  const center = align === 'center'
  return (
    <div className={`flex flex-col gap-5 ${center ? 'items-center text-center' : 'items-start text-left'}`}>
      <Reveal><span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span></Reveal>
      <WordReveal id={id} parts={title} className={`text-display font-bold text-ink ${center ? 'max-w-[18ch]' : 'max-w-[16ch]'}`} />
      {subtitle && (
        <Reveal delay={0.15}>
          <p className={`text-[17px] leading-relaxed text-ink/60 ${center ? 'mx-auto max-w-[56ch]' : 'max-w-[48ch]'}`}>{subtitle}</p>
        </Reveal>
      )}
      {children}
    </div>
  )
}
