import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EligibilityCalculator } from './components/EligibilityCalculator';
import { ProcessRoadmap } from './components/ProcessRoadmap';
import { DocumentChecklist } from './components/DocumentChecklist';
import { TipsAndTricks } from './components/TipsAndTricks';
import { NaturalizationQuiz } from './components/NaturalizationQuiz';
import { LetterGenerator } from './components/LetterGenerator';
import { CityDirectory } from './components/CityDirectory';
import { CountryGuides } from './components/CountryGuides';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { Language, CountryCode } from './types';

export const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [currentCountry, setCurrentCountry] = useState<CountryCode>('de');
  const [currentTab, setCurrentTab] = useState<string>('roadmap');

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const savedLang = window.localStorage.getItem('passweg_lang');
        if (savedLang === 'de' || savedLang === 'en') {
          setLanguage(savedLang);
        }
        const savedCountry = window.localStorage.getItem('passweg_country') as CountryCode;
        if (savedCountry === 'de' || savedCountry === 'us' || savedCountry === 'au') {
          setCurrentCountry(savedCountry);
        }
      }
    } catch {
      // fallback
    }
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem('passweg_lang', lang);
      }
    } catch {
      // fallback
    }
  };

  const handleCountryChange = (country: CountryCode) => {
    setCurrentCountry(country);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem('passweg_country', country);
      }
    } catch {
      // fallback
    }
  };

  const handleSelectTabAndScroll = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-passport-200 selection:text-passport-900">
      {/* Top Navigation */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        language={language}
        setLanguage={handleLanguageChange}
        currentCountry={currentCountry}
        setCurrentCountry={handleCountryChange}
      />

      {/* Hero Section */}
      <Hero
        language={language}
        currentCountry={currentCountry}
        setCurrentCountry={handleCountryChange}
        onStartCalculator={() => handleSelectTabAndScroll('calculator')}
        onExploreRoadmap={() => handleSelectTabAndScroll('roadmap')}
        onOpenChecklist={() => handleSelectTabAndScroll('checklist')}
        onOpenCountries={() => handleSelectTabAndScroll('countries')}
      />

      {/* Main Content Body based on tab */}
      <main className="flex-1">
        {currentTab === 'roadmap' && (
          <ProcessRoadmap language={language} currentCountry={currentCountry} />
        )}
        {currentTab === 'calculator' && (
          <EligibilityCalculator
            language={language}
            currentCountry={currentCountry}
            setCurrentCountry={handleCountryChange}
            onNavigateToChecklist={() => handleSelectTabAndScroll('checklist')}
            onNavigateToLetters={() => handleSelectTabAndScroll('letters')}
            onNavigateToCountries={() => handleSelectTabAndScroll('countries')}
          />
        )}
        {currentTab === 'countries' && (
          <CountryGuides
            language={language}
            onNavigateToCalculator={() => handleSelectTabAndScroll('calculator')}
          />
        )}
        {currentTab === 'checklist' && (
          <DocumentChecklist language={language} currentCountry={currentCountry} />
        )}
        {currentTab === 'tips' && (
          <TipsAndTricks
            language={language}
            currentCountry={currentCountry}
            onNavigateToLetters={() => handleSelectTabAndScroll('letters')}
          />
        )}
        {currentTab === 'quiz' && (
          <NaturalizationQuiz language={language} currentCountry={currentCountry} />
        )}
        {currentTab === 'letters' && (
          <LetterGenerator language={language} currentCountry={currentCountry} />
        )}
        {currentTab === 'cities' && <CityDirectory language={language} />}

        {/* Global FAQ & Glossary Section */}
        <FaqSection language={language} />
      </main>

      {/* Footer */}
      <Footer
        language={language}
        onSelectTab={handleSelectTabAndScroll}
      />
    </div>
  );
};

export default App;
