import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | EDUING.in',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#06060A] px-6 text-center" style={{
      background: 'radial-gradient(circle at center, rgba(91,95,239,0.1) 0%, #06060A 100%)',
    }}>
      <h1 style={{
        fontFamily: 'Syne, sans-serif', fontSize: 'clamp(80px, 12vw, 120px)',
        fontWeight: '800', color: '#FFFFFF', letterSpacing: '-0.05em', margin: '0',
        lineHeight: '1',
      }}>404</h1>
      <h2 style={{
        fontFamily: 'Syne, sans-serif', fontSize: 'clamp(24px, 4vw, 32px)',
        fontWeight: '700', color: '#FFFFFF', margin: '24px 0 16px',
      }}>Page not found</h2>
      <p style={{
        fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: 'rgba(255,255,255,0.6)',
        maxWidth: '400px', margin: '0 auto 40px', lineHeight: '1.6',
      }}>
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
      </p>
      <Link href="/">
        <button
          className="hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]"
          style={{
            padding: '16px 36px', fontSize: '16px', fontWeight: '600',
            fontFamily: 'DM Sans, sans-serif', cursor: 'pointer',
            transition: 'all 0.2s ease', borderRadius: '100px',
            background: '#FFFFFF', color: '#08080A', border: 'none',
          }}
        >
          Return Home
        </button>
      </Link>
    </main>
  );
}
