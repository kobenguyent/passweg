import { RoadmapStep, DocumentItem, QuizQuestion, TipItem, LetterTemplate } from '../types';

export const usRoadmapSteps: RoadmapStep[] = [
  {
    id: 1,
    slug: 'us-eligibility-90day',
    title: {
      en: '1. Eligibility & 90-Day Early Filing Window',
      de: '1. Anspruchsprüfung & 90-Tage-Frühantragsfenster'
    },
    shortDesc: {
      en: 'Calculate your LPR years, physical presence (30/18 months), and 90-day early filing date.',
      de: 'Berechnung der LPR-Jahre, physischen Anwesenheit und des 90-Tage-Frühantragstermins.'
    },
    estimatedDuration: { en: '1 - 2 weeks', de: '1 - 2 Wochen' },
    costEstimate: { en: '$0', de: '$0' },
    fullDescription: {
      en: 'Under INA § 316, standard permanent residents must hold a Green Card for at least 5 years. Spouses of U.S. citizens need only 3 years under INA § 319. You can legally submit Form N-400 up to 90 calendar days before reaching your 3- or 5-year anniversary! You must have at least 30 months of physical presence (or 18 months for spouses) and no trips abroad exceeding 6 months.',
      de: 'Nach INA § 316 benötigen reguläre Green Card Inhaber 5 Jahre LPR-Status; Ehepartner von US-Bürgern 3 Jahre nach § 319. Der Antrag Form N-400 darf bis zu 90 Tage vor Erreichen des Stichtags eingereicht werden. Mindestens 30 Monate physische Anwesenheit (bzw. 18 Monate für Ehegatten) und keine Reisen über 6 Monate sind zwingend.'
    },
    actionItems: [
      {
        en: 'Check the "Resident Since" date on your Green Card and use the USCIS Early Filing Calculator.',
        de: 'Datum „Resident Since“ auf der Green Card prüfen und das 90-Tage-Frühantragsdatum ermitteln.'
      },
      {
        en: 'Log every trip outside the U.S. of 24 hours or longer over the past 5 years.',
        de: 'Alle Auslandsreisen der letzten 5 Jahre mit exaktem Ein- und Ausreisedatum auflisten.'
      }
    ],
    proTips: [
      {
        en: 'Filing even 1 day before the 90-day window results in mandatory USCIS rejection and forfeiture of fees. Use the exact USCIS calculator.',
        de: 'Einreichung auch nur 1 Tag vor dem 90-Tage-Fenster führt zur unweigerlichen Ablehnung. Nutzen Sie den exakten USCIS-Rechner.'
      }
    ],
    pitfalls: [
      {
        en: 'Any single trip outside the U.S. between 180 and 365 days presumes a disruption of continuous residence unless rebutted.',
        de: 'Reisen zwischen 180 und 365 Tagen unterbrechen die Vermutung des kontinuierlichen Wohnsitzes.'
      }
    ]
  },
  {
    id: 2,
    slug: 'us-documents-tax',
    title: {
      en: '2. Document Gathering & IRS Tax Transcripts',
      de: '2. Dokumentenbeschaffung & IRS-Steuertranskripte'
    },
    shortDesc: {
      en: 'Obtain 5-year IRS tax transcripts, Green Card scans, and Selective Service verification.',
      de: 'IRS-Steuertranskripte der letzten 5 Jahre, Green-Card-Scans und Selective Service Nachweis beschaffen.'
    },
    estimatedDuration: { en: '2 - 4 weeks', de: '2 - 4 Wochen' },
    costEstimate: { en: '$0 (free from IRS / SSS)', de: '$0 (kostenlos bei IRS / SSS)' },
    fullDescription: {
      en: 'USCIS officers place highest scrutiny on tax compliance and Good Moral Character. You should provide official IRS Tax Return Transcripts for the past 5 years (or 3 years for spouses) downloaded directly from irs.gov. Men who lived in the U.S. between ages 18 and 26 must provide their Selective Service registration number.',
      de: 'USCIS-Beamte prüfen vor allem Steuerehrlichkeit und Good Moral Character. Sie sollten offizielle IRS Tax Return Transcripts der letzten 5 Jahre direkt bei irs.gov herunterladen. Männer zwischen 18 und 26 Jahren müssen den Nachweis der Selective Service Registrierung beilegen.'
    },
    actionItems: [
      {
        en: 'Download official Tax Return Transcripts online from IRS.gov (do not submit handwritten 1040s).',
        de: 'Offizielle Tax Return Transcripts online bei IRS.gov abrufen.'
      },
      {
        en: 'If male, verify Selective Service registration online at sss.gov/verify.',
        de: 'Als Mann die Selective-Service-Nummer auf sss.gov/verify abrufen.'
      }
    ],
    proTips: [
      {
        en: 'Never file your taxes as a "non-resident alien" (Form 1040-NR) while holding a Green Card—this can trigger loss of permanent residence status.',
        de: 'Niemals als „Non-Resident Alien“ (1040-NR) deklarieren – dies kann zum Entzug der Green Card führen.'
      }
    ],
    pitfalls: [
      {
        en: 'Unpaid taxes without an approved IRS installment payment plan bar naturalization under Good Moral Character.',
        de: 'Steuerschulden ohne genehmigte Ratenzahlungsvereinbarung mit dem IRS führen zur Ablehnung.'
      }
    ]
  },
  {
    id: 3,
    slug: 'us-file-n400',
    title: {
      en: '3. Filing Form N-400 Online via myUSCIS',
      de: '3. Online-Einreichung Form N-400 über myUSCIS'
    },
    shortDesc: {
      en: 'Complete digital application, upload PDF evidence, and pay the $710 fee.',
      de: 'Digitalen Antrag ausfüllen, Nachweise hochladen und 710 $ Gebühr entrichten.'
    },
    estimatedDuration: { en: '1 - 2 days', de: '1 - 2 Tage' },
    costEstimate: { en: '$710 (online) or $760 (paper)', de: '710 $ (online) bzw. 760 $ (Papier)' },
    fullDescription: {
      en: 'Always file Form N-400 online through my.uscis.gov. Online filing saves $50 compared to paper filing ($710 vs $760), eliminates postal lost-mail risks, and provides immediate receipt notice (Form I-797C) with your case number (IOE number).',
      de: 'Reichen Sie das Formular N-400 stets online über my.uscis.gov ein. Sie sparen 50 $ gegenüber der Papierform (710 $ statt 760 $), vermeiden Postverluste und erhalten sofort Ihre Eingangsbestätigung samt IOE-Fallnummer.'
    },
    actionItems: [
      {
        en: 'Create an account on my.uscis.gov and select "File a Form" -> "N-400".',
        de: 'Account auf my.uscis.gov anlegen und N-400 auswählen.'
      },
      {
        en: 'Carefully disclose all arrests, traffic citations, and travel dates accurately.',
        de: 'Sämtliche Auslandsreisen, Strafzettel und behördliche Verfahren lückenlos angeben.'
      }
    ],
    proTips: [
      {
        en: 'Applicants with household income under 400% of Federal Poverty Guidelines may qualify for a 50% reduced filing fee ($380) via Form I-942.',
        de: 'Bei geringerem Einkommen kann eine Gebührenreduzierung um 50 % (380 $) beantragt werden.'
      }
    ],
    pitfalls: [
      {
        en: 'Do not omit traffic tickets over $500 or any incident involving alcohol/drugs. USCIS performs full FBI fingerprint background checks.',
        de: 'Keine Verkehrsverstöße über 500 $ oder Vorfälle verschweigen. Der FBI-Fingerabdruckabgleich deckt alles auf.'
      }
    ]
  },
  {
    id: 4,
    slug: 'us-biometrics',
    title: {
      en: '4. Biometrics Appointment (ASC) or Reuse Notice',
      de: '4. Biometrie-Termin (ASC) oder Wiederverwendungsbescheid'
    },
    shortDesc: {
      en: 'Attend Application Support Center for fingerprints or receive a biometrics reuse notice.',
      de: 'Fingerabdrücke im Application Support Center abgeben oder Wiederverwendungsbescheid erhalten.'
    },
    estimatedDuration: { en: '2 - 5 weeks after filing', de: '2 - 5 Wochen nach Einreichung' },
    costEstimate: { en: 'Included in filing fee', de: 'In Antragsgebühr enthalten' },
    fullDescription: {
      en: 'USCIS will schedule an appointment at your local Application Support Center (ASC) to capture digital fingerprints, signature, and photograph. In many cases, USCIS now reuses previously captured biometrics from your Green Card renewal, notifying you via an official "Biometrics Reuse" notice in your myUSCIS portal.',
      de: 'USCIS lädt Sie in ein lokales Application Support Center (ASC) zur Erfassung von Fingerabdrücken und Foto ein. Sehr oft werden vorhandene Biometriedaten aus früheren Green-Card-Verfahren wiederverwendet.'
    },
    actionItems: [
      {
        en: 'Check your myUSCIS portal for an ASC appointment notice or Biometrics Reuse letter.',
        de: 'myUSCIS-Postfach auf ASC-Terminbenachrichtigung oder Wiederverwendungsbescheid prüfen.'
      }
    ],
    proTips: [
      {
        en: 'If you receive a Biometrics Reuse Notice, your file moves directly to the interview queue without waiting for an in-person biometrics slot!',
        de: 'Bei Wiederverwendung der Biometrie rückt die Akte direkt in die Warteschlange für das Interview vor.'
      }
    ],
    pitfalls: []
  },
  {
    id: 5,
    slug: 'us-interview-civics',
    title: {
      en: '5. The Naturalization Interview & English/Civics Exam',
      de: '5. Das Einbürgerungs-Interview & Civics-Prüfung'
    },
    shortDesc: {
      en: 'Meet your USCIS officer, confirm Form N-400 responses, and pass the 10-question civics test.',
      de: 'Interview beim USCIS-Beamten, Bestätigung des N-400 und Bestehen des 10-Fragen-Tests.'
    },
    estimatedDuration: { en: '30 - 45 minutes in person', de: '30 - 45 Minuten vor Ort' },
    costEstimate: { en: '$0', de: '$0' },
    fullDescription: {
      en: 'You attend an in-person interview at your local USCIS Field Office. The officer will review your Form N-400 under oath, test your ability to read and write a simple English sentence, and ask you up to 10 civics questions from the 100 official questions. As soon as you answer 6 correctly, you pass!',
      de: 'Persönliches Interview im zuständigen USCIS Field Office. Der Beamte geht Ihren N-400-Antrag unter Eid durch, lässt Sie einen einfachen englischen Satz lesen/schreiben und stellt bis zu 10 Fragen aus dem 100-Fragen-Katalog. Sobald 6 richtig sind, ist die Prüfung bestanden!'
    },
    actionItems: [
      {
        en: 'Bring your original Green Card, foreign passport, state driver’s license, and certified tax transcripts.',
        de: 'Original Green Card, Reisepass, Führerschein und Steuertranskripte mitbringen.'
      },
      {
        en: 'Dress in business-professional attire to make a positive impression.',
        de: 'In professioneller Business-Kleidung erscheinen.'
      }
    ],
    proTips: [
      {
        en: 'Study the 100 civics questions using our interactive practice test. The questions stop as soon as you reach 6 correct answers!',
        de: 'Lernen Sie die 100 Fragen mit unserem Quiz. Die Fragen enden sofort bei Erreichen von 6 richtigen Antworten.'
      }
    ],
    pitfalls: [
      {
        en: 'Do not travel internationally between your interview and your oath ceremony without consulting USCIS.',
        de: 'Keine Auslandsreisen zwischen Interview und Eid abhalten ohne Rücksprache.'
      }
    ]
  },
  {
    id: 6,
    slug: 'us-oath-passport',
    title: {
      en: '6. The Oath Ceremony & Ordering the U.S. Passport',
      de: '6. Die Eideszeremonie & Beantragung des US-Reisepasses'
    },
    shortDesc: {
      en: 'Take the Oath of Allegiance, receive Form N-550, and order your blue U.S. Passport!',
      de: 'Ablegen des Treueeids, Erhalt des Form N-550 und Beantragung des blauen US-Passes!'
    },
    estimatedDuration: { en: '1 - 4 weeks after interview', de: '1 - 4 Wochen nach dem Interview' },
    costEstimate: { en: '$130 (Passport Book) + $35 (Execution Fee)', de: '130 $ (Passbuch) + 35 $ (Gebühr)' },
    fullDescription: {
      en: 'You receive Form N-445 (Notice of Naturalization Oath Ceremony). At the ceremony, you turn in your Green Card, take the solemn Oath of Allegiance to the United States, and receive your Certificate of Naturalization (Form N-550). You are now officially a United States Citizen! Next, visit a post office (USPS) or passport agency to apply for your blue U.S. Passport.',
      de: 'Sie erhalten die Ladung (Form N-445) zur feierlichen Zeremonie. Dort geben Sie Ihre Green Card ab, sprechen den Eid (Oath of Allegiance) und empfangen Ihr Certificate of Naturalization (Form N-550). Sie sind nun offiziell US-Bürger! Anschließend beantragen Sie bei der Post (USPS) Ihren US-Reisepass.'
    },
    actionItems: [
      {
        en: 'Fill out questionnaire on Form N-445 confirming no new legal issues since interview.',
        de: 'Fragebogen auf Form N-445 ausfüllen (keine neuen Straftaten/Auslandsreisen).'
      },
      {
        en: 'Make certified color copies of your Naturalization Certificate before submitting original with passport application.',
        de: 'Farbkopien des Einbürgerungszertifikats anfertigen, bevor das Original für den Pass eingereicht wird.'
      }
    ],
    proTips: [
      {
        en: 'Order both the Passport Book (for international air travel) AND the Passport Card (for land/sea travel to Canada, Mexico, and Caribbean)!',
        de: 'Sowohl das Passbuch als auch die Passport Card (für Land-/Seereisen nach Kanada/Mexiko) bestellen!'
      }
    ],
    pitfalls: [
      {
        en: 'Do not laminate your Certificate of Naturalization! Lamination destroys security features and invalidates the document.',
        de: 'Das Certificate of Naturalization NIEMALS laminieren!'
      }
    ]
  }
];

