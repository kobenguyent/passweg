import React, { useState } from 'react';
import { HelpCircle, ChevronDown, BookOpen } from 'lucide-react';
import { Language } from '../types';

interface FaqSectionProps {
  language: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ language }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: {
        en: 'Can I keep my current citizenship when becoming German?',
        de: 'Kann ich meine bisherige Staatsangehörigkeit bei der Einbürgerung behalten?'
      },
      a: {
        en: 'YES, 100%! Since the modernized Citizenship Act took effect on June 27, 2024, dual citizenship (Mehrstaatigkeit) is universally permitted in Germany. You do not need to renounce your birth nationality, regardless of whether you are an EU or non-EU citizen. However, check whether your home country’s laws permit holding dual citizenship.',
        de: 'JA, uneingeschränkt! Seit dem 27. Juni 2024 lässt Deutschland die Mehrstaatigkeit generell zu. Sie müssen Ihre bisherige Staatsangehörigkeit nicht mehr aufgeben – weder als EU-Bürger noch als Drittstaatsangehöriger. Prüfen Sie lediglich, ob das Recht Ihres Herkunftslandes den doppelten Pass erlaubt.'
      }
    },
    {
      q: {
        en: 'Do years spent in Germany on a student visa (§ 16b AufenthG) count?',
        de: 'Zählen Studienzeiten mit einem Studentenvisum (§ 16b AufenthG) mit?'
      },
      a: {
        en: 'YES! All continuous, lawful years of residence count toward the 3-year or 5-year requirement, including time spent on a student visa. However, you CANNOT naturalize while actively on a student visa. You must first graduate and switch to a skilled worker visa (§ 18a/b), EU Blue Card (§ 18g), or permanent settlement permit before filing.',
        de: 'JA! Alle Zeiten des rechtmäßigen gewöhnlichen Aufenthalts zählen mit, auch Studienzeiten. Wichtig ist jedoch: Sie können nicht direkt aus dem Studentenstatus (§ 16b) heraus eingebürgert werden. Vor der Antragstellung müssen Sie in einen Fachkraft-Titel (§ 18b), die Blaue Karte EU oder eine Niederlassungserlaubnis wechseln.'
      }
    },
    {
      q: {
        en: 'What happened to the "Einbürgerungszusicherung"?',
        de: 'Was ist mit der früheren „Einbürgerungszusicherung“ passiert?'
      },
      a: {
        en: 'It is practically obsolete! Under the old law, authorities issued an Einbürgerungszusicherung (assurance letter) giving you 2 years to renounce your previous citizenship before receiving German papers. Because dual citizenship is now allowed, you directly receive the Einbürgerungsurkunde (Citizenship Certificate) upon final approval.',
        de: 'Sie ist im Regelfall obsolet! Früher diente die Einbürgerungszusicherung als Nachweis, um das Entlassungsverfahren aus der bisherigen Staatsbürgerschaft einzuleiten. Da die Aufgabe entfällt, erhalten Antragsteller direkt die Einbürgerungsurkunde.'
      }
    },
    {
      q: {
        en: 'Can I travel abroad during the application process? How long?',
        de: 'Darf ich während des Verfahrens ins Ausland reisen? Wie lange?'
      },
      a: {
        en: 'Vacations and temporary trips up to 6 months abroad do not interrupt your lawful German residency under § 12b StAG. If you plan to leave Germany for more than 6 months, you must request prior written permission from your Ausländerbehörde, otherwise your continuous residency clock resets to zero!',
        de: 'Urlaubs- und Geschäftsreisen bis zu 6 Monaten unterbrechen den rechtmäßigen Aufenthalt nach § 12b StAG nicht. Wer länger als 6 Monate am Stück im Ausland bleiben will, benötigt vorab die schriftliche Zustimmung der Ausländerbehörde, sonst verfällt der bisherige Aufenthalt!'
      }
    },
    {
      q: {
        en: 'Can my spouse and children be naturalized together with me?',
        de: 'Können Ehepartner und Kinder gemeinsam mit mir eingebürgert werden?'
      },
      a: {
        en: 'YES! Under § 10 Abs. 2 StAG, family members can be co-naturalized (Miteinbürgerung) even if they haven’t resided in Germany for the full 5 years. Spouses generally need 3 or 4 years, and minor children need 3 years (or can be naturalized from birth if qualifying). The fee for minor co-naturalized children is reduced to €51.',
        de: 'JA! Nach § 10 Abs. 2 StAG können Ehegatten und minderjährige Kinder miteingebürgert werden, auch wenn sie selbst noch keine 5 Jahre in Deutschland leben. Für minderjährige Kinder beträgt die Gebühr lediglich 51 € statt 255 €.'
      }
    }
  ];

  const glossary = [
    { term: 'StAG', desc: { en: 'Staatsangehörigkeitsgesetz (German Nationality Act - federal law governing citizenship).', de: 'Staatsangehörigkeitsgesetz (Bundesgesetz über die Staatsangehörigkeit).' } },
    { term: 'FDGO', desc: { en: 'Freiheitliche demokratische Grundordnung (Free Democratic Basic Order - core constitutional values of Germany).', de: 'Freiheitliche demokratische Grundordnung des Grundgesetzes.' } },
    { term: 'Urkunde', desc: { en: 'Einbürgerungsurkunde: The physical signed certificate that confers German citizenship.', de: 'Die amtliche Verleihungsurkunde, deren Aushändigung die Einbürgerung wirksam macht.' } },
    { term: 'Tagessatz', desc: { en: 'Daily fine unit in German criminal law. Convictions over 90 daily fines generally prevent citizenship (§ 12a StAG).', de: 'Tagessätze bei Geldstrafen. Verurteilungen über 90 Tagessätze schließen die Einbürgerung i.d.R. aus.' } },
    { term: '§ 75 VwGO', desc: { en: 'Untätigkeitsklage: Lawsuit for failure to act when an administrative authority stalls for >3 months without valid cause.', de: 'Untätigkeitsklage bei unbegründeter Verzögerung durch die Behörde.' } }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FAQ Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-passport-800" />
            <span>{language === 'en' ? 'Frequently Asked Questions' : 'Häufig gestellte Fragen'}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {language === 'en' ? 'Everything Candidates Ask' : 'Wichtige Antworten & Rechtsfragen'}
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3 mb-12">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 bg-white hover:bg-slate-50 transition"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.q[language]}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a[language]}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Glossary */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-2 mb-4 text-slate-900 font-bold text-sm">
            <BookOpen className="w-4 h-4 text-passport-800" />
            <span>{language === 'en' ? 'Official Bureaucracy Glossary' : 'Behörden-Glossar (Fachbegriffe)'}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {glossary.map((item, idx) => (
              <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                <span className="font-mono font-bold text-passport-800 block mb-0.5">{item.term}</span>
                <span className="text-slate-600 leading-relaxed">{item.desc[language]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
