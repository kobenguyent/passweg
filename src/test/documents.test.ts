import { describe, it, expect } from 'vitest';
import { documentsData } from '../data/documentsData';

describe('Document Checklist Data & Filtering', () => {
  it('contains mandatory baseline identity and civil status documents', () => {
    const passportDoc = documentsData.find(d => d.id === 'doc-foreign-passport');
    const birthCertDoc = documentsData.find(d => d.id === 'doc-birth-cert');
    const rentenverlaufDoc = documentsData.find(d => d.id === 'doc-rentenverlauf');

    expect(passportDoc).toBeDefined();
    expect(passportDoc?.requiredFor).toContain('all');
    expect(birthCertDoc).toBeDefined();
    expect(rentenverlaufDoc).toBeDefined();
  });

  it('correctly tags employment-specific documents', () => {
    const payslips = documentsData.find(d => d.id === 'doc-payslips');
    const freelanceTax = documentsData.find(d => d.id === 'doc-freelance-tax');

    expect(payslips?.requiredFor).toContain('employed');
    expect(payslips?.requiredFor).not.toContain('freelance');

    expect(freelanceTax?.requiredFor).toContain('freelance');
    expect(freelanceTax?.requiredFor).not.toContain('employed');
  });

  it('correctly flags marriage certificate for married candidates only', () => {
    const marriageDoc = documentsData.find(d => d.id === 'doc-marriage-cert');
    expect(marriageDoc).toBeDefined();
    expect(marriageDoc?.requiredFor).toEqual(['married']);
  });

  it('includes proof of special integration for turbo track applicants', () => {
    const specialDoc = documentsData.find(d => d.id === 'doc-special-integration');
    expect(specialDoc).toBeDefined();
    expect(specialDoc?.category).toBe('integration');
  });
});
