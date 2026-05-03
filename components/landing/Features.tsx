'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const FEATURES = [
  { key: 'APPLY', title: 'Apply to multiple universities', desc: 'One universal profile is all you need to submit applications across hundreds of top institutions without repetitive forms.', icon: '🎓', accent: '#5B5FEF' },
  { key: 'TRACKING', title: 'Track application status', desc: 'Get real-time updates, interview schedules, and offer letters directly on your centralized dashboard.', icon: '📊', accent: '#10B981' },
  { key: 'DOCUMENTS', title: 'Upload & verify documents', desc: 'Store your academic records securely. Upload once, get verified instantly, and reuse them for every application.', icon: '📄', accent: '#F59E0B' },
  { key: 'SECURITY', title: 'Secure admission process', desc: 'End-to-end encryption and verified university partners ensure your personal data is always protected.', icon: '🔒', accent: '#818CF8' },
]

function FeatureCard({ f, i }: { f: typeof FEATURES[0]; i: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16,1,0.3,1] }}
      style={{
        background: 'rgba(20, 20, 25, 0.4)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '24px',
        padding: '40px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      }}
      whileHover={{
        borderColor: `${f.accent}50`,
        background: 'rgba(30, 30, 40, 0.6)',
        y: -5,
        boxShadow: `0 20px 40px rgba(0, 0, 0, 0.4), inset 0 0 0 1px ${f.accent}20`,
      }}
    >
      {/* Subtle Glow Background */}
      <div style={{
        position: 'absolute', top: '-50px', right: '-50px',
        width: '150px', height: '150px', borderRadius: '50%',
        background: `radial-gradient(circle, ${f.accent}15 0%, transparent 70%)`,
        pointerEvents: 'none', transition: 'all 0.4s ease',
      }} className="glow-effect" />

      {/* Icon */}
      <motion.div 
        whileHover={{ scale: 1.1, rotate: 5 }}
        style={{
          width: '56px', height: '56px', borderRadius: '16px',
          background: `linear-gradient(135deg, ${f.accent}15, ${f.accent}05)`,
          border: `1px solid ${f.accent}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '28px', marginBottom: '24px',
          boxShadow: `0 8px 16px ${f.accent}10`,
        }}
      >
        {f.icon}
      </motion.div>

      {/* Label */}
      <div style={{
        fontSize: '12px', fontWeight: '700', letterSpacing: '0.15em',
        textTransform: 'uppercase', color: f.accent,
        marginBottom: '12px', fontFamily: 'DM Sans, sans-serif',
      }}>{f.key}</div>

      {/* Title */}
      <h3 style={{
        fontFamily: 'Syne, sans-serif',
        fontSize: '24px',
        fontWeight: '700', color: '#FFFFFF', letterSpacing: '-0.02em',
        margin: '0 0 12px', lineHeight: '1.3',
      }}>{f.title}</h3>

      {/* Desc */}
      <p style={{
        fontFamily: 'DM Sans, sans-serif', fontSize: '16px',
        color: 'rgba(255,255,255,0.5)', lineHeight: '1.7', margin: 0,
      }}>{f.desc}</p>
    </motion.div>
  )
}

export default function Features() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  if (!FEATURES || FEATURES.length === 0) return null;
  return (
    <section id="features" style={{ background: '#06060A', padding: '140px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '80px', textAlign: 'center' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 16px', borderRadius: '100px',
            background: 'rgba(91,95,239,0.1)', border: '1px solid rgba(91,95,239,0.2)',
            marginBottom: '24px',
          }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#818CF8', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#818CF8', fontFamily: 'DM Sans, sans-serif' }}>Platform Features</span>
          </div>

          <h2 style={{
            fontFamily: 'Syne, sans-serif', fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: '800', color: '#FFFFFF', letterSpacing: '-0.03em',
            margin: '0 auto', lineHeight: '1.1', maxWidth: '700px',
          }}>
            Everything you need<br />
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>to get admitted easily</span>
          </h2>
        </motion.div>

        {/* 2x2 Grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {FEATURES.map((f, i) => <FeatureCard key={f.key} f={f} i={i} />)}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.4)} }
        .glow-effect { transition: all 0.4s ease; }
        div:hover > .glow-effect { transform: scale(1.5); opacity: 0.8; }
      `}} />
    </section>
  )
}
