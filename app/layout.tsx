import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F3EE" },
    { media: "(prefers-color-scheme: dark)", color: "#0C0A15" },
  ],
};

const siteUrl = "https://eduing.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  title: {
    default: "EDUING.in — Unified University Admissions Platform",
    template: "%s | EDUING.in",
  },
  description:
    "Discover, apply, and get admitted to universities across India with one profile. Zero repeated forms. 500+ universities, 50K+ students.",
  openGraph: {
    title: "EDUING.in — Unified University Admissions Platform",
    description:
      "One profile. Hundreds of universities. Zero repeated forms. EDUING.in connects students with the right programs across India.",
    type: "website",
    url: siteUrl,
    siteName: "EDUING.in",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EDUING.in — Unified University Admissions Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@eduing_in",
    creator: "@eduing_in",
    title: "EDUING.in — Unified University Admissions Platform",
    description: "One profile. Hundreds of universities. Zero repeated forms.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EDUING.in',
    url: siteUrl,
    logo: `${siteUrl}/icon-512.png`,
    sameAs: [
      'https://twitter.com/eduing_in',
      'https://www.linkedin.com/company/eduing-in'
    ],
    description: 'Unified university admissions platform for India. One profile, hundreds of universities, zero repeated forms.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'EDUING.in',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  }
];

import { MotionProvider } from "@/components/providers/MotionProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${bricolage.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <MotionProvider>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-chip focus:bg-brand focus:px-4 focus:py-2 focus:text-white">Skip to content</a>
          <Navbar />
          <div id="main">{children}</div>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
