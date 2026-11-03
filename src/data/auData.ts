import { RoadmapStep, DocumentItem, QuizQuestion, TipItem, LetterTemplate } from '../types';

export const auRoadmapSteps: RoadmapStep[] = [
  {
    id: 1,
    slug: 'au-residence-calculator',
    title: {
      en: '1. Residence Requirement & Absence Calculation',
      de: '1. Wohnsitzprüfung & Abwesenheitsberechnung'
    },
    shortDesc: {
      en: 'Verify 4 continuous years in Australia, 12 months as PR, and absence thresholds.',
      de: 'Prüfung von 4 Jahren Aufenthalt, 12 Monaten PR und Reisetagen.'
    },
    estimatedDuration: { en: '1 - 2 weeks', de: '1 - 2 Wochen' },
    costEstimate: { en: '$0', de: '$0' },
    fullDescription: {
      en: 'Under the Australian Citizenship Act 2007, you must meet the general residence requirement: lived in Australia on a valid Australian visa for the past 4 years, held Permanent Resident (PR) status for at least the last 12 months, were not absent for more than 365 days in the past 4 years, and were not absent for more than 90 days in the 12 months prior to applying.',
      de: 'Nach dem Australian Citizenship Act 2007 müssen Sie folgende Fristen erfüllen: 4 Jahre legaler Aufenthalt in Australien, davon mindestens die letzten 12 Monate als Permanent Resident (PR). Maximal 365 Tage Abwesenheit in 4 Jahren und maximal 90 Tage im letzten Jahr.'
    },
    actionItems: [
      {
        en: 'Use the official Home Affairs Citizenship Residence Calculator to verify absence numbers.',
        de: 'Den offiziellen Home Affairs Residence Calculator zur genauen Prüfung nutzen.'
      },
      {
        en: 'Check your VEVO PR grant date to confirm you have reached the 12-month PR milestone.',
        de: 'Das PR-Erteilungsdatum im VEVO-Portal auf Vollendung der 12 Monate prüfen.'
      }
    ],
    proTips: [
      {
        en: 'Time spent in Australia on temporary visas (student, graduate, working holiday) counts fully toward the 4-year general residence requirement!',
        de: 'Zeiten mit befristeten Visa (Student, Work and Holiday) zählen zu 100 % zur 4-Jahres-Frist!'
      }
    ],
    pitfalls: [
      {
        en: 'Exceeding 90 days of overseas travel in the past 12 months will result in immediate refusal. Postpone filing until travel drops below 90 days.',
        de: 'Mehr als 90 Tage Auslandsaufenthalt im letzten Jahr führen zur direkten Ablehnung.'
      }
    ]
  },
  {
    id: 2,
    slug: 'au-identity-afp',
    title: {
      en: '2. Identity Verification (Form 1195) & AFP Police Check',
      de: '2. Identitätserklärung (Form 1195) & AFP-Führungszeugnis'
    },
    shortDesc: {
      en: 'Obtain Form 1195 endorsement from an Australian citizen and order AFP Code 33 check.',
      de: 'Formular 1195 von australischem Staatsbürger zeichnen lassen und AFP Code 33 anfordern.'
    },
    estimatedDuration: { en: '2 - 3 weeks', de: '2 - 3 Wochen' },
    costEstimate: { en: 'AUD $47 (AFP Police Check)', de: '47 AUD (AFP-Führungszeugnis)' },
    fullDescription: {
      en: 'You must provide Form 1195 (Identity Declaration) signed by an Australian citizen who has known you for at least 1 year and belongs to a recognized profession (e.g., doctor, engineer, lawyer, teacher, accountant). In addition, order an official National Police Certificate (Code 33) from the Australian Federal Police (AFP).',
      de: 'Sie benötigen das Formular 1195 (Identity Declaration), unterzeichnet von einem australischen Staatsbürger, der Sie seit mind. 1 Jahr kennt und einem anerkannten Beruf angehört (Arzt, Lehrer, Ingenieur). Dazu ein AFP National Police Certificate (Code 33).'
    },
    actionItems: [
      {
        en: 'Download Form 1195 and have your endorser sign the form and the back of your passport photograph.',
        de: 'Formular 1195 ausfüllen und Passfoto auf der Rückseite zeichnen lassen.'
      },
      {
        en: 'Apply online for an AFP National Police Check selecting Purpose Code 33 (Immigration/Citizenship).',
        de: 'Online das AFP-Führungszeugnis mit Purpose Code 33 beantragen.'
      }
    ],
    proTips: [
      {
        en: 'Ensure your endorser writes the exact statutory phrase on the back of the photo: "This is a true photograph of [your name]" followed by their signature.',
        de: 'Der Unterzeichner muss den vorgeschriebenen Wortlaut exakt auf die Fotorückseite schreiben.'
      }
    ],
    pitfalls: []
  },
  {
    id: 3,
    slug: 'au-lodge-immiaccount',
    title: {
      en: '3. Lodging Application via ImmiAccount',
      de: '3. Online-Antragstellung im ImmiAccount'
    },
    shortDesc: {
      en: 'Submit Form 1300t online, upload color documents, and pay the AUD $540 fee.',
      de: 'Formular 1300t online absenden, Farbscans hochladen und 540 AUD Gebühr zahlen.'
    },
    estimatedDuration: { en: '1 day to submit', de: '1 Tag für die Einreichung' },
    costEstimate: { en: 'AUD $540', de: '540 AUD' },
    fullDescription: {
      en: 'Applications for Australian citizenship by conferral are submitted online via the Department of Home Affairs ImmiAccount portal. You complete the digital Form 1300t, upload high-quality color scans of identity and residence documents, and pay the non-refundable AUD $540 fee.',
      de: 'Der Antrag auf Verleihung der australischen Staatsbürgerschaft (Conferral) wird online im ImmiAccount eingereicht. Sie füllen Form 1300t aus, laden Farbscans hoch und entrichten die Antragsgebühr von 540 AUD.'
    },
    actionItems: [
      {
        en: 'Log in to online.immi.gov.au and start "Citizenship" -> "Application for Australian Citizenship by Conferral".',
        de: 'Im ImmiAccount anmelden und Antrag auf Citizenship by Conferral anlegen.'
      },
      {
        en: 'Ensure all passport scans and birth certificates are full color and uncropped.',
        de: 'Farbscans aller Urkunden und Reisepässe vollständig hochladen.'
      }
    ],
    proTips: [
      {
        en: 'Attach your AFP National Police Certificate and overseas penal clearances upfront to avoid Request for Information (RFI) delays.',
        de: 'Führungszeugnisse direkt bei Ersteinreichung anhängen zur Vermeidung von Nachforderungen.'
      }
    ],
    pitfalls: []
  },
  {
    id: 4,
    slug: 'au-interview-test',
    title: {
      en: '4. Citizenship Appointment & Test (Values 100%)',
      de: '4. Einbürgerungstermin & Test (Wertefragen 100 %)'
    },
    shortDesc: {
      en: 'Attend Home Affairs office, verify original documents, and pass the 20-question test.',
      de: 'Termin bei Home Affairs, Originalurkundencheck und 20-Fragen-Test ablegen.'
    },
    estimatedDuration: { en: '45 minutes', de: '45 Minuten' },
    costEstimate: { en: 'Included in application fee', de: 'In Antragsgebühr enthalten' },
    fullDescription: {
      en: 'You attend an in-person appointment at a Department of Home Affairs centre. An officer verifies your original documents, and you take the computer-based Australian Citizenship Test: 20 multiple-choice questions based on "Australian Citizenship: Our Common Bond". You must achieve at least 75% overall (15/20) AND answer ALL 5 Australian Values questions correctly (100%)!',
      de: 'Persönlicher Termin bei Home Affairs. Nach Sichtung der Originalurkunden absolvieren Sie den computergestützten Test: 20 Fragen, Bestehensgrenze 75 % (15/20) UND zwingend 100 % bei den 5 Fragen zu australischen Werten!'
    },
    actionItems: [
      {
        en: 'Bring original foreign passport, original birth certificate, and original Form 1195 photo.',
        de: 'Originalpass, Original-Geburtsurkunde und abgestempeltes Passfoto mitbringen.'
      },
      {
        en: 'Study the official booklet "Australian Citizenship: Our Common Bond".',
        de: 'Offizielle Broschüre „Our Common Bond“ und Wertefragen durcharbeiten.'
      }
    ],
    proTips: [
      {
        en: 'If you fail the test on the first try, the officer will usually allow you to retake it immediately on the same day without an extra fee!',
        de: 'Bei Nichtbestehen kann der Test meist am selben Tag direkt kostenlos wiederholt werden.'
      }
    ],
    pitfalls: [
      {
        en: 'Missing even one of the 5 Australian values questions results in an automatic fail, regardless of your total score!',
        de: 'Bereits 1 Fehler bei den 5 Werte-Fragen führt zum Durchfallen, selbst bei 19/20 Punkten!'
      }
    ]
  },
  {
    id: 5,
    slug: 'au-ceremony-pledge',
    title: {
      en: '5. The Citizenship Ceremony, Pledge & Australian Passport',
      de: '5. Einbürgerungszeremonie, Pledge & Australischer Pass'
    },
    shortDesc: {
      en: 'Attend your local council ceremony, recite the Australian Citizenship Pledge, and order your passport!',
      de: 'Teilnahme an der Ratszeremonie, Ablegen des Pledges und Passbeantragung!'
    },
    estimatedDuration: { en: '3 - 6 months after test approval', de: '3 - 6 Monate nach Testbestehen' },
    costEstimate: { en: 'AUD $398 (10-Year Adult Passport)', de: '398 AUD (10-Jahres-Reisepass)' },
    fullDescription: {
      en: 'Once your application is approved, you receive a formal invitation from your local municipal council. At the ceremony, you make the Australian Citizenship Pledge: "From this time forward, under God, I pledge my loyalty to Australia and its people..." Upon completing the pledge, you receive your Australian Citizenship Certificate. You are officially an Australian Citizen! You can then apply for your Australian passport at Australia Post.',
      de: 'Nach Bewilligung lädt Ihre Stadtverwaltung (Local Council) zur Zeremonie ein. Sie sprechen den Eid (Australian Citizenship Pledge) und erhalten Ihr Australian Citizenship Certificate. Sie sind nun vollwertiger australischer Staatsbürger und können Ihren Pass bei Australia Post beantragen.'
    },
    actionItems: [
      {
        en: 'Attend the local council ceremony and recite the Pledge of Commitment.',
        de: 'An der feierlichen Ratszeremonie teilnehmen und den Eid ablegen.'
      },
      {
        en: 'Apply for your Australian Passport online at passports.gov.au and lodge at Australia Post.',
        de: 'Australischen Reisepass online auf passports.gov.au vorbereiten und bei Australia Post einreichen.'
      }
    ],
    proTips: [
      {
        en: 'Need to travel urgently? You can request an expedited private ceremony directly from the Department of Home Affairs with proof of urgent travel or medical reasons.',
        de: 'Dringende Auslandsreise? Bei Home Affairs kann eine private Notfall-Zeremonie beantragt werden.'
      }
    ],
    pitfalls: []
  }
];

