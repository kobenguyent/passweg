import { CountryMetadata } from '../types';

export const countriesConfig: Record<'de' | 'us' | 'au', CountryMetadata> = {
  de: {
    id: 'de',
    name: { en: 'Germany', de: 'Deutschland' },
    flag: '🇩🇪',
    passportColor: '#7a1c2d', // German Burgundy
    badge: { en: 'StAG 2024 Reform', de: 'StAG Reform 2024' },
    governingLaw: 'Staatsangehörigkeitsgesetz (StAG)',
    applicationAuthority: 'Einbürgerungsbehörde / LEA Berlin / KVR München',
    standardFee: '€255 (€51 per minor child)',
    standardTimeline: '6 – 14 months',
    dualCitizenshipStatus: {
      en: '100% Unconditionally Permitted (Since June 27, 2024)',
      de: '100 % ausnahmslos erlaubt (seit 27. Juni 2024)'
    }
  },
  us: {
    id: 'us',
    name: { en: 'United States', de: 'Vereinigte Staaten' },
    flag: '🇺🇸',
    passportColor: '#0c2340', // US Navy Blue
    badge: { en: 'USCIS Form N-400', de: 'USCIS Formular N-400' },
    governingLaw: 'Immigration & Nationality Act (INA § 316 / § 319)',
    applicationAuthority: 'U.S. Citizenship and Immigration Services (USCIS)',
    standardFee: '$710 (Online) / $760 (Paper)',
    standardTimeline: '5 – 10 months',
    dualCitizenshipStatus: {
      en: 'Allowed (8 U.S.C. § 1481 / Supreme Court precedent)',
      de: 'Erlaubt (8 U.S.C. § 1481 / Höchstrichterliche Rechtsprechung)'
    }
  },
  au: {
    id: 'au',
    name: { en: 'Australia', de: 'Australien' },
    flag: '🇦🇺',
    passportColor: '#002b49', // Australian Deep Navy
    badge: { en: 'Conferral (Form 1300t)', de: 'Einbürgerung (Form 1300t)' },
    governingLaw: 'Australian Citizenship Act 2007',
    applicationAuthority: 'Department of Home Affairs (ImmiAccount)',
    standardFee: 'AUD $540',
    standardTimeline: '6 – 9 months',
    dualCitizenshipStatus: {
      en: 'Allowed (Section 17 repealed in 2002)',
      de: 'Erlaubt (Section 17 im Jahr 2002 abgeschafft)'
    }
  }
};
