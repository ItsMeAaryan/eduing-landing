'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { label: 'Features', href: '/features' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.eduing.in'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-5 left-0 w-full z-[100] flex justify-center px-6">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full max-w-[1100px] flex items-center justify-between rounded-full border border-border pl-6 pr-2 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.4)] backdrop-blur-2xl transition-colors duration-300 ${
          scrolled ? 'bg-bg/85' : 'bg-bg/65'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex flex-1 items-center gap-2.5 no-underline">
          <Image src="/logo.png" alt="EDUING logo" width={30} height={30} className="object-contain invert" priority />
          <span className="font-display text-lg font-extrabold tracking-tight text-white">
            EDUING<span className="text-accent-lighter text-xs">.in</span>
          </span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => {
            const isActive = pathname === l.href
            return (
              <Link
                key={l.label}
                href={l.href}
                className={`rounded-full px-4.5 py-2 text-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-lighter focus-visible:outline-offset-2 hover:text-white hover:bg-white/10 ${
                  isActive ? 'text-white font-semibold bg-white/[0.08]' : 'text-text-secondary font-medium'
                }`}
              >
                {l.label}
              </Link>
            )
          })}
        </div>

        {/* CTAs */}
        <div className="flex flex-1 items-center justify-end gap-2">
          <a
            href={APP_URL}
            rel="noopener noreferrer"
            className="rounded-full px-4 py-2 text-sm font-medium text-white/60 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-lighter focus-visible:outline-offset-2"
          >
            Log in
          </a>
          <a href={`${APP_URL}/`} rel="noopener noreferrer" className="no-underline">
            <motion.div
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full bg-gradient-to-br from-[#E0E0FF] to-white px-5.5 py-2.5 text-sm font-semibold text-bg shadow-[0_4px_15px_rgba(255,255,255,0.1)] transition-shadow duration-200 hover:shadow-[0_8px_25px_rgba(255,255,255,0.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-lighter focus-visible:outline-offset-2"
            >
              Get started
            </motion.div>
          </a>
        </div>
      </motion.nav>
    </div>
  )
}
