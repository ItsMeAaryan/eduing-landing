import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import UniversitySection from '@/components/sections/UniversitySection';

describe('UniversitySection', () => {
  it('renders the AI Program Discovery heading', () => {
    render(<UniversitySection />);
    const heading = screen.getByRole('heading', { name: /Discover Your Perfect Program/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the search input', () => {
    render(<UniversitySection />);
    const input = screen.getByLabelText(/Search academic programs/i);
    expect(input).toBeInTheDocument();
  });
});
