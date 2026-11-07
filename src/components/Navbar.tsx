import React from 'react';
import { Compass, FileCheck, CheckCircle2, Lightbulb, GraduationCap, Mail, Building2, Globe, Sparkles } from 'lucide-react';
import { Language, CountryCode } from '../types';
import { countriesConfig } from '../data/countriesConfig';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  currentCountry: CountryCode;
  setCurrentCountry: (country: CountryCode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  language,
  setLanguage,
  currentCountry,
  setCurrentCountry,
}) => {
  const meta = countriesConfig[currentCountry];

  const navItems = [
    { id: 'roadmap', label: { en: 'Roadmap', de: 'Ablauf' }, icon: Compass },
    { id: 'calculator', label: { en: 'Eligibility', de: 'Voraussetzungen' }, icon: CheckCircle2 },
    { id: 'checklist', label: { en: 'Checklist', de: 'Unterlagen' }, icon: FileCheck },
    { id: 'tips', label: { en: 'Tips & Hacks', de: 'Tipps & Tricks' }, icon: Lightbulb },
    {
      id: 'quiz',
      label: {
        en: currentCountry === 'de' ? 'Einbürgerungstest' : currentCountry === 'us' ? 'Civics Test' : 'Values Test',
        de: currentCountry === 'de' ? 'Einbürgerungstest' : currentCountry === 'us' ? 'Civics-Test' : 'Werte-Test',
      },
      icon: GraduationCap,
    },
    { id: 'letters', label: { en: 'Letter Templates', de: 'Briefvorlagen' }, icon: Mail },
    ...(currentCountry === 'de' ? [{ id: 'cities', label: { en: 'Cities', de: 'Städte-Guide' }, icon: Building2 }] : []),
    { id: 'countries', label: { en: 'Dual Nationality', de: 'Doppelpass' }, icon: Sparkles },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-all">
      {/* Tier 1: Brand Identity, Destination Country Switcher & Primary Actions */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 h-14 sm:h-16">
          {/* Brand Logo & Sovereign Statute Meta */}
          <button
            type="button"
            onClick={() => setCurrentTab('roadmap')}
            className="flex items-center gap-2.5 sm:gap-3 text-left group min-w-0 shrink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-passport-700 focus-visible:ring-offset-2 rounded-xl"
          >
            <div
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shadow-sm ring-1 ring-black/10 shrink-0 transition-transform duration-200 ease-out group-hover:scale-105 group-active:scale-95"
              style={{ backgroundColor: meta.passportColor }}
            >
              <span className="text-white font-extrabold text-sm sm:text-base font-mono leading-none">
                {meta.flag}
              </span>
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-passport-800 transition-colors whitespace-nowrap">
                  Pass<span className="text-passport-800">Weg</span>
                </span>
                <span
                  className="hidden lg:inline-flex items-center px-2 py-0.5 text-[11px] font-semibold bg-slate-100 text-slate-700 rounded-md border border-slate-200/80 whitespace-nowrap shrink-0"
                  title={meta.badge[language]}
                >
                  {meta.badge[language]}
                </span>
              </div>
              <p
                className="text-[11px] font-mono text-slate-500 hidden sm:block truncate max-w-[180px] md:max-w-[240px] xl:max-w-[320px]"
                title={meta.governingLaw}
              >
                {meta.governingLaw}
              </p>
            </div>
          </button>

          {/* Center: Segmented Country Switcher (Concentric Radii: outer rounded-xl p-1 -> inner rounded-lg) */}
          <div
            role="group"
            aria-label={language === 'en' ? 'Select destination country' : 'Zielland auswählen'}
            className="flex items-center bg-slate-100/90 border border-slate-200/70 p-1 rounded-xl gap-1 shrink-0"
          >
            {(['de', 'us', 'au'] as CountryCode[]).map((cCode) => {
              const c = countriesConfig[cCode];
              const isSelected = currentCountry === cCode;
              return (
                <button
                  key={cCode}
                  type="button"
                  onClick={() => setCurrentCountry(cCode)}
                  aria-pressed={isSelected}
                  title={c.name[language]}
                  className={`inline-flex items-center justify-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap shrink-0 transition-all duration-150 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-passport-700 ${
                    isSelected
                      ? 'bg-white text-slate-900 shadow-xs ring-1 ring-slate-200/90'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <span className="text-sm leading-none">{c.flag}</span>
                  <span className="hidden md:inline">{c.name[language]}</span>
                  <span className="md:hidden uppercase font-mono text-[11px]">{cCode}</span>
                </button>
              );
            })}
          </div>

          {/* Right: Language Toggle & Quick Eligibility CTA */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
              className="inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl border border-slate-200/90 hover:border-slate-300 bg-slate-50/90 hover:bg-slate-100 text-xs font-bold text-slate-700 whitespace-nowrap shrink-0 transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-passport-700"
              title={language === 'en' ? 'Switch to German' : 'Auf Englisch umschalten'}
            >
              <Globe className="w-3.5 h-3.5 text-passport-700 shrink-0" />
              <span className="font-mono">{language === 'en' ? 'DE' : 'EN'}</span>
            </button>

            <button
              type="button"
              onClick={() => setCurrentTab('calculator')}
              className={`hidden sm:inline-flex items-center justify-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-passport-700 focus-visible:ring-offset-1 ${
                currentTab === 'calculator'
                  ? 'bg-passport-800 text-white shadow-xs ring-1 ring-passport-900/20'
                  : 'bg-slate-900 hover:bg-slate-800 text-white shadow-xs hover:shadow-md'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-eagleGold-400 shrink-0" />
              <span>{language === 'en' ? 'Check Eligibility' : 'Sofort-Check'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tier 2: Balanced Multi-Resolution Navigation Rail (Zero Dead Zones across 320px -> 4K) */}
      <div className="border-t border-slate-200/60 bg-slate-50/75">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <nav
            aria-label={language === 'en' ? 'Primary toolkit navigation' : 'Hauptnavigation'}
            className="flex items-center justify-start lg:justify-between gap-1 sm:gap-1.5 py-1.5 overflow-x-auto no-scrollbar scroll-smooth"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCurrentTab(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 lg:flex-1 transition-all duration-150 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-passport-700 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 shrink-0 transition-colors ${
                      isActive ? 'text-eagleGold-400' : 'text-slate-400 group-hover:text-slate-600'
                    }`}
                  />
                  <span>{item.label[language]}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};
