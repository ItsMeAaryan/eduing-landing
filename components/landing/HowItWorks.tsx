'use client'
import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const STEPS = [
  { num: '01', title: 'Create Your Profile', desc: 'Add your academic details, marks, and entrance scores once. Your profile is your universal application.' },
  { num: '02', title: 'Discover Universities', desc: 'Search and filter 500+ universities by state, program, and eligibility. Compare side by side.' },
  { num: '03', title: 'Apply in Seconds', desc: 'Submit applications with your saved profile. No repeated data entry, ever.' },
  { num: '04', title: 'Track & Get Admitted', desc: 'Real-time status updates from universities directly on your dashboard. Know every step.' },
]

function Step({ step }: { step: { num: string; title: string; desc: string } }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16,1,0.3,1] }}
      style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', position: 'relative' }}
    >
      {/* Number */}
      <div style={{ flexShrink: 0, width: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{
            width: '48px', height: '48px', borderRadius: '50%',
            background: inView ? 'linear-gradient(135deg, #5B5FEF, #7C3AED)' : 'rgba(255,255,255,0.06)',
            border: inView ? 'none' : '1px solid rgba(255,255,255,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '13px', fontWeight: '700', color: 'white',
            fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.02em',
            boxShadow: inView ? '0 0 24px rgba(91,95,239,0.45)' : 'none',
            transition: 'all 0.5s ease',
          }}
        >{step.num}</motion.div>
      </div>

      {/* Content */}
      <div style={{ paddingBottom: '52px', flex: 1 }}>
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{
            fontFamily: 'Syne, sans-serif', fontSize: '22px', fontWeight: '700',
            color: '#FFFFFF', letterSpacing: '-0.02em', margin: '0 0 10px',
            lineHeight: '1.2',
          }}
        >{step.title}</motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '15px',
            color: 'rgba(255,255,255,0.45)', lineHeight: '1.7', margin: 0,
            maxWidth: '480px',
          }}
        >{step.desc}</motion.p>
      </div>
    </motion.div>
  )
}

export default function HowItWorks() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 0.8', 'end 0.3'] })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="how-it-works" style={{ background: '#06060A', padding: '120px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} style={{ marginBottom: '72px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '5px 14px', borderRadius: '100px',
            background: 'rgba(91,95,239,0.12)', border: '1px solid rgba(91,95,239,0.25)',
            marginBottom: '20px',
          }}>
            <span style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#818CF8', fontFamily: 'DM Sans, sans-serif' }}>How It Works</span>
          </div>
          <h2 style={{
            fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: '800', color: '#FFFFFF', letterSpacing: '-0.03em',
            margin: '0 0 14px', lineHeight: '1.05',
          }}>Simple. Fast. Effective.</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: 'rgba(255,255,255,0.4)', margin: 0 }}>Four steps to your dream university.</p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} style={{ position: 'relative' }}>
          {/* Animated vertical line */}
          <div style={{
            position: 'absolute', left: '23px', top: '24px', bottom: '24px',
            width: '2px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px',
          }}>
            <motion.div style={{
              width: '100%', background: 'linear-gradient(180deg, #5B5FEF, #A78BFA)',
              borderRadius: '2px', height: lineHeight, originY: 0,
            }} />
          </div>

          {STEPS.map((s) => <Step key={s.num} step={s} />)}
        </div>
      </div>
    </section>
  )
}
