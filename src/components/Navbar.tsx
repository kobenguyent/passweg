import React from 'react';
import { Compass, FileCheck, CheckCircle2, Lightbulb, GraduationCap, Mail, Building2, Globe, Globe2 } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  language,
  setLanguage,
}) => {
  const navItems = [
    { id: 'roadmap', label: { en: 'Roadmap', de: 'Ablauf' }, icon: Compass },
    { id: 'calculator', label: { en: 'Eligibility', de: 'Voraussetzungen' }, icon: CheckCircle2 },
    { id: 'countries', label: { en: 'US & Australia', de: 'USA & Australien' }, icon: Globe2 },
    { id: 'checklist', label: { en: 'Checklist', de: 'Unterlagen' }, icon: FileCheck },
    { id: 'tips', label: { en: 'Tips & Hacks', de: 'Tipps & Tricks' }, icon: Lightbulb },
    { id: 'quiz', label: { en: 'Practice Quiz', de: 'Einbürgerungstest' }, icon: GraduationCap },
    { id: 'letters', label: { en: 'Letter Templates', de: 'Briefvorlagen' }, icon: Mail },
    { id: 'cities', label: { en: 'Cities', de: 'Städte-Guide' }, icon: Building2 },
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
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-passport-800 to-passport-950 flex items-center justify-center shadow-md shadow-passport-900/20 group-hover:scale-105 transition-transform">
              <span className="text-eagleGold-400 font-extrabold text-xl font-mono">PW</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-passport-800 transition-colors">
                  Pass<span className="text-passport-800">Weg</span>
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-semibold bg-emerald-100 text-emerald-800 rounded-full border border-emerald-200">
                  StAG 2024
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden md:block">
                {language === 'en' ? 'The Modern German Citizenship Guide' : 'Der smarte Wegweiser zum deutschen Pass'}
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-passport-800 text-white shadow-sm'
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
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-passport-800 to-passport-900 text-white text-xs font-semibold shadow hover:shadow-md hover:brightness-110 transition-all border border-passport-700"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-eagleGold-400" />
              <span>{language === 'en' ? 'Check Eligibility' : 'Sofort-Check'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Submenu Bar */}
        <div className="lg:hidden flex items-center gap-1 overflow-x-auto py-2 border-t border-slate-100 no-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentTab(item.id)}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-passport-800 text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-eagleGold-400' : 'text-slate-400'}`} />
                {item.label[language]}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
