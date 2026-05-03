'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#06060A',
          color: 'white',
          padding: '24px',
          textAlign: 'center'
        }}>
          <h2>Critical Error Occurred</h2>
          <p style={{ display: 'none' }}>{error.message}</p>
          <button onClick={() => reset()}>Try again</button>
        </div>
      </body>
    </html>
  );
}
