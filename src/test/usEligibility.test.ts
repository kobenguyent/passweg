import { describe, it, expect } from 'vitest';
import { calculateUSEligibility } from '../utils/usEligibility';
import { USEligibilityInput } from '../types';

describe('calculateUSEligibility (INA § 316 / § 319 Form N-400)', () => {
  const baseEligibleInput: USEligibilityInput = {
    yearsAsPermanentResident: 5,
    isMarriedToUSCitizen: false,
    monthsPhysicallyPresentInUS: 36,
    hasContinuousResidence: true,
    monthsInCurrentState: 6,
    registeredSelectiveService: true,
    filedRequiredTaxes: true,
    hasGoodMoralCharacter: true,
    willingToTakeOath: true,
    basicEnglishAndCivics: true,
  };

  it('qualifies under general 5-year permanent resident track (INA § 316)', () => {
    const result = calculateUSEligibility(baseEligibleInput);
    expect(result.isEligibleNow).toBe(true);
    expect(result.confidenceScore).toBe(100);
    expect(result.qualifyingLegalBasis).toContain('INA § 316(a)');
    expect(result.missingCriteria).toHaveLength(0);
  });

  it('qualifies under 3-year marriage to US citizen track (INA § 319) after 3 years', () => {
    const spouseInput: USEligibilityInput = {
      ...baseEligibleInput,
      yearsAsPermanentResident: 3,
      isMarriedToUSCitizen: true,
      yearsMarriedToCitizen: 3,
      monthsPhysicallyPresentInUS: 20, // > 18 months
    };
    const result = calculateUSEligibility(spouseInput);
    expect(result.isEligibleNow).toBe(true);
    expect(result.confidenceScore).toBe(100);
    expect(result.qualifyingLegalBasis).toContain('INA § 319(a)');
  });

  it('permits early filing within 90-day window (e.g. 4.8 years as LPR)', () => {
    const earlyFilingInput: USEligibilityInput = {
      ...baseEligibleInput,
      yearsAsPermanentResident: 4.8, // within 90 days of 5 years (4.75y threshold)
    };
    const result = calculateUSEligibility(earlyFilingInput);
    expect(result.isEligibleNow).toBe(true);
  });

  it('flags physical presence shortfall (< 30 months for 5-year track)', () => {
    const lowPresenceInput: USEligibilityInput = {
      ...baseEligibleInput,
      monthsPhysicallyPresentInUS: 24, // below 30 months
    };
    const result = calculateUSEligibility(lowPresenceInput);
    expect(result.isEligibleNow).toBe(false);
    expect(result.missingCriteria.some(c => c.en.includes('Physical Presence'))).toBe(true);
  });

  it('flags break in continuous residence (trips > 6 months)', () => {
    const tripBreakInput: USEligibilityInput = {
      ...baseEligibleInput,
      hasContinuousResidence: false,
    };
    const result = calculateUSEligibility(tripBreakInput);
    expect(result.isEligibleNow).toBe(false);
    expect(result.missingCriteria.some(c => c.en.includes('Continuous Residence Broken'))).toBe(true);
  });

  it('flags unfiled IRS taxes', () => {
    const taxesInput: USEligibilityInput = {
      ...baseEligibleInput,
      filedRequiredTaxes: false,
    };
    const result = calculateUSEligibility(taxesInput);
    expect(result.isEligibleNow).toBe(false);
    expect(result.missingCriteria.some(c => c.en.includes('IRS Tax Compliance'))).toBe(true);
  });
});
