import React, { useState, useEffect, useMemo } from 'react';
import { 
  FileCheck, 
  Check, 
  ExternalLink, 
  RotateCcw, 
  Printer, 
  Sparkles,
  HelpCircle,
  Briefcase,
  Users,
  Baby
} from 'lucide-react';
import { Language, CountryCode } from '../types';
import { getDocumentsForCountry } from '../data/portalData';
import { countriesConfig } from '../data/countriesConfig';
import { getStoredChecklist, saveStoredChecklist } from '../utils/storage';
import { triggerCelebration } from '../utils/confetti';

interface DocumentChecklistProps {
  language: Language;
  currentCountry: CountryCode;
}

export const DocumentChecklist: React.FC<DocumentChecklistProps> = ({ language, currentCountry }) => {
  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>({});
  const [employmentFilter, setEmploymentFilter] = useState<'all' | 'employed' | 'freelance'>('employed');
  const [isMarried, setIsMarried] = useState<boolean>(false);
  const [hasChildren, setHasChildren] = useState<boolean>(false);

  const activeDocuments = useMemo(() => {
    return getDocumentsForCountry(currentCountry);
  }, [currentCountry]);
  const meta = countriesConfig[currentCountry];

  useEffect(() => {
    setCheckedMap(getStoredChecklist());
  }, []);

  const handleToggle = (id: string) => {
    const next = { ...checkedMap, [id]: !checkedMap[id] };
    setCheckedMap(next);
    saveStoredChecklist(next);

    // If all applicable items are now completed, celebrate!
    const totalApplicable = filteredDocs.length;
    const completedCount = filteredDocs.filter(d => next[d.id]).length;
    if (completedCount === totalApplicable && totalApplicable > 0) {
      triggerCelebration();
    }
  };

  const handleReset = () => {
    if (window.confirm(language === 'en' ? 'Reset all checked documents?' : 'Alle Haken zurücksetzen?')) {
      setCheckedMap({});
      saveStoredChecklist({});
    }
  };

  const filteredDocs = useMemo(() => {
    return activeDocuments.filter((doc) => {
      // Check employment requirement
      if (doc.requiredFor.includes('all')) {
        // ok
      } else if (doc.requiredFor.includes('employed') && employmentFilter !== 'employed') {
        return false;
      } else if (doc.requiredFor.includes('freelance') && employmentFilter !== 'freelance') {
        return false;
      }

      // Check marriage requirement
      if (doc.requiredFor.includes('married') && !isMarried) {
        return false;
      }

      // Check children requirement
      if (doc.requiredFor.includes('children') && !hasChildren) {
        return false;
      }

      return true;
    });
  }, [employmentFilter, isMarried, hasChildren]);

  const completedCount = useMemo(() => {
    return filteredDocs.filter((doc) => checkedMap[doc.id]).length;
  }, [filteredDocs, checkedMap]);

  const percentage = filteredDocs.length > 0 
    ? Math.round((completedCount / filteredDocs.length) * 100) 
    : 0;

  const categories = [
    { id: 'identity', label: { en: 'Identity & Travel Documents', de: 'Identität & Pass' } },
    { id: 'civil_status', label: { en: 'Civil Status (Birth & Family)', de: 'Personenstand & Familie' } },
    { id: 'residence', label: { en: 'Residence & Housing Proof', de: 'Wohnsitz & Aufenthalt' } },
    { id: 'income', label: { en: 'Income & Pension Security', de: 'Einkommen & Altersvorsorge' } },
    { id: 'integration', label: { en: 'Language & Integration Certificates', de: 'Sprache & Integration' } }
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3">
            <FileCheck className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Interactive Document Tracker' : 'Interaktiver Unterlagen-Manager'}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {meta.flag} {language === 'en' ? `${meta.name.en} Document Checklist` : `Dokumenten-Checkliste (${meta.name.de})`}
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            {language === 'en'
              ? 'Filter by your personal employment and family situation. Check off items as you gather them—saved automatically.'
              : 'Passen Sie die Checkliste an Ihre Erwerbs- und Familiensituation an. Der Fortschritt wird automatisch im Browser gesichert.'}
          </p>
        </div>

        {/* Profile Filter Bar */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm mb-8 space-y-4">
          <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
            {language === 'en' ? 'Tailor checklist to your profile:' : 'Checkliste an Ihr Profil anpassen:'}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {/* Employment toggle */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setEmploymentFilter('employed')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  employmentFilter === 'employed'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Employed (Angestellt)' : 'Angestellt'}</span>
              </button>
              <button
                onClick={() => setEmploymentFilter('freelance')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  employmentFilter === 'freelance'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Freelance / Business' : 'Selbstständig / Gewerbe'}</span>
              </button>
            </div>

            {/* Marriage toggle */}
            <button
              onClick={() => setIsMarried(!isMarried)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition ${
                isMarried
                  ? 'bg-passport-50 border-passport-300 text-passport-900'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Married / Civil Union' : 'Verheiratet'}</span>
            </button>

            {/* Children toggle */}
            <button
              onClick={() => setHasChildren(!hasChildren)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition ${
                hasChildren
                  ? 'bg-passport-50 border-passport-300 text-passport-900'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              <Baby className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Co-Naturalizing Children' : 'Mit Minderjährigen'}</span>
            </button>
          </div>
        </div>

        {/* Progress Tracker Card */}
        <div className="bg-gradient-to-r from-passport-950 via-passport-900 to-slate-900 rounded-2xl p-6 text-white shadow-lg mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 w-full sm:w-auto text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="text-xl font-extrabold text-white">
                {completedCount} / {filteredDocs.length} {language === 'en' ? 'Documents Ready' : 'Unterlagen bereit'}
              </span>
              {percentage === 100 && (
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {language === 'en' ? 'Complete!' : 'Vollständig!'}
                </span>
              )}
            </div>
            <p className="text-xs text-slate-300">
              {percentage === 100 
                ? (language === 'en' ? 'You have gathered all required paperwork! Ready for submission.' : 'Alle Unterlagen sind beisammen! Bereit zur Einreichung.') 
                : (language === 'en' ? 'Complete the checklist before booking your submission appointment.' : 'Haken Sie alle Punkte vor der Antragsabgabe ab.')}
            </p>
          </div>

          {/* Progress Bar & Actions */}
          <div className="w-full sm:w-72 space-y-3">
            <div className="flex justify-between text-xs font-mono font-bold text-eagleGold-300">
              <span>{language === 'en' ? 'Readiness:' : 'Bereitschaft:'}</span>
              <span>{percentage}%</span>
            </div>
            <div className="w-full bg-white/20 h-3 rounded-full overflow-hidden p-0.5">
              <div 
                className="h-full bg-gradient-to-r from-eagleGold-400 to-emerald-400 rounded-full transition-all duration-300"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <div className="flex items-center justify-end gap-3 text-xs">
              <button
                onClick={() => window.print()}
                className="text-slate-300 hover:text-white flex items-center gap-1 font-medium transition"
              >
                <Printer className="w-3 h-3" />
                <span>{language === 'en' ? 'Print' : 'Drucken'}</span>
              </button>
              <button
                onClick={handleReset}
                className="text-slate-300 hover:text-rose-300 flex items-center gap-1 font-medium transition"
              >
                <RotateCcw className="w-3 h-3" />
                <span>{language === 'en' ? 'Reset' : 'Zurücksetzen'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Grouped Checklist */}
        <div className="space-y-8">
          {categories.map((cat) => {
            const catDocs = filteredDocs.filter((d) => d.category === cat.id);
            if (catDocs.length === 0) return null;

            return (
              <div key={cat.id} className="space-y-3">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-200 pb-2">
                  <span className="w-2 h-2 rounded-full bg-passport-700" />
                  <span>{cat.label[language]}</span>
                  <span className="text-xs font-normal text-slate-500 font-mono">
                    ({catDocs.filter(d => checkedMap[d.id]).length}/{catDocs.length})
                  </span>
                </h3>

                <div className="grid grid-cols-1 gap-3">
                  {catDocs.map((doc) => {
                    const isChecked = !!checkedMap[doc.id];

                    return (
                      <div
                        key={doc.id}
                        onClick={() => handleToggle(doc.id)}
                        className={`p-4 sm:p-5 rounded-xl border transition-all cursor-pointer flex items-start gap-4 ${
                          isChecked
                            ? 'bg-emerald-50/40 border-emerald-300/80 shadow-sm'
                            : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
                        }`}
                      >
                        {/* Custom Checkbox */}
                        <div
                          className={`w-6 h-6 rounded-lg border-2 mt-0.5 shrink-0 flex items-center justify-center transition-colors ${
                            isChecked
                              ? 'bg-emerald-600 border-emerald-600 text-white'
                              : 'bg-white border-slate-300'
                          }`}
                        >
                          {isChecked && <Check className="w-4 h-4 stroke-[3]" />}
                        </div>

                        {/* Document Details */}
                        <div className="space-y-1.5 flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className={`text-sm sm:text-base font-bold transition-colors ${
                              isChecked ? 'text-slate-600 line-through' : 'text-slate-900'
                            }`}>
                              {doc.title[language]}
                            </span>
                            {doc.officialLink && (
                              <a
                                href={doc.officialLink}
                                target="_blank"
                                rel="noreferrer noopener"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1 text-[11px] font-semibold text-passport-800 hover:underline"
                              >
                                <span>{language === 'en' ? 'Official Link' : 'Offizieller Link'}</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>

                          <p className="text-xs text-slate-600 leading-relaxed">
                            {doc.description[language]}
                          </p>

                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-500 pt-1">
                            <span>
                              🏢 <strong>{language === 'en' ? 'Source:' : 'Bezugsquelle:'}</strong> {doc.howToGet[language]}
                            </span>
                            {doc.tip && (
                              <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/80 flex items-center gap-1">
                                <HelpCircle className="w-3 h-3 shrink-0" />
                                <span>{doc.tip[language]}</span>
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
