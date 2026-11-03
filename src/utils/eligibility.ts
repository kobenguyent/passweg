import { EligibilityInput, EligibilityResult, EligibilityTrack } from '../types';

export function calculateEligibility(input: EligibilityInput): EligibilityResult {
  const missingCriteria: EligibilityResult['missingCriteria'] = [];
  const passedCriteria: string[] = [];

  // Check student / non-eligible permit type
  const isDirectlyEligiblePermit = input.permitType !== 'student' && input.permitType !== 'tolerated';
  if (!isDirectlyEligiblePermit) {
    if (input.permitType === 'student') {
      missingCriteria.push({
        en: 'Student Residence Permit (§ 16b): Cannot naturalize directly on a student visa. However, time spent studying DOES count towards your years in Germany! You must switch to a Blue Card, Skilled Worker permit (§ 18a/b), or permanent residence before applying.',
        de: 'Studentischer Aufenthaltstitel (§ 16b): Direkte Einbürgerung mit § 16b nicht möglich. Studienzeiten zählen jedoch voll zu den Aufenthaltsjahren! Vor Antragstellung Wechsel zu z.B. Blauer Karte oder Fachkraft-Titel erforderlich.',
        priority: 'high',
        actionTip: {
          en: 'Finish studies or transition to a work visa / Blue Card (§ 18b/g) immediately to unlock citizenship application.',
          de: 'Nach Studienabschluss in Fachkraft-Titel (§ 18b) oder Blaue Karte wechseln, dann direkt Antrag einreichen.'
        }
      });
    } else {
      missingCriteria.push({
        en: 'Ineligible residence status (Duldung / Tolerated): A qualifying residence title is required under § 10 StAG.',
        de: 'Nicht einbürgerungsberechtigter Aufenthaltsstatus (Duldung): Ein anerkannter Aufenthaltstitel nach § 10 StAG ist erforderlich.',
        priority: 'high',
        actionTip: {
          en: 'Consult a migration advisor (e.g. MBE or lawyer) to regularize status into a skilled or humanitarian residence permit.',
          de: 'Migrationsberatung (MBE) aufsuchen zur Überführung in einen regulären Aufenthaltstitel.'
        }
      });
    }
  } else {
    passedCriteria.push('Qualifying Residence Permit (Aufenthaltstitel)');
  }

  // Check Democratic loyalty commitment
  if (!input.acceptsDemocraticOrder) {
    missingCriteria.push({
      en: 'Declaration of loyalty: You must commit to the Free Democratic Basic Order (FDGO) and acknowledge Germany’s historical responsibility regarding antisemitism and peace.',
      de: 'Loyalitätserklärung: Bekenntnis zur freiheitlichen demokratischen Grundordnung (FDGO) sowie zur historischen Verantwortung Deutschlands gesetzlich zwingend.',
      priority: 'high',
      actionTip: {
        en: 'Read and sign the standard declaration form provided during application.',
        de: 'Die Loyalitätserklärung im Antragsformular sorgfältig lesen und unterzeichnen.'
      }
    });
  } else {
    passedCriteria.push('Loyalty to Free Democratic Basic Order (FDGO)');
  }

  // Check criminal record
  if (!input.hasCleanCriminalRecord) {
    missingCriteria.push({
      en: 'Criminal record / Fines exceeding threshold: Convictions exceeding 90 daily fines (Tagessätze) or >3 months imprisonment generally bar naturalization under § 12a StAG.',
      de: 'Strafregistereintrag / Geldstrafe über Grenze: Verurteilungen über 90 Tagessätze oder Freiheitsstrafen über 3 Monate schließen Einbürgerung nach § 12a StAG i.d.R. aus.',
      priority: 'high',
      actionTip: {
        en: 'Request a European or German certificate of conduct (Führungszeugnis) and check if entries have expired or are eligible for deletion.',
        de: 'Erweitertes Führungszeugnis anfordern und Tilgungsfristen im Bundeszentralregister prüfen.'
      }
    });
  } else {
    passedCriteria.push('Clean Criminal Record (<= 90 Tagessätze)');
  }

  // Check income & livelihood
  const isSelfSufficient = input.employmentStatus !== 'unemployed_buergergeld' && input.employmentStatus !== 'student';
  if (!isSelfSufficient) {
    missingCriteria.push({
      en: 'Livelihood Security (§ 10 Abs. 1 Nr. 3 StAG): Under the 2024 law, you must support yourself and dependents without claiming citizen benefits (Bürgergeld/SGB II) or social assistance (SGB XII).',
      de: 'Sicherung des Lebensunterhalts (§ 10 Abs. 1 Nr. 3 StAG): Seit dem Gesetz 2024 muss der Lebensunterhalt ohne Bürgergeld (SGB II) oder Sozialhilfe (SGB XII) eigenständig gesichert sein.',
      priority: 'high',
      actionTip: {
        en: 'Secure full-time or sufficient stable employment to cover rent and living costs before submitting.',
        de: 'Nachweis einer stabilen, bedarfsdeckenden Erwerbstätigkeit vorlegen.'
      }
    });
  } else {
    if (input.employmentStatus === 'employed_probation') {
      missingCriteria.push({
        en: 'Probation period (Probezeit): While not legally a total exclusion, most citizenship offices pause processing until your probationary period has successfully ended.',
        de: 'Probezeit im Arbeitsvertrag: Zwar kein gesetzliches Ausschlusskriterium, Ämter stellen die Bearbeitung aber meist bis zum Ende der Probezeit zurück.',
        priority: 'medium',
        actionTip: {
          en: 'You can apply now, but be prepared to submit an updated employer confirmation once probation is passed.',
          de: 'Antrag bereits vorbereiten und nach bestandener Probezeit unbefristete Bestätigung nachreichen.'
        }
      });
    } else {
      passedCriteria.push('Secure Livelihood & No Social Welfare (SGB II/XII)');
    }
  }

  // Check Einbürgerungstest
  if (!input.passedEinbuergerungstest) {
    missingCriteria.push({
      en: 'Citizenship Test (Einbürgerungstest / Leben in Deutschland): You must pass the official 33-question test (or hold a German university / vocational degree).',
      de: 'Einbürgerungstest / Leben in Deutschland: Nachweis über bestandenen Test (mind. 17/33 Punkte) oder deutscher Schul-/Hochschulabschluss erforderlich.',
      priority: 'medium',
      actionTip: {
        en: 'Book a test slot at your local VHS (Volkshochschule) immediately—waiting times for slots can take 2-4 months.',
        de: 'Sofort Termin an der Volkshochschule (VHS) buchen – Vorlaufzeiten oft 2-4 Monate.'
      }
    });
  } else {
    passedCriteria.push('Passed Einbürgerungstest / Leben in Deutschland');
  }

  // Evaluate Tracks: Turbo (3y), Spousal (3y), Standard (5y)
  let track: EligibilityTrack = 'not_yet_eligible';

  // 1. Spousal track (§ 9 StAG): 3 years in Germany + 2 years of marriage to German citizen + B1
  const qualifiesForSpousal = 
    input.isMarriedToGerman && 
    (input.yearsMarried ?? 0) >= 2 && 
    input.yearsInGermany >= 3 &&
    ['b1', 'b2', 'c1_c2'].includes(input.languageLevel);

  // 2. Turbo track (§ 10 Abs. 3 StAG): 3 years in Germany + C1/C2 + special integration achievements
  const qualifiesForTurbo = 
    input.yearsInGermany >= 3 &&
    input.languageLevel === 'c1_c2' &&
    input.hasSpecialIntegration;

  // 3. Standard track (§ 10 Abs. 1 StAG): 5 years in Germany + B1/B2/C1
  const hasLanguageStandard = ['b1', 'b2', 'c1_c2'].includes(input.languageLevel);
  const qualifiesForStandard = input.yearsInGermany >= 5 && hasLanguageStandard;

  if (qualifiesForTurbo) {
    track = 'turbo_3_year';
    passedCriteria.push('Met Turbo Track Requirements: 3+ Years Residency, C1 German & Special Integration');
  } else if (qualifiesForSpousal) {
    track = 'spousal_3_year';
    passedCriteria.push('Met Spousal Track (§ 9 StAG): 3+ Years Residency, 2+ Years Marriage to German & B1 German');
  } else if (qualifiesForStandard) {
    track = 'standard_5_year';
    passedCriteria.push('Met Standard Track Requirements: 5+ Years Residency & B1 German');
  } else {
    // Diagnose what is missing for years / language
    if (input.yearsInGermany < 3) {
      missingCriteria.push({
        en: `Residency Duration: You have ${input.yearsInGermany} years in Germany. Minimum requirement under 2024 law is 3 years (Turbo/Marriage) or 5 years (Standard).`,
        de: `Aufenthaltsdauer: Aktuell ${input.yearsInGermany} Jahre in Deutschland. Mindestanforderung nach neuem StAG sind 3 Jahre (Turbo/Ehe) bzw. 5 Jahre (Regel).`,
        priority: 'high',
        actionTip: {
          en: `You need ${3 - input.yearsInGermany} more year(s) for the Turbo/Spousal track, or ${5 - input.yearsInGermany} more year(s) for the standard track.`,
          de: `Noch ${3 - input.yearsInGermany} Jahr(e) bis zum Turbo-Weg bzw. ${5 - input.yearsInGermany} Jahr(e) bis zum Regelweg.`
        }
      });
    } else if (input.yearsInGermany >= 3 && input.yearsInGermany < 5) {
      if (input.languageLevel !== 'c1_c2' || !input.hasSpecialIntegration) {
        missingCriteria.push({
          en: `Between 3 and 5 years: You qualify for the 3-Year Turbo Track IF you achieve C1 German and have special integration achievements (volunteer work/honors). Otherwise, you qualify at year 5 with B1.`,
          de: `Zwischen 3 und 5 Jahren: Sie qualifizieren sich für die 3-Jahres-Turbo-Einbürgerung WENN Sie C1 Deutsch und besondere Integrationsleistungen nachweisen. Andernfalls nach 5 Jahren mit B1.`,
          priority: 'medium',
          actionTip: {
            en: 'Either aim for a C1 Goethe/Telc certificate + 1 year of documented volunteer work (Ehrenamt), or wait until reaching 5 years.',
            de: 'Entweder C1-Zertifikat + 1 Jahr nachgewiesenes Ehrenamt anstreben, oder 5 Jahre abwarten.'
          }
        });
      }
    }

    if (!hasLanguageStandard) {
      missingCriteria.push({
        en: `German Language Certificate: B1 CEFR is the minimum required level for naturalization.`,
        de: `Deutsches Sprachzertifikat: Mindestens B1 GER ist gesetzliche Voraussetzung.`,
        priority: 'high',
        actionTip: {
          en: 'Enroll in an accredited Telc, Goethe-Institut, or ÖSD B1 examination course.',
          de: 'Für telc B1 oder Goethe-Zertifikat B1 anmelden.'
        }
      });
    }
  }

  // Calculate overall confidence score
  const totalWeight = 100;
  let deductions = 0;
  missingCriteria.forEach((item) => {
    if (item.priority === 'high') deductions += 25;
    if (item.priority === 'medium') deductions += 15;
    if (item.priority === 'low') deductions += 5;
  });
  const confidenceScore = Math.max(0, Math.min(100, totalWeight - deductions));

  // Determine eligibility status
  const isEligibleNow = missingCriteria.length === 0 && track !== 'not_yet_eligible';

  // Construct headline and summaries
  let headline = {
    en: 'You are Eligible to Apply for German Citizenship!',
    de: 'Sie sind berechtigt, die deutsche Staatsangehörigkeit zu beantragen!'
  };
  let summary = {
    en: 'Congratulations! You meet all statutory requirements under the modern StAG 2024 reform.',
    de: 'Herzlichen Glückwunsch! Sie erfüllen alle Voraussetzungen des neuen Staatsangehörigkeitsgesetzes 2024.'
  };

  if (track === 'turbo_3_year') {
    headline = {
      en: '🚀 You Qualify for the 3-Year Turbo Naturalization Track (§ 10 Abs. 3 StAG)!',
      de: '🚀 Sie qualifizieren sich für die 3-Jahres-Turbo-Einbürgerung (§ 10 Abs. 3 StAG)!'
    };
    summary = {
      en: 'Your C1 German skills, residency of 3+ years, and special integration accomplishments qualify you for Germany’s fastest naturalization pathway.',
      de: 'Ihre C1-Deutschkenntnisse, 3+ Jahre Aufenthalt und besondere Integrationsleistungen qualifizieren Sie für den schnellsten Weg zum deutschen Pass.'
    };
  } else if (track === 'spousal_3_year') {
    headline = {
      en: '💍 You Qualify for Spousal Naturalization (§ 9 StAG)!',
      de: '💍 Sie qualifizieren sich für die Ehegatten-Einbürgerung (§ 9 StAG)!'
    };
    summary = {
      en: 'As the spouse of a German citizen with 3+ years of lawful residence and 2+ years of marriage, you have a preferential legal entitlement.',
      de: 'Als Ehegatte eines deutschen Staatsbürgers mit 3+ Jahren Aufenthalt und 2+ Jahren Ehe steht Ihnen ein bevorzugter Anspruch zu.'
    };
  } else if (track === 'standard_5_year') {
    headline = {
      en: '⭐ You Qualify for the Standard 5-Year Track (§ 10 Abs. 1 StAG)!',
      de: '⭐ Sie qualifizieren sich für die 5-Jahres-Regel-Einbürgerung (§ 10 Abs. 1 StAG)!'
    };
    summary = {
      en: 'You satisfy the shortened 5-year residency and B1 language threshold introduced in the 2024 reform.',
      de: 'Sie erfüllen die neue 5-Jahres-Frist sowie das B1-Sprachniveau der Reform 2024 vollumfänglich.'
    };
  } else {
    headline = {
      en: 'Almost There! Here Is What You Still Need to Complete',
      de: 'Fast geschafft! Das fehlt Ihnen noch zur Einbürgerung'
    };
    summary = {
      en: 'You are progressing well, but a few statutory prerequisites remain before your application can be approved.',
      de: 'Sie sind auf einem guten Weg, es fehlen jedoch noch einzelne gesetzliche Voraussetzungen für einen erfolgreichen Antrag.'
    };
  }

  // Recommended next steps
  const recommendedNextSteps: { en: string; de: string }[] = [];
  if (isEligibleNow) {
    recommendedNextSteps.push(
      {
        en: 'Gather civil documents (birth certificate with apostille and sworn translation into German).',
        de: 'Personenstandsurkunden zusammenstellen (Geburtsurkunde mit Apostille und beglaubigter Übersetzung).'
      },
      {
        en: 'Request your pension history statement (Versicherungsverlauf) online from Deutsche Rentenversicherung.',
        de: 'Rentenversicherungsverlauf online bei der Deutschen Rentenversicherung anfordern.'
      },
      {
        en: 'Obtain an updated employer certificate (Arbeitgeberbescheinigung) confirming unlimited employment.',
        de: 'Aktuelle Arbeitgeberbescheinigung über unbefristetes Arbeitsverhältnis einholen.'
      },
      {
        en: 'Submit application via your city’s digital portal (e.g. LEA Berlin) or book an intake appointment.',
        de: 'Antrag im Online-Portal Ihrer Stadt (z.B. LEA Berlin) einreichen oder Einreichungstermin buchen.'
      }
    );
  } else {
    missingCriteria.forEach((m) => {
      recommendedNextSteps.push(m.actionTip);
    });
  }

  const qualifyingLegalBasis = 
    track === 'turbo_3_year' ? '§ 10 Abs. 3 StAG (Besondere Integrationsleistungen)' :
    track === 'spousal_3_year' ? '§ 9 StAG (Ehegatten Deutscher)' :
    track === 'standard_5_year' ? '§ 10 Abs. 1 StAG (Anspruchseinbürgerung)' :
    'StAG Vorbereitung';

  // Country-specific advice
  let countrySpecificAdvice: { en: string; de: string } | undefined;
  if (input.countryOfOrigin === 'us') {
    countrySpecificAdvice = {
      en: '🇺🇸 US Citizens: You can keep your US citizenship 100%! The US does not revoke citizenship upon foreign naturalization. Remember: you still retain US tax filing (IRS Form 1040/FBAR) and must enter/exit the US using your US passport.',
      de: '🇺🇸 US-Staatsbürger: Sie behalten Ihre US-Staatsbürgerschaft zu 100 %! Die USA entziehen bei Einbürgerung im Ausland nicht die Nationalität. Beachten Sie: US-Steuererklärungspflicht (IRS/FBAR) bleibt bestehen, und bei USA-Reisen muss der US-Pass genutzt werden.'
    };
  } else if (input.countryOfOrigin === 'au') {
    countrySpecificAdvice = {
      en: '🇦🇺 Australian Citizens: Dual citizenship is fully allowed! Australia abolished citizenship loss upon foreign naturalization in 2002. Obtain your birth certificate Apostille via DFAT and remember to enter/exit Australia using your Australian passport.',
      de: '🇦🇺 Australische Staatsbürger: Vollwertige doppelte Staatsbürgerschaft garantiert! Australien hat den Verlust bei Auslandseinbürgerung bereits 2002 abgeschafft. Geburtsurkunde via DFAT überbeglaubigen lassen und bei Australien-Reisen den australischen Pass nutzen.'
    };
  }

  return {
    track,
    isEligibleNow,
    confidenceScore,
    headline,
    summary,
    qualifyingLegalBasis,
    passedCriteria,
    missingCriteria,
    recommendedNextSteps,
    countrySpecificAdvice
  };
}
