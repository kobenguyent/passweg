export type Language = 'en' | 'de';
export type CountryCode = 'de' | 'us' | 'au';

// --- GERMANY (StAG 2024) ---
export type ResidencePermitType = 
  | 'blue_card'
  | 'settlement' // Niederlassungserlaubnis
  | 'eu_permanent' // Daueraufenthalt-EU
  | 'skilled_worker' // § 18a, 18b, 18g
  | 'eu_citizen'
  | 'family_reunion' // § 28, 29, 30
  | 'student' // § 16b (ineligible directly for naturalization!)
  | 'asylum_recognized' // § 25 Abs. 1/2
  | 'tolerated' // Duldung (ineligible directly)
  | 'other_temporary';

export type LanguageLevel = 'none' | 'a1_a2' | 'b1' | 'b2' | 'c1_c2';

export type EmploymentStatus = 
  | 'employed_permanent'
  | 'employed_probation'
  | 'employed_fixed_term'
  | 'freelance'
  | 'student'
  | 'unemployed_buergergeld'
  | 'pensioner';

export type CountryOrigin = 'all' | 'us' | 'au' | 'other';

export interface DEEligibilityInput {
  yearsInGermany: number;
  permitType: ResidencePermitType;
  languageLevel: LanguageLevel;
  hasSpecialIntegration: boolean;
  employmentStatus: EmploymentStatus;
  passedEinbuergerungstest: boolean;
  hasCleanCriminalRecord: boolean;
  isMarriedToGerman: boolean;
  yearsMarried?: number;
  acceptsDemocraticOrder: boolean;
  countryOfOrigin?: CountryOrigin;
}

export type EligibilityInput = DEEligibilityInput;

export type EligibilityTrack = 
  | 'turbo_3_year' // StAG § 10 Abs. 3 (3 years + C1 + special integration)
  | 'standard_5_year' // StAG § 10 Abs. 1 (5 years + B1)
  | 'spousal_3_year' // StAG § 9 (3 years in Germany + 2 years marriage to German citizen)
  | 'not_yet_eligible';

// --- UNITED STATES (INA § 316 / § 319 Form N-400) ---
export interface USEligibilityInput {
  yearsAsPermanentResident: number;
  isMarriedToUSCitizen: boolean;
  yearsMarriedToCitizen?: number;
  monthsPhysicallyPresentInUS: number;
  hasContinuousResidence: boolean;
  monthsInCurrentState: number;
  registeredSelectiveService: boolean;
  filedRequiredTaxes: boolean;
  hasGoodMoralCharacter: boolean;
  willingToTakeOath: boolean;
  basicEnglishAndCivics: boolean;
}

// --- AUSTRALIA (Australian Citizenship Act 2007 - Conferral) ---
export interface AUEligibilityInput {
  yearsInAustralia: number;
  monthsAsPermanentResident: number;
  daysAbsentLast4Years: number;
  daysAbsentLast12Months: number;
  passesCharacterTest: boolean;
  understandsEnglishAndValues: boolean;
  plansToResideInAustralia: boolean;
}

export interface EligibilityResult {
  isEligibleNow: boolean;
  confidenceScore: number;
  headline: { en: string; de: string };
  summary: { en: string; de: string };
  qualifyingLegalBasis: string;
  passedCriteria: string[];
  missingCriteria: {
    en: string;
    de: string;
    priority: 'high' | 'medium' | 'low';
    actionTip: { en: string; de: string };
  }[];
  recommendedNextSteps: { en: string; de: string }[];
  track?: EligibilityTrack;
  countrySpecificAdvice?: { en: string; de: string };
}

export interface RoadmapStep {
  id: number;
  slug: string;
  title: { en: string; de: string };
  shortDesc: { en: string; de: string };
  estimatedDuration: { en: string; de: string };
  costEstimate: { en: string; de: string };
  fullDescription: { en: string; de: string };
  actionItems: { en: string; de: string }[];
  proTips: { en: string; de: string }[];
  pitfalls: { en: string; de: string }[];
  officialLinks?: { label: string; url: string }[];
}

export interface DocumentItem {
  id: string;
  title: { en: string; de: string };
  category: 'identity' | 'residence' | 'income' | 'integration' | 'civil_status';
  description: { en: string; de: string };
  requiredFor: ('all' | 'employed' | 'freelance' | 'married' | 'children')[];
  howToGet: { en: string; de: string };
  officialLink?: string;
  tip?: { en: string; de: string };
  countrySpecific?: {
    country: 'us' | 'au';
    note: { en: string; de: string };
  };
}

export interface TipItem {
  id: string;
  title: { en: string; de: string };
  category: string;
  badge: { en: string; de: string };
  summary: { en: string; de: string };
  content: { en: string; de: string };
  actionableStep?: { en: string; de: string };
  relevanceTag: string;
  country?: 'us' | 'au';
}

export interface QuizQuestion {
  id: number;
  question: { en: string; de: string };
  options: { en: string; de: string }[];
  correctIndex: number;
  explanation: { en: string; de: string };
  category: string;
  is2024New?: boolean;
  isSpecialBenchmark?: boolean;
}

export interface LetterTemplate {
  id: string;
  title: { en: string; de: string };
  purpose: { en: string; de: string };
  recommendedTiming: { en: string; de: string };
  fields: { id: string; label: { en: string; de: string }; placeholder: string; defaultValue?: string }[];
  generateText: (fields: Record<string, string>) => string;
}

export interface CountryMetadata {
  id: CountryCode;
  name: { en: string; de: string };
  flag: string;
  passportColor: string;
  badge: { en: string; de: string };
  governingLaw: string;
  applicationAuthority: string;
  standardFee: string;
  standardTimeline: string;
  dualCitizenshipStatus: { en: string; de: string };
}

export interface CityGuide {
  id: string;
  city: string;
  state: string;
  portalUrl: string;
  portalName: string;
  averageWaitMonths: string;
  applicationMode: '100% Online' | 'Hybrid (Paper + Online)' | 'Appointment only';
  keyInsight: { en: string; de: string };
  contactTip: { en: string; de: string };
}

export interface CountryGuideData {
  id: 'us' | 'au';
  name: { en: string; de: string };
  flag: string;
  passportName: { en: string; de: string };
  tagline: { en: string; de: string };
  dualCitizenshipLegality: {
    isAllowedByOrigin: boolean;
    legalBasis: string;
    summary: { en: string; de: string };
  };
  apostilleGuide: {
    authority: string;
    howToStepByStep: { en: string; de: string }[];
    costs: string;
    processingTime: string;
    officialLink: string;
  };
  travelRules: {
    leavingGermany: { en: string; de: string };
    enteringHomeCountry: { en: string; de: string };
    statutoryLaw: string;
  };
  taxAndFinance: {
    summary: { en: string; de: string };
    keyObligations: { title: string; desc: { en: string; de: string } }[];
  };
  consularServicesInGermany: {
    name: string;
    locations: string[];
    website: string;
  };
}
