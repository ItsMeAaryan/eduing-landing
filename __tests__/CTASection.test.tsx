import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CTASection from '@/components/sections/CTASection';

describe('CTASection', () => {
  it('CTA link has a valid absolute URL (regression: was href="app.eduing.in" missing protocol)', () => {
    render(<CTASection />);
    const link = screen.getByText(/Start Your Journey/i).closest('a');
    const href = link?.getAttribute('href') ?? '';
    expect(() => new URL(href)).not.toThrow();
    expect(href).toMatch(/^https?:\/\//);
  });
});
