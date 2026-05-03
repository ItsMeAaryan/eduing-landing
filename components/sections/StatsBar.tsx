'use client';

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
      style={{
        borderTop: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        background: 'rgba(6,6,10,0.4)',
        padding: '32px 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Fade masks */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(90deg, #06060A 0%, transparent 15%, transparent 85%, #06060A 100%)'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', marginBottom: '24px', textAlign: 'center', opacity: 0.4 }}>
        <span style={{ fontSize: '12px', fontWeight: '500', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'white' }}>
          Trusted by students applying to
        </span>
      </div>

      {/* Marquee */}
      <div style={{ display: 'flex', overflow: 'hidden', userSelect: 'none' }}>
        <div className="marquee-track">
          {items.map((uni, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '12px',
                padding: '10px 24px',
                color: 'rgba(255,255,255,0.5)',
                fontSize: '14px',
                fontWeight: '500',
                whiteSpace: 'nowrap',
                fontFamily: 'DM Sans, sans-serif',
                transition: 'all 0.3s ease',
              }}
            >
              {uni}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
