import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "EDUING.in — Unified University Admissions Platform",
  description: "Discover, apply, and get admitted to universities across India with one profile. Zero repeated forms. 500+ universities, 50K+ students.",
  openGraph: {
    title: "EDUING.in — Unified University Admissions Platform",
    description: "One profile. Hundreds of universities. Zero repeated forms. EDUING.in connects students with the right programs across India.",
    type: "website",
    url: "https://eduing.in",
    siteName: "EDUING.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "EDUING.in — Unified University Admissions Platform",
    description: "One profile. Hundreds of universities. Zero repeated forms.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning style={{ margin: 0, padding: 0, background: '#06060A' }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
