import Link from 'next/link'
import { FOOTER_COLUMNS } from '@/lib/content'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#08080A]" id="footer">
      <div className="container-main px-6 pb-10 pt-16 md:px-10">
        <div className="mb-12 flex flex-col justify-between gap-12 lg:flex-row">
          <div className="lg:max-w-[280px]">
            <Link href="/" className="mb-3 flex select-none items-baseline gap-0">
              <span className="text-xl font-extrabold tracking-tight text-white">EDU</span>
              <span className="text-xl font-extrabold tracking-tight text-accent">ING</span>
              <span className="ml-px text-[0.75em] font-bold text-gold">.in</span>
            </Link>
            <p className="text-sm leading-relaxed text-white/30">
              Simplifying university admissions across India.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:gap-16">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.1em] text-white/20">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/45 transition-colors duration-150 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-lighter"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 md:flex-row">
          <p className="text-[13px] text-white/25">© {new Date().getFullYear()} EDUING.in</p>
        </div>
      </div>
    </footer>
  )
}
