import React, { useState, useMemo } from 'react';
import { 
  Lightbulb, 
  Search, 
  Tag, 
  ChevronRight, 
  Sparkles, 
  Scale, 
  Clock, 
  FileText, 
  Compass 
} from 'lucide-react';
import { Language, CountryCode } from '../types';
import { getTipsForCountry } from '../data/portalData';
import { countriesConfig } from '../data/countriesConfig';

interface TipsAndTricksProps {
  language: Language;
  currentCountry: CountryCode;
  onNavigateToLetters: () => void;
}

export const TipsAndTricks: React.FC<TipsAndTricksProps> = ({
  language,
  currentCountry,
  onNavigateToLetters,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedTipId, setExpandedTipId] = useState<string | null>(null);

  const tipsList = useMemo(() => {
    return getTipsForCountry(currentCountry);
  }, [currentCountry]);
  const meta = countriesConfig[currentCountry];

  const categories = [
    { id: 'all', label: { en: 'All Tips', de: 'Alle Tipps' }, icon: Sparkles },
    { id: 'legal', label: { en: 'Legal & § 75 VwGO', de: 'Recht & Klage' }, icon: Scale },
    { id: 'turbo', label: { en: '3-Year Turbo Track', de: '3-Jahre-Turbo' }, icon: Compass },
    { id: 'documents', label: { en: 'Document Fast-Tracks', de: 'Urkunden & DRV' }, icon: FileText },
    { id: 'dual_citizenship', label: { en: 'Dual Passport Rules', de: 'Doppelpass-Regeln' }, icon: Tag },
    { id: 'career', label: { en: 'Jobs & Probezeit', de: 'Job & Probezeit' }, icon: Clock },
  ];

  const filteredTips = useMemo(() => {
    return tipsList.filter((tip) => {
      const matchesCat = selectedCategory === 'all' || tip.category === selectedCategory;
      const matchesSearch = 
        searchQuery.trim() === '' ||
        tip.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        tip.summary[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        tip.relevanceTag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery, language]);

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-3">
            <Lightbulb className="w-3.5 h-3.5 text-amber-700" />
            <span>{language === 'en' ? 'Insider Knowledge Base' : 'Insider-Wissen & Taktiken'}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {meta.flag} {language === 'en' ? `${meta.name.en} Tips, Tricks & Hacks` : `Tipps & Tricks (${meta.name.de})`}
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            {language === 'en'
              ? 'Real-world strategies gathered from immigration attorneys, Reddit r/germany veterans, and successful applicants.'
              : 'Praxiserprobte Strategien von Fachanwälten für Migrationsrecht und erfolgreichen Einbürgerungskandidaten.'}
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-passport-800 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cat.label[language]}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={language === 'en' ? 'Search tips (e.g. 75, DRV, C1)...' : 'Tipps suchen (z.B. Klage, DRV)...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-passport-700 focus:bg-white transition"
            />
          </div>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTips.map((tip) => {
            const isExpanded = expandedTipId === tip.id;

            return (
              <div
                key={tip.id}
                className={`rounded-2xl border transition-all flex flex-col justify-between ${
                  isExpanded
                    ? 'border-passport-800/40 bg-slate-50/60 shadow-md ring-1 ring-passport-800/20'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <div className="p-6">
                  {/* Badge & Tag */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-passport-100 text-passport-800 border border-passport-200">
                      {tip.badge[language]}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 font-bold bg-slate-100 px-2 py-0.5 rounded">
                      {tip.relevanceTag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-slate-900 leading-snug mb-2">
                    {tip.title[language]}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {tip.summary[language]}
                  </p>

                  {/* Expandable Content */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-slate-200/80 space-y-4">
                      <div className="text-xs text-slate-700 whitespace-pre-line leading-relaxed font-normal">
                        {tip.content[language]}
                      </div>

                      {tip.actionableStep && (
                        <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-2">
                          <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <div className="leading-relaxed">
                            <strong>{language === 'en' ? 'Next Action:' : 'Nächster Schritt:'}</strong>{' '}
                            {tip.actionableStep[language]}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Footer Controls */}
                <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 rounded-b-2xl flex items-center justify-between">
                  <button
                    onClick={() => setExpandedTipId(isExpanded ? null : tip.id)}
                    className="text-xs font-bold text-passport-800 hover:text-passport-900 flex items-center gap-1 transition"
                  >
                    <span>{isExpanded ? (language === 'en' ? 'Show Less' : 'Weniger anzeigen') : (language === 'en' ? 'Read Full Guide' : 'Kompletten Leitfaden lesen')}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                  </button>

                  {tip.category === 'legal' && (
                    <button
                      onClick={onNavigateToLetters}
                      className="text-[11px] font-semibold text-slate-600 hover:text-slate-900 bg-white px-2 py-1 rounded-md border border-slate-200 shadow-xs"
                    >
                      {language === 'en' ? 'Use Template' : 'Brief-Muster'}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filteredTips.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <p className="text-sm text-slate-500">
              {language === 'en' ? 'No tips found matching your query.' : 'Keine Tipps für diesen Suchbegriff gefunden.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
