'use client'

import Counter from '@/components/ui/Counter'
import Reveal from '@/components/ui/Reveal'

const universities = [
  'IIT Delhi', 'BITS Pilani', 'VIT Vellore', 'Manipal MAHE', 'SRM',
  'LPU', 'Amity', 'Symbiosis', 'NMIMS', 'Christ', 'BHU',
  'Anna University', 'Jadavpur', 'NIT Trichy', 'IIIT Hyderabad',
]
const tones = ['bg-brand', 'bg-gold text-[#17142B]', 'bg-night', 'bg-mint', 'bg-coral', 'bg-brand-2']
const initials = (n: string) => n.split(/\s+/).map((w) => w[0]).join('').slice(0, 3).toUpperCase()

function Row({ list, reverse = false }: { list: string[]; reverse?: boolean }) {
  const items = [...list, ...list]
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div className={`flex w-max gap-3 pr-3 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} hover:[animation-play-state:paused]`}>
        {items.map((u, i) => (
          <div key={i} className="flex items-center gap-2.5 whitespace-nowrap rounded-chip border border-line/10 bg-surface py-1.5 pl-1.5 pr-4 text-[14px] font-semibold text-ink/75 shadow-card">
            <span className={`flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-bold text-white ${tones[i % tones.length]}`}>{initials(u)}</span>
            {u}
          </div>
        ))}
      </div>
    </div>
  )
}

const stats = [
  { to: 500, suffix: '+', label: 'Partner universities', tone: 'text-brand' },
  { to: 50, suffix: 'K+', label: 'Students on EDUING', tone: 'text-gold' },
  { to: 40, suffix: '+ hrs', label: 'Saved per student', tone: 'text-mint' },
  { to: 1, suffix: '', label: 'Profile for every application', tone: 'text-coral' },
]

export default function StatsBar() {
  return (
    <section id="stats-bar" aria-label="Partner Universities" className="py-16">
      <p className="mb-6 text-center text-[13px] font-semibold uppercase tracking-[0.16em] text-ink/45">Trusted by students applying to</p>
      <div aria-hidden className="flex select-none flex-col gap-3">
        <Row list={universities} />
        <Row list={[...universities].reverse()} reverse />
      </div>

      <div className="container-x mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="card flex flex-col gap-1 p-6 sm:p-7">
            <span className={`font-display text-[44px] font-bold leading-none tracking-tight sm:text-[56px] ${s.tone}`}>
              <Counter to={s.to} suffix={s.suffix} />
            </span>
            <span className="text-[14px] font-medium text-ink/60">{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
