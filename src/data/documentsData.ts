import { DocumentItem } from '../types';

export const documentsData: DocumentItem[] = [
  {
    id: 'doc-foreign-passport',
    category: 'identity',
    title: {
      en: 'Valid National Passport or Recognized Travel Document',
      de: 'Gültiger ausländischer Nationalpass / Reisedokument'
    },
    description: {
      en: 'Must be currently valid and have at least 6 months of validity remaining. All pages including stamps and previous residence visas.',
      de: 'Muss aktuell gültig sein. Farbige Kopie aller Seiten inklusive Stempel und bisheriger Visumsetiketten.'
    },
    requiredFor: ['all'],
    howToGet: {
      en: 'Consulate or Embassy of your home country.',
      de: 'Konsulat oder Botschaft des Herkunftslandes.'
    },
    tip: {
      en: 'Ensure your name order and spelling match your German registration (Anmeldung) exactly.',
      de: 'Schreibweise des Namens muss exakt mit der Meldebescheinigung übereinstimmen.'
    }
  },
  {
    id: 'doc-birth-cert',
    category: 'civil_status',
    title: {
      en: 'Birth Certificate (with Apostille or Legalisation & Sworn Translation)',
      de: 'Geburtsurkunde (mit Haager Apostille/Legalisation & beeidigter Übersetzung)'
    },
    description: {
      en: 'Original birth certificate showing parents’ names, with Hague Apostille or diplomatic legalisation, accompanied by a court-certified translation in Germany.',
      de: 'Vollständige Geburtsurkunde mit Elternangaben, versehen mit Haager Apostille oder konsularischer Legalisation und deutscher Übersetzung nach ISO 9.'
    },
    requiredFor: ['all'],
    howToGet: {
      en: 'Civil registry (Standesamt) in your place of birth.',
      de: 'Standesamt des Geburtsortes.'
    },
    officialLink: 'https://www.justiz-dolmetscher.de',
    tip: {
      en: '🇺🇸 US: Obtain Apostille from your birth State Secretary of State. 🇦🇺 Australia: Obtain Apostille from DFAT (Smartraveller) on standard BDM certificate.',
      de: '🇺🇸 USA: Apostille beim Secretary of State Ihres Geburtsstaates einholen. 🇦🇺 Australien: Apostille bei DFAT (Smartraveller) auf Standard-BDM-Urkunde beantragen.'
    }
  },
  {
    id: 'doc-residence-permit',
    category: 'residence',
    title: {
      en: 'Current Electronic Residence Title (eAT) + Zusatzblatt',
      de: 'Elektronischer Aufenthaltstitel (eAT) samt Zusatzblatt'
    },
    description: {
      en: 'Color scan of the front and back of your plastic residence card and green Zusatzblatt sheet.',
      de: 'Farbige Vorder- und Rückseite der eAT-Karte sowie das grüne Zusatzblatt.'
    },
    requiredFor: ['all'],
    howToGet: {
      en: 'Issued by your local Ausländerbehörde (Foreigners Authority).',
      de: 'Ausgestellt durch die zuständige Ausländerbehörde.'
    }
  },
  {
    id: 'doc-meldebescheinigung',
    category: 'residence',
    title: {
      en: 'Extended Registration Certificate (Erweiterte Meldebescheinigung)',
      de: 'Erweiterte Meldebescheinigung (mit Familienstand & Historie)'
    },
    description: {
      en: 'Shows your current registered address, marital status, nationality, and exact registration date. Should be issued within the last 3 months.',
      de: 'Nachweis über aktuellen Wohnsitz, Familienstand, Staatsangehörigkeit und Zuzugsdaten. Maximal 3 Monate alt.'
    },
    requiredFor: ['all'],
    howToGet: {
      en: 'Online or in-person at your local Bürgeramt / Einwohnermeldeamt.',
      de: 'Bürgeramt / Bürgerbüro Ihrer Stadt (meist online bestellbar).'
    }
  },
  {
    id: 'doc-employment-contract',
    category: 'income',
    title: {
      en: 'Current Employment Contract & Confirmation (Arbeitgeberbescheinigung)',
      de: 'Arbeitsvertrag & aktuelle Arbeitgeberbescheinigung'
    },
    description: {
      en: 'Work contract plus an up-to-date certificate signed by your HR stating unlimited employment and confirmed completion of probation.',
      de: 'Arbeitsvertrag sowie eine frische Bescheinigung der Personalabteilung über ein ungekündigtes, unbefristetes Arbeitsverhältnis.'
    },
    requiredFor: ['employed'],
    howToGet: {
      en: 'HR / Payroll department of your employer (use our template).',
      de: 'Personalabteilung des Arbeitgebers (Vorlage im Brief-Tab nutzen).'
    },
    tip: {
      en: 'Make sure it is dated within 14 days of your citizenship filing.',
      de: 'Das Ausstellungsdatum sollte nicht älter als 14 Tage sein.'
    }
  },
  {
    id: 'doc-payslips',
    category: 'income',
    title: {
      en: 'Last 3 - 6 Consecutive Payslips (Gehaltsabrechnungen)',
      de: 'Die letzten 3 bis 6 Gehaltsabrechnungen'
    },
    description: {
      en: 'Monthly paystubs proving stable net earnings covering yourself and any dependent family members.',
      de: 'Monatliche Entgeltabrechnungen zum Nachweis ausreichenden Nettoeinkommens.'
    },
    requiredFor: ['employed'],
    howToGet: {
      en: 'Employer payroll portal.',
      de: 'Entgeltportal des Arbeitgebers.'
    }
  },
  {
    id: 'doc-freelance-tax',
    category: 'income',
    title: {
      en: 'Tax Assessment Notices (Einkommensteuerbescheide) & Current BWA',
      de: 'Einkommensteuerbescheide der letzten 2 Jahre & aktuelle BWA'
    },
    description: {
      en: 'For freelancers and business owners: Last two finalized tax assessments, latest business assessment (BWA), and certificate from tax advisor.',
      de: 'Für Selbstständige: Steuerbescheide der letzten 2 Jahre, betriebswirtschaftliche Auswertung (BWA) und Steuerberaterbescheinigung.'
    },
    requiredFor: ['freelance'],
    howToGet: {
      en: 'Finanzamt & your certified tax consultant (Steuerberater).',
      de: 'Zuständiges Finanzamt & Steuerberater.'
    }
  },
  {
    id: 'doc-rentenverlauf',
    category: 'income',
    title: {
      en: 'Pension Insurance Statement (DRV Versicherungsverlauf)',
      de: 'Rentenversicherungsverlauf der Deutschen Rentenversicherung'
    },
    description: {
      en: 'Complete official history of paid pension insurance contributions showing months credited.',
      de: 'Lückenlose Aufstellung aller Beitragszeiten bei der gesetzlichen Rentenversicherung.'
    },
    requiredFor: ['all'],
    howToGet: {
      en: 'Online via eservice-drv.de with eID, or via postal request from Deutsche Rentenversicherung.',
      de: 'Sofort online auf eservice-drv.de mit eID abrufen oder schriftlich bei der DRV anfordern.'
    },
    tip: {
      en: 'Use your eAT card PIN to get the PDF instantly rather than waiting weeks.',
      de: 'Mit der AusweisApp und Online-PIN sofort als PDF herunterladen.'
    }
  },
  {
    id: 'doc-housing',
    category: 'residence',
    title: {
      en: 'Rental Contract & Bank Proof of Recent Rent Payments (Mietvertrag & Mietzahlungsnachweis)',
      de: 'Mietvertrag & Nachweis der letzten Mietüberweisungen'
    },
    description: {
      en: 'Tenancy agreement showing apartment size (square meters) and current rent, plus bank statements of the last 3 months showing rent deducted. Property owners: Land register excerpt (Grundbuchauszug).',
      de: 'Mietvertrag mit Quadratmeterangabe sowie Kontoauszüge der letzten 3 Monate mit Mietabbuchung. Bei Eigentum: Grundbuchauszug & Darlehensnachweis.'
    },
    requiredFor: ['all'],
    howToGet: {
      en: 'Landlord / Online Banking statements.',
      de: 'Vermieter / Bankauszüge.'
    }
  },
  {
    id: 'doc-language-cert',
    category: 'integration',
    title: {
      en: 'German Language Certificate B1 or C1 (Telc, Goethe, TestDaF)',
      de: 'Zertifikat Deutsch B1 bzw. C1 (telc, Goethe-Institut, TestDaF)'
    },
    description: {
      en: 'Official CEFR language certificate. B1 for standard 5-year track; C1 for 3-year turbo track. German high school or university degree also accepted.',
      de: 'Anerkanntes GER-Sprachzertifikat. B1 für 5-Jahres-Weg, C1 für den 3-Jahres-Turbo. Deutsches Schulzeugnis oder Studienabschluss ebenfalls anerkannt.'
    },
    requiredFor: ['all'],
    howToGet: {
      en: 'Telc test center, Goethe-Institut, or German university diploma.',
      de: 'Telc-Prüfungszentrum, Goethe-Institut oder deutsches Zeugnis.'
    }
  },
  {
    id: 'doc-einbuergerungstest',
    category: 'integration',
    title: {
      en: 'Naturalization Test Certificate (Einbürgerungstest / Leben in Deutschland)',
      de: 'Prüfungszeugnis Einbürgerungstest / Leben in Deutschland'
    },
    description: {
      en: 'Certificate from BAMF proving at least 17 correct answers on the 33-question test.',
      de: 'Nachweis des BAMF über mindestens 17 von 33 richtigen Antworten.'
    },
    requiredFor: ['all'],
    howToGet: {
      en: 'Volkshochschule (VHS) or registered examination center.',
      de: 'Volkshochschule (VHS) oder lizenziertes Prüfzentrum.'
    }
  },
  {
    id: 'doc-marriage-cert',
    category: 'civil_status',
    title: {
      en: 'Marriage Certificate (Heiratsurkunde) with Apostille & Translation',
      de: 'Heiratsurkunde mit Apostille und beglaubigter Übersetzung'
    },
    description: {
      en: 'If married: Original civil marriage certificate. If married in Germany: Auszug aus dem Eheregister. If married abroad: Apostille/Legalisation + sworn translation.',
      de: 'Bei verheirateten Antragstellern: Heiratsurkunde oder Auszug aus dem deutschen Eheregister. Bei Auslandsehe: Apostille und deutsche Übersetzung.'
    },
    requiredFor: ['married'],
    howToGet: {
      en: 'Standesamt where marriage took place.',
      de: 'Standesamt der Eheschließung.'
    }
  },
  {
    id: 'doc-children-docs',
    category: 'civil_status',
    title: {
      en: 'Children’s Birth Certificates & School Reports (Geburtsurkunden & Schulzeugnisse)',
      de: 'Geburtsurkunden & Schulzeugnisse der Kinder'
    },
    description: {
      en: 'If co-naturalizing children: Birth certificates and current school progress reports / kindergarten attendance certificates.',
      de: 'Bei Miteinbürgerung von Kindern: Geburtsurkunden sowie aktuelle Schulzeugnisse oder Kita-Bescheinigung.'
    },
    requiredFor: ['children'],
    howToGet: {
      en: 'School / Kindergarten administration.',
      de: 'Schul- bzw. Kindergartenleitung.'
    }
  },
  {
    id: 'doc-special-integration',
    category: 'integration',
    title: {
      en: 'Proof of Special Integration (Ehrenamtsnachweis / Auszeichnungen)',
      de: 'Nachweis über ehrenamtliches Engagement oder besondere Leistungen'
    },
    description: {
      en: 'Mandatory only for the 3-Year Turbo Track: Confirmation letter from an NGO, sports club, fire department, or charity documenting at least 1 year of civic service, or academic/professional awards.',
      de: 'Nur für die 3-Jahre-Turbo-Einbürgerung: Bescheinigung über mind. 1 Jahr ehrenamtliche Tätigkeit im Verein/DRK/Feuerwehr oder Nachweis herausragender Berufsleistungen.'
    },
    requiredFor: ['all'],
    howToGet: {
      en: 'Club president, charity director, or academic department head.',
      de: 'Vereinsvorstand, gemeinnützige Trägerorganisation oder Arbeitgeber.'
    }
  }
];
