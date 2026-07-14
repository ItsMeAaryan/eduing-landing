import Link from 'next/link'
import { Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#050505] pt-24 pb-12 sm:pt-32" id="footer">
      {/* Huge subtle background watermark */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[22vw] font-extrabold leading-none tracking-tighter text-white/[0.02] sm:text-[25vw]" aria-hidden="true">
        EDUING
      </div>

      {/* Subtle radial glow */}
      <div 
        className="pointer-events-none absolute left-[10%] top-[20%] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5B5FEF]/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1200px] px-6 relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-4 lg:gap-8">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <Link href="/" aria-label="EDUING Home" className="inline-flex select-none items-baseline font-display text-2xl font-bold tracking-tight text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50">
              EDUING
            </Link>
            
            <div className="flex flex-col gap-1">
              <span className="text-[15px] font-semibold text-white/80">One Profile.</span>
              <span className="text-[15px] font-semibold text-white/80">Every University.</span>
            </div>
            
            <p className="max-w-[280px] text-[14px] leading-relaxed text-white/50">
              Simplifying university admissions through one intelligent platform powered by AI.
            </p>

            {/* Social Icons */}
            <div className="mt-2 flex items-center gap-4">
              <a href="https://github.com/princemittalr" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50">
                <Github size={18} className="transition-transform duration-200 group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:col-span-3 lg:ml-auto lg:gap-x-24">
            
            {/* Platform */}
            <div className="flex flex-col gap-6">
              <h3 className="text-[13px] font-semibold tracking-wider text-white">Platform</h3>
              <nav aria-label="Platform navigation">
                <ul className="flex flex-col gap-4">
                  {[
                    { label: 'Features', href: '/#features' },
                    { label: 'Students', href: '/#how-it-works' },
                    { label: 'Universities', href: '/universities' },
                    { label: 'Download App', href: '/download' },
                    { label: 'AI Discovery', href: '/#universities' },
                  ].map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="inline-block text-[14px] text-white/50 transition-all duration-200 hover:-translate-y-[2px] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-6">
              <h3 className="text-[13px] font-semibold tracking-wider text-white">Company</h3>
              <nav aria-label="Company navigation">
                <ul className="flex flex-col gap-4">
                  {[
                    { label: 'About', href: '/about' },
                    { label: 'Contact', href: '/contact' },
                    { label: 'Careers (Coming Soon)', href: '#' },
                    { label: 'Blog (Coming Soon)', href: '#' },
                  ].map((link) => (
                    <li key={link.label}>
                      {link.href === '#' ? (
                        <span className="inline-block cursor-default text-[14px] text-white/30">
                          {link.label}
                        </span>
                      ) : (
                        <Link href={link.href} className="inline-block text-[14px] text-white/50 transition-all duration-200 hover:-translate-y-[2px] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-6">
              <h3 className="text-[13px] font-semibold tracking-wider text-white">Resources</h3>
              <nav aria-label="Resources navigation">
                <ul className="flex flex-col gap-4">
                  {[
                    { label: 'FAQ', href: '/#faq' },
                    { label: 'Privacy Policy', href: '/privacy' },
                    { label: 'Terms', href: '/terms' },
                    { label: 'Trademark', href: '/trademark' },
                  ].map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="inline-block text-[14px] text-white/50 transition-all duration-200 hover:-translate-y-[2px] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 border-t border-white/10 pt-8">
          <div className="text-[13px] text-white/40">
            © {new Date().getFullYear()} EDUING
          </div>
        </div>
      </div>
    </footer>
  )
}
