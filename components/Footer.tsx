import Link from 'next/link';

const footerColumns = [
  {
    title: 'Platform',
    links: [
      { label: 'Features', href: '/#features' },
      { label: 'Universities', href: '/#universities' },
      { label: 'Programs', href: '#' },
      { label: 'Mobile App', href: '#' },
    ],
  },
  {
    title: 'Students',
    links: [
      { label: 'Register Free', href: '#' },
      { label: 'Dashboard', href: '#' },
      { label: 'Documents', href: '#' },
      { label: 'Track Applications', href: '#' },
    ],
  },
  {
    title: 'Universities',
    links: [
      { label: 'Register Institution', href: '#' },
      { label: 'Admin Portal', href: '#' },
      { label: 'Analytics', href: '#' },
      { label: 'Pricing', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: '#08080A',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
      id="footer"
    >
      <div className="container-main px-6 md:px-10 pt-16 pb-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
          {/* Logo + Tagline */}
          <div className="lg:max-w-[280px]">
            <Link href="/" className="flex items-baseline gap-0 mb-3 select-none">
              <span className="text-xl font-extrabold text-white tracking-tight">EDU</span>
              <span className="text-xl font-extrabold text-accent tracking-tight">ING</span>
              <span className="text-[0.75em] font-bold text-gold ml-[1px]">.in</span>
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '14px', lineHeight: 1.6 }}>
              Simplifying university admissions across India.
            </p>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4
                  className="mb-4"
                  style={{
                    color: 'rgba(255,255,255,0.2)',
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[14px] transition-colors duration-150 hover:text-white"
                        style={{ color: 'rgba(255,255,255,0.45)' }}
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

        {/* Bottom Bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '13px' }}>
            © 2026 EDUING.in
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-[13px] transition-colors duration-150 hover:text-white"
              style={{ color: 'rgba(255,255,255,0.25)' }}
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-[13px] transition-colors duration-150 hover:text-white"
              style={{ color: 'rgba(255,255,255,0.25)' }}
            >
              Terms
            </Link>
            <Link
              href="/trademark"
              className="text-[13px] transition-colors duration-150 hover:text-white"
              style={{ color: 'rgba(255,255,255,0.25)' }}
            >
              Trademark
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
