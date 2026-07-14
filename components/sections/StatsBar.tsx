const universities = [
  'IIT Delhi', 'BITS Pilani', 'VIT Vellore', 'Manipal MAHE', 'SRM',
  'LPU', 'Amity', 'Symbiosis', 'NMIMS', 'Christ', 'BHU',
  'Anna University', 'Jadavpur', 'NIT Trichy', 'IIIT Hyderabad',
];

export default function StatsBar() {
  // Duplicate for seamless infinite scroll
  const items = [...universities, ...universities];

  return (
    <section
      id="stats-bar"
      aria-label="Partner Universities"
      className="relative overflow-hidden border-y border-white/[0.04] bg-bg/40 py-8"
    >
      {/* Fade masks */}
      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            'linear-gradient(90deg, #06060A 0%, transparent 15%, transparent 85%, #06060A 100%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto mb-6 max-w-[1200px] text-center opacity-40">
        <span className="text-xs font-medium uppercase tracking-[0.1em] text-white">
          Trusted by students applying to
        </span>
      </div>

      {/* Marquee */}
      <div className="flex select-none overflow-hidden" aria-hidden="true">
        <div className="marquee-track">
          {items.map((uni, i) => (
            <div
              key={i}
              className="whitespace-nowrap rounded-xl border border-white/[0.06] bg-white/[0.03] px-6 py-2.5 text-sm font-medium text-white/50 transition-colors duration-300"
            >
              {uni}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
