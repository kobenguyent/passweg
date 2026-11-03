import { describe, it, expect } from 'vitest';
import { calculateAUEligibility } from '../utils/auEligibility';
import { AUEligibilityInput } from '../types';

describe('calculateAUEligibility (Australian Citizenship Act 2007 - Conferral)', () => {
  const baseEligibleInput: AUEligibilityInput = {
    yearsInAustralia: 4,
    monthsAsPermanentResident: 12,
    daysAbsentLast4Years: 100,
    daysAbsentLast12Months: 30,
    passesCharacterTest: true,
    understandsEnglishAndValues: true,
    plansToResideInAustralia: true,
  };

  it('qualifies for Australian citizenship by conferral when meeting all criteria', () => {
    const result = calculateAUEligibility(baseEligibleInput);
    expect(result.isEligibleNow).toBe(true);
    expect(result.confidenceScore).toBe(100);
    expect(result.qualifyingLegalBasis).toContain('Australian Citizenship Act 2007');
    expect(result.missingCriteria).toHaveLength(0);
  });

  it('flags shortfall in 4-year general residence in Australia', () => {
    const lowYearsInput: AUEligibilityInput = {
      ...baseEligibleInput,
      yearsInAustralia: 3,
    };
    const result = calculateAUEligibility(lowYearsInput);
    expect(result.isEligibleNow).toBe(false);
    expect(result.missingCriteria.some(c => c.en.includes('General Residence'))).toBe(true);
  });

  it('flags Permanent Resident status under 12 months', () => {
    const lowPRInput: AUEligibilityInput = {
      ...baseEligibleInput,
      monthsAsPermanentResident: 8,
    };
    const result = calculateAUEligibility(lowPRInput);
    expect(result.isEligibleNow).toBe(false);
    expect(result.missingCriteria.some(c => c.en.includes('Permanent Resident Duration'))).toBe(true);
  });

  it('flags exceeding 365 days of absences in the past 4 years', () => {
    const highTravelInput: AUEligibilityInput = {
      ...baseEligibleInput,
      daysAbsentLast4Years: 400,
    };
    const result = calculateAUEligibility(highTravelInput);
    expect(result.isEligibleNow).toBe(false);
    expect(result.missingCriteria.some(c => c.en.includes('Absence Limit (4 Years)'))).toBe(true);
  });

  it('flags exceeding 90 days of absences in the past 12 months', () => {
    const recentTravelInput: AUEligibilityInput = {
      ...baseEligibleInput,
      daysAbsentLast12Months: 100, // over 90
    };
    const result = calculateAUEligibility(recentTravelInput);
    expect(result.isEligibleNow).toBe(false);
    expect(result.missingCriteria.some(c => c.en.includes('Absence Limit (Past 12 Months)'))).toBe(true);
  });

  it('flags failure to pass AFP Character Test', () => {
    const characterFailInput: AUEligibilityInput = {
      ...baseEligibleInput,
      passesCharacterTest: false,
    };
    const result = calculateAUEligibility(characterFailInput);
    expect(result.isEligibleNow).toBe(false);
    expect(result.missingCriteria.some(c => c.en.includes('Character Requirement'))).toBe(true);
  });
});
