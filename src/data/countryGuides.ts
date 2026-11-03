import { CountryGuideData } from '../types';

export const countryGuidesData: CountryGuideData[] = [
  {
    id: 'us',
    name: {
      en: 'United States of America',
      de: 'Vereinigte Staaten von Amerika (USA)'
    },
    flag: '🇺🇸',
    passportName: {
      en: 'U.S. Passport',
      de: 'US-Reisepass'
    },
    tagline: {
      en: 'Complete dual citizenship, IRS tax reporting, state apostilles, and travel rules for American citizens in Germany.',
      de: 'Doppelte Staatsbürgerschaft, IRS-Steuerregeln, Apostillen der US-Bundesstaaten und Reiseregeln für US-Bürger in Deutschland.'
    },
    dualCitizenshipLegality: {
      isAllowedByOrigin: true,
      legalBasis: '8 U.S.C. § 1481 & Afroyim v. Rusk (1967) / Vance v. Terrazas (1980)',
      summary: {
        en: 'The United States fully permits dual nationality. Under U.S. federal law and Supreme Court precedent, acquiring German citizenship does NOT cause the loss of your U.S. citizenship. You maintain all rights: voting, unrestricted entry, and U.S. consular protection. Germany’s 2024 StAG reform eliminates any requirement to surrender your American passport.',
        de: 'Die Vereinigten Staaten erlauben die doppelte Staatsbürgerschaft uneingeschränkt. Nach US-Bundesrecht und Urteilen des Supreme Court führt die Einbürgerung in Deutschland NICHT zum Verlust der US-Staatsangehörigkeit. Die deutsche StAG-Reform 2024 verlangt keinerlei Aufgabe des US-Passes mehr.'
      }
    },
    apostilleGuide: {
      authority: 'Secretary of State (State-Level for Birth/Marriage Certificates) or U.S. Department of State (Federal)',
      howToStepByStep: [
        {
          en: 'Order a certified long-form birth certificate from the Vital Statistics office or County Clerk of the specific U.S. state where you were born (e.g. via VitalChek.com or direct state registry).',
          de: 'Beglaubigte Geburtsurkunde (Long-Form) beim Standesamt (Vital Records) oder County Clerk des US-Bundesstaates anfordern (z.B. über VitalChek.com).'
        },
        {
          en: 'Submit the certified document along with the state’s Apostille Request Form to the Secretary of State of that specific state (e.g., California Secretary of State in Sacramento, NY Department of State in Albany).',
          de: 'Urkunde mit dem Apostille-Antrag an den Secretary of State des jeweiligen US-Bundesstaates senden (z.B. California Secretary of State in Sacramento).'
        },
        {
          en: 'Once the Apostille certificate is affixed, hire a court-sworn translator in Germany (via justiz-dolmetscher.de) to translate both the certificate and Apostille into German according to ISO 9 transliteration standards.',
          de: 'Nach Rückerhalt die Urkunde und Apostille durch einen gerichtlich ermächtigten Übersetzer in Deutschland (justiz-dolmetscher.de) übersetzen lassen.'
        }
      ],
      costs: '$10 – $30 per document state fee',
      processingTime: '2 – 6 weeks depending on the state',
      officialLink: 'https://travel.state.gov/content/travel/en/records-and-authentications/authenticate-your-document/apostille-requirements.html'
    },
    travelRules: {
      leavingGermany: {
        en: 'Under Section 1 of the German Passport Act (§ 1 PassG), German nationals are legally required to present their German passport or Personalausweis when departing or entering Germany/Schengen.',
        de: 'Nach § 1 Passgesetz müssen deutsche Staatsangehörige bei der Aus- und Einreise im Schengen-Raum zwingend ihren deutschen Pass oder Personalausweis vorlegen.'
      },
      enteringHomeCountry: {
        en: 'Under 8 U.S.C. § 1185(b), U.S. citizens MUST enter and leave the United States on a valid U.S. passport. You cannot travel to the U.S. on your German passport or apply for an ESTA.',
        de: 'Gemäß 8 U.S.C. § 1185(b) MÜSSEN US-Bürger mit einem gültigen US-Reisepass in die USA ein- und ausreisen. Reisen auf den deutschen Pass oder ein ESTA-Antrag sind für US-Bürger unzulässig.'
      },
      statutoryLaw: '8 U.S.C. § 1185(b) & § 1 PassG'
    },
    taxAndFinance: {
      summary: {
        en: 'The United States is one of the few nations that practices citizenship-based worldwide taxation. Becoming a German citizen does NOT remove or change your ongoing U.S. tax filing obligations.',
        de: 'Die USA besteuern nach dem Staatsbürgerschaftsprinzip weltweit. Die deutsche Einbürgerung ändert nichts an den bestehenden US-Steuererklärungspflichten.'
      },
      keyObligations: [
        {
          title: 'IRS Form 1040 (Annual Federal Income Tax)',
          desc: {
            en: 'You must continue to file an annual federal tax return. Most expats owe zero U.S. tax due to the Foreign Earned Income Exclusion (FEIE, Form 2555) or Foreign Tax Credit (FTC, Form 1116) since German income tax rates are higher than U.S. rates.',
            de: 'Jährliche Steuererklärung an den IRS. Meist fällt dank Foreign Tax Credit (FTC) oder Foreign Earned Income Exclusion (FEIE) keine US-Steuer an, da deutsche Steuern höher sind.'
          }
        },
        {
          title: 'FBAR (FinCEN Report 114)',
          desc: {
            en: 'Mandatory annual online report if the aggregate total value of all your foreign (German) bank, savings, brokerage, or pension accounts exceeds $10,000 USD at any point during the calendar year.',
            de: 'Förmliche Meldung (FinCEN 114), wenn die Summe aller deutschen Bank-, Tagesgeld- und Depotkonten im Kalenderjahr zu irgendeinem Zeitpunkt 10.000 USD übersteigt.'
          }
        },
        {
          title: 'FATCA & German Banks',
          desc: {
            en: 'German banks (DKB, N26, Sparkasse, Deutsche Bank) are legally obligated to report accounts held by U.S. Persons to the IRS. Holding German citizenship does not exempt you from providing your U.S. SSN / Tax ID.',
            de: 'Deutsche Banken melden Kontodaten von US-Personen weiterhin an die US-Behörden. Der deutsche Pass befreit nicht von der US-Steuernummer-Angabe (SSN).'
          }
        }
      ]
    },
    consularServicesInGermany: {
      name: 'U.S. Embassy & Consulates in Germany',
      locations: ['Berlin (Embassy)', 'Frankfurt am Main (Consulate General)', 'Munich', 'Hamburg', 'Leipzig', 'Düsseldorf'],
      website: 'https://de.usembassy.gov/'
    }
  },
  {
    id: 'au',
    name: {
      en: 'Australia',
      de: 'Australien'
    },
    flag: '🇦🇺',
    passportName: {
      en: 'Australian Passport',
      de: 'Australischer Reisepass'
    },
    tagline: {
      en: 'Unrestricted dual citizenship, DFAT apostille process, superannuation, and border crossing rules for Australians in Germany.',
      de: 'Uneingeschränkte doppelte Staatsbürgerschaft, DFAT-Apostillen, Superannuation und Reiseregeln für Australier in Deutschland.'
    },
    dualCitizenshipLegality: {
      isAllowedByOrigin: true,
      legalBasis: 'Australian Citizenship Act 2007 (Section 17 repealed 4 April 2002)',
      summary: {
        en: 'Australia fully permits dual citizenship and abolished the automatic loss of citizenship upon foreign naturalization on April 4, 2002 (repeal of former Section 17). As an Australian citizen, you retain your Australian citizenship automatically when acquiring German citizenship. You do not need to register, request permission, or notify the Australian government.',
        de: 'Australien erlaubt die doppelte Staatsbürgerschaft uneingeschränkt und hat den automatischen Verlust der Staatsbürgerschaft bei ausländischer Einbürgerung bereits am 4. April 2002 abgeschafft. Sie behalten Ihre australische Staatsangehörigkeit vollkommen automatisch. Weder Antrag noch Benachrichtigung bei australischen Behörden sind nötig.'
      }
    },
    apostilleGuide: {
      authority: 'Department of Foreign Affairs and Trade (DFAT) / Australian Passport Office (APO)',
      howToStepByStep: [
        {
          en: 'Obtain an official standard birth or marriage certificate from the Registry of Births, Deaths and Marriages (BDM) of your Australian state or territory (e.g. NSW BDM, Victoria BDM, Queensland BDM). Note: Commemorative certificates cannot be apostilled.',
          de: 'Offizielle Standard-Geburtsurkunde beim Registry of Births, Deaths and Marriages (BDM) Ihres australischen Bundesstaates anfordern (dekorative Schmuckurkunden werden nicht apostilliert).'
        },
        {
          en: 'Apply for an Apostille through DFAT’s Smartraveller legalization portal (by post in Australia or through the Australian Embassy in Berlin / Consulate-General in Frankfurt).',
          de: 'Apostille über das Legalisation-Portal von DFAT / Smartraveller beantragen (postalisch in Australien oder bei der Botschaft Berlin / Generalkonsulat Frankfurt).'
        },
        {
          en: 'DFAT verifies the signature and seal of the state BDM registrar and affixes the official Hague Apostille certificate.',
          de: 'DFAT prüft die Unterschrift des BDM-Registrars und bringt die Haager Apostille an.'
        },
        {
          en: 'Have the certificate and Apostille translated into German by a certified sworn translator in Germany (justiz-dolmetscher.de).',
          de: 'Urkunde samt Apostille durch einen beeidigten Übersetzer in Deutschland nach ISO-Norm übersetzen lassen.'
        }
      ],
      costs: 'AUD $102 (DFAT standard Apostille fee) or ~€65 at Australian Embassy in Berlin',
      processingTime: '5 – 10 business days',
      officialLink: 'https://www.smartraveller.gov.au/consular-services/notarial-services/documents-overseas'
    },
    travelRules: {
      leavingGermany: {
        en: 'Present your German passport or Personalausweis to the Bundespolizei at German and Schengen airport borders (§ 1 PassG).',
        de: 'Bei Ein- und Ausreise in Deutschland bzw. im Schengen-Raum den deutschen Reisepass oder Personalausweis vorweisen (§ 1 PassG).'
      },
      enteringHomeCountry: {
        en: 'Under the Australian Passports Act 2005, Australian citizens are expected to enter and depart Australia on their Australian passport. You cannot and should not apply for an Australian Electronic Travel Authority (ETA) or tourist visa.',
        de: 'Nach dem Australian Passports Act 2005 reisen australische Staatsbürger mit ihrem australischen Pass nach Australien ein und aus. Ein ETA-Touristenvisum ist für Staatsbürger unzulässig.'
      },
      statutoryLaw: 'Australian Passports Act 2005 & § 1 PassG'
    },
    taxAndFinance: {
      summary: {
        en: 'Australia taxes individuals based on tax residency, NOT citizenship. Acquiring German citizenship has no adverse Australian tax impact if you are an Australian non-resident for tax purposes.',
        de: 'Australien besteuert nach dem Wohnsitzprinzip, nicht nach Staatsbürgerschaft. Die deutsche Einbürgerung löst keine zusätzlichen australischen Steuerpflichten aus, wenn Sie steuerlich in Deutschland ansässig sind.'
      },
      keyObligations: [
        {
          title: 'Australian Superannuation',
          desc: {
            en: 'Your Australian superannuation funds remain 100% yours and continue compounding tax-advantaged in Australia until your preservation age (typically age 60). German naturalization does not force early liquidation or forfeit your super.',
            de: 'Ihre Superannuation-Guthaben bleiben unangetastet und wachsen bis zum Rentenalter (meist 60 Jahre) steuerbegünstigt weiter. Einbürgerung führt zu keinem Verlust.'
          }
        },
        {
          title: 'HELP / HECS Higher Education Debt',
          desc: {
            en: 'If you have an outstanding Australian HELP/HECS student loan, you must continue to declare your worldwide income annually via myGov/ATO if your income exceeds the minimum repayment threshold.',
            de: 'Bei bestehenden HECS/HELP-Studiendarlehen muss das weltweite Einkommen weiterhin jährlich über myGov an das ATO gemeldet werden, sofern der Freibetrag überschritten wird.'
          }
        },
        {
          title: 'Medicare & Non-Residency',
          desc: {
            en: 'As an expat residing in Germany, you are not covered by Australian Medicare and are exempt from the Medicare levy. You rely on your German statutory health insurance (Krankenkasse).',
            de: 'Als Auswanderer in Deutschland sind Sie von der Medicare Levy befreit und vollständig über die deutsche gesetzliche oder private Krankenversicherung abgesichert.'
          }
        }
      ]
    },
    consularServicesInGermany: {
      name: 'Australian Embassy & Consulate-General',
      locations: ['Berlin (Embassy - Wallstraße 76-79)', 'Frankfurt am Main (Consulate-General - Main Tower)'],
      website: 'https://germany.embassy.gov.au/'
    }
  }
];
