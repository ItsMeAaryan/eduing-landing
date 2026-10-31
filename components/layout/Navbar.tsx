'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useSpring } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { APP_URL } from '@/lib/links'

const NAV_LINKS = [
  { label: 'Features', href: '/features' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)
  const pathname = usePathname()
  const { scrollY, scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 })

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 24)
    const previous = scrollY.getPrevious() ?? 0
    setHidden(latest > previous && latest > 220)
  })

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* scroll progress */}
      <motion.div
        aria-hidden
        className="fixed inset-x-0 top-0 z-[120] h-[3px] origin-left bg-gradient-to-r from-brand via-brand-2 to-gold"
        style={{ scaleX: progress }}
      />

      <div className="pointer-events-none fixed inset-x-0 top-3 z-[100] flex justify-center px-3 sm:top-4 sm:px-6">
        <motion.nav
          aria-label="Primary"
          initial={false}
          animate={{ y: hidden && !open ? -110 : 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex w-full max-w-[1120px] items-center justify-between rounded-chip border py-2 pl-3 pr-2 transition-all duration-500 sm:pl-4 ${
            scrolled
              ? 'border-line/10 bg-surface/80 shadow-lift backdrop-blur-xl'
              : 'border-transparent bg-transparent'
          }`}
        >
          <Link href="/" aria-label="EDUING Home" className="rounded-chip p-1">
            <Logo size={30} />
          </Link>

          <div className="hidden items-center gap-1 md:flex" onMouseLeave={() => setHovered(null)}>
            {NAV_LINKS.map((l) => {
              const active = pathname === l.href
              return (
                <Link
                  key={l.label}
                  href={l.href}
                  onMouseEnter={() => setHovered(l.href)}
                  className={`relative rounded-chip px-4 py-2 text-[14.5px] font-medium transition-colors ${active ? 'text-ink' : 'text-ink/60 hover:text-ink'}`}
                >
                  {(hovered ?? (active ? l.href : null)) === l.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-chip bg-ink/[0.06]"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  {active && <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold" />}
                  {l.label}
                </Link>
              )
            })}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <a href={APP_URL} rel="noopener noreferrer" className="rounded-chip px-4 py-2 text-[14.5px] font-medium text-ink/70 transition-colors hover:text-ink">
              Log in
            </a>
            <a href={`${APP_URL}/`} rel="noopener noreferrer" className="btn-primary group !py-2.5 !text-[14.5px]">
              <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-shine bg-white/25" aria-hidden />
              Get started
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-canvas"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ clipPath: 'circle(0% at 92% 4%)' }}
            animate={{ clipPath: 'circle(150% at 92% 4%)' }}
            exit={{ clipPath: 'circle(0% at 92% 4%)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[200] flex flex-col bg-night p-6 text-white"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-xl font-bold">EDUING<span className="text-gold">.in</span></span>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>
            <motion.ul
              className="mt-16 flex flex-col gap-2"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } } }}
            >
              {[{ label: 'Home', href: '/' }, ...NAV_LINKS].map((l) => (
                <motion.li key={l.href} variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}>
                  <Link href={l.href} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-white/10 py-4 font-display text-4xl font-semibold tracking-tight">
                    {l.label}
                    <ArrowUpRight className="text-gold" />
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            <div className="mt-auto flex flex-col gap-3">
              <a href={APP_URL} className="btn border border-white/20 text-white">Log in</a>
              <a href={`${APP_URL}/`} className="btn-gold">Get started</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
