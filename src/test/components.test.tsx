import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

// Mock canvas-confetti
vi.mock('canvas-confetti', () => ({
  default: vi.fn(),
}));

describe('PassWeg Application Component Suite', () => {
  beforeEach(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.clear();
    }
  });

  it('renders navbar brand and hero headline', () => {
    render(<App />);
    const brandElements = screen.getAllByText((_, element) => element?.textContent === 'PassWeg');
    expect(brandElements.length).toBeGreaterThan(0);
    const heroPassports = screen.getAllByText(/German Passport/i);
    expect(heroPassports.length).toBeGreaterThan(0);
  });

  it('allows switching language from English to German', () => {
    render(<App />);
    const langBtn = screen.getByTitle('Switch to German');
    fireEvent.click(langBtn);

    // After switching to DE, the title reflects German
    const deElements = screen.getAllByText(/deutschen Pass/i);
    expect(deElements.length).toBeGreaterThan(0);
  });

  it('switches navigation tab to Eligibility Calculator', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    const eligibilityBtn = buttons.find(b => b.textContent?.includes('Eligibility') || b.textContent?.includes('Check My Eligibility'));
    expect(eligibilityBtn).toBeDefined();
    if (eligibilityBtn) {
      fireEvent.click(eligibilityBtn);
      expect(screen.getByText(/German Citizenship Eligibility Calculator/i)).toBeInTheDocument();
    }
  });

  it('switches navigation tab to Document Checklist', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    const checklistBtn = buttons.find(b => b.textContent?.includes('Checklist') || b.textContent?.includes('Document Checklist'));
    expect(checklistBtn).toBeDefined();
    if (checklistBtn) {
      fireEvent.click(checklistBtn);
      expect(screen.getByText(/Customized Document Checklist/i)).toBeInTheDocument();
    }
  });

  it('switches navigation tab to Letter Templates', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    const lettersBtn = buttons.find(b => b.textContent?.includes('Letter Templates'));
    expect(lettersBtn).toBeDefined();
    if (lettersBtn) {
      fireEvent.click(lettersBtn);
      expect(screen.getByText(/Official Correspondence Templates/i)).toBeInTheDocument();
    }
  });

  it('switches navigation tab to US & Australia Country Guide', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    const countryBtn = buttons.find(b => b.textContent?.includes('US & Australia'));
    expect(countryBtn).toBeDefined();
    if (countryBtn) {
      fireEvent.click(countryBtn);
      expect(screen.getByText(/Dual Citizenship for US & Australian Citizens/i)).toBeInTheDocument();
    }
  });
});
