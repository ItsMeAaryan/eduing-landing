# EDUING.in — Landing Site

Marketing/landing site for EDUING.in, a unified university admissions platform for India. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Team

| Name | Role | GitHub |
| --- | --- | --- |
| Aaryan Sharma | Co-Founder | [@ItsMeAaryan](https://github.com/ItsMeAaryan) |
| Lakshya Pandey | Co-Founder | [@pandeylakshya207-max](https://github.com/pandeylakshya207-max) |
| Prince Mittal | CTO & Lead Developer | [@princemittalr](https://github.com/princemittalr) |

EDUING.in was founded by Aaryan Sharma and Lakshya Pandey. Prince Mittal leads engineering as CTO, having built the platform's full technology stack from the ground up — architecture, frontend, and infrastructure.

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
| `npm run test`      | Unit/component tests (Vitest)          |
| `npm run test:e2e`  | End-to-end smoke tests (Playwright)    |

CI (`.github/workflows/ci.yml`) runs lint, typecheck, unit tests, and build on every PR and push to `main`, plus a separate e2e job with Playwright.

## Testing

- **Unit/component tests** (`__tests__/`, Vitest + React Testing Library): cover the specific regressions found during the audit — the FAQ accordion's keyboard/aria behavior, the contact form actually posting to `/api/contact` instead of silently dropping into `localStorage`, the nav CTA no longer being scroll-gated, and previously-broken external links now resolving to valid absolute URLs.
- **E2E smoke tests** (`e2e/`, Playwright): every main route returns a healthy status and correct title, the 404 page works, nav links go where they say, the footer has no dead `#` links, and the contact form's full submit flow works end-to-end against a real running build.

Run `npm run test` for unit tests locally (fast, no browser needed). Run `npx playwright install` once, then `npm run test:e2e` for the full e2e suite (spins up a production build automatically).

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
- Legal pages (`/privacy`, `/terms`, `/trademark`) have real, specific content (not placeholder), but should still be reviewed by someone with legal context before launch.
- `/about` page still has some inline styles not yet migrated to Tailwind — cosmetic, not functional.
- Testimonials on the homepage are illustrative/unattributed placeholder quotes — swap for real, attributable student/university quotes before launch (see comment in `components/sections/TestimonialsSection.tsx`).

## Deployment

Deployed on Vercel (or any Next.js-compatible host). Set `NEXT_PUBLIC_APP_URL` in the hosting environment to point at the live student/admin app.
