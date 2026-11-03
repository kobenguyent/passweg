import { describe, it, expect } from 'vitest';
import { countryGuidesData } from '../data/countryGuides';
import { calculateEligibility } from '../utils/eligibility';
import { EligibilityInput } from '../types';

describe('US & Australian Citizenship Guides (Dual Nationality)', () => {
  it('contains dedicated guides for both United States (US) and Australia (AU)', () => {
    const usGuide = countryGuidesData.find(g => g.id === 'us');
    const auGuide = countryGuidesData.find(g => g.id === 'au');

    expect(usGuide).toBeDefined();
    expect(auGuide).toBeDefined();
    expect(usGuide?.flag).toBe('🇺🇸');
    expect(auGuide?.flag).toBe('🇦🇺');
  });

  it('confirms dual citizenship is 100% legal for both US and Australian citizens', () => {
    countryGuidesData.forEach((guide) => {
      expect(guide.dualCitizenshipLegality.isAllowedByOrigin).toBe(true);
      expect(guide.dualCitizenshipLegality.legalBasis).toBeTruthy();
      expect(guide.dualCitizenshipLegality.summary.en).toContain('dual');
    });
  });

  it('contains specific US tax and state apostille information', () => {
    const usGuide = countryGuidesData.find(g => g.id === 'us')!;
    expect(usGuide.apostilleGuide.authority).toContain('Secretary of State');
    expect(usGuide.travelRules.statutoryLaw).toContain('8 U.S.C.');
    
    const fbarObligation = usGuide.taxAndFinance.keyObligations.find(o => o.title.includes('FBAR'));
    expect(fbarObligation).toBeDefined();
    expect(fbarObligation?.desc.en).toContain('$10,000');
  });

  it('contains specific Australian DFAT and superannuation protection information', () => {
    const auGuide = countryGuidesData.find(g => g.id === 'au')!;
    expect(auGuide.apostilleGuide.authority).toContain('DFAT');
    expect(auGuide.dualCitizenshipLegality.legalBasis).toContain('Section 17');
    
    const superObligation = auGuide.taxAndFinance.keyObligations.find(o => o.title.includes('Superannuation'));
    expect(superObligation).toBeDefined();
    expect(superObligation?.desc.en).toContain('superannuation');
  });

  it('attaches targeted US expat advice to calculation result when countryOfOrigin is us', () => {
    const baseInput: EligibilityInput = {
      yearsInGermany: 5,
      permitType: 'blue_card',
      languageLevel: 'b1',
      hasSpecialIntegration: false,
      employmentStatus: 'employed_permanent',
      passedEinbuergerungstest: true,
      hasCleanCriminalRecord: true,
      isMarriedToGerman: false,
      acceptsDemocraticOrder: true,
      countryOfOrigin: 'us'
    };

    const result = calculateEligibility(baseInput);
    expect(result.countrySpecificAdvice).toBeDefined();
    expect(result.countrySpecificAdvice?.en).toContain('US Citizens');
    expect(result.countrySpecificAdvice?.en).toContain('IRS');
  });

  it('attaches targeted Australian expat advice to calculation result when countryOfOrigin is au', () => {
    const baseInput: EligibilityInput = {
      yearsInGermany: 5,
      permitType: 'blue_card',
      languageLevel: 'b1',
      hasSpecialIntegration: false,
      employmentStatus: 'employed_permanent',
      passedEinbuergerungstest: true,
      hasCleanCriminalRecord: true,
      isMarriedToGerman: false,
      acceptsDemocraticOrder: true,
      countryOfOrigin: 'au'
    };

    const result = calculateEligibility(baseInput);
    expect(result.countrySpecificAdvice).toBeDefined();
    expect(result.countrySpecificAdvice?.en).toContain('Australian Citizens');
    expect(result.countrySpecificAdvice?.en).toContain('DFAT');
  });
});
