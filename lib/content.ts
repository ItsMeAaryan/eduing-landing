export const HOW_IT_WORKS_STEPS = [
  {
    num: '01',
    title: 'Create Your Profile',
    desc: 'Add your academic details, marks, and entrance scores once. Your profile is your universal application.',
  },
  {
    num: '02',
    title: 'Discover Universities',
    desc: 'Search and filter 500+ universities by state, program, and eligibility. Compare side by side.',
  },
  {
    num: '03',
    title: 'Apply in Seconds',
    desc: 'Submit applications with your saved profile. No repeated data entry, ever.',
  },
  {
    num: '04',
    title: 'Track & Get Admitted',
    desc: 'Real-time status updates from universities directly on your dashboard. Know every step.',
  },
] as const

export type FooterColumn = {
  title: string
  links: { label: string; href: string }[]
}

// NOTE: links pointing to "#" are placeholders for pages not yet built.
// Track build status here so the footer can filter/flag them instead of
// shipping dead links silently.
export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Platform',
    links: [
      { label: 'Features', href: '/#features' },
      { label: 'Universities', href: '/#universities' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Trademark', href: '/trademark' },
    ],
  },
]
