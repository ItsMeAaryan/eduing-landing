'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'Download', href: '/#download' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] h-14 flex items-center"
      style={{
        background: 'rgba(8,8,10,0.8)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
      id="navbar"
    >
      <div className="w-full max-w-container mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-0 select-none" id="logo">
          <span className="text-xl font-extrabold text-white tracking-tight">EDU</span>
          <span className="text-xl font-extrabold text-accent tracking-tight">ING</span>
          <span className="text-[0.75em] font-bold text-gold ml-[1px]">.in</span>
        </Link>

        {/* Center Nav Links — Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[14px] transition-colors duration-150"
              style={{ color: 'rgba(255,255,255,0.55)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Buttons — Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://app.eduing.in/auth/student/login"
            className="text-[14px] transition-colors duration-150"
            style={{ color: 'rgba(255,255,255,0.55)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
            id="login-btn"
          >
            Log in
          </a>
          <a
            href="https://app.eduing.in/auth/student/register"
            className="bg-white text-[#08080A] px-4 py-2 rounded-btn text-[14px] font-semibold transition-all duration-150 hover:bg-white/90"
            id="get-started-btn"
          >
            Get started
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Toggle menu"
          id="mobile-menu-btn"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="w-5 h-[1.5px] bg-white block"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-5 h-[1.5px] bg-white block"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="w-5 h-[1.5px] bg-white block"
          />
        </button>
      </div>

      {/* Mobile Full-screen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-14 md:hidden flex flex-col"
            style={{
              background: 'rgba(8,8,10,0.97)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white text-[24px] font-semibold tracking-tight transition-opacity hover:opacity-70"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-4 mt-8 w-64">
                <a
                  href="https://app.eduing.in/auth/student/login"
                  className="text-center py-3 rounded-btn text-[15px] font-medium"
                  style={{ color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.15)' }}
                  onClick={() => setMobileOpen(false)}
                >
                  Log in
                </a>
                <a
                  href="https://app.eduing.in/auth/student/register"
                  className="text-center py-3 rounded-btn bg-white text-[#08080A] text-[15px] font-semibold"
                  onClick={() => setMobileOpen(false)}
                >
                  Get started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
