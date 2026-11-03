import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Clock, Globe2, Award } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  language: Language;
  onStartCalculator: () => void;
  onExploreRoadmap: () => void;
  onOpenChecklist: () => void;
  onOpenCountries?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onStartCalculator,
  onExploreRoadmap,
  onOpenChecklist,
  onOpenCountries,
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-passport-950 via-passport-900 to-slate-900 text-white pt-12 pb-16 sm:pt-16 sm:pb-24">
      {/* Decorative background glow & subtle grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-passport-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-eagleGold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Reform Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-eagleGold-400/30 text-eagleGold-300 text-xs font-semibold mb-6 shadow-inner animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-eagleGold-400" />
            <span>
              {language === 'en'
                ? 'Modernized StAG 2024 Law in Effect • Dual Citizenship Allowed'
                : 'Reformiertes StAG 2024 • Mehrstaatigkeit ausnahmslos erlaubt'}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {language === 'en' ? (
              <>
                Your Clear Path to the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-eagleGold-300 via-eagleGold-400 to-amber-200">
                  German Passport
                </span>
              </>
            ) : (
              <>
                Dein sicherer Weg zum <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-eagleGold-300 via-eagleGold-400 to-amber-200">
                  deutschen Pass
                </span>
              </>
            )}
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            {language === 'en'
              ? 'Tackle German naturalization with confidence. Interactive eligibility checks, document trackers, BAMF quiz preparation, and insider tactics to cut through bureaucratic wait times.'
              : 'Schluss mit Behördenchaos. Interaktiver Voraussetzungen-Check, Dokumenten-Tracker, BAMF-Prüfungstrainer und Insider-Strategien gegen monatelange Verzögerungen.'}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onStartCalculator}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-eagleGold-500 to-amber-500 hover:from-eagleGold-400 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-eagleGold-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>{language === 'en' ? 'Check My Eligibility (2 Min)' : 'Voraussetzungen berechnen (2 Min)'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreRoadmap}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{language === 'en' ? 'View 7-Step Roadmap' : '7-Stufen Fahrplan ansehen'}</span>
            </button>

            <button
              onClick={onOpenChecklist}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-passport-800/80 hover:bg-passport-800 text-white font-semibold text-sm border border-passport-700 transition-all hover:scale-[1.02] active:scale-[0.98]"
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
                <span>🇺🇸 🇦🇺</span>
                <span className="font-medium">
                  {language === 'en'
                    ? 'American or Australian Citizen? View Dual Citizenship & Tax Rules →'
                    : 'US- oder australischer Staatsbürger? Zum Doppelpass- & Steuer-Guide →'}
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
            <Clock className="w-6 h-6 text-eagleGold-400 mx-auto mb-2" />
            <div className="text-2xl font-extrabold text-white">5 Years</div>
            <div className="text-xs text-slate-300 mt-1">
              {language === 'en' ? 'Standard residency (down from 8)' : 'Regelaufenthalt (früher 8 Jahre)'}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
            <Award className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
            <div className="text-2xl font-extrabold text-white">3 Years</div>
            <div className="text-xs text-slate-300 mt-1">
              {language === 'en' ? 'Turbo track (C1 + volunteer achievements)' : 'Turbo-Weg (C1 + Ehrenamt)'}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
            <Globe2 className="w-6 h-6 text-sky-400 mx-auto mb-2" />
            <div className="text-2xl font-extrabold text-white">100%</div>
            <div className="text-xs text-slate-300 mt-1">
              {language === 'en' ? 'Dual citizenship unconditionally allowed' : 'Mehrstaatigkeit generell hingenommen'}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
            <ShieldCheck className="w-6 h-6 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-extrabold text-white">17 / 33</div>
            <div className="text-xs text-slate-300 mt-1">
              {language === 'en' ? 'Points to pass Einbürgerungstest' : 'Punkte zum Bestehen des BAMF-Tests'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
