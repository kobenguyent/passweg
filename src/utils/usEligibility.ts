import { USEligibilityInput, EligibilityResult } from '../types';

export function calculateUSEligibility(input: USEligibilityInput): EligibilityResult {
  const missingCriteria: EligibilityResult['missingCriteria'] = [];
  const passedCriteria: string[] = [];

  const isSpouseTrack = input.isMarriedToUSCitizen && (input.yearsMarriedToCitizen ?? 0) >= 3;
  const requiredLPRYears = isSpouseTrack ? 3 : 5;
  const requiredPhysicalPresenceMonths = isSpouseTrack ? 18 : 30;

  // 1. Permanent Resident (Green Card) Duration
  // USCIS allows filing up to 90 days before reaching 3 or 5 years (approx 2.75y or 4.75y)
  const earlyFilingThreshold = requiredLPRYears - 0.25;
  if (input.yearsAsPermanentResident < earlyFilingThreshold) {
    missingCriteria.push({
      en: `Permanent Residence Duration: You need ${requiredLPRYears} years as a Green Card holder (${isSpouseTrack ? 'Spousal Rule § 319' : 'General Rule § 316'}). You have ${input.yearsAsPermanentResident} years. You may submit Form N-400 up to 90 days before your anniversary.`,
      de: `Dauer der Permanent Residency: Sie benötigen ${requiredLPRYears} Jahre als Green Card Inhaber (${isSpouseTrack ? 'Ehegattenregelung § 319' : 'Regelfall § 316'}). Sie haben aktuell ${input.yearsAsPermanentResident} Jahre. Die Einreichung ist bis zu 90 Tage vor dem Stichtag möglich.`,
      priority: 'high',
      actionTip: {
        en: `Mark your 90-day early filing date on your calendar (${requiredLPRYears * 365 - 90} days from the "Resident Since" date on your Green Card).`,
        de: `Berechnen Sie den 90-Tage-Frühantragstermin anhand des Datums „Resident Since“ auf Ihrer Green Card.`
      }
    });
  } else {
    passedCriteria.push(
      isSpouseTrack
        ? 'Qualified under 3-Year Marriage Track (INA § 319(a))'
        : 'Qualified under 5-Year General Permanent Resident Track (INA § 316(a))'
    );
  }

  // 2. Physical Presence in the United States
  if (input.monthsPhysicallyPresentInUS < requiredPhysicalPresenceMonths) {
    missingCriteria.push({
      en: `Physical Presence: Statutory law requires you to be physically present on U.S. soil for at least ${requiredPhysicalPresenceMonths} months out of the statutory period. You indicated ${input.monthsPhysicallyPresentInUS} months.`,
      de: `Physische Anwesenheit: Sie müssen mindestens ${requiredPhysicalPresenceMonths} Monate im maßgeblichen Zeitraum tatsächlich in den USA anwesend gewesen sein. Sie haben ${input.monthsPhysicallyPresentInUS} Monate angegeben.`,
      priority: 'high',
      actionTip: {
        en: `Accumulate ${requiredPhysicalPresenceMonths - input.monthsPhysicallyPresentInUS} more months of physical presence before submitting Form N-400.`,
        de: `Verbleiben Sie noch ${requiredPhysicalPresenceMonths - input.monthsPhysicallyPresentInUS} Monate in den USA vor Absenden des N-400.`
      }
    });
  } else {
    passedCriteria.push(`Met Physical Presence Requirement (≥ ${requiredPhysicalPresenceMonths} months)`);
  }

  // 3. Continuous Residence (No single trip > 6 months)
  if (!input.hasContinuousResidence) {
    missingCriteria.push({
      en: 'Continuous Residence Broken: A single absence from the U.S. of more than 6 months presumes a break in continuous residence (8 CFR § 316.5). Trips over 1 year automatically break continuity unless an approved Form N-470 exists.',
      de: 'Kontinuierlicher Wohnsitz unterbrochen: Ein Auslandsaufenthalt von über 6 Monaten am Stück begründet die Vermutung eines Wohnsitzabbruchs. Bei über 1 Jahr wird die Frist zurückgesetzt.',
      priority: 'high',
      actionTip: {
        en: 'Gather evidence of continuous ties (U.S. home lease/mortgage, uninterrupted U.S. employment, IRS tax returns) or wait 4 years and 1 day after returning from the extended trip.',
        de: 'Nachweise über andauernde US-Bindungen (Mietvertrag, US-Arbeitsverhältnis, Steuererklärungen) bereitlegen oder Neuanlauf abwarten.'
      }
    });
  } else {
    passedCriteria.push('Maintained Continuous U.S. Residence (No trips > 6 months)');
  }

  // 4. District / State Residence (≥ 3 months)
  if (input.monthsInCurrentState < 3) {
    missingCriteria.push({
      en: 'USCIS District Residence: You must have resided in the state or USCIS service district where you file for at least 3 months prior to filing Form N-400.',
      de: 'Mindestaufenthalt im Bundesstaat: Sie müssen mindestens 3 Monate vor Antragstellung im Zuständigkeitsbereich des USCIS-Bezirks gewohnt haben.',
      priority: 'medium',
      actionTip: {
        en: 'Wait until you have completed 3 full months at your new address before submitting Form N-400.',
        de: 'Warten Sie mit der Einreichung, bis Sie 3 Monate an Ihrem aktuellen Wohnsitz gemeldet sind.'
      }
    });
  } else {
    passedCriteria.push('Satisfied 3-Month State/District Residence Requirement');
  }

  // 5. Selective Service Registration (Males)
  if (!input.registeredSelectiveService) {
    missingCriteria.push({
      en: 'Selective Service Registration: Male U.S. permanent residents aged 18 to 26 are legally required to register with the Selective Service. Failure to register can impact Good Moral Character if applying under age 31.',
      de: 'Selective Service Registrierung: Männliche Green Card Inhaber zwischen 18 und 26 Jahren müssen sich registrieren. Unter 31 Jahren kann ein Versäumnis die Einbürgerung gefährden.',
      priority: 'medium',
      actionTip: {
        en: 'If over age 31, the statutory 5-year GMC period cures this requirement. If between 26 and 31, request a Status Information Letter (SIL) from www.sss.gov.',
        de: 'Über 31 Jahre verjährt dieser Mangel für den Good Moral Character. Zwischen 26 und 31 ein Status Information Letter (SIL) anfordern.'
      }
    });
  } else {
    passedCriteria.push('Complied with Selective Service Registration (or Exempt)');
  }

  // 6. Tax Filings
  if (!input.filedRequiredTaxes) {
    missingCriteria.push({
      en: 'IRS Tax Compliance: You must have filed all required federal and state income tax returns. Never file as a non-resident alien on Form 1040-NR while holding a Green Card.',
      de: 'IRS Steuerkonformität: Alle vorgeschriebenen US-Steuererklärungen müssen eingereicht sein. Niemals als Non-Resident (1040-NR) deklarieren, da dies den LPR-Status gefährdet.',
      priority: 'high',
      actionTip: {
        en: 'Order official IRS Tax Return Transcripts (Form 4506-T) for the last 5 years online at irs.gov/individuals/get-transcript.',
        de: 'Offizielle Steuer-Transkripte der letzten 5 Jahre online bei irs.gov abrufen.'
      }
    });
  } else {
    passedCriteria.push('IRS Tax Compliance Verified (Last 5 Years Transcripts)');
  }

  // 7. Good Moral Character (GMC)
  if (!input.hasGoodMoralCharacter) {
    missingCriteria.push({
      en: 'Good Moral Character (GMC): Certain criminal convictions (aggravated felonies, crimes involving moral turpitude) or unpaid court-ordered child support preclude naturalization under INA § 101(f).',
      de: 'Good Moral Character (GMC): Schwere Straftaten oder Zahlungsverzug beim Kindesunterhalt schließen die Einbürgerung nach INA § 101(f) aus.',
      priority: 'high',
      actionTip: {
        en: 'Consult an AILA-certified immigration attorney to evaluate past records and expungements.',
        de: 'Einen US-Einwanderungsanwalt konsultieren zur Überprüfung von Vorstrafen.'
      }
    });
  } else {
    passedCriteria.push('Demonstrated Good Moral Character (INA § 101(f))');
  }

  // 8. English & Civics / Oath
  if (!input.basicEnglishAndCivics || !input.willingToTakeOath) {
    missingCriteria.push({
      en: 'English, Civics & Oath: You must be able to read, write, and speak basic English, answer 6 of 10 USCIS civics questions, and take the Oath of Allegiance.',
      de: 'Englisch, Staatsbürgertest & Eid: Grundlegende Englischkenntnisse, 6 von 10 Civics-Fragen sowie die Bereitschaft zum Treueeid (Oath of Allegiance) sind gesetzlich vorgeschrieben.',
      priority: 'medium',
      actionTip: {
        en: 'Practice the 100 civics questions with our quiz simulator. Exceptions apply for applicants aged 50+ with 20+ years of LPR status (50/20 rule).',
        de: 'Civics-Fragen im Quiz-Simulator üben. Bei über 50 Jahren und 20 Jahren Green Card gelten Erleichterungen (50/20-Regel).'
      }
    });
  } else {
    passedCriteria.push('Prepared for English & Civics Exam + Oath of Allegiance');
  }

  // Calculate score
  let score = 100;
  missingCriteria.forEach((m) => {
    if (m.priority === 'high') score -= 25;
    if (m.priority === 'medium') score -= 15;
    if (m.priority === 'low') score -= 5;
  });
  const confidenceScore = Math.max(0, Math.min(100, score));
  const isEligibleNow = missingCriteria.length === 0;

  const qualifyingLegalBasis = isSpouseTrack 
    ? 'INA § 319(a) (3-Year Marriage to U.S. Citizen)'
    : 'INA § 316(a) (5-Year General Permanent Resident)';

  const headline = isEligibleNow
    ? {
        en: `🇺🇸 You Are Eligible to File Form N-400 for U.S. Citizenship!`,
        de: `🇺🇸 Sie sind berechtigt, Form N-400 für die US-Staatsbürgerschaft einzureichen!`
      }
    : {
        en: 'Almost Ready for U.S. Citizenship: Action Items Remaining',
        de: 'Fast geschafft: Noch offene Punkte für die US-Einbürgerung'
      };

  const summary = isEligibleNow
    ? {
        en: `Congratulations! You satisfy the statutory requirements under ${qualifyingLegalBasis}. You can submit Form N-400 online via myUSCIS today.`,
        de: `Herzlichen Glückwunsch! Sie erfüllen die gesetzlichen Voraussetzungen nach ${qualifyingLegalBasis}. Sie können das Formular N-400 direkt online einreichen.`
      }
    : {
        en: `Review the missing statutory elements below before submitting Form N-400 to avoid rejection or denial fees.`,
        de: `Prüfen Sie die nachstehenden Punkte, um eine Ablehnung oder Gebührenverlust beim USCIS zu vermeiden.`
      };

  const recommendedNextSteps = isEligibleNow
    ? [
        {
          en: 'Create an account on myUSCIS (my.uscis.gov) and prepare online Form N-400.',
          de: 'myUSCIS-Account erstellen und Online-Formular N-400 vorbereiten.'
        },
        {
          en: 'Download your 5-year IRS tax return transcripts online via irs.gov.',
          de: 'Steuertranskripte der letzten 5 Jahre bei irs.gov herunterladen.'
        },
        {
          en: 'Scan your Permanent Resident Card (front and back in high resolution).',
          de: 'Green Card beidseitig in hoher Auflösung einscannen.'
        },
        {
          en: 'Practice the 100 Civics questions using our practice quiz.',
          de: 'Die 100 Civics-Fragen in unserem Quiz-Trainer vertiefen.'
        }
      ]
    : missingCriteria.map(m => m.actionTip);

  return {
    isEligibleNow,
    confidenceScore,
    headline,
    summary,
    qualifyingLegalBasis,
    passedCriteria,
    missingCriteria,
    recommendedNextSteps
  };
}
