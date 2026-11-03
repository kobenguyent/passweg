import { QuizQuestion } from '../types';

export const quizData: QuizQuestion[] = [
  {
    id: 1,
    category: 'law_constitution',
    question: {
      en: 'What is the first sentence of Article 1 of the German Basic Law (Grundgesetz)?',
      de: 'Wie lautet der erste Satz von Artikel 1 des deutschen Grundgesetzes?'
    },
    options: [
      {
        en: 'Human dignity shall be inviolable.',
        de: 'Die Würde des Menschen ist unantastbar.'
      },
      {
        en: 'All state authority is derived from the people.',
        de: 'Alle Staatsgewalt geht vom Volke aus.'
      },
      {
        en: 'Men and women shall have equal rights.',
        de: 'Männer und Frauen sind gleichberechtigt.'
      },
      {
        en: 'Germany is a democratic and social federal state.',
        de: 'Die Bundesrepublik Deutschland ist ein demokratischer und sozialer Bundesstaat.'
      }
    ],
    correctIndex: 0,
    explanation: {
      en: 'Article 1 Paragraph 1 of the Basic Law states: "Die Würde des Menschen ist unantastbar." It is the highest foundational value of the German legal order and cannot be modified even by constitutional amendment.',
      de: 'Artikel 1 Absatz 1 GG stellt die Menschenwürde als obersten Grundwert über alles staatliche Handeln. Dieser Grundsatz ist durch die sogenannte Ewigkeitsklausel (Art. 79 Abs. 3 GG) unabänderlich.'
    }
  },
  {
    id: 2,
    category: 'israel_jewish_life',
    is2024New: true,
    question: {
      en: 'Why does Germany bear a special historical responsibility toward the protection of Jewish life and the State of Israel?',
      de: 'Warum trägt Deutschland eine besondere historische Verantwortung für den Schutz jüdischen Lebens und den Staat Israel?'
    },
    options: [
      {
        en: 'Because Germany was founded by the United Nations in 1948.',
        de: 'Weil Deutschland 1948 durch die Vereinten Nationen gegründet wurde.'
      },
      {
        en: 'Because of the Holocaust (Shoah) perpetrated by the National Socialist regime against 6 million Jews.',
        de: 'Wegen des durch das nationalsozialistische Regime begangenen Völkermords an sechs Millionen europäischen Jüdinnen und Juden (Shoah).'
      },
      {
        en: 'Due to international trade agreements formed during the 19th century.',
        de: 'Aufgrund von Handelsverträgen aus dem 19. Jahrhundert.'
      },
      {
        en: 'Because of a mandatory clause in the Treaty of Versailles.',
        de: 'Wegen einer Vorgabe im Versailler Vertrag.'
      }
    ],
    correctIndex: 1,
    explanation: {
      en: 'The crimes against humanity committed by Nazi Germany during the Holocaust constitute the foundational reason why Germany acknowledges an enduring responsibility for the security of Israel and the flourishing of Jewish life.',
      de: 'Die NS-Verbrechen und die Shoah begründen Deutschlands historische Verpflichtung gegen jeden Antisemitismus und für das Existenzrecht des Staates Israel.'
    }
  },
  {
    id: 3,
    category: 'law_constitution',
    question: {
      en: 'How many federal states (Bundesländer) does the Federal Republic of Germany consist of?',
      de: 'Aus wie vielen Bundesländern besteht die Bundesrepublik Deutschland?'
    },
    options: [
      { en: '14', de: '14' },
      { en: '16', de: '16' },
      { en: '18', de: '18' },
      { en: '12', de: '12' }
    ],
    correctIndex: 1,
    explanation: {
      en: 'Germany has 16 federal states (Bundesländer), including three city-states: Berlin, Hamburg, and Bremen.',
      de: 'Deutschland besteht aus 16 Bundesländern, davon 3 Stadtstaaten: Berlin, Hamburg und Bremen.'
    }
  },
  {
    id: 4,
    category: 'israel_jewish_life',
    is2024New: true,
    question: {
      en: 'What is the name of the Jewish place of worship and assembly?',
      de: 'Wie heißt das jüdische Gotteshaus bzw. Versammlungsgebäude?'
    },
    options: [
      { en: 'Synagogue', de: 'Synagoge' },
      { en: 'Cathedral', de: 'Kathedrale' },
      { en: 'Pagoda', de: 'Pagode' },
      { en: 'Mosque', de: 'Moschee' }
    ],
    correctIndex: 0,
    explanation: {
      en: 'A synagogue (Synagoge) is the place of prayer, communal gathering, and study for Jewish communities.',
      de: 'Die Synagoge ist der zentrale Versammlungs- und Gebetsort der jüdischen Gemeinde.'
    }
  },
  {
    id: 5,
    category: 'law_constitution',
    question: {
      en: 'What does the principle of "separation of powers" (Gewaltenteilung) mean in Germany?',
      de: 'Was bedeutet das Prinzip der „Gewaltenteilung“ in Deutschland?'
    },
    options: [
      {
        en: 'The state power is divided into legislative, executive, and judicial branches.',
        de: 'Die Staatsgewalt ist aufgeteilt in Legislative (Gesetzgebung), Exekutive (Verwaltung/Polizei) und Judikative (Rechtsprechung).'
      },
      {
        en: 'The military controls both the police and courts.',
        de: 'Das Militär kontrolliert sowohl die Polizei als auch die Gerichte.'
      },
      {
        en: 'The Chancellor can overrule any court decision.',
        de: 'Der Bundeskanzler kann jedes Gerichtsurteil aufheben.'
      },
      {
        en: 'Political parties run the civil courts.',
        de: 'Politische Parteien leiten die Gerichte.'
      }
    ],
    correctIndex: 0,
    explanation: {
      en: 'The three independent powers are: Legislative (Parliament / Bundestag & Bundesrat), Executive (Government & administration), and Judicial (independent courts).',
      de: 'Die Aufteilung verhindert Machtmissbrauch und sichert die Rechtsstaatlichkeit (Art. 20 Abs. 2 GG).'
    }
  },
  {
    id: 6,
    category: 'history_responsibility',
    question: {
      en: 'When was the Berlin Wall brought down, leading to the reunification of Germany?',
      de: 'In welchem Jahr fiel die Berliner Mauer, was zur Wiedervereinigung Deutschlands führte?'
    },
    options: [
      { en: '1989', de: '1989' },
      { en: '1995', de: '1995' },
      { en: '1961', de: '1961' },
      { en: '1949', de: '1949' }
    ],
    correctIndex: 0,
    explanation: {
      en: 'The Berlin Wall fell on November 9, 1989. Official German reunification took place on October 3, 1990 (Tag der Deutschen Einheit).',
      de: 'Der Fall der Mauer am 9. November 1989 ebnete den Weg zur Wiedervereinigung am 3. Oktober 1990.'
    }
  },
  {
    id: 7,
    category: 'israel_jewish_life',
    is2024New: true,
    question: {
      en: 'Under German criminal law, which of the following acts is strictly prohibited and subject to prosecution (§ 130 StGB)?',
      de: 'Welche der folgenden Handlungen ist nach dem deutschen Strafgesetzbuch (§ 130 StGB, Volksverhetzung) verboten und strafbar?'
    },
    options: [
      {
        en: 'Publicly denying, approving, or trivializing the National Socialist genocide (Holocaust).',
        de: 'Das öffentliche Leugnen, Billigen oder Verharmlosen des nationalsozialistischen Völkermords (Holocaust).'
      },
      {
        en: 'Critiquing a government economic tax policy in a newspaper.',
        de: 'Kritik an der Steuerpolitik der Regierung in der Zeitung.'
      },
      {
        en: 'Voting for an opposition party in federal elections.',
        de: 'Die Stimmabgabe für eine Oppositionspartei bei der Bundestagswahl.'
      },
      {
        en: 'Demonstrating peacefully against rent prices.',
        de: 'Friedliche Teilnahme an einer Mietpreis-Demonstration.'
      }
    ],
    correctIndex: 0,
    explanation: {
      en: 'Holocaust denial is a criminal offense under § 130 of the German Criminal Code (Volksverhetzung). The protection of historical truth and victims is firmly enshrined in law.',
      de: 'Die Holocaustleugnung fällt unter den Straftatbestand der Volksverhetzung (§ 130 Abs. 3 StGB) und zieht Geld- oder Freiheitsstrafen nach sich.'
    }
  },
  {
    id: 8,
    category: 'law_constitution',
    question: {
      en: 'Who elects the Chancellor of the Federal Republic of Germany (Bundeskanzler)?',
      de: 'Wer wählt den Bundeskanzler oder die Bundeskanzlerin der Bundesrepublik Deutschland?'
    },
    options: [
      {
        en: 'The Members of the German Bundestag (Federal Parliament).',
        de: 'Die Abgeordneten des Deutschen Bundestages.'
      },
      {
        en: 'All citizens directly via national popular vote.',
        de: 'Alle wahlberechtigten Bürger direkt per Volksentscheid.'
      },
      {
        en: 'The Federal Constitutional Court judges.',
        de: 'Die Richter des Bundesverfassungsgerichts.'
      },
      {
        en: 'The European Parliament in Brussels.',
        de: 'Das Europäische Parlament in Brüssel.'
      }
    ],
    correctIndex: 0,
    explanation: {
      en: 'Under Article 63 of the Basic Law, the Federal Chancellor is elected by the Bundestag upon proposal of the Federal President.',
      de: 'Der Bundeskanzler wird gemäß Art. 63 GG auf Vorschlag des Bundespräsidenten ohne Aussprache vom Bundestag gewählt.'
    }
  },
  {
    id: 9,
    category: 'daily_life',
    question: {
      en: 'What right is guaranteed by Article 3 of the German Basic Law?',
      de: 'Welches Recht garantiert Artikel 3 des deutschen Grundgesetzes?'
    },
    options: [
      {
        en: 'All persons are equal before the law, regardless of sex, race, origin, faith, or disability.',
        de: 'Alle Menschen sind vor dem Gesetz gleich; niemand darf wegen seines Geschlechtes, seiner Abstammung, Rasse, Sprache, Heimat und Herkunft, seines Glaubens oder einer Behinderung benachteiligt oder bevorzugt werden.'
      },
      {
        en: 'Every resident receives a free public transit ticket.',
        de: 'Jeder Einwohner erhält ein kostenloses Nahverkehrsticket.'
      },
      {
        en: 'Citizens must vote in every election.',
        de: 'Wahlpflicht für alle Bundesbürger.'
      },
      {
        en: 'Private property cannot be taxed.',
        de: 'Privateigentum darf nicht besteuert werden.'
      }
    ],
    correctIndex: 0,
    explanation: {
      en: 'Article 3 guarantees equality before the law and prohibits discrimination based on gender, parentage, race, language, homeland, origin, faith, or disability.',
      de: 'Artikel 3 GG verankert den Gleichheitssatz und das Verbot jeder Diskriminierung.'
    }
  },
  {
    id: 10,
    category: 'daily_life',
    question: {
      en: 'How many questions does the official naturalization test (Einbürgerungstest) have, and how many must you answer correctly to pass?',
      de: 'Wie viele Fragen umfasst der offizielle Einbürgerungstest und wie viele müssen mindestens richtig beantwortet werden?'
    },
    options: [
      {
        en: '33 questions in total, minimum 17 correct to pass.',
        de: '33 Fragen insgesamt, mindestens 17 müssen richtig beantwortet werden.'
      },
      {
        en: '50 questions in total, minimum 40 correct to pass.',
        de: '50 Fragen insgesamt, mindestens 40 müssen richtig sein.'
      },
      {
        en: '20 questions in total, all 20 must be correct.',
        de: '20 Fragen, alle 20 müssen fehlerfrei sein.'
      },
      {
        en: '100 oral questions asked by a committee.',
        de: '100 mündliche Fragen vor einer Prüfungskommission.'
      }
    ],
    correctIndex: 0,
    explanation: {
      en: 'The test consists of 33 multiple-choice questions (30 federal questions and 3 questions specific to your federal state). You have 60 minutes and need only 17 correct answers (just over 50%) to pass!',
      de: 'Der Test umfasst 33 Fragen (30 bundesweite, 3 landesspezifische). 17 richtige Antworten (ca. 51,5 %) genügen zum Bestehen.'
    }
  }
];
