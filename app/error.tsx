'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global Application Error:', error);
  }, [error]);

  return (
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
      <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: '32px', marginBottom: '16px' }}>
        Something went wrong!
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '32px', fontFamily: 'DM Sans, sans-serif' }}>
        {error.message || 'An unexpected error occurred while rendering this page.'}
      </p>
      <button
        onClick={() => reset()}
        style={{
          background: 'white',
          color: '#06060A',
          padding: '12px 24px',
          borderRadius: '100px',
          fontWeight: '600',
          cursor: 'pointer',
          border: 'none',
          fontFamily: 'DM Sans, sans-serif'
        }}
      >
        Try again
      </button>
    </div>
  );
}