export const auDocumentList: DocumentItem[] = [
  {
    id: 'au-foreign-passport',
    category: 'identity',
    title: {
      en: 'Current Valid Passport & Travel Documents',
      de: 'Gültiger Reisepass & Reisedokumente'
    },
    description: {
      en: 'Color scan of the passport biodata page and all Australian visa/entry stamps.',
      de: 'Farbscan der Passdaten-Seite und aller Einreisestempel.'
    },
    requiredFor: ['all'],
    howToGet: { en: 'Passport issuing authority of origin.', de: 'Passbehörde des Heimatlandes.' }
  },
  {
    id: 'au-birth-cert',
    category: 'civil_status',
    title: {
      en: 'Full Official Birth Certificate (with Parents’ Names)',
      de: 'Vollständige Geburtsurkunde mit Elternangaben'
    },
    description: {
      en: 'Original birth certificate with Apostille / Legalisation and NAATI or sworn translation into English.',
      de: 'Geburtsurkunde mit Apostille und beglaubigter Übersetzung ins Englische.'
    },
    requiredFor: ['all'],
    howToGet: { en: 'Civil registry in birth country.', de: 'Standesamt des Geburtsortes.' }
  },
  {
    id: 'au-form-1195',
    category: 'identity',
    title: {
      en: 'Identity Declaration Form 1195 & Endorsed Passport Photo',
      de: 'Identitätserklärung Formular 1195 & gezeichnetes Passfoto'
    },
    description: {
      en: 'Form 1195 completed and signed by an Australian citizen who has known you for at least 1 year in an approved profession, with endorsed photo.',
      de: 'Formular 1195, unterzeichnet von einem anerkannten australischen Staatsbürger samt gezeichnetem Passfoto.'
    },
    requiredFor: ['all'],
    howToGet: { en: 'Home Affairs portal & authorized professional.', de: 'Home Affairs Portal & autorisierte Person.' },
    officialLink: 'https://immi.homeaffairs.gov.au/form-listing/forms/1195.pdf'
  },
  {
    id: 'au-afp-police-check',
    category: 'residence',
    title: {
      en: 'Australian Federal Police (AFP) National Police Certificate (Code 33)',
      de: 'National Police Certificate der Australian Federal Police (Code 33)'
    },
    description: {
      en: 'Official AFP National Police Check for Purpose Code 33 (Immigration/Citizenship). Standard state police checks are NOT accepted.',
      de: 'Offizielles AFP-Führungszeugnis für Code 33 (Landespolizeiliche Zeugnisse genügen nicht).'
    },
    requiredFor: ['all'],
    howToGet: { en: 'AFP online portal (afpnpex.afp.gov.au).', de: 'AFP Online-Portal (afpnpex.afp.gov.au).' },
    officialLink: 'https://www.afp.gov.au/our-services/national-police-checks'
  },
  {
    id: 'au-pr-grant-notice',
    category: 'residence',
    title: {
      en: 'Permanent Resident Visa Grant Notice (VEVO)',
      de: 'PR-Visumerteilungsbescheid (VEVO)'
    },
    description: {
      en: 'Official grant letter or VEVO check proving Australian Permanent Resident status held for at least 12 months.',
      de: 'VEVO-Nachweis über das mindestens 12-monatige Bestehen des PR-Status.'
    },
    requiredFor: ['all'],
    howToGet: { en: 'VEVO portal (online.immi.gov.au/evo).', de: 'VEVO-Portal.' },
    officialLink: 'https://online.immi.gov.au/evo/firstParty?actionType=query'
  },
  {
    id: 'au-proof-address',
    category: 'residence',
    title: {
      en: 'Proof of Residential Address (Utility Bill, Driver Licence, Lease)',
      de: 'Wohnsitznachweis (Führerschein, Mietvertrag, Stromrechnung)'
    },
    description: {
      en: 'Australian state driver licence, utility bill, or bank statement matching your declared residential address.',
      de: 'Australischer Führerschein oder Stromrechnung auf Ihre Wohnanschrift.'
    },
    requiredFor: ['all'],
    howToGet: { en: 'Service NSW / VicRoads / Bank statement.', de: 'Australische Kfz-Behörde oder Bankauszug.' }
  }
];

