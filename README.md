# EDUING.in — Landing Site

Marketing/landing site for EDUING.in, a unified university admissions platform for India. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in NEXT_PUBLIC_APP_URL if different from default
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command            | What it does                          |
| ------------------ | -------------------------------------- |
| `npm run dev`       | Local dev server                       |
| `npm run build`     | Production build                       |
| `npm run start`     | Serve the production build             |
| `npm run lint`      | ESLint (incl. jsx-a11y checks)         |
| `npm run typecheck` | TypeScript, no emit                    |

CI (`.github/workflows/ci.yml`) runs lint, typecheck, and build on every PR and push to `main`.

## Project structure

```
app/                  Route segments (App Router). One folder per route.
  api/contact/         Contact form submission handler (stub — see Known TODOs)
components/
  landing/             Homepage-specific sections (Navbar, Hero, Features, HowItWorks)
  sections/            Reusable page sections used across multiple routes
  ui/                  Small shared primitives (AnimatedSection, SectionHeading)
lib/                  Shared content/constants (nav links, footer links, copy)
public/               Static assets
```

Styling is Tailwind-first with theme tokens defined in `tailwind.config.ts`. Avoid introducing new inline `style={{}}` objects — extend the theme instead so colors/spacing stay consistent.

## Known TODOs

- **Contact form** (`app/api/contact/route.ts`) currently only validates and logs submissions server-side. Wire it up to a real email/CRM provider (e.g. Resend, SendGrid) before relying on it in production.
- **OG image**: `app/layout.tsx` references `/og-image.png` for social previews, but no image has been generated yet — add one at `public/og-image.png` (1200×630).
- Legal pages (`/privacy`, `/terms`, `/trademark`) should be reviewed by someone with legal context before launch — copy hasn't been verified against actual company policy.

## Deployment

Deployed on Vercel (or any Next.js-compatible host). Set `NEXT_PUBLIC_APP_URL` in the hosting environment to point at the live student/admin app.
