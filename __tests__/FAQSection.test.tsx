import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import FAQSection from '@/components/sections/FAQSection';

describe('FAQSection', () => {
  it('renders FAQ questions', () => {
    render(<FAQSection />);
    expect(screen.getByText(/How does EDUING\.in help me/i)).toBeInTheDocument();
  });

  it('uses real <button> elements for accordion triggers (a11y regression guard)', () => {
    render(<FAQSection />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('toggles aria-expanded when a question is clicked', () => {
    render(<FAQSection />);
    const buttons = screen.getAllByRole('button');
    const secondButton = buttons[1];

    expect(secondButton).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(secondButton);
    expect(secondButton).toHaveAttribute('aria-expanded', 'true');
  });

  it('is keyboard-operable (button elements respond to Enter/Space natively)', () => {
    render(<FAQSection />);
    const buttons = screen.getAllByRole('button');
    // Native <button> elements are keyboard-operable by default (unlike the
    // old <div onClick> implementation) — this just guards that a real
    // button element is used, since jsdom doesn't simulate native key
    // activation the way browsers do.
    buttons.forEach((btn) => {
      expect(btn.tagName).toBe('BUTTON');
    });
  });
});