export const auQuizQuestions: QuizQuestion[] = [
  {
    id: 201,
    category: 'au_values',
    isSpecialBenchmark: true,
    question: {
      en: 'In Australia, are women and men equal under the law?',
      de: 'Sind Frauen und Männer in Australien vor dem Gesetz gleichberechtigt?'
    },
    options: [
      { en: 'Yes, men and women have equal rights in Australia.', de: 'Ja, Männer und Frauen haben gleiche Rechte.' },
      { en: 'No, men have higher status under federal law.', de: 'Nein, Männer haben höheren rechtlichen Status.' },
      { en: 'Only in criminal law, not civil matters.', de: 'Nur im Strafrecht, nicht im Zivilrecht.' },
      { en: 'It depends on the individual state or territory.', de: 'Das hängt vom jeweiligen Bundesstaat ab.' }
    ],
    correctIndex: 0,
    explanation: {
      en: 'Australian Values Question: Men and women have equal rights in Australia. Discrimination on the basis of gender is strictly against the law.',
      de: 'Australische Wertefrage: Frauen und Männer sind vollkommen gleichberechtigt. Diskriminierung aufgrund des Geschlechts ist gesetzlich untersagt.'
    }
  },
  {
    id: 202,
    category: 'au_values',
    isSpecialBenchmark: true,
    question: {
      en: 'What does the principle of "freedom of religion" mean in Australia?',
      de: 'Was bedeutet der Grundsatz der Religionsfreiheit in Australien?'
    },
    options: [
      { en: 'People are free to follow any religion, or no religion at all.', de: 'Jeder Mensch ist frei, jede Religion oder gar keine Religion auszuüben.' },
      { en: 'All citizens must practice the national religion.', de: 'Alle Bürger müssen der Staatsreligion angehören.' },
      { en: 'Religious laws can override Australian civil law.', de: 'Religiöse Gesetze stehen über australischem Recht.' },
      { en: 'Only registered religions are permitted in public.', de: 'Nur registrierte Religionen sind öffentlich erlaubt.' }
    ],
    correctIndex: 0,
    explanation: {
      en: 'Australian Values Question: People in Australia have the freedom to practice any religion, or choose not to follow a religion, provided it obeys Australian law.',
      de: 'Australische Wertefrage: Religionsfreiheit garantiert das Recht auf freie Religionswahl oder Nichtreligiosität.'
    }
  },
  {
    id: 203,
    category: 'au_history_symbols',
    question: {
      en: 'What is Australia’s national floral emblem?',
      de: 'Was ist Australiens nationales Blumenemblem?'
    },
    options: [
      { en: 'The Golden Wattle', de: 'Die Gold-Akazie (Golden Wattle)' },
      { en: 'The Waratah', de: 'Die Waratah' },
      { en: 'The Kangaroo Paw', de: 'Die Känguru-Blume' },
      { en: 'The Sturt’s Desert Pea', de: 'Die Wüstenerbse' }
    ],
    correctIndex: 0,
    explanation: {
      en: 'The Golden Wattle (Acacia pycnantha) is Australia’s official floral emblem, blooming in spring with bright golden flowers.',
      de: 'Die Gold-Akazie (Golden Wattle) ist das offizielle Blumenemblem Australiens.'
    }
  },
  {
    id: 204,
    category: 'au_government',
    question: {
      en: 'What are the three levels of government in Australia?',
      de: 'Welches sind die drei Regierungsebenen in Australien?'
    },
    options: [
      { en: 'Federal, State/Territory, and Local', de: 'Bund (Federal), Bundesstaaten/Territorien und Kommunen (Local)' },
      { en: 'Monarchy, Republic, and Federation', de: 'Monarchie, Republik und Föderation' },
      { en: 'Senate, Parliament, and Judiciary', de: 'Senat, Parlament und Judikative' },
      { en: 'Prime Minister, Premier, and Mayor', de: 'Premierminister, Premier und Bürgermeister' }
    ],
    correctIndex: 0,
    explanation: {
      en: 'Australia has three tiers of government: Federal (Commonwealth), State and Territory governments, and Local municipal councils.',
      de: 'Australien hat drei Ebenen: Bundesregierung (Federal), Bundesstaaten und Kommunalverwaltung (Local Councils).'
    }
  },
  {
    id: 205,
    category: 'au_history_symbols',
    question: {
      en: 'What does Australia Day on 26 January commemorate?',
      de: 'Woran erinnert der Australia Day am 26. Januar?'
    },
    options: [
      { en: 'The anniversary of the 1788 arrival of the First Fleet in Sydney Cove.', de: 'An die Landung der First Fleet in Sydney Cove im Jahr 1788.' },
      { en: 'The signing of the Australian Constitution in 1901.', de: 'Die Unterzeichnung der Verfassung 1901.' },
      { en: 'The discovery of gold in Victoria.', de: 'Die Entdeckung von Gold in Victoria.' },
      { en: 'The end of the Second World War.', de: 'Das Ende des Zweiten Weltkriegs.' }
    ],
    correctIndex: 0,
    explanation: {
      en: 'Australia Day on 26 January marks the arrival of Captain Arthur Phillip and the First Fleet of eleven British ships at Port Jackson in 1788.',
      de: 'Der 26. Januar erinnert an die Ankunft von Captain Arthur Phillip und der First Fleet 1788.'
    }
  }
];

