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
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { Language } from './types';

export const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [currentTab, setCurrentTab] = useState<string>('roadmap');

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = window.localStorage.getItem('passweg_lang');
        if (saved === 'de' || saved === 'en') {
          setLanguage(saved);
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
      />

      {/* Hero Section */}
      <Hero
        language={language}
        onStartCalculator={() => handleSelectTabAndScroll('calculator')}
        onExploreRoadmap={() => handleSelectTabAndScroll('roadmap')}
        onOpenChecklist={() => handleSelectTabAndScroll('checklist')}
      />

      {/* Main Content Body based on tab */}
      <main className="flex-1">
        {currentTab === 'roadmap' && <ProcessRoadmap language={language} />}
        {currentTab === 'calculator' && (
          <EligibilityCalculator
            language={language}
            onNavigateToChecklist={() => handleSelectTabAndScroll('checklist')}
            onNavigateToLetters={() => handleSelectTabAndScroll('letters')}
          />
        )}
        {currentTab === 'checklist' && <DocumentChecklist language={language} />}
        {currentTab === 'tips' && (
          <TipsAndTricks
            language={language}
            onNavigateToLetters={() => handleSelectTabAndScroll('letters')}
          />
        )}
        {currentTab === 'quiz' && <NaturalizationQuiz language={language} />}
        {currentTab === 'letters' && <LetterGenerator language={language} />}
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
