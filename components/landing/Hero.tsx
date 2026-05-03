'use client'
import { motion } from 'framer-motion'
import React from 'react'

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      padding: '140px 5% 80px', background: '#06060A',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background elements */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: 'absolute', width: '800px', height: '800px',
            top: '30%', left: '30%', transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, #5B5FEF 0%, transparent 70%)',
            borderRadius: '50%', filter: 'blur(80px)',
          }} 
        />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 70% 50% at 50% 50%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 50% at 50% 50%, black, transparent)',
        }} />
      </div>

      <div style={{ 
        position: 'relative', zIndex: 1, 
        maxWidth: '1280px', width: '100%', 
        display: 'flex', flexWrap: 'wrap', 
        alignItems: 'center', gap: '60px' 
      }}>
        
        {/* LEFT SIDE: Text and CTAs */}
        <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'Syne, sans-serif', fontSize: 'clamp(48px, 6vw, 72px)',
              fontWeight: '800', lineHeight: '1.05', letterSpacing: '-0.04em',
              color: '#FFFFFF', margin: '0 0 24px',
            }}
          >
            Apply to Top Universities<br />
            <span style={{
              background: 'linear-gradient(135deg, #818CF8 0%, #5B5FEF 50%, #A78BFA 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>in One Place</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(18px, 2vw, 20px)',
              color: 'rgba(255,255,255,0.6)', lineHeight: '1.6',
              maxWidth: '540px', margin: '0 0 40px',
            }}
          >
            Complete your profile, apply seamlessly, and track your admission status — all in one platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', position: 'relative' }}
          >
            <div style={{
              position: 'absolute', top: '50%', left: '80px', transform: 'translate(-50%, -50%)',
              width: '120px', height: '60px', background: '#5B5FEF', filter: 'blur(40px)',
              opacity: 0.6, zIndex: -1, borderRadius: '50%', pointerEvents: 'none'
            }} />
            
            {/* ✅ External link to student portal */}
            <a href="https://app.eduing.in" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ scale: 1.03, y: -2, boxShadow: '0 10px 25px rgba(91,95,239,0.4)' }}
                whileTap={{ scale: 0.98 }}
                style={{ 
                  fontSize: '16px', padding: '16px 36px', borderRadius: '100px', fontWeight: '600',
                  background: 'white', color: '#06060A', border: 'none', cursor: 'pointer',
                  fontFamily: 'DM Sans, sans-serif', transition: 'box-shadow 0.2s ease',
                }}
              >
                Start Application
              </motion.button>
            </a>

            {/* ✅ Internal anchor — stays as is */}
            <a href="#universities" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ borderColor: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.05)' }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '16px 36px', borderRadius: '100px',
                  border: '1px solid rgba(255,255,255,0.15)',
                  background: 'transparent', color: 'white',
                  fontSize: '16px', fontWeight: '500',
                  fontFamily: 'DM Sans, sans-serif', cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                Explore Universities
              </motion.button>
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Visual Mockups */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ flex: '1 1 500px', position: 'relative', perspective: '1000px', display: 'flex', justifyContent: 'center' }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '100%', maxWidth: '600px',
              background: 'linear-gradient(145deg, rgba(30,30,35,0.9) 0%, rgba(15,15,20,0.9) 100%)',
              border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px',
              boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
              backdropFilter: 'blur(20px)', padding: '28px', display: 'flex', flexDirection: 'column',
              overflow: 'hidden', transform: 'rotateY(-5deg) rotateX(5deg)', transformStyle: 'preserve-3d'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, #5B5FEF, #7C3AED)' }} />
                <div>
                  <div style={{ fontSize: '15px', fontWeight: '600', color: 'white', fontFamily: 'DM Sans, sans-serif' }}>Rahul Sharma</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontFamily: 'DM Sans, sans-serif' }}>Profile 100% Complete</div>
                </div>
              </div>
              <div style={{ padding: '6px 14px', background: 'rgba(16,185,129,0.15)', color: '#10B981', borderRadius: '100px', fontSize: '12px', fontWeight: '600' }}>
                Verified
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '20px', marginBottom: '20px' }}>
              <div style={{ fontSize: '14px', fontWeight: '600', color: 'white', marginBottom: '16px', fontFamily: 'DM Sans, sans-serif' }}>Application Progress</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '14px' }}>✓</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', fontFamily: 'DM Sans, sans-serif' }}>Submitted</div>
                </div>
                <div style={{ height: '2px', flex: 1, background: '#10B981', margin: '0 12px', opacity: 0.5, marginBottom: '24px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '14px' }}>⏳</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', fontFamily: 'DM Sans, sans-serif' }}>Review</div>
                </div>
                <div style={{ height: '2px', flex: 1, background: 'rgba(255,255,255,0.1)', margin: '0 12px', marginBottom: '24px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '14px' }}>🎓</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontFamily: 'DM Sans, sans-serif' }}>Admitted</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {[
                { title: 'Applied', value: '4', icon: '📝' },
                { title: 'Offers', value: '2', icon: '🎉', highlight: true },
                { title: 'Pending', value: '2', icon: '⏳' },
              ].map((stat, i) => (
                <div key={i} style={{
                  background: stat.highlight ? 'rgba(91,95,239,0.1)' : 'rgba(255,255,255,0.03)',
                  border: stat.highlight ? '1px solid rgba(91,95,239,0.3)' : '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '16px', padding: '16px', textAlign: 'left',
                  boxShadow: stat.highlight ? '0 10px 20px rgba(91,95,239,0.1)' : 'none',
                }}>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>{stat.icon}</div>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: 'white', fontFamily: 'Syne, sans-serif' }}>{stat.value}</div>
                  <div style={{ fontSize: '13px', color: stat.highlight ? '#818CF8' : 'rgba(255,255,255,0.5)', fontFamily: 'DM Sans, sans-serif' }}>{stat.title}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
