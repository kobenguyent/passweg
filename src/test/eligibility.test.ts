import { describe, it, expect } from 'vitest';
import { calculateEligibility } from '../utils/eligibility';
import { EligibilityInput } from '../types';

describe('calculateEligibility (StAG 2024 Naturalization Law)', () => {
  const baseEligibleInput: EligibilityInput = {
    yearsInGermany: 5,
    permitType: 'blue_card',
    languageLevel: 'b1',
    hasSpecialIntegration: false,
    employmentStatus: 'employed_permanent',
    passedEinbuergerungstest: true,
    hasCleanCriminalRecord: true,
    isMarriedToGerman: false,
    acceptsDemocraticOrder: true,
  };

  it('qualifies for Standard 5-Year track under 2024 reform', () => {
    const result = calculateEligibility(baseEligibleInput);
    expect(result.isEligibleNow).toBe(true);
    expect(result.track).toBe('standard_5_year');
    expect(result.confidenceScore).toBe(100);
    expect(result.missingCriteria).toHaveLength(0);
    expect(result.qualifyingLegalBasis).toContain('§ 10 Abs. 1 StAG');
  });

  it('qualifies for 3-Year Turbo track with C1 German and special integration achievements', () => {
    const turboInput: EligibilityInput = {
      ...baseEligibleInput,
      yearsInGermany: 3,
      languageLevel: 'c1_c2',
      hasSpecialIntegration: true,
    };
    const result = calculateEligibility(turboInput);
    expect(result.isEligibleNow).toBe(true);
    expect(result.track).toBe('turbo_3_year');
    expect(result.confidenceScore).toBe(100);
    expect(result.qualifyingLegalBasis).toContain('§ 10 Abs. 3 StAG');
  });

  it('qualifies for Spousal track (§ 9 StAG) after 3 years residence and 2 years marriage', () => {
    const spousalInput: EligibilityInput = {
      ...baseEligibleInput,
      yearsInGermany: 3,
      isMarriedToGerman: true,
      yearsMarried: 2,
      languageLevel: 'b1',
    };
    const result = calculateEligibility(spousalInput);
    expect(result.isEligibleNow).toBe(true);
    expect(result.track).toBe('spousal_3_year');
    expect(result.qualifyingLegalBasis).toContain('§ 9 StAG');
  });

  it('rejects direct naturalization on student visa (§ 16b AufenthG) while explaining study years count', () => {
    const studentInput: EligibilityInput = {
      ...baseEligibleInput,
      permitType: 'student',
    };
    const result = calculateEligibility(studentInput);
    expect(result.isEligibleNow).toBe(false);
    expect(result.missingCriteria.some(c => c.en.includes('Student Residence Permit'))).toBe(true);
  });

  it('flags lack of B1 German certificate', () => {
    const noLanguageInput: EligibilityInput = {
      ...baseEligibleInput,
      languageLevel: 'a1_a2',
    };
    const result = calculateEligibility(noLanguageInput);
    expect(result.isEligibleNow).toBe(false);
    expect(result.missingCriteria.some(c => c.en.includes('German Language Certificate'))).toBe(true);
  });

  it('flags unpassed citizenship test (Einbürgerungstest)', () => {
    const noTestInput: EligibilityInput = {
      ...baseEligibleInput,
      passedEinbuergerungstest: false,
    };
    const result = calculateEligibility(noTestInput);
    expect(result.isEligibleNow).toBe(false);
    expect(result.missingCriteria.some(c => c.en.includes('Citizenship Test'))).toBe(true);
  });

  it('identifies probation period (Probezeit) as a cautionary warning', () => {
    const probationInput: EligibilityInput = {
      ...baseEligibleInput,
      employmentStatus: 'employed_probation',
    };
    const result = calculateEligibility(probationInput);
    expect(result.missingCriteria.some(c => c.en.includes('Probation period'))).toBe(true);
  });

  it('rejects applicant relying on Bürgergeld / SGB II benefits', () => {
    const buergergeldInput: EligibilityInput = {
      ...baseEligibleInput,
      employmentStatus: 'unemployed_buergergeld',
    };
    const result = calculateEligibility(buergergeldInput);
    expect(result.isEligibleNow).toBe(false);
    expect(result.missingCriteria.some(c => c.en.includes('Livelihood Security'))).toBe(true);
  });

  it('identifies residency duration shortfall if under 3 years', () => {
    const lowYearsInput: EligibilityInput = {
      ...baseEligibleInput,
      yearsInGermany: 2,
    };
    const result = calculateEligibility(lowYearsInput);
    expect(result.isEligibleNow).toBe(false);
    expect(result.track).toBe('not_yet_eligible');
    expect(result.missingCriteria.some(c => c.en.includes('Residency Duration'))).toBe(true);
  });
});
