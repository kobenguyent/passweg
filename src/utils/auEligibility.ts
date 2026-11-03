import { AUEligibilityInput, EligibilityResult } from '../types';

export function calculateAUEligibility(input: AUEligibilityInput): EligibilityResult {
  const missingCriteria: EligibilityResult['missingCriteria'] = [];
  const passedCriteria: string[] = [];

  // 1. General Residence Requirement: 4 Years in Australia
  if (input.yearsInAustralia < 4) {
    missingCriteria.push({
      en: `General Residence: You must have lived in Australia on a valid Australian visa for at least 4 continuous years. You indicated ${input.yearsInAustralia} years.`,
      de: `Allgemeine Aufenthaltsdauer: Sie müssen mindestens 4 Jahre mit gültigem Visum in Australien gelebt haben. Sie haben ${input.yearsInAustralia} Jahre angegeben.`,
      priority: 'high',
      actionTip: {
        en: `You need ${4 - input.yearsInAustralia} more year(s) of lawful stay in Australia before applying.`,
        de: `Sie benötigen noch ${4 - input.yearsInAustralia} Jahr(e) rechtmäßigen Aufenthalt in Australien.`
      }
    });
  } else {
    passedCriteria.push('Satisfied 4-Year General Residence Requirement');
  }

  // 2. Permanent Resident (PR) Status: At least 12 months
  if (input.monthsAsPermanentResident < 12) {
    missingCriteria.push({
      en: `Permanent Resident Duration: You must hold an Australian Permanent Resident (PR) visa (or eligible New Zealand Special Category Visa) for at least 12 full months immediately before applying. You have ${input.monthsAsPermanentResident} months.`,
      de: `Dauer als Permanent Resident: Sie müssen seit mindestens 12 Monaten eine permanente Aufenthaltsgenehmigung (PR) besitzen. Sie haben ${input.monthsAsPermanentResident} Monate angegeben.`,
      priority: 'high',
      actionTip: {
        en: `Wait ${12 - input.monthsAsPermanentResident} more month(s) until reaching the 12-month PR milestone.`,
        de: `Warten Sie noch ${12 - input.monthsAsPermanentResident} Monat(e), bis die 12-Monats-Frist als PR erreicht ist.`
      }
    });
  } else {
    passedCriteria.push('Permanent Resident for 12+ Months (or eligible NZ SCV)');
  }

  // 3. Absences in the Past 4 Years (Max 365 Days)
  if (input.daysAbsentLast4Years > 365) {
    missingCriteria.push({
      en: `Absence Limit (4 Years): You must not have been absent from Australia for more than 365 days total in the past 4 years. You indicated ${input.daysAbsentLast4Years} days away.`,
      de: `Abwesenheitsgrenze (4 Jahre): Sie dürfen in den letzten 4 Jahren insgesamt maximal 365 Tage außerhalb Australiens gewesen sein. Sie haben ${input.daysAbsentLast4Years} Tage angegeben.`,
      priority: 'high',
      actionTip: {
        en: 'Use the official Home Affairs Residence Calculator to check when your older travel days drop off your 4-year rolling window.',
        de: 'Prüfen Sie im Home Affairs Residence Calculator, ab wann frühere Auslandsreisen aus dem 4-Jahres-Fenster herausfallen.'
      }
    });
  } else {
    passedCriteria.push(`Met 4-Year Travel Limit (${input.daysAbsentLast4Years} / 365 days abroad)`);
  }

  // 4. Absences in the Past 12 Months (Max 90 Days)
  if (input.daysAbsentLast12Months > 90) {
    missingCriteria.push({
      en: `Absence Limit (Past 12 Months): You must not have been absent from Australia for more than 90 days in the 12 months immediately preceding your application. You indicated ${input.daysAbsentLast12Months} days.`,
      de: `Abwesenheitsgrenze (Letzte 12 Monate): In den letzten 12 Monaten vor Antragstellung dürfen Sie maximal 90 Tage außer Landes gewesen sein. Sie haben ${input.daysAbsentLast12Months} Tage angegeben.`,
      priority: 'high',
      actionTip: {
        en: 'Remain in Australia until your travel days in the preceding 365-day window fall to 90 days or fewer.',
        de: 'Verbleiben Sie in Australien, bis Ihre Abwesenheit im 12-Monats-Fenster maximal 90 Tage beträgt.'
      }
    });
  } else {
    passedCriteria.push(`Met 12-Month Travel Limit (${input.daysAbsentLast12Months} / 90 days abroad)`);
  }

  // 5. Character Test & National Police Check
  if (!input.passesCharacterTest) {
    missingCriteria.push({
      en: 'Character Requirement: Section 21(2)(h) of the Australian Citizenship Act requires applicants to be of good character. You must clear the Australian Federal Police (AFP) National Police Check (Code 33) and disclose any convictions.',
      de: 'Charakterliche Eignung: Nach Section 21(2)(h) des Australian Citizenship Act ist ein einwandfreies Führungszeugnis (AFP National Police Check Code 33) zwingend.',
      priority: 'high',
      actionTip: {
        en: 'Order a National Police Certificate from the Australian Federal Police (AFP) online for Code 33.',
        de: 'Online ein polizeiliches Führungszeugnis bei der Australian Federal Police (AFP Code 33) anfordern.'
      }
    });
  } else {
    passedCriteria.push('Passed Character Requirement & Clear Police Records');
  }

  // 6. English, Values & Continuing Intention
  if (!input.understandsEnglishAndValues || !input.plansToResideInAustralia) {
    missingCriteria.push({
      en: 'Australian Values, Test & Connection: You must understand basic English, pass the 20-question Australian Citizenship Test (75% overall + 5/5 on Australian Values questions), and intend to maintain a close connection with Australia.',
      de: 'Australische Werte & Test: Sie müssen den 20-Fragen-Test bestehen (mind. 75 % gesamt und 5 von 5 Werte-Fragen richtig) und eine dauerhafte Bindung an Australien beabsichtigen.',
      priority: 'medium',
      actionTip: {
        en: 'Practice the Australian Values and Government questions with our quiz simulator.',
        de: 'Australische Wertefragen in unserem Quiz-Trainer vertiefen.'
      }
    });
  } else {
    passedCriteria.push('Prepared for Australian Citizenship Test & Values Pledge');
  }

  // Score
  let score = 100;
  missingCriteria.forEach((m) => {
    if (m.priority === 'high') score -= 25;
    if (m.priority === 'medium') score -= 15;
    if (m.priority === 'low') score -= 5;
  });
  const confidenceScore = Math.max(0, Math.min(100, score));
  const isEligibleNow = missingCriteria.length === 0;

  const qualifyingLegalBasis = 'Australian Citizenship Act 2007 (General Eligibility by Conferral)';

  const headline = isEligibleNow
    ? {
        en: `🇦🇺 You Are Eligible to Apply for Australian Citizenship by Conferral!`,
        de: `🇦🇺 Sie sind berechtigt, die australische Staatsbürgerschaft (Conferral) zu beantragen!`
      }
    : {
        en: 'Prerequisites Pending for Australian Citizenship',
        de: 'Noch offene Punkte für die australische Staatsbürgerschaft'
      };

  const summary = isEligibleNow
    ? {
        en: `Congratulations! You meet the 4-year general residence requirement, 12-month PR rule, and travel thresholds. You can lodge your application online via ImmiAccount today.`,
        de: `Herzlichen Glückwunsch! Sie erfüllen die 4-Jahres-Wohnsitzpflicht, die 12-monatige PR-Frist und die Abwesenheitsgrenzen. Der Antrag kann online über ImmiAccount eingereicht werden.`
      }
    : {
        en: 'Address the statutory criteria below before submitting Form 1300t to avoid unnecessary delays or application refusals.',
        de: 'Erfüllen Sie die nachfolgenden Punkte vor Einreichung des Formulars 1300t zur Vermeidung einer Ablehnung.'
      };

  const recommendedNextSteps = isEligibleNow
    ? [
        {
          en: 'Order your National Police Check from the Australian Federal Police (AFP Code 33) online.',
          de: 'National Police Check bei der Australian Federal Police (AFP Code 33) online anfordern.'
        },
        {
          en: 'Have an Australian citizen in a designated profession endorse Form 1195 (Identity Declaration) and passport photo.',
          de: 'Formular 1195 (Identitätserklärung) und Passfoto durch einen anerkannten australischen Bürger unterzeichnen lassen.'
        },
        {
          en: 'Gather birth certificate, current passport, and proof of arrival (e.g., VEVO grant notification).',
          de: 'Geburtsurkunde, Reisepass und VEVO-Aufenthaltsnachweis zusammenstellen.'
        },
        {
          en: 'Submit online application via ImmiAccount (online.immi.gov.au) and pay the AUD $540 fee.',
          de: 'Antrag online im ImmiAccount (online.immi.gov.au) einreichen und Gebühr zahlen.'
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