export const auTipsData: TipItem[] = [
  {
    id: 'au-values-perfection',
    title: {
      en: 'The 100% Australian Values Test Rule',
      de: 'Die 100 % Regel bei den australischen Wertefragen'
    },
    category: 'quiz',
    badge: { en: 'Exam Must-Know', de: 'Prüfungsfalle' },
    summary: {
      en: 'Scoring 19 out of 20 can still cause you to fail! You MUST score 5 out of 5 (100%) on the Australian Values questions.',
      de: 'Selbst mit 19 von 20 Punkten können Sie durchfallen: Sie MÜSSEN alle 5 Wertefragen fehlerfrei (100 %) beantworten.'
    },
    content: {
      en: `In late 2020, Australia introduced mandatory Australian Values questions into the 20-question test.

The strict passing criteria:
1. Overall Score: Minimum 75% (15 out of 20 questions correct).
2. AND Australian Values Section: You must answer ALL 5 questions on Australian values correctly (5 out of 5 = 100%).
3. If you get 4 out of 5 on values, you FAIL immediately, even if all other 15 questions were 100% correct!

Key Values Tested:
- Freedom of speech, association, and religion.
- Equality of men and women under the law.
- Mutual respect, equality of opportunity, and the rule of law.`,
      de: `Seit Ende 2020 gelten verschärfte Kriterien für den 20-Fragen-Test:
1. Gesamtergebnis: Mindestens 75 % (15/20).
2. UND zwingend 100 % (5 von 5) bei den Fragen zu australischen Werten!
3. Bei auch nur einem Fehler in der Werte-Sektion ist der Test nicht bestanden, selbst bei voller Punktzahl im restlichen Test.`
    },
    actionableStep: {
      en: 'Review all Australian values questions in our practice test before sitting the exam at Home Affairs.',
      de: 'Die Wertefragen in unserem Quiz-Simulator vor dem Termin intensiv durchgehen.'
    },
    relevanceTag: 'Our Common Bond'
  },
  {
    id: 'au-afp-online-fasttrack',
    title: {
      en: 'How to Get Your AFP Code 33 Police Certificate in 48 Hours',
      de: 'AFP Code 33 Führungszeugnis in 48 Stunden online erhalten'
    },
    category: 'documents',
    badge: { en: 'Document Fast-Track', de: 'Zeitsparer' },
    summary: {
      en: 'Do not use state police portals (NSW Police, Victoria Police). Home Affairs strictly requires the Australian Federal Police (AFP) Code 33 certificate.',
      de: 'Nutzen Sie keinesfalls die Landespolizei-Portale. Home Affairs akzeptiert ausschließlich das AFP-Zertifikat mit Code 33.'
    },
    content: {
      en: `A common error that delays applications by months is submitting a State Police Check (e.g. from Service NSW) instead of an Australian Federal Police National Police Check.

The Correct Method:
1. Go directly to afpnpex.afp.gov.au.
2. Select "Commonwealth Purpose" -> Purpose Code 33 ("Immigration / Citizenship - for a foreign country or Australian citizenship").
3. Upload 100 points of ID (Passport, Driver Licence, Medicare card).
4. Pay the AUD $47 fee.
5. The digital PDF certificate is typically issued via email within 48 to 72 business hours!`,
      de: `Viele Bewerber reichen versehentlich ein Landespolizei-Zeugnis ein, das abgelehnt wird.
Der korrekte Weg:
1. afpnpex.afp.gov.au öffnen.
2. Purpose Code 33 auswählen.
3. 100 Punkte Ausweisdokumente hochladen und 47 AUD zahlen.
4. Das digitale PDF-Führungszeugnis trifft meist innerhalb von 48 Stunden per E-Mail ein!`
    },
    actionableStep: {
      en: 'Check the digital certificate box on the AFP application to receive the verified PDF directly to your inbox.',
      de: 'Die Option für das digitale Zertifikat wählen zur schnellen Zustellung per E-Mail.'
    },
    relevanceTag: 'AFP Code 33'
  }
];

