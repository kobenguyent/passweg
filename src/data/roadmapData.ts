import { RoadmapStep } from '../types';

export const roadmapSteps: RoadmapStep[] = [
  {
    id: 1,
    slug: 'self-assessment',
    title: {
      en: '1. Self-Assessment & Track Selection',
      de: '1. Selbsteinschätzung & Rechtsgrundlage'
    },
    shortDesc: {
      en: 'Determine whether you qualify under the 5-year standard, 3-year turbo, or spousal track.',
      de: 'Prüfen Sie, ob Sie unter die 5-Jahre-Regel, den 3-Jahre-Turbo oder § 9 (Ehe) fallen.'
    },
    estimatedDuration: {
      en: '1 - 2 weeks',
      de: '1 - 2 Wochen'
    },
    costEstimate: {
      en: '€0',
      de: '0 €'
    },
    fullDescription: {
      en: 'Since June 27, 2024, the modernized German Citizenship Act (StAG) significantly reduced residency requirements. Dual citizenship is now universally permitted without needing a waiver (Beibehaltungsgenehmigung). You must verify your exact legal entry date, count any student years, and decide whether to aim for the 3-year turbo (requires C1 and special integration) or the 5-year standard track (requires B1).',
      de: 'Seit dem 27. Juni 2024 gilt das reformierte Staatsangehörigkeitsgesetz (StAG). Die Voraufenthaltszeit sank auf 5 Jahre (bzw. 3 Jahre bei Turbo-Integration). Mehrstaatigkeit (doppelte Staatsbürgerschaft) ist ausnahmslos erlaubt. Klären Sie Ihr Einreisedatum, rechnen Sie Studienzeiten an und wählen Sie zwischen 3-Jahre-Turbo (C1 + Ehrenamt) und 5-Jahre-Standard (B1).'
    },
    actionItems: [
      {
        en: 'Check your official Meldebestätigung (registration history) to calculate exact continuous lawful residence.',
        de: 'Meldebescheinigungen / erweiterten Melderegisterauszug prüfen zur lückenlosen Aufenthaltsberechnung.'
      },
      {
        en: 'Verify that your current residence title is naturalization-eligible (Blue Card, § 18a/b, Settlement Permit).',
        de: 'Prüfen, ob der aktuelle Aufenthaltstitel einbürgerungsberechtigt ist (Blaue Karte, § 18a/b, Niederlassungserlaubnis).'
      },
      {
        en: 'Assess your German language level (B1 for standard, C1 for turbo).',
        de: 'Sprachniveau einschätzen (B1 für 5 Jahre, C1 für 3-Jahre-Turbo).'
      }
    ],
    proTips: [
      {
        en: 'Student visa years (§ 16b) count 100% towards the 3 or 5 years in Germany, as long as you transition to a work permit before submitting your application!',
        de: 'Studienzeiten mit § 16b zählen zu 100 % zur Aufenthaltsdauer, sofern vor Antragstellung in einen Fachkraft-Titel gewechselt wurde!'
      },
      {
        en: 'Time spent abroad under 6 months per trip does NOT interrupt your continuous German residency (§ 12b StAG).',
        de: 'Auslandsaufenthalte unter 6 Monaten am Stück unterbrechen den gewöhnlichen Inlandsaufenthalt in der Regel nicht (§ 12b StAG).'
      }
    ],
    pitfalls: [
      {
        en: 'Applying while still on a § 16b student visa or § 24 temporary protection will result in immediate formal rejection.',
        de: 'Einreichung noch während eines § 16b (Studium) oder § 24 (vorübergehender Schutz) führt zur Ablehnung.'
      }
    ]
  },
  {
    id: 2,
    slug: 'document-gathering',
    title: {
      en: '2. Civil Documents, Apostilles & Translations',
      de: '2. Urkunden, Apostillen & Übersetzungen'
    },
    shortDesc: {
      en: 'Order birth certificates, obtain Apostilles or Legalisation, and book sworn translators.',
      de: 'Geburtsurkunde beschaffen, Apostille/Legalisation einholen und vereidigte Übersetzer beauftragen.'
    },
    estimatedDuration: {
      en: '1 - 3 months',
      de: '1 - 3 Monate'
    },
    costEstimate: {
      en: '€100 - €400 (translations & apostilles)',
      de: '100 € - 400 € (Übersetzungen & Apostillen)'
    },
    fullDescription: {
      en: 'Your foreign civil certificates (birth certificate, marriage certificate) must be submitted in the required legal format. Depending on your country of birth, you need either an Apostille (Hague Convention) or full Embassy Legalisation. All non-German documents must be translated into German by a sworn translator (beeidigter / ermächtigter Übersetzer) recognized in Germany.',
      de: 'Ausländische Personenstandsurkunden (Geburtsurkunde, Heiratsurkunde) bedürfen einer diplomatischen Beglaubigung (Haager Apostille oder konsularische Legalisation). Übersetzungen müssen von einem in Deutschland gerichtlich beeidigten/ermächtigten Übersetzer nach ISO-Norm 9 angefertigt werden.'
    },
    actionItems: [
      {
        en: 'Request a fresh copy of your birth certificate from your country of birth if required.',
        de: 'Internationale oder aktuelle Geburtsurkunde im Heimatland anfordern.'
      },
      {
        en: 'Obtain an Apostille from the competent government authority in your country of origin.',
        de: 'Haager Apostille bei der zuständigen Heimatbehörde einholen.'
      },
      {
        en: 'Hire a court-sworn translator in Germany via justiz-dolmetscher.de to translate into German.',
        de: 'Gerichtlich beeidigten Übersetzer über justiz-dolmetscher.de beauftragen.'
      }
    ],
    proTips: [
      {
        en: 'Always search justiz-dolmetscher.de directly rather than paying agency surcharges. You will save 40-60% on translation fees.',
        de: 'Übersetzer direkt über justiz-dolmetscher.de kontaktieren – spart bis zu 50 % Agenturaufschläge.'
      },
      {
        en: 'If your birth certificate is already a multilingual CIEC extract (common in EU/Balkans), no translation or apostille is needed!',
        de: 'Mehrsprachige CIEC-Auszüge (z.B. aus EU/Türkei/Balkan) bedürfen meist weder Apostille noch Übersetzung.'
      }
    ],
    pitfalls: [
      {
        en: 'Translations done by foreign notaries or unsworn translators abroad are frequently rejected by German civil registries.',
        de: 'Im Ausland angefertigte Übersetzungen werden von deutschen Standesämtern oft mangels deutscher Vereidigung abgewiesen.'
      }
    ],
    officialLinks: [
      { label: 'Justiz-Dolmetscher Database (Official)', url: 'https://www.justiz-dolmetscher.de' }
    ]
  },
  {
    id: 3,
    slug: 'mandatory-exams',
    title: {
      en: '3. Language & Naturalization Tests',
      de: '3. Sprachprüfung & Einbürgerungstest'
    },
    shortDesc: {
      en: 'Complete your B1/C1 certification and the 33-question Einbürgerungstest / Leben in Deutschland.',
      de: 'B1/C1-Sprachnachweis erbringen und den Einbürgerungstest (33 Fragen) bestehen.'
    },
    estimatedDuration: {
      en: '1 - 3 months (exam wait times)',
      de: '1 - 3 Monate (Vorlaufzeit der VHS)'
    },
    costEstimate: {
      en: '€25 (Einbürgerungstest) + €120 - €220 (Language exam)',
      de: '25 € (Einbürgerungstest) + 120 € - 220 € (Sprachprüfung)'
    },
    fullDescription: {
      en: 'You must prove German language proficiency: B1 for the standard 5-year track, or C1 for the 3-year turbo track. In addition, you must pass the 33-question naturalization test ("Einbürgerungstest" or "Leben in Deutschland"). 17 correct answers out of 33 are required to pass. The test was updated in June 2024 to include questions on Germany’s historical responsibility, antisemitism, and Jewish life.',
      de: 'Nachweis von Deutschkenntnissen: Mindestens B1 (GER) für den 5-Jahres-Weg, oder C1 für den 3-Jahres-Turbo. Dazu der Einbürgerungstest oder Abschlusstest des Integrationskurses „Leben in Deutschland“ (33 Fragen, 17 zum Bestehen). Seit Juni 2024 umfasst der Fragenkatalog auch Fragen zu Antisemitismus, jüdischem Leben und der historischen Verantwortung.'
    },
    actionItems: [
      {
        en: 'Book your Einbürgerungstest at a local Volkshochschule (VHS) 2-3 months ahead.',
        de: 'Einbürgerungstest frühzeitig bei der Volkshochschule (VHS) anmelden (Plätze oft Monate vorher ausgebucht).'
      },
      {
        en: 'If you have a German high school diploma (Abitur/Realschule) or a German degree, request exemption proof.',
        de: 'Deutsches Schul- oder Hochschulzeugnis als Befreiungsnachweis von Sprach- und Einbürgerungstest bereithalten.'
      },
      {
        en: 'Practice the official 300 federal + 10 state questions online or with our quiz tool.',
        de: 'Fragenkatalog des BAMF (300 Bundes- + 10 Landesfragen) online üben.'
      }
    ],
    proTips: [
      {
        en: 'Did you graduate from a German university taught in German? You are automatically exempt from both the language test and the Einbürgerungstest!',
        de: 'Deutsches deutschsprachiges Hochschulstudium absolviert? Sie sind automatisch von Sprach- und Einbürgerungstest befreit!'
      },
      {
        en: 'If your local VHS is fully booked, check neighboring districts or VHS centers in adjacent small towns—they often have open slots this month.',
        de: 'Wenn die Großstadt-VHS voll ist: VHS in kleineren Nachbargemeinden anfragen – dort gibt es oft sofort freie Plätze.'
      }
    ],
    pitfalls: [
      {
        en: 'BAMF test certificate delivery takes 6 to 10 weeks after taking the test. Take the test early before booking your citizenship filing date!',
        de: 'Die BAMF-Zertifikatszustellung dauert 6 bis 10 Wochen. Den Test unbedingt vor Einreichung des Hauptantrags ablegen!'
      }
    ]
  },
  {
    id: 4,
    slug: 'application-submission',
    title: {
      en: '4. Submitting the Application & Fee Payment',
      de: '4. Antragstellung & Gebührenzahlung'
    },
    shortDesc: {
      en: 'Submit online or in person, provide financial proofs, and pay the €255 statutory fee.',
      de: 'Antrag online oder schriftlich einreichen, Einkommen nachweisen und 255 € Gebühr zahlen.'
    },
    estimatedDuration: {
      en: '1 day to submit',
      de: '1 Tag für die Einreichung'
    },
    costEstimate: {
      en: '€255 per adult (€51 per minor child co-naturalized)',
      de: '255 € pro Erwachsenem (51 € je minderjährigem Kind)'
    },
    fullDescription: {
      en: 'In many German cities (e.g. Berlin with the LEA portal, Hamburg, Munich), citizenship applications are now fully digital. You upload all PDFs, employer statements, Rentenversicherungsverlauf, rental contracts, and test certificates. The statutory naturalization fee is €255 per applicant, payable either online or by invoice (Gebührenbescheid).',
      de: 'In zahlreichen Großstädten (z.B. Berlin über das LEA-Portal, Hamburg, Bayern) erfolgt der Antrag komplett online. Sie laden Ausweise, Urkunden, Arbeitgeberbescheinigung, Rentenversicherungsverlauf und Mietvertrag als PDF hoch. Die gesetzliche Einbürgerungsgebühr beträgt 255 € je Erwachsenem.'
    },
    actionItems: [
      {
        en: 'Request your official Versicherungsverlauf from Deutsche Rentenversicherung (DRV) online.',
        de: 'Versicherungsverlauf online bei der Deutschen Rentenversicherung anfordern.'
      },
      {
        en: 'Have your employer fill out the official Arbeitgeberbescheinigung (not older than 14 days).',
        de: 'Aktuelle Arbeitgeberbescheinigung (max. 14 Tage alt) durch die Personalabteilung ausfüllen lassen.'
      },
      {
        en: 'Collect last 3 consecutive payslips and current bank statements showing rent deduction.',
        de: 'Letzte 3 Gehaltsabrechnungen und aktuellen Kontoauszug mit Mietabbuchung bereithalten.'
      }
    ],
    proTips: [
      {
        en: 'Request your DRV pension statement online using your German eID (AusweisApp). It generates an instant signed PDF instead of waiting 2 weeks by mail!',
        de: 'Den DRV-Versicherungsverlauf online mit eID/AusweisApp abrufen – spart 2 Wochen Postlaufzeit!'
      },
      {
        en: 'Ensure all document scans are full color, high resolution, with all 4 corners visible.',
        de: 'Farbscans aller Dokumente erstellen, bei denen alle 4 Ecken sichtbar und lesbar sind.'
      }
    ],
    pitfalls: [
      {
        en: 'Do not quit your job or enter an unconfirmed probation period right before filing. Case officers verify income stability immediately.',
        de: 'Keine Kündigung oder ungeklärte Probezeit kurz vor Einreichung. Einkommensstabilität wird sofort geprüft.'
      }
    ]
  },
  {
    id: 5,
    slug: 'waiting-and-management',
    title: {
      en: '5. Processing Time & Bureaucracy Management',
      de: '5. Bearbeitungszeit & Sachstandskontrolle'
    },
    shortDesc: {
      en: 'Track your file, send friendly status inquiries, and leverage § 75 VwGO if stalled.',
      de: 'Aktenzeichen verfolgen, Sachstandsanfrage stellen und bei Untätigkeit § 75 VwGO nutzen.'
    },
    estimatedDuration: {
      en: '3 - 18 months (varies by city)',
      de: '3 - 18 Monate (je nach Kommune)'
    },
    costEstimate: {
      en: '€0 (or legal court fee if Untätigkeitsklage filed)',
      de: '0 € (bzw. Gerichtskosten bei Untätigkeitsklage)'
    },
    fullDescription: {
      en: 'Once your application receives a file number (Aktenzeichen), background security checks run automatically with the Federal Office for the Protection of the Constitution (BfV), Federal Criminal Police (BKA), and local police. If no decision has been taken after months, a polite Sachstandsanfrage is appropriate. Under German administrative law (§ 75 VwGO), if an authority fails to decide without adequate justification, you have the right to file an action for failure to act (Untätigkeitsklage).',
      de: 'Nach Eingang erhält der Antrag ein Aktenzeichen. Die Behörde holt Sicherheitsabfragen beim Verfassungsschutz (BfV), BKA und Bundeszentralregister ein. Bei monatelangem Stillstand empfiehlt sich eine schriftliche Sachstandsanfrage. Nach § 75 VwGO kann bei unbegründeter Verzögerung eine Untätigkeitsklage beim Verwaltungsgericht erhoben werden.'
    },
    actionItems: [
      {
        en: 'Record your Aktenzeichen and keep a communication diary with dates.',
        de: 'Aktenzeichen und Eingangsdatum sicher archivieren.'
      },
      {
        en: 'If 6 months pass with zero communication, send our polite Sachstandsanfrage letter.',
        de: 'Nach 6 Monaten ohne Lebenszeichen unsere freundliche Sachstandsanfrage versenden.'
      },
      {
        en: 'Immediately inform the authority in writing if you change your address or employer.',
        de: 'Adressänderungen oder Arbeitgeberwechsel unverzüglich schriftlich mitteilen.'
      }
    ],
    proTips: [
      {
        en: 'A formal warning letter setting a 4-week deadline before § 75 VwGO often prompts the case officer to pull your file and finalize it without going to court.',
        de: 'Ein förmliches Fristsetzungsschreiben vor einer Untätigkeitsklage führt häufig zur prioritären Bearbeitung ohne Gerichtsverfahren.'
      },
      {
        en: 'Always send important legal notices via Einwurfeinschreiben (registered mail with delivery tracking) for proof of delivery.',
        de: 'Wichtige Schreiben stets per Einwurf-Einschreiben versenden zwecks rechtssicherem Zustellnachweis.'
      }
    ],
    pitfalls: [
      {
        en: 'Do not call or email your case worker weekly—this annoys clerks and slows down manual file handling.',
        de: 'Nicht wöchentlich anrufen oder mailen – dies verärgert Sachbearbeiter und blockiert die Akten.'
      }
    ]
  },
  {
    id: 6,
    slug: 'loyalty-and-security',
    title: {
      en: '6. Loyalty Declaration & Security Verification',
      de: '6. Loyalitätserklärung & Sicherheitsüberprüfung'
    },
    shortDesc: {
      en: 'Sign the updated FDGO commitment, acknowledging Germany’s historical responsibility.',
      de: 'Unterzeichnung der reformierten Loyalitätserklärung zur FDGO und historischen Verantwortung.'
    },
    estimatedDuration: {
      en: '2 - 4 weeks',
      de: '2 - 4 Wochen'
    },
    costEstimate: {
      en: '€0',
      de: '0 €'
    },
    fullDescription: {
      en: 'The 2024 reform explicitly codifies that actions driven by antisemitism, racism, xenophobia, or contempt for humanity preclude naturalization. Before receiving your citizenship certificate, you will be asked to sign an affirmative declaration committing to the Free Democratic Basic Order (FDGO), Germany’s historical responsibility for the crimes of National Socialism, and the protection of Jewish life.',
      de: 'Das Gesetz 2024 stellt klar: Antisemitische, rassistische oder menschenverachtende Handlungen schließen eine Einbürgerung aus. Vor Aushändigung der Urkunde unterschreiben Sie ein Bekenntnis zur freiheitlichen demokratischen Grundordnung (FDGO), zur historischen Verantwortung für den Nationalsozialismus und zum Schutz jüdischen Lebens.'
    },
    actionItems: [
      {
        en: 'Review the text of the declaration and Basic Law articles (Art. 1 Human Dignity, Art. 20 Democracy).',
        de: 'Text der Loyalitätserklärung und Grundgesetz-Artikel (Art. 1 Menschenwürde, Art. 20) verinnerlichen.'
      },
      {
        en: 'Sign and return the declaration when requested by the citizenship office.',
        de: 'Erklärung bei Aufforderung durch die Behörde unterschreiben und einreichen.'
      }
    ],
    proTips: [
      {
        en: 'Dual citizenship approval is now unconditional! You will NOT receive an "Einbürgerungszusicherung" requiring you to surrender your home passport.',
        de: 'Mehrstaatigkeit ist garantiert! Sie erhalten keine Einbürgerungszusicherung mehr, die den Verzicht auf den alten Pass verlangt.'
      }
    ],
    pitfalls: [
      {
        en: 'Any recent criminal investigation opened against you halts the procedure until fully settled or dismissed.',
        de: 'Laufende strafrechtliche Ermittlungsverfahren stoppen das Einbürgerungsverfahren bis zum rechtskräftigen Abschluss.'
      }
    ]
  },
  {
    id: 7,
    slug: 'ceremony-and-passport',
    title: {
      en: '7. Ceremony, Urkunde & Getting the Red Passport',
      de: '7. Feierstunde, Urkunde & Passantrag'
    },
    shortDesc: {
      en: 'Receive your Einbürgerungsurkunde, take the oath, and order your Personalausweis and Reisepass!',
      de: 'Einbürgerungsurkunde in Empfang nehmen, Eid leisten und Personalausweis & Reisepass beantragen!'
    },
    estimatedDuration: {
      en: '2 - 6 weeks to receive physical passports',
      de: '2 - 6 Wochen bis zur Passabholung'
    },
    costEstimate: {
      en: '€70 (Reisepass) + €37 (Personalausweis)',
      de: '70 € (Reisepass) + 37 € (Personalausweis)'
    },
    fullDescription: {
      en: 'The moment you have been working toward! You will be invited to a formal citizenship ceremony (Einbürgerungsfeier) or an in-person appointment. You speak the solemn citizenship oath aloud: "Ich erkläre feierlich, dass ich das Grundgesetz und die Gesetze der Bundesrepublik Deutschland achten und alles unterlassen werde, was ihr schaden könnte." Once the Einbürgerungsurkunde is handed over, you are officially a German citizen! Next, visit your local Bürgeramt to apply for your German passport (Reisepass) and National ID (Personalausweis).',
      de: 'Der feierliche Abschluss! Sie werden zur Einbürgerungsfeier oder zum Übergabetermin eingeladen. Sie sprechen das feierliche Bekenntnis: „Ich erkläre feierlich, dass ich das Grundgesetz und die Gesetze der Bundesrepublik Deutschland achten und alles unterlassen werde, was ihr schaden könnte.“ Mit Übergabe der Urkunde sind Sie deutscher Staatsbürger. Anschließend beantragen Sie im Bürgeramt Personalausweis und Reisepass.'
    },
    actionItems: [
      {
        en: 'Attend the ceremony in business-casual attire and recite the solemn oath.',
        de: 'Am Übergabetermin teilnehmen und das feierliche Bekenntnis sprechen.'
      },
      {
        en: 'Book an appointment at your Bürgeramt for "Personalausweis / Reisepass beantragen".',
        de: 'Termin im Bürgeramt zur Pass- und Ausweisbeantragung buchen.'
      },
      {
        en: 'Bring biometric passport photos and your original Einbürgerungsurkunde to the Bürgeramt.',
        de: 'Biometrische Passbilder und die Originalurkunde zum Bürgeramt mitbringen.'
      }
    ],
    proTips: [
      {
        en: 'Order both the Personalausweis (for convenient EU travel & digital eID identification) AND the Reisepass (for visa-free travel to 190+ countries worldwide)!',
        de: 'Sowohl Personalausweis (für EU-Reisen & Online-Ausweisfunktion) als auch Reisepass (weltweit visafrei) beantragen!'
      },
      {
        en: 'Remember Section 1 of the German Passport Act: As a German citizen, you MUST use your German passport when entering or leaving Germany.',
        de: 'Wichtig (§ 1 Passgesetz): Bei Ein- und Ausreise nach/aus Deutschland müssen Sie zwingend Ihren deutschen Pass vorzeigen.'
      }
    ],
    pitfalls: [
      {
        en: 'Do not laminate your Einbürgerungsurkunde! Laminating a German public document makes it legally invalid.',
        de: 'Die Einbürgerungsurkunde NIEMALS laminieren! Laminierte Urkunden verlieren ihre amtliche Gültigkeit.'
      }
    ]
  }
];
