import { CityGuide } from '../types';

export const cityGuides: CityGuide[] = [
  {
    id: 'berlin',
    city: 'Berlin',
    state: 'Berlin',
    portalUrl: 'https://service.berlin.de/dienstleistung/318998/',
    portalName: 'LEA Berlin Online-Antrag',
    averageWaitMonths: '6 - 12 months',
    applicationMode: '100% Online',
    keyInsight: {
      en: 'Centralized under the Landesamt für Einwanderung (LEA) since January 2024. District offices no longer process applications. 100% digital submission via the Berlin portal.',
      de: 'Seit Januar 2024 zentral beim Landesamt für Einwanderung (LEA) gebündelt. Keine Bezirksämter mehr zuständig. 100 % digitale Abwicklung über das Berliner Serviceportal.'
    },
    contactTip: {
      en: 'Apply directly via the official digital questionnaire. You receive your Aktenzeichen and confirmation immediately as PDF upon payment of the €255 fee.',
      de: 'Direkt über den digitalen Quick-Check einreichen. Nach 255-Euro-Zahlung erhalten Sie Aktenzeichen und Einreichungsnachweis sofort als PDF.'
    }
  },
  {
    id: 'muenchen',
    city: 'München',
    state: 'Bayern',
    portalUrl: 'https://stadt.muenchen.de/service/info/einbuergerung-beantragen/1080643/',
    portalName: 'KVR München Einbürgerungsportal',
    averageWaitMonths: '12 - 18 months',
    applicationMode: '100% Online',
    keyInsight: {
      en: 'The Kreisverwaltungsreferat (KVR) has migrated to online processing via BayernID. Strict document checks regarding pension contributions and livelihood.',
      de: 'Das Kreisverwaltungsreferat (KVR) nutzt den Online-Antrag via BayernID. Sehr gründliche Prüfung der Rentenversicherungszeiten und des Nettoeinkommens.'
    },
    contactTip: {
      en: 'BayernID with eID speeds up login and identity confirmation significantly.',
      de: 'Login mittels BayernID und Online-Ausweis beschleunigt die Identitätsfeststellung spürbar.'
    }
  },
  {
    id: 'hamburg',
    city: 'Hamburg',
    state: 'Hamburg',
    portalUrl: 'https://www.hamburg.de/behoerdenfinder/info/10291410/',
    portalName: 'Hamburg Serviceportal Einbürgerung',
    averageWaitMonths: '8 - 14 months',
    applicationMode: '100% Online',
    keyInsight: {
      en: 'Hamburg has streamlined its Einbürgerungsabteilung under the Einwohner-Zentralamt. Known for well-organized celebratory naturalization ceremonies in the historic City Hall (Rathaus).',
      de: 'Hamburg hat das Verfahren im Einwohner-Zentralamt digitalisiert. Bekannt für feierliche Einbürgerungsveranstaltungen im Hamburger Rathaus.'
    },
    contactTip: {
      en: 'Use the Hamburg Online-Service to pre-upload all sworn translations as bundled single PDFs.',
      de: 'Nutzen Sie das Hamburg Serviceportal und fassen Sie Übersetzungen jeweils mit dem Original in einem PDF zusammen.'
    }
  },
  {
    id: 'frankfurt',
    city: 'Frankfurt am Main',
    state: 'Hessen',
    portalUrl: 'https://frankfurt.de/leistungen/Gesellschaft-und-Politik-8957833/Staatsangehoerigkeit-8958434/Einbuergerung-8958435',
    portalName: 'Stadt Frankfurt Ordnungsamt',
    averageWaitMonths: '10 - 16 months',
    applicationMode: 'Hybrid (Paper + Online)',
    keyInsight: {
      en: 'Frankfurt handles thousands of expat finance and tech applicants. Initial checks can take 6 months before in-person appointment for document verification.',
      de: 'Hohes Antragsaufkommen durch internationalen Banken- und Technologiesektor. Vorprüfung dauert oft 6 Monate vor dem Vorlage-Termin.'
    },
    contactTip: {
      en: 'Check appointment cancellations early Monday mornings between 7:30 and 8:00 AM.',
      de: 'Termine für das Bürgeramt / Einbürgerungsstelle montagmorgens zwischen 7:30 und 8:00 Uhr prüfen.'
    }
  },
  {
    id: 'koeln',
    city: 'Köln',
    state: 'Nordrhein-Westfalen',
    portalUrl: 'https://www.stadt-koeln.de/service/produkte/00392/index.html',
    portalName: 'Stadt Köln Ausländeramt',
    averageWaitMonths: '12 - 20 months',
    applicationMode: 'Hybrid (Paper + Online)',
    keyInsight: {
      en: 'Cologne has faced heavy backlogs. Sending formal Sachstandsanfragen after 9 months is customary among local immigration attorneys.',
      de: 'Köln verzeichnet längere Bearbeitungszeiten. Die Einreichung einer Sachstandsanfrage nach 9 Monaten ist bei Fachanwälten gängige Praxis.'
    },
    contactTip: {
      en: 'Ensure your employer certificate has no expiration or temporary clauses.',
      de: 'Auf lückenlose Arbeitgeberbescheinigung und Nachweis der Mietkosten achten.'
    }
  },
  {
    id: 'stuttgart',
    city: 'Stuttgart',
    state: 'Baden-Württemberg',
    portalUrl: 'https://www.stuttgart.de/buergerinnen-und-buerger/migranten/einbuergerung.php',
    portalName: 'Amt für öffentliche Ordnung Stuttgart',
    averageWaitMonths: '9 - 15 months',
    applicationMode: 'Hybrid (Paper + Online)',
    keyInsight: {
      en: 'The state of Baden-Württemberg was historically strict on dual citizenship, but since the June 2024 federal reform, dual nationality is accepted smoothly without exception.',
      de: 'Baden-Württemberg akzeptiert seit der Bundesreform vom Juni 2024 die doppelte Staatsbürgerschaft vollumfänglich und ohne Ausnahmeantrag.'
    },
    contactTip: {
      en: 'Send inquiries via the official contact form quoting your reference number.',
      de: 'Anfragen stets unter Angabe des Aktenzeichens über das offizielle Kontaktformular einreichen.'
    }
  }
];
