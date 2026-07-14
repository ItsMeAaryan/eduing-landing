'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Features', href: '/features' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.eduing.in'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50)
    const previous = scrollY.getPrevious() || 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
      <div className="fixed top-4 left-0 w-full z-[100] flex justify-center px-4 sm:px-6 pointer-events-none">
        <motion.nav
          initial={false}
          animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
          transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto w-full max-w-[1000px] flex items-center justify-between rounded-full border border-white/10 px-4 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-md transition-colors duration-300 ${
            scrolled ? 'bg-[#06060A]/80' : 'bg-[#06060A]/40'
          }`}
        >
          {/* Logo */}
          <Link href="/" aria-label="EDUING Home" className="flex items-center gap-2.5 no-underline outline-none focus-visible:ring-2 focus-visible:ring-[#5B5FEF] rounded-full p-1">
            <Image src="/logo.png" alt="EDUING Logo" width={28} height={28} className="object-contain invert w-auto h-auto" priority />
            <span className="font-display text-lg font-extrabold tracking-tight text-white leading-none flex items-center">
              EDUING<span className="text-[#818CF8] text-[10px] ml-0.5 mt-1">.in</span>
            </span>
          </Link>

          {/* Nav links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => {
              const isActive = pathname === l.href
              return (
                <Link
                  key={l.label}
                  href={l.href}
                  className="relative group py-2 text-[14px] font-medium transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#5B5FEF] rounded-md"
                >
                  <span className={`${isActive ? 'text-white' : 'text-white/60 group-hover:text-white'} transition-colors`}>
                    {l.label}
                  </span>
                  {isActive ? (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#5B5FEF] to-[#818CF8] rounded-full"
                    />
                  ) : (
                    <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white/30 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full duration-300" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* CTAs (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={APP_URL}
              rel="noopener noreferrer"
              className="px-4 py-2 text-[14px] font-medium text-white/60 transition-colors duration-200 hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-[#5B5FEF] rounded-full"
            >
              Log in
            </a>
            <a href={`${APP_URL}/`} rel="noopener noreferrer" className="no-underline outline-none">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full bg-gradient-to-r from-[#5B5FEF] to-[#818CF8] px-5 py-2.5 text-[14px] font-medium text-white shadow-[0_4px_20px_rgba(91,95,239,0.3)] transition-shadow hover:shadow-[0_4px_25px_rgba(91,95,239,0.5)] focus-visible:ring-2 focus-visible:ring-white"
              >
                Get started
              </motion.div>
            </a>
          </div>

          <button
            className="md:hidden p-2 text-white/70 hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-[#5B5FEF] rounded-full"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </motion.nav>
      </div>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[150] bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[200] w-full max-w-[280px] bg-[#06060A]/95 backdrop-blur-2xl border-l border-white/10 p-6 flex flex-col shadow-2xl"
            >
              <div className="flex justify-end mb-8">
                <button
                  className="p-2 text-white/70 hover:text-white bg-white/5 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#5B5FEF]"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {NAV_LINKS.map((l) => {
                  const isActive = pathname === l.href
                  return (
                    <Link
                      key={l.label}
                      href={l.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-xl font-medium outline-none focus-visible:ring-2 focus-visible:ring-[#5B5FEF] rounded-md px-2 py-1 ${
                        isActive ? 'text-white' : 'text-white/60 hover:text-white'
                      }`}
                    >
                      {l.label}
                    </Link>
                  )
                })}
                <hr className="border-white/10 my-2 mx-2" />
                <a
                  href={APP_URL}
                  className="px-2 py-1 text-lg font-medium text-white/60 hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-[#5B5FEF] rounded-md"
                >
                  Log in
                </a>
                <a
                  href={`${APP_URL}/`}
                  className="mt-2 flex justify-center items-center rounded-full bg-gradient-to-r from-[#5B5FEF] to-[#818CF8] px-6 py-3 text-base font-medium text-white shadow-[0_4px_20px_rgba(91,95,239,0.3)] outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Get started
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