export const usDocumentList: DocumentItem[] = [
  {
    id: 'us-greencard',
    category: 'identity',
    title: {
      en: 'Permanent Resident Card (Green Card, Form I-551)',
      de: 'Permanent Resident Card (Green Card, Form I-551)'
    },
    description: {
      en: 'High-resolution color scan of the front and back of your valid Permanent Resident Card.',
      de: 'Hochauflösender Farbscan der Vorder- und Rückseite der gültigen Green Card.'
    },
    requiredFor: ['all'],
    howToGet: {
      en: 'Issued by USCIS.',
      de: 'Ausgestellt durch USCIS.'
    }
  },
  {
    id: 'us-passport-foreign',
    category: 'identity',
    title: {
      en: 'Current and Expired Foreign Passports',
      de: 'Gültige und abgelaufene ausländische Reisepässe'
    },
    description: {
      en: 'All passports used to enter the United States and all entry/exit stamps covering the 5-year statutory period.',
      de: 'Alle Reisepässe mit Ein- und Ausreisestempeln der letzten 5 Jahre.'
    },
    requiredFor: ['all'],
    howToGet: {
      en: 'Consulate of birth country.',
      de: 'Konsulat des Herkunftslandes.'
    }
  },
  {
    id: 'us-irs-transcripts',
    category: 'income',
    title: {
      en: 'IRS Tax Return Transcripts (Last 5 Years, Form 4506-T)',
      de: 'IRS-Steuertranskripte der letzten 5 Jahre'
    },
    description: {
      en: 'Official IRS tax transcripts proving federal returns were filed for all 5 statutory years (or 3 years for spousal applicants).',
      de: 'Amtliche Steuertranskripte des IRS zum Nachweis ordnungsgemäßer Steuererklärungen.'
    },
    requiredFor: ['all'],
    howToGet: {
      en: 'Download instantly from irs.gov/individuals/get-transcript.',
      de: 'Sofort online auf irs.gov/individuals/get-transcript herunterladen.'
    },
    officialLink: 'https://www.irs.gov/individuals/get-transcript'
  },
  {
    id: 'us-selective-service',
    category: 'residence',
    title: {
      en: 'Selective Service Registration Proof (Form SSS or SIL)',
      de: 'Nachweis der Selective-Service-Registrierung'
    },
    description: {
      en: 'For male applicants who lived in the U.S. between ages 18 and 26: Official verification letter or Status Information Letter (SIL).',
      de: 'Für männliche Antragsteller, die zwischen 18 und 26 Jahren in den USA lebten: Bestätigung oder Status Information Letter.'
    },
    requiredFor: ['all'],
    howToGet: {
      en: 'Download verification letter from sss.gov/verify.',
      de: 'Bestätigung online bei sss.gov/verify abrufen.'
    },
    officialLink: 'https://www.sss.gov/verify/'
  },
  {
    id: 'us-marriage-proof',
    category: 'civil_status',
    title: {
      en: 'Proof of Marriage to U.S. Citizen & Spouse Citizenship Proof',
      de: 'Eheurkunde & Nachweis der US-Staatsbürgerschaft des Ehegatten'
    },
    description: {
      en: 'For 3-year spousal track: Civil marriage certificate, spouse’s U.S. birth certificate/passport/naturalization certificate, and joint bank/lease records.',
      de: 'Für den 3-Jahres-Weg: Heiratsurkunde, US-Geburtsurkunde/Pass des Ehepartners und gemeinsame Miet-/Bankkonten.'
    },
    requiredFor: ['married'],
    howToGet: {
      en: 'County Vital Records & Spouse documents.',
      de: 'Standesamt (Vital Records) & Unterlagen des Ehepartners.'
    }
  },
  {
    id: 'us-travel-log',
    category: 'residence',
    title: {
      en: 'Complete International Travel Log (Past 5 Years)',
      de: 'Lückenlose Auslandsreiseliste (letzte 5 Jahre)'
    },
    description: {
      en: 'Document listing every departure date, return date, destination country, and total days away for all trips of 24 hours or longer.',
      de: 'Tabelle aller Auslandsreisen über 24 Stunden mit Ausreisedatum, Rückreisedatum und Ziel.'
    },
    requiredFor: ['all'],
    howToGet: {
      en: 'I-94 Travel History (i94.cbp.dhs.gov) & Passport stamps.',
      de: 'I-94 Online-Reisehistorie (i94.cbp.dhs.gov) & Passstempel.'
    },
    officialLink: 'https://i94.cbp.dhs.gov/'
  }
];

