import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/Footer";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const siteUrl = "https://eduing.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    title: "EDUING.in — Unified University Admissions Platform",
    description: "One profile. Hundreds of universities. Zero repeated forms.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'EDUING.in',
  url: siteUrl,
  description:
    'Unified university admissions platform for India. One profile, hundreds of universities, zero repeated forms.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${syne.variable} ${dmSans.variable} relative`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="m-0 p-0 bg-bg font-sans relative">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