export const auLetterTemplates: LetterTemplate[] = [
  {
    id: 'au-homeaffairs-status',
    title: {
      en: 'Home Affairs Citizenship Status Inquiry Letter',
      de: 'Sachstandsanfrage beim Department of Home Affairs'
    },
    purpose: {
      en: 'Send when processing time exceeds published Global Processing Times on the Home Affairs website.',
      de: 'Bei Überschreitung der veröffentlichten Standardbearbeitungszeit.'
    },
    recommendedTiming: {
      en: 'When outside published processing timeframe (typically 7+ months)',
      de: 'Nach Überschreitung der Regellaufzeit (ab ca. 7 Monaten)'
    },
    fields: [
      { id: 'applicantName', label: { en: 'Full Name', de: 'Vollständiger Name' }, placeholder: 'Jane Smith' },
      { id: 'transactionRef', label: { en: 'Transaction Reference Number (TRN)', de: 'TRN-Nummer' }, placeholder: 'EGO12345678' },
      { id: 'applicationId', label: { en: 'Application ID', de: 'Bewerbungs-ID' }, placeholder: '123456789' },
      { id: 'lodgementDate', label: { en: 'Lodgement Date', de: 'Datum der Einreichung' }, placeholder: '10 March 2024' }
    ],
    generateText: (f) => {
      const today = new Date().toLocaleDateString('en-AU');
      return `${f.applicantName || '[Full Name]'}
[Residential Address]
[City, State, Postcode]
Phone: [Phone Number]
Email: [Email Address]

Date: ${today}

Department of Home Affairs
Citizenship Processing Section

Subject: Status Inquiry for Australian Citizenship by Conferral
Transaction Reference Number (TRN): ${f.transactionRef || '[Your TRN]'}
Application ID: ${f.applicationId || '[Your Application ID]'}
Applicant: ${f.applicantName || '[Your Full Name]'}
Date of Lodgement: ${f.lodgementDate || '[Date]'}

Dear Processing Officer,

I am writing to respectfully inquire about the progress of my Application for Australian Citizenship by Conferral, lodged via ImmiAccount on ${f.lodgementDate || '[Date]'} under Transaction Reference Number ${f.transactionRef || '[TRN]'}.

According to published processing timeframes on the Department’s website, my application has now exceeded the standard processing duration. All required identity declarations (Form 1195), Australian Federal Police checks, and supporting civil documents were attached at lodgement.

Could you please provide an update on the current stage of assessment and whether an appointment for the citizenship interview and test has been scheduled? Should any additional information or updated travel details be required, I am ready to supply them immediately.

Thank you very much for your time and continued assistance.

Yours sincerely,

___________________________
${f.applicantName || '[Your Full Name]'}`;
    }
  }
];
