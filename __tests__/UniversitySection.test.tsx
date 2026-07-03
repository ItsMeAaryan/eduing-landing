import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import UniversitySection from '@/components/sections/UniversitySection';

describe('UniversitySection', () => {
  it('register link does not point to the nonexistent /auth/register route', () => {
    render(<UniversitySection />);
    const link = screen.getByText(/Register your university/i).closest('a');
    expect(link?.getAttribute('href')).not.toBe('/auth/register');
  });

  it('register link has a valid absolute URL', () => {
    render(<UniversitySection />);
    const link = screen.getByText(/Register your university/i).closest('a');
    const href = link?.getAttribute('href') ?? '';
    expect(() => new URL(href)).not.toThrow();
  });
});
