import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  Coins, 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  ExternalLink,
  Milestone
} from 'lucide-react';
import { Language, CountryCode } from '../types';
import { getRoadmapForCountry } from '../data/portalData';
import { countriesConfig } from '../data/countriesConfig';

interface ProcessRoadmapProps {
  language: Language;
  currentCountry: CountryCode;
}

export const ProcessRoadmap: React.FC<ProcessRoadmapProps> = ({ language, currentCountry }) => {
  const [expandedStep, setExpandedStep] = useState<number | null>(1);
  const steps = getRoadmapForCountry(currentCountry);
  const meta = countriesConfig[currentCountry];

  const toggleStep = (id: number) => {
    setExpandedStep(expandedStep === id ? null : id);
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold mb-3">
            <Milestone className="w-3.5 h-3.5 text-passport-800" />
            <span>{meta.flag} {language === 'en' ? 'End-to-End Timeline' : 'Vollständiger Ablauf'}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {language === 'en' 
              ? `${meta.name.en} Citizenship Roadmap (${steps.length} Stages)` 
              : `Ablauf der Einbürgerung (${meta.name.de})`}
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            {language === 'en'
              ? `From initial self-assessment to receiving your ${meta.name.en} passport.`
              : `Vom ersten Schritt bis zum Erhalt des Reisepasses (${meta.name.de}).`}
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l-2 border-passport-800/20 ml-4 sm:ml-8 space-y-6">
          {steps.map((step) => {
            const isExpanded = expandedStep === step.id;

            return (
              <div key={step.id} className="relative pl-6 sm:pl-8 group">
                {/* Step Circle Indicator */}
                <div 
                  onClick={() => toggleStep(step.id)}
                  className={`absolute -left-[17px] top-4 w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-xs cursor-pointer transition-all ${
                    isExpanded 
                      ? 'bg-passport-800 border-passport-900 text-white shadow-md scale-110' 
                      : 'bg-white border-passport-800/40 text-passport-800 hover:border-passport-800'
                  }`}
                >
                  {step.id}
                </div>

                {/* Card Container */}
                <div 
                  className={`rounded-2xl border transition-all ${
                    isExpanded
                      ? 'bg-slate-50/70 border-passport-800/30 shadow-md ring-1 ring-passport-800/10'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  {/* Card Header (clickable) */}
                  <div 
                    onClick={() => toggleStep(step.id)}
                    className="p-5 sm:p-6 cursor-pointer flex items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          {step.title[language]}
                        </h3>
                        <div className="flex items-center gap-2 text-xs font-semibold">
                          <span className="flex items-center gap-1 text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                            <Clock className="w-3 h-3 text-slate-400" />
                            {step.estimatedDuration[language]}
                          </span>
                          <span className="flex items-center gap-1 text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                            <Coins className="w-3 h-3 text-slate-400" />
                            {step.costEstimate[language]}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600">
                        {step.shortDesc[language]}
                      </p>
                    </div>

                    <button 
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                      aria-label={isExpanded ? 'Collapse' : 'Expand'}
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* Expanded Body */}
                  {isExpanded && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-200/60 space-y-5">
                      {/* Full description */}
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {step.fullDescription[language]}
                      </p>

                      {/* Action items */}
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{language === 'en' ? 'Key Action Items' : 'Wichtigste Schritte'}</span>
                        </h4>
                        <ul className="space-y-1.5">
                          {step.actionItems.map((action, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                              <span className="text-emerald-500 font-bold">•</span>
                              <span>{action[language]}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Pro Tips */}
                      <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/60 space-y-2">
                        <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                          <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                          <span>{language === 'en' ? 'Insider Pro-Tips' : 'Insider-Tipps'}</span>
                        </div>
                        <ul className="space-y-1">
                          {step.proTips.map((tip, idx) => (
                            <li key={idx} className="text-xs text-amber-950 flex items-start gap-1.5 leading-relaxed">
                              <span className="font-bold text-amber-700">✓</span>
                              <span>{tip[language]}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Pitfalls */}
                      <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200/60 space-y-2">
                        <div className="text-xs font-bold text-rose-900 flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                          <span>{language === 'en' ? 'Common Pitfalls to Avoid' : 'Häufige Stolperfallen'}</span>
                        </div>
                        <ul className="space-y-1">
                          {step.pitfalls.map((pitfall, idx) => (
                            <li key={idx} className="text-xs text-rose-950 flex items-start gap-1.5 leading-relaxed">
                              <span className="font-bold text-rose-700">✗</span>
                              <span>{pitfall[language]}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Official Links if present */}
                      {step.officialLinks && step.officialLinks.length > 0 && (
                        <div className="pt-2 flex flex-wrap gap-2">
                          {step.officialLinks.map((link, idx) => (
                            <a
                              key={idx}
                              href={link.url}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-passport-800 hover:text-passport-900 hover:border-passport-300 transition-colors shadow-sm"
                            >
                              <span>{link.label}</span>
                              <ExternalLink className="w-3 h-3 text-slate-400" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
