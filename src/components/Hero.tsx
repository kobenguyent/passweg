import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Clock, Globe2, Award } from 'lucide-react';
import { Language, CountryCode } from '../types';
import { countriesConfig } from '../data/countriesConfig';

interface HeroProps {
  language: Language;
  currentCountry: CountryCode;
  setCurrentCountry: (country: CountryCode) => void;
  onStartCalculator: () => void;
  onExploreRoadmap: () => void;
  onOpenChecklist: () => void;
  onOpenCountries?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  currentCountry,
  setCurrentCountry,
  onStartCalculator,
  onExploreRoadmap,
  onOpenChecklist,
  onOpenCountries,
}) => {
  const meta = countriesConfig[currentCountry];

  const getStats = () => {
    switch (currentCountry) {
      case 'us':
        return [
          { icon: Clock, value: '5 Years', label: language === 'en' ? 'LPR (or 3y married to citizen)' : 'Green Card (3 Jahre bei Ehe)' },
          { icon: Award, value: '30 Months', label: language === 'en' ? 'Physical presence required' : 'Physische US-Anwesenheit' },
          { icon: Sparkles, value: '90 Days', label: language === 'en' ? 'Early filing before anniversary' : 'Frühantragsfenster' },
          { icon: ShieldCheck, value: '6 / 10', label: language === 'en' ? 'USCIS Civics pass score' : 'Punkte zum Civics-Bestehen' },
        ];
      case 'au':
        return [
          { icon: Clock, value: '4 Years', label: language === 'en' ? 'Lawful residence in Australia' : 'Voraufenthalt in Australien' },
          { icon: Award, value: '12 Months', label: language === 'en' ? 'As Permanent Resident (PR)' : 'Als Permanent Resident' },
          { icon: Globe2, value: '≤ 90 Days', label: language === 'en' ? 'Max absences in past year' : 'Max. Abwesenheit im letzten Jahr' },
          { icon: ShieldCheck, value: '75% + 100%', label: language === 'en' ? 'Pass mark + 5/5 Values questions' : 'Gesamtnote + 5/5 Wertefragen' },
        ];
      case 'de':
      default:
        return [
          { icon: Clock, value: '5 Years', label: language === 'en' ? 'Standard residency (down from 8)' : 'Regelaufenthalt (früher 8 Jahre)' },
          { icon: Award, value: '3 Years', label: language === 'en' ? 'Turbo track (C1 + volunteer work)' : 'Turbo-Weg (C1 + Ehrenamt)' },
          { icon: Globe2, value: '100%', label: language === 'en' ? 'Dual citizenship allowed' : 'Mehrstaatigkeit garantiert' },
          { icon: ShieldCheck, value: '17 / 33', label: language === 'en' ? 'Points to pass BAMF exam' : 'Punkte zum Einbürgerungstest' },
        ];
    }
  };

  const stats = getStats();

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-10 pb-16 sm:pt-14 sm:pb-20">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-passport-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Country Selector Pills */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 gap-2 mb-6 shadow-inner">
            <span className="text-xs font-semibold text-slate-300 px-2 hidden sm:inline">
              {language === 'en' ? 'Select Destination:' : 'Ziel-Staatsbürgerschaft:'}
            </span>
            {(['de', 'us', 'au'] as CountryCode[]).map((cCode) => {
              const c = countriesConfig[cCode];
              const isSelected = currentCountry === cCode;
              return (
                <button
                  key={cCode}
                  onClick={() => setCurrentCountry(cCode)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-white text-slate-900 shadow-md scale-105'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-base">{c.flag}</span>
                  <span>{c.name[language]}</span>
                </button>
              );
            })}
          </div>

          {/* Governing law and authority badge */}
          <div className="flex justify-center mb-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-eagleGold-500/10 border border-eagleGold-400/30 text-eagleGold-300 text-xs font-semibold backdrop-blur-sm">
              <span>{meta.flag}</span>
              <span>{meta.governingLaw}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">{meta.applicationAuthority}</span>
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {language === 'en' ? (
              <>
                Your Clear Path to the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-eagleGold-400 to-yellow-200">
                  {currentCountry === 'de' ? 'German Passport' : currentCountry === 'us' ? 'U.S. Passport' : 'Australian Passport'}
                </span>
              </>
            ) : (
              <>
                Dein sicherer Weg zum <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-eagleGold-400 to-yellow-200">
                  {currentCountry === 'de' ? 'deutschen Pass' : currentCountry === 'us' ? 'US-Reisepass' : 'australischen Pass'}
                </span>
              </>
            )}
          </h1>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            {currentCountry === 'de' && (
              language === 'en'
                ? 'Master the German naturalization process under the 2024 reform. Interactive eligibility checks, document trackers, BAMF quiz preparation, and insider tactics to cut through wait times.'
                : 'Schluss mit Behördenchaos: Interaktiver Voraussetzungen-Check, Dokumenten-Tracker, BAMF-Prüfungstrainer und Insider-Strategien für den deutschen Pass.'
            )}
            {currentCountry === 'us' && (
              language === 'en'
                ? 'Everything you need to naturalize in the United States via Form N-400. Master the 5-year/3-year rules, 90-day early filing window, 100 civics questions, and interview preparation.'
                : 'Der vollständige Leitfaden zur US-Einbürgerung (Form N-400). Voraussetzungen, 90-Tage-Frühantrag, 100 Civics-Fragen und Vorbereitung auf das USCIS-Interview.'
            )}
            {currentCountry === 'au' && (
              language === 'en'
                ? 'Your definitive guide to Australian Citizenship by Conferral (Form 1300t). 4-year general residence calculations, identity endorsements (Form 1195), and the 100% Values test simulator.'
                : 'Ihr Leitfaden zur australischen Staatsbürgerschaft (Conferral). 4-Jahres-Wohnsitzberechnung, Formular 1195 und Vorbereitung auf den 20-Fragen-Wertetests.'
            )}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onStartCalculator}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-eagleGold-500 to-amber-500 hover:from-eagleGold-400 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-eagleGold-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>{language === 'en' ? 'Check Eligibility' : 'Voraussetzungen berechnen'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreRoadmap}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{language === 'en' ? 'View Roadmap' : 'Fahrplan ansehen'}</span>
            </button>

            <button
              onClick={onOpenChecklist}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{language === 'en' ? 'Document Checklist' : 'Unterlagen-Checkliste'}</span>
            </button>
          </div>

          {onOpenCountries && (
            <div className="mt-5">
              <button
                onClick={onOpenCountries}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-xs text-slate-300 hover:text-white border border-white/10 transition-all"
              >
                <span>🌐 🇩🇪 🇺🇸 🇦🇺</span>
                <span className="font-medium">
                  {language === 'en'
                    ? 'Dual Nationality & Cross-Border Rules (Germany, US, Australia) →'
                    : 'Doppelpass-Regeln zwischen Deutschland, USA und Australien ansehen →'}
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                <Icon className="w-6 h-6 text-eagleGold-400 mx-auto mb-2" />
                <div className="text-2xl font-extrabold text-white">{item.value}</div>
                <div className="text-xs text-slate-300 mt-1">{item.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
