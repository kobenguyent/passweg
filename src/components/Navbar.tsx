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
        de: currentCountry === 'de' ? 'Einbürgerungstest' : currentCountry === 'us' ? 'Civics-Test' : 'Werte-Test' 
      }, 
      icon: GraduationCap 
    },
    { id: 'letters', label: { en: 'Letter Templates', de: 'Briefvorlagen' }, icon: Mail },
    ...(currentCountry === 'de' ? [{ id: 'cities', label: { en: 'Cities', de: 'Städte-Guide' }, icon: Building2 }] : []),
    { id: 'countries', label: { en: 'Dual Nationality', de: 'Doppelpass' }, icon: Sparkles },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setCurrentTab('roadmap')}
          >
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md transition-transform group-hover:scale-105"
              style={{ backgroundColor: meta.passportColor }}
            >
              <span className="text-white font-extrabold text-sm font-mono">
                {meta.flag}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-passport-800 transition-colors">
                  Pass<span className="text-passport-800">Weg</span>
                </span>
                <span className="px-2 py-0.5 text-[11px] font-semibold bg-slate-100 text-slate-800 rounded-full border border-slate-200">
                  {meta.name[language]}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden md:block">
                {meta.governingLaw}
              </p>
            </div>
          </div>

          {/* Desktop Country Switcher */}
          <div className="hidden md:flex items-center bg-slate-100 p-1 rounded-xl gap-1">
            {(['de', 'us', 'au'] as CountryCode[]).map((cCode) => {
              const c = countriesConfig[cCode];
              const isSelected = currentCountry === cCode;
              return (
                <button
                  key={cCode}
                  onClick={() => setCurrentCountry(cCode)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span>{c.flag}</span>
                  <span>{c.name[language]}</span>
                </button>
              );
            })}
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-eagleGold-400' : 'text-slate-400'}`} />
                  {item.label[language]}
                </button>
              );
            })}
          </nav>

          {/* Actions: Language Switcher & Quick CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-colors"
              title={language === 'en' ? 'Switch to German' : 'Auf Englisch umschalten'}
            >
              <Globe className="w-3.5 h-3.5 text-passport-700" />
              <span>{language === 'en' ? 'DE' : 'EN'}</span>
            </button>

            <button
              onClick={() => setCurrentTab('calculator')}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow hover:shadow-md transition-all"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-eagleGold-400" />
              <span>{language === 'en' ? 'Check Eligibility' : 'Sofort-Check'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Submenu & Country Switcher */}
        <div className="md:hidden flex items-center justify-between py-2 border-t border-slate-100 gap-2">
          {/* Mobile Country selector */}
          <div className="flex items-center bg-slate-100 p-0.5 rounded-lg gap-1">
            {(['de', 'us', 'au'] as CountryCode[]).map((cCode) => (
              <button
                key={cCode}
                onClick={() => setCurrentCountry(cCode)}
                className={`px-2 py-1 rounded text-xs font-bold ${
                  currentCountry === cCode ? 'bg-white shadow-xs' : 'text-slate-500'
                }`}
              >
                {countriesConfig[cCode].flag}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  {item.label[language]}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};