export const usQuizQuestions: QuizQuestion[] = [
  {
    id: 101,
    category: 'us_constitution',
    question: {
      en: 'What is the supreme law of the land in the United States?',
      de: 'Was ist das oberste Gesetz des Landes in den Vereinigten Staaten?'
    },
    options: [
      { en: 'The Constitution', de: 'Die Verfassung (The Constitution)' },
      { en: 'The Declaration of Independence', de: 'Die Unabhängigkeitserklärung' },
      { en: 'The Federalist Papers', de: 'Die Federalist Papers' },
      { en: 'The Emancipation Proclamation', de: 'Die Emanzipations-Proklamation' }
    ],
    correctIndex: 0,
    explanation: {
      en: 'The U.S. Constitution is the supreme law of the land. It establishes the basic framework of government and the rights of the American people.',
      de: 'Die US-Verfassung ist das oberste Bundesrecht der USA und steht über allen Einzelstaatsgesetzen.'
    }
  },
  {
    id: 102,
    category: 'us_branches',
    question: {
      en: 'What are the two parts of the U.S. Congress?',
      de: 'Aus welchen zwei Teilen besteht der US-Kongress?'
    },
    options: [
      { en: 'The Senate and House of Representatives', de: 'Der Senat und das Repräsentantenhaus' },
      { en: 'The Supreme Court and Cabinet', de: 'Der Supreme Court und das Kabinett' },
      { en: 'The President and Vice President', de: 'Der Präsident und Vizepräsident' },
      { en: 'The Governors and Mayors', de: 'Die Gouverneure und Bürgermeister' }
    ],
    correctIndex: 0,
    explanation: {
      en: 'Congress is the legislative branch and consists of two chambers: the Senate (100 members) and the House of Representatives (435 members).',
      de: 'Der US-Kongress besteht aus dem Senat (100 Senatoren) und dem Repräsentantenhaus (435 Abgeordnete).'
    }
  },
  {
    id: 103,
    category: 'us_rights',
    question: {
      en: 'What are the first ten amendments to the Constitution called?',
      de: 'Wie heißen die ersten zehn Zusatzartikel (Amendments) zur Verfassung?'
    },
    options: [
      { en: 'The Bill of Rights', de: 'The Bill of Rights' },
      { en: 'The Articles of Confederation', de: 'The Articles of Confederation' },
      { en: 'The Magna Carta', de: 'Die Magna Charta' },
      { en: 'The Preamble', de: 'Die Präambel' }
    ],
    correctIndex: 0,
    explanation: {
      en: 'The Bill of Rights protects fundamental civil liberties such as freedom of speech, religion, the press, and trial by jury.',
      de: 'Die Bill of Rights garantiert wesentliche Grundrechte wie Meinungs-, Religions- und Pressefreiheit.'
    }
  },
  {
    id: 104,
    category: 'us_government',
    question: {
      en: 'Who is the Commander in Chief of the military?',
      de: 'Wer ist der Oberbefehlshaber (Commander in Chief) des Militärs?'
    },
    options: [
      { en: 'The President', de: 'Der Präsident' },
      { en: 'The Secretary of Defense', de: 'Der Verteidigungsminister' },
      { en: 'The Chief Justice', de: 'Der oberste Bundesrichter' },
      { en: 'The Speaker of the House', de: 'Der Sprecher des Repräsentantenhauses' }
    ],
    correctIndex: 0,
    explanation: {
      en: 'Under Article II, Section 2 of the Constitution, the President is Commander in Chief of the Army and Navy of the United States.',
      de: 'Nach Art. II Abs. 2 der Verfassung ist der amtierende Präsident oberster militärischer Befehlshaber.'
    }
  },
  {
    id: 105,
    category: 'us_history',
    question: {
      en: 'When was the Declaration of Independence adopted?',
      de: 'Wann wurde die Unabhängigkeitserklärung angenommen?'
    },
    options: [
      { en: 'July 4, 1776', de: '4. Juli 1776' },
      { en: 'September 17, 1787', de: '17. September 1787' },
      { en: 'December 7, 1941', de: '7. Dezember 1941' },
      { en: 'November 11, 1918', de: '11. November 1918' }
    ],
    correctIndex: 0,
    explanation: {
      en: 'The Continental Congress approved the Declaration of Independence on July 4, 1776, celebrated today as Independence Day.',
      de: 'Der 4. Juli 1776 markiert die Erklärung der Unabhängigkeit von Großbritannien und wird alljährlich als Independence Day gefeiert.'
    }
  }
];

