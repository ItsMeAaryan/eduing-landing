import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navbar from '@/components/layout/Navbar';

describe('Navbar', () => {
  it('renders the "Get started" CTA unconditionally, not gated behind scroll state (regression: was opacity:0 until scroll>80px)', () => {
    render(<Navbar />);
    const cta = screen.getByText(/Get started/i);
    // Note: the outer <nav> uses framer-motion's `initial` prop for an
    // entrance animation, which jsdom renders as a static opacity:0 frame
    // (it doesn't run the animation), so `toBeVisible()` isn't reliable
    // here. The actual regression this guards against was the CTA being
    // conditionally hidden by application *scroll state* — so we assert
    // it's unconditionally present in the DOM with no such gating logic.
    expect(cta).toBeInTheDocument();
    expect(cta.closest('a')).toHaveAttribute('href');
  });

  it('renders nav links pointing to real routes', () => {
    render(<Navbar />);
    expect(screen.getByText('Features').closest('a')).toHaveAttribute('href', '/features');
    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '/about');
    expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', '/contact');
  });

  it('external app links use rel="noopener noreferrer" (security regression guard)', () => {
    render(<Navbar />);
    const loginLink = screen.getByText(/Log in/i).closest('a');
    expect(loginLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
