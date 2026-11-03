import { LetterTemplate } from '../types';

export const letterTemplates: LetterTemplate[] = [
  {
    id: 'sachstandsanfrage',
    title: {
      en: 'Friendly Status Inquiry (Sachstandsanfrage)',
      de: 'Freundliche Sachstandsanfrage'
    },
    purpose: {
      en: 'Send when 6 to 9 months have passed since filing with no status update or requests for documents.',
      de: 'Einsatzbereit, wenn seit Antragstellung 6 bis 9 Monate ohne Rückmeldung vergangen sind.'
    },
    recommendedTiming: {
      en: '6 - 9 months post-submission',
      de: '6 - 9 Monate nach Antragstellung'
    },
    fields: [
      { id: 'fullName', label: { en: 'Full Name', de: 'Vollständiger Name' }, placeholder: 'Max Mustermann' },
      { id: 'address', label: { en: 'Your Address', de: 'Ihre Anschrift' }, placeholder: 'Musterstraße 12, 10115 Berlin' },
      { id: 'authorityName', label: { en: 'Authority Name & Address', de: 'Behörde & Anschrift' }, placeholder: 'Landesamt für Einwanderung (LEA), Friedrich-Krause-Ufer 24, 13353 Berlin' },
      { id: 'aktenzeichen', label: { en: 'File Number (Aktenzeichen)', de: 'Aktenzeichen' }, placeholder: 'E-12345/2024' },
      { id: 'submissionDate', label: { en: 'Submission Date', de: 'Datum der Antragstellung' }, placeholder: '15.01.2024' }
    ],
    generateText: (f) => {
      const today = new Date().toLocaleDateString('de-DE');
      return `${f.fullName || '[Vor- und Nachname]'}
${f.address || '[Ihre Anschrift]'}
E-Mail: [Ihre E-Mail-Adresse]
Telefon: [Ihre Telefonnummer]

${f.authorityName || '[Zuständige Einbürgerungsbehörde]'}

${today}

Betreff: Sachstandsanfrage zum Einbürgerungsantrag
Aktenzeichen: ${f.aktenzeichen || '[Ihr Aktenzeichen]'}
Antragsteller: ${f.fullName || '[Ihr vollständiger Name]'}, geb. am [Geburtsdatum]
Datum der Antragstellung: ${f.submissionDate || '[Datum der Antragstellung]'}

Sehr geehrte Damen und Herren,

am ${f.submissionDate || '[Datum]'} habe ich bei Ihrer Behörde meinen Antrag auf Einbürgerung in den deutschen Staatsverband nebst sämtlichen erforderlichen Unterlagen eingereicht.

Seit der Bestätigung des Antragseingangs unter dem oben genannten Aktenzeichen sind mittlerweile mehrere Monate vergangen. Da mir bisher keine weiteren Zwischenmitteilungen oder Anforderungen ergänzender Unterlagen zugegangen sind, erkundige ich mich hiermit höflich nach dem aktuellen Bearbeitungsstand meines Verfahrens.

Sollten Ihrerseits noch Unterlagen, Nachweise oder eine Aktualisierung von Gehaltsnachweisen benötigt werden, bitte ich um eine kurze Nachricht, damit ich diese umgehend zur Verfügung stellen kann.

Über eine kurze Information über den voraussichtlichen weiteren Verfahrensablauf würde ich mich sehr freuen.

Ich bedanke mich herzlich für Ihre Mühe und verbleibe

mit freundlichen Grüßen

___________________________
${f.fullName || '[Unterschrift / Vor- und Nachname]'}`;
    }
  },
  {
    id: 'fristsetzung-untaetigkeit',
    title: {
      en: 'Formal Notice & Deadline before Untätigkeitsklage (§ 75 VwGO)',
      de: 'Förmliche Fristsetzung zur Vermeidung einer Untätigkeitsklage (§ 75 VwGO)'
    },
    purpose: {
      en: 'Send when more than 9-12 months have passed, a Sachstandsanfrage was ignored, and you prepare to file at the Administrative Court.',
      de: 'Einsatzbereit nach erfolgloser Sachstandsanfrage und mehr als 9–12 Monaten Verfahrensdauer zur gerichtlichen Fristwahrung.'
    },
    recommendedTiming: {
      en: '9+ months post-submission & 30 days after unanswered inquiry',
      de: '9+ Monate nach Einreichung & 30 Tage nach unbeantworteter Anfrage'
    },
    fields: [
      { id: 'fullName', label: { en: 'Full Name', de: 'Vollständiger Name' }, placeholder: 'Max Mustermann' },
      { id: 'address', label: { en: 'Your Address', de: 'Ihre Anschrift' }, placeholder: 'Musterstraße 12, 10115 Berlin' },
      { id: 'authorityName', label: { en: 'Authority Name & Address', de: 'Behörde & Anschrift' }, placeholder: 'Einbürgerungsbehörde der Stadt Frankfurt am Main' },
      { id: 'aktenzeichen', label: { en: 'File Number (Aktenzeichen)', de: 'Aktenzeichen' }, placeholder: 'E-98765/2024' },
      { id: 'submissionDate', label: { en: 'Submission Date', de: 'Datum der Antragstellung' }, placeholder: '01.03.2024' },
      { id: 'deadlineDate', label: { en: 'Deadline (typically 4 weeks)', de: 'Fristdatum (ca. 4 Wochen)' }, placeholder: '30.11.2024' }
    ],
    generateText: (f) => {
      const today = new Date().toLocaleDateString('de-DE');
      return `PER EINWURF-EINSCHREIBEN

${f.fullName || '[Vor- und Nachname]'}
${f.address || '[Ihre Anschrift]'}

An die
${f.authorityName || '[Einbürgerungsbehörde]'}

Datum: ${today}

Betreff: Förmliche Fristsetzung zur Entscheidung über den Einbürgerungsantrag
Aktenzeichen: ${f.aktenzeichen || '[Ihr Aktenzeichen]'}
Antragsteller: ${f.fullName || '[Ihr vollständiger Name]'}, geb. am [Geburtsdatum]
Eingang des vollständigen Antrags: ${f.submissionDate || '[Datum]'}

Sehr geehrte Damen und Herren,

unter dem oben genannten Aktenzeichen ist mein Antrag auf Einbürgerung in den deutschen Staatsverband seit dem ${f.submissionDate || '[Datum]'} bei Ihrer Behörde anhängig. Sämtliche gesetzlichen Einbürgerungsvoraussetzungen nach dem StAG liegen vollständig vor und wurden durch Urkunden belegt.

Trotz einer vorangegangenen Sachstandsanfrage ist eine Entscheidung über den Antrag bis zum heutigen Tag nicht ergangen. Die in § 75 Satz 2 VwGO gesetzlich vorgesehene Regelfrist von drei Monaten ist mittlerweile um ein Vielfaches überschritten. Ein sachlicher Grund für diese erhebliche Verzögerung wurde mir nicht mitgeteilt.

Zur Vermeidung einer gerichtlichen Auseinandersetzung setze ich Ihnen hiermit eine letzte Frist zur Entscheidung über meinen Antrag bis zum

${f.deadlineDate || '[Datum in 4 Wochen einfügen]'} (Eingang hier).

Sollte dieser Termin ohne förmlichen Bescheid oder Terminsvergabe zur Aushändigung der Einbürgerungsurkunde verstreichen, werde ich ohne weitere Vorankündigung durch eine fachanwaltliche Vertretung Untätigkeitsklage gemäß § 75 VwGO beim zuständigen Verwaltungsgericht erheben lassen. Die hierdurch entstehenden Verfahrens- und Anwaltskosten fielen in diesem Fall der Behörde zur Last.

Ich hoffe im beiderseitigen Interesse auf einen zeitnahen und einvernehmlichen Abschluss des Verfahrens.

Mit freundlichen Grüßen

___________________________
${f.fullName || '[Unterschrift / Vor- und Nachname]'}`;
    }
  },
  {
    id: 'arbeitgeberbescheinigung',
    title: {
      en: 'Employer Certificate Template (Arbeitgeberbescheinigung)',
      de: 'Arbeitgeberbescheinigung Muster für Personalabteilung'
    },
    purpose: {
      en: 'Give to your company HR department to sign and stamp, verifying your permanent contract and income.',
      de: 'Vordruck zur Vorlage bei der Personalabteilung zur Bestätigung des ungekündigten Arbeitsverhältnisses.'
    },
    recommendedTiming: {
      en: '1-2 weeks before submitting application or upon authority request',
      de: '1-2 Wochen vor Antragsabgabe oder bei Nachforderung durch das Amt'
    },
    fields: [
      { id: 'employeeName', label: { en: 'Employee Name', de: 'Name des Arbeitnehmers' }, placeholder: 'Max Mustermann' },
      { id: 'birthDate', label: { en: 'Date of Birth', de: 'Geburtsdatum' }, placeholder: '01.01.1990' },
      { id: 'companyName', label: { en: 'Company Name', de: 'Name des Arbeitgebers' }, placeholder: 'Tech Solutions GmbH' },
      { id: 'jobTitle', label: { en: 'Job Title', de: 'Berufsbezeichnung' }, placeholder: 'Software Engineer' },
      { id: 'startDate', label: { en: 'Employment Start Date', de: 'Eintrittsdatum' }, placeholder: '01.05.2021' },
      { id: 'grossSalary', label: { en: 'Gross Monthly Salary (€)', de: 'Monatliches Bruttogehalt (€)' }, placeholder: '5.500,00 €' }
    ],
    generateText: (f) => {
      const today = new Date().toLocaleDateString('de-DE');
      return `[Briefkopf des Arbeitgebers / Company Letterhead]

ARBEITGEBERBESCHEINIGUNG
zur Vorlage bei der Einbürgerungsbehörde

Datum: ${today}

Hiermit bestätigen wir, dass Frau / Herr:

Name, Vorname: ${f.employeeName || '[Name des Arbeitnehmers]'}
Geburtsdatum: ${f.birthDate || '[Geburtsdatum]'}
Wohnanschrift: [Wohnanschrift des Arbeitnehmers]

seit dem ${f.startDate || '[Eintrittsdatum]'} in unserem Unternehmen beschäftigt ist.

Angaben zum Beschäftigungsverhältnis:
1. Funktion / Tätigkeit: ${f.jobTitle || '[Berufsbezeichnung / Rolle]'}
2. Art der Anstellung: [X] Vollzeit   [ ] Teilzeit mit ___ Wochenstunden
3. Befristung:
   [X] Das Arbeitsverhältnis ist UNBEFRISTET.
   [ ] Das Arbeitsverhältnis ist befristet bis zum: ___________
4. Probezeit:
   [X] Die vertraglich vereinbarte Probezeit wurde erfolgreich beendet.
   [ ] Eine Probezeit wurde nicht vereinbart.
5. Kündigungsstatus:
   Das Arbeitsverhältnis befindet sich in ungekündigter Stellung. Weder seitens des Arbeitgebers noch seitens des Arbeitnehmers liegt eine Kündigung vor. Ein Aufhebungsvertrag wurde nicht geschlossen.
6. Vergütung:
   Das durchschnittliche monatliche Bruttoeinkommen beträgt derzeit ca. ${f.grossSalary || '[Betrag in Euro]'}.

Diese Bescheinigung wird ausschließlich zur Vorlage bei der zuständigen Einbürgerungsbehörde ausgestellt.


________________________________________
Ort, Datum


________________________________________
Unterschrift der Geschäftsleitung / HR & Firmenstempel`;
    }
  },
  {
    id: 'turbo-begruendung',
    title: {
      en: '3-Year Turbo Track Justification Statement (§ 10 Abs. 3 StAG)',
      de: 'Begründungsschreiben für den 3-Jahre-Turbo (§ 10 Abs. 3 StAG)'
    },
    purpose: {
      en: 'Attach to your application when applying after 3 years to substantiate C1 German and civic engagement.',
      de: 'Begleitschreiben bei Einbürgerung nach 3 Jahren zur Darlegung von C1-Deutsch und besonderer Integrationsleistung.'
    },
    recommendedTiming: {
      en: 'Included directly with initial application filing',
      de: 'Direkt bei der Antragstellung als Anlage beifügen'
    },
    fields: [
      { id: 'applicantName', label: { en: 'Applicant Name', de: 'Name des Antragstellers' }, placeholder: 'Maria Santos' },
      { id: 'arrivalDate', label: { en: 'Arrival Date in Germany', de: 'Einreisedatum nach Deutschland' }, placeholder: '01.09.2021' },
      { id: 'languageCert', label: { en: 'Language Certificate details', de: 'Sprachzertifikat Details' }, placeholder: 'telc Deutsch C1 Hochschule (Bestanden mit "Sehr Gut", Datum: 12.02.2024)' },
      { id: 'volunteerDetails', label: { en: 'Volunteer / Professional Achievement details', de: 'Ehrenamt / Besondere Leistung' }, placeholder: 'Seit 18 Monaten aktives Mitglied und Sanitätshelfer beim Deutschen Roten Kreuz (DRK) Kreisverband Berlin' }
    ],
    generateText: (f) => {
      const today = new Date().toLocaleDateString('de-DE');
      return `${f.applicantName || '[Vor- und Nachname]'}
[Ihre Anschrift]
[Ihre Telefonnummer]
[Ihre E-Mail-Adresse]

An die zuständige Einbürgerungsbehörde

Datum: ${today}

Betreff: Antrag auf Einbürgerung nach § 10 Abs. 3 StAG (Verkürzung der Mindestaufenthaltsdauer auf drei Jahre)
Antragsteller: ${f.applicantName || '[Ihr Name]'}, geb. am [Geburtsdatum]

Sehr geehrte Damen und Herren,

mit meinem beigefügten Einbürgerungsantrag begehre ich die Einbürgerung in den deutschen Staatsverband unter Inanspruchnahme der gesetzlichen Verkürzungsregelung nach § 10 Abs. 3 des Staatsangehörigkeitsgesetzes (StAG) in der Fassung vom 27. Juni 2024.

Ich halte mich seit dem ${f.arrivalDate || '[Einreisedatum]'} – mithin seit über drei Jahren – ununterbrochen rechtmäßig im Bundesgebiet auf und erfülle sämtliche allgemeinen Einbürgerungsvoraussetzungen nach § 10 Abs. 1 StAG.

Zur Begründung der Verkürzung auf drei Jahre mache ich folgende gesetzliche Tatbestandsmerkmale geltend:

1. Nachweis herausragender deutscher Sprachkenntnisse (C1):
Gemäß § 10 Abs. 3 Satz 1 StAG weise ich Deutschkenntnisse nach, die die Anforderungen an das Zertifikat der Stufe C1 des Gemeinsamen Europäischen Referenzrahmens für Sprachen erfüllen:
${f.languageCert || '[Zertifikat, Aussteller, Prüfungsdatum und Note angeben]'} (Nachweis in Anlage 1).

2. Nachweis besonderer Integrationsleistungen (§ 10 Abs. 3 Satz 2 StAG):
Neben meinen beruflichen Leistungen engagiere ich mich nachhaltig und gemeinwohlorientiert für die Gesellschaft in Deutschland:
${f.volunteerDetails || '[Konkrete Beschreibung der ehrenamtlichen Tätigkeit, Organisation, Dauer und wöchentliche Stundenzahl]'} (Bescheinigung des Trägers in Anlage 2).

Durch dieses Engagement und meine vollständige wirtschaftliche Unabhängigkeit ist eine überdurchschnittliche gesellschaftliche Verwurzelung und Werteverbundenheit im Sinne des Gesetzgebers belegt.

Ich bitte daher höflich um antragsgemäße Entscheidung auf Grundlage von § 10 Abs. 3 StAG.

Mit freundlichen Grüßen

___________________________
${f.applicantName || '[Unterschrift / Vor- und Nachname]'}`;
    }
  }
];
