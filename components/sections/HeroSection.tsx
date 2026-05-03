'use client';

import { motion } from 'framer-motion';

const applications = [
  { uni: 'IIT Delhi', program: 'B.Tech CSE', status: 'Under Review', statusColor: '#F59E0B' },
  { uni: 'Manipal MAHE', program: 'MBBS', status: 'Selected', statusColor: '#22C55E' },
  { uni: 'VIT Vellore', program: 'B.Tech ECE', status: 'Submitted', statusColor: '#4F46E5' },
];

const statCards = [
  { label: 'Applications', value: '3', color: '#4F46E5' },
  { label: 'Selected', value: '1', color: '#22C55E' },
  { label: 'Under Review', value: '1', color: '#F59E0B' },
];

const avatarColors = ['#4F46E5', '#6366F1', '#818CF8', '#4338CA', '#5B21B6'];

export default function HeroSection() {
  const headingWords = ['The', 'Smarter', 'Way', 'to'];
  const accentWord = 'Apply';
  const trailingWords = ['to', 'Universities'];

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center"
      style={{ background: '#08080A', padding: '160px 24px 80px' }}
      id="hero"
    >
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="inline-flex items-center mb-8"
        style={{
          background: 'rgba(79,70,229,0.1)',
          border: '1px solid rgba(79,70,229,0.25)',
          borderRadius: '6px',
          padding: '6px 14px',
          fontSize: '12px',
          fontWeight: 600,
          color: '#818CF8',
          letterSpacing: '0.06em',
        }}
      >
        NOW IN BETA — EDUING.in
      </motion.div>

      {/* Main Heading — word-by-word stagger */}
      <h1
        className="mx-auto mb-6"
        style={{
          fontSize: 'clamp(48px, 7vw, 80px)',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          lineHeight: 1.0,
          color: '#FAFAFA',
          maxWidth: '800px',
        }}
      >
        <span className="flex flex-wrap justify-center gap-x-[0.3em]">
          {headingWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: 'easeOut' }}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </span>
        <span className="flex flex-wrap justify-center gap-x-[0.3em]">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + headingWords.length * 0.06, duration: 0.5, ease: 'easeOut' }}
            className="inline-block"
            style={{ color: '#6366F1' }}
          >
            {accentWord}
          </motion.span>
          {trailingWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15 + (headingWords.length + 1 + i) * 0.06,
                duration: 0.5,
                ease: 'easeOut',
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </span>
      </h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5, ease: 'easeOut' }}
        className="mx-auto mb-10"
        style={{
          fontSize: '18px',
          color: 'rgba(255,255,255,0.5)',
          maxWidth: '520px',
          lineHeight: 1.7,
        }}
      >
        One profile. Any university across India.
        <br />
        EDUING.in simplifies discovery, applications,
        <br />
        and tracking — all in one place.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5, ease: 'easeOut' }}
        className="flex flex-wrap justify-center gap-3"
      >
        <a href="#" className="btn-primary" id="hero-cta-start">
          Start for free
        </a>
        <a href="#" className="btn-ghost" id="hero-cta-how">
          See how it works
        </a>
      </motion.div>

      {/* Social Proof */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="flex items-center gap-3 mt-12"
      >
        {/* Overlapping Avatars */}
        <div className="flex -space-x-2">
          {avatarColors.map((color, i) => (
            <div
              key={i}
              className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-white"
              style={{
                background: color,
                border: '2px solid #08080A',
                zIndex: 5 - i,
              }}
            >
              {String.fromCharCode(65 + i)}
            </div>
          ))}
        </div>
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>
          Trusted by 50,000+ students
        </span>
      </motion.div>

      {/* Hero Visual — Dashboard Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.7, ease: 'easeOut' }}
        className="mt-16 w-full mx-auto"
        style={{ maxWidth: '900px' }}
      >
        <div
          style={{
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.1)',
            overflow: 'hidden',
            boxShadow: '0 0 80px rgba(79,70,229,0.15)',
          }}
        >
          {/* Browser Chrome Bar */}
          <div
            className="flex items-center gap-2 px-4"
            style={{ background: '#1C1C1E', height: '40px' }}
          >
            <div className="flex gap-1.5">
              <div className="w-[10px] h-[10px] rounded-full" style={{ background: '#FF5F57' }} />
              <div className="w-[10px] h-[10px] rounded-full" style={{ background: '#FEBC2E' }} />
              <div className="w-[10px] h-[10px] rounded-full" style={{ background: '#28C840' }} />
            </div>
            <div
              className="ml-4 flex-1 max-w-[280px] h-6 rounded"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            />
          </div>

          {/* Dashboard Content */}
          <div style={{ background: '#111114', padding: '24px' }}>
            {/* Stat Cards Row */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {statCards.map((card, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4"
                  style={{ background: '#18181C', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <p
                    className="text-[12px] mb-1"
                    style={{ color: 'rgba(255,255,255,0.4)' }}
                  >
                    {card.label}
                  </p>
                  <p className="text-[28px] font-bold" style={{ color: card.color }}>
                    {card.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Applications Table */}
            <div style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', overflow: 'hidden' }}>
              {/* Table Header */}
              <div
                className="grid grid-cols-3 px-4 py-2.5"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
              >
                <span className="text-[11px] font-medium" style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.05em', textTransform: 'uppercase' as const }}>
                  University
                </span>
                <span className="text-[11px] font-medium" style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.05em', textTransform: 'uppercase' as const }}>
                  Program
                </span>
                <span className="text-[11px] font-medium text-right" style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.05em', textTransform: 'uppercase' as const }}>
                  Status
                </span>
              </div>
              {/* Table Rows */}
              {applications.map((app, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 px-4 py-3 items-center"
                  style={{
                    borderBottom: i < applications.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                  }}
                >
                  <span className="text-[13px] font-medium text-white">{app.uni}</span>
                  <span className="text-[13px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {app.program}
                  </span>
                  <div className="text-right">
                    <span
                      className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-md"
                      style={{
                        background: `${app.statusColor}15`,
                        color: app.statusColor,
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: app.statusColor }}
                      />
                      {app.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
