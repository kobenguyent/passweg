import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

// Mock canvas-confetti
vi.mock('canvas-confetti', () => ({
  default: vi.fn(),
}));

describe('PassWeg Multi-Country Application Component Suite', () => {
  beforeEach(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.clear();
    }
  });

  it('renders navbar brand and hero headline for default country (Germany)', () => {
    render(<App />);
    const brandElements = screen.getAllByText((_, element) => element?.textContent === 'PassWeg');
    expect(brandElements.length).toBeGreaterThan(0);
    const heroPassports = screen.getAllByText(/German Passport/i);
    expect(heroPassports.length).toBeGreaterThan(0);
  });

  it('switches destination country to United States (US)', () => {
    render(<App />);
    const usButtons = screen.getAllByText(/United States/i);
    expect(usButtons.length).toBeGreaterThan(0);
    fireEvent.click(usButtons[0]);

    const usPassports = screen.getAllByText(/U.S. Passport/i);
    expect(usPassports.length).toBeGreaterThan(0);
  });

  it('switches destination country to Australia (AU)', () => {
    render(<App />);
    const auButtons = screen.getAllByText(/Australia/i);
    expect(auButtons.length).toBeGreaterThan(0);
    fireEvent.click(auButtons[0]);

    const auPassports = screen.getAllByText(/Australian Passport/i);
    expect(auPassports.length).toBeGreaterThan(0);
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
    const eligibilityBtn = buttons.find(b => b.textContent?.includes('Eligibility') || b.textContent?.includes('Check Eligibility'));
    expect(eligibilityBtn).toBeDefined();
    if (eligibilityBtn) {
      fireEvent.click(eligibilityBtn);
      expect(screen.getByText(/Citizenship Eligibility Calculator/i)).toBeInTheDocument();
    }
  });

  it('switches navigation tab to Document Checklist', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    const checklistBtn = buttons.find(b => b.textContent?.includes('Checklist') || b.textContent?.includes('Document Checklist'));
    expect(checklistBtn).toBeDefined();
    if (checklistBtn) {
      fireEvent.click(checklistBtn);
      expect(screen.getByText(/Interactive Document Tracker/i)).toBeInTheDocument();
    }
  });

  it('switches navigation tab to Letter Templates', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    const lettersBtn = buttons.find(b => b.textContent?.includes('Letter Templates'));
    expect(lettersBtn).toBeDefined();
    if (lettersBtn) {
      fireEvent.click(lettersBtn);
      expect(screen.getByText(/Legal Letter Generator/i)).toBeInTheDocument();
    }
  });

  it('switches navigation tab to Dual Nationality Hub', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    const dualBtn = buttons.find(b => b.textContent?.includes('Dual Nationality') || b.textContent?.includes('Doppelpass'));
    expect(dualBtn).toBeDefined();
    if (dualBtn) {
      fireEvent.click(dualBtn);
      expect(screen.getByText(/Dual Citizenship for US & Australian Citizens/i)).toBeInTheDocument();
    }
  });
});