export const usTipsData: TipItem[] = [
  {
    id: 'us-90-day-early-filing',
    title: {
      en: 'The 90-Day Early Filing Rule (INA § 334)',
      de: 'Die 90-Tage-Frühantragsregel (INA § 334)'
    },
    category: 'timeline',
    badge: { en: 'USCIS Fast-Track', de: 'USCIS Zeittipp' },
    summary: {
      en: 'You do not have to wait a full 5 years (or 3 years). Submit Form N-400 up to 90 days before your Green Card anniversary.',
      de: 'Sie müssen nicht exakt 5 (bzw. 3) Jahre abwarten: Der Antrag Form N-400 darf bis zu 90 Tage vor dem Stichtag online eingereicht werden.'
    },
    content: {
      en: `Under INA § 334(a) and 8 CFR § 334.2(b), applicants may submit Form N-400 up to 90 days prior to completing the required continuous residence period.

How to calculate:
1. Locate the "Resident Since" date printed on the front of your Permanent Resident Card.
2. Add exactly 5 years (or 3 years if married to a U.S. citizen).
3. Subtract 90 days (NOT 3 months!).
4. Double check using the official "USCIS Early Filing Calculator" on uscis.gov before submitting.`,
      de: `Nach 8 CFR § 334.2(b) darf Form N-400 exakt 90 Tage vor Vollendung des 5- bzw. 3-jährigen Aufenthalts eingereicht werden.

Berechnung:
1. Datum „Resident Since“ auf der Green Card ablesen.
2. Exakt 5 Jahre (bzw. 3 Jahre bei US-Ehegatten) addieren.
3. Exakt 90 Tage (nicht 3 Monate!) zurückrechnen.
4. Den offiziellen USCIS Early Filing Calculator zur Bestätigung nutzen.`
    },
    actionableStep: {
      en: 'Never file 91 days before—USCIS systems automatically reject early applications and forfeit fees.',
      de: 'Niemals am 91. Tag einreichen – USCIS lehnt automatisiert ab und erstattet Gebühren nicht.'
    },
    relevanceTag: 'INA § 334'
  },
  {
    id: 'us-irs-transcripts-hack',
    title: {
      en: 'Download Instant 5-Year IRS Tax Transcripts for Free',
      de: 'Kostenlose IRS-Steuertranskripte in 5 Minuten herunterladen'
    },
    category: 'documents',
    badge: { en: 'Documentation', de: 'Unterlagen-Hack' },
    summary: {
      en: 'Never bring bulky paper 1040 returns. USCIS officers prefer the official cryptographically verified IRS Return Transcript.',
      de: 'Bringen Sie keine selbst ausgefüllten Steuererklärungen mit. USCIS verlangt amtliche IRS Return Transcripts.'
    },
    content: {
      en: `USCIS field officers consider IRS Tax Return Transcripts the gold standard of proof for Good Moral Character and continuous residence.

The Instant Method:
1. Visit irs.gov/individuals/get-transcript.
2. Sign in using ID.me.
3. Select "Tax Return Transcript" for each of the last 5 years (or 3 years for spousal cases).
4. Download the PDFs directly and upload them with Form N-400.`,
      de: `USCIS bevorzugt offizielle IRS Tax Return Transcripts:
1. irs.gov/individuals/get-transcript aufrufen.
2. Mit ID.me anmelden.
3. „Tax Return Transcript“ für die letzten 5 Jahre auswählen.
4. PDFs direkt abspeichern und bei Form N-400 hochladen.`
    },
    actionableStep: {
      en: 'Verify that your transcripts show "Married Filing Jointly" if applying under the 3-year spousal track.',
      de: 'Beim 3-Jahres-Weg sicherstellen, dass die Steuerklasse „Married Filing Jointly“ ausweist.'
    },
    relevanceTag: 'IRS Form 4506-T'
  }
];

export const usLetterTemplates: LetterTemplate[] = [
  {
    id: 'us-service-request',
    title: {
      en: 'USCIS Inquiry Letter (Outside Normal Processing Times)',
      de: 'USCIS Sachstandsanfrage bei Verfahrensverzögerung'
    },
    purpose: {
      en: 'Send to USCIS Field Office when processing time exceeds published case completion estimates.',
      de: 'Zur Einreichung bei überlanger Bearbeitungsdauer jenseits der USCIS-Regellaufzeit.'
    },
    recommendedTiming: {
      en: 'When past published USCIS processing estimate',
      de: 'Nach Überschreitung der veröffentlichten Bearbeitungszeit'
    },
    fields: [
      { id: 'applicantName', label: { en: 'Applicant Name', de: 'Name des Antragstellers' }, placeholder: 'John Doe' },
      { id: 'receiptNumber', label: { en: 'USCIS Receipt # (IOE/NBC...)', de: 'USCIS Fallnummer' }, placeholder: 'IOE1234567890' },
      { id: 'aNumber', label: { en: 'Alien Registration # (A-Number)', de: 'A-Nummer (A#)' }, placeholder: 'A-123-456-789' },
      { id: 'filingDate', label: { en: 'Filing Date', de: 'Einreichungsdatum' }, placeholder: 'January 15, 2024' },
      { id: 'fieldOffice', label: { en: 'USCIS Field Office City', de: 'Zuständiges USCIS Field Office' }, placeholder: 'New York Field Office' }
    ],
    generateText: (f) => {
      const today = new Date().toLocaleDateString('en-US');
      return `${f.applicantName || '[Your Full Name]'}
[Your Address]
[City, State ZIP]
Phone: [Your Phone]
Email: [Your Email]

${today}

USCIS Field Office Director
${f.fieldOffice || '[USCIS Field Office]'}

Subject: Status Inquiry for Form N-400 (Application for Naturalization)
Receipt Number: ${f.receiptNumber || '[Your Receipt Number]'}
Alien Registration Number (A#): ${f.aNumber || '[Your A-Number]'}
Applicant: ${f.applicantName || '[Your Full Name]'}
Date of Filing: ${f.filingDate || '[Filing Date]'}

Dear Field Office Director,

I am writing to respectfully request a status update regarding my Form N-400 (Application for Naturalization), which was received by USCIS on ${f.filingDate || '[Date]'} under Receipt Number ${f.receiptNumber || '[Receipt #]'}.

According to published USCIS processing times for this Field Office, my application is now outside normal processing times. All required biometrics have been completed and my file appears to be documentarily complete.

Could you please advise regarding the current status of my case and whether an interview appointment has been scheduled? If any additional documentation or information is required from my side, please notify me immediately so I can provide it without delay.

Thank you very much for your time and assistance in finalizing my naturalization process.

Respectfully submitted,

___________________________
${f.applicantName || '[Your Name]'}`;
    }
  }
];
