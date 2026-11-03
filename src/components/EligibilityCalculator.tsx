import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  ArrowRight, 
  RotateCcw,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { 
  EligibilityInput, 
  Language, 
  ResidencePermitType, 
  LanguageLevel, 
  EmploymentStatus 
} from '../types';
import { calculateEligibility } from '../utils/eligibility';
import { triggerCelebration } from '../utils/confetti';

interface EligibilityCalculatorProps {
  language: Language;
  onNavigateToChecklist: () => void;
  onNavigateToLetters: () => void;
}

export const EligibilityCalculator: React.FC<EligibilityCalculatorProps> = ({
  language,
  onNavigateToChecklist,
  onNavigateToLetters
}) => {
  const [years, setYears] = useState<number>(5);
  const [permitType, setPermitType] = useState<ResidencePermitType>('blue_card');
  const [languageLevel, setLanguageLevel] = useState<LanguageLevel>('b1');
  const [hasSpecialIntegration, setHasSpecialIntegration] = useState<boolean>(false);
  const [employmentStatus, setEmploymentStatus] = useState<EmploymentStatus>('employed_permanent');
  const [passedEinbuergerungstest, setPassedEinbuergerungstest] = useState<boolean>(true);
  const [hasCleanRecord, setHasCleanRecord] = useState<boolean>(true);
  const [isMarriedToGerman, setIsMarriedToGerman] = useState<boolean>(false);
  const [yearsMarried, setYearsMarried] = useState<number>(2);
  const [acceptsDemocraticOrder, setAcceptsDemocraticOrder] = useState<boolean>(true);

  const input: EligibilityInput = useMemo(() => ({
    yearsInGermany: years,
    permitType,
    languageLevel,
    hasSpecialIntegration,
    employmentStatus,
    passedEinbuergerungstest,
    hasCleanCriminalRecord: hasCleanRecord,
    isMarriedToGerman,
    yearsMarried: isMarriedToGerman ? yearsMarried : 0,
    acceptsDemocraticOrder
  }), [
    years, 
    permitType, 
    languageLevel, 
    hasSpecialIntegration, 
    employmentStatus, 
    passedEinbuergerungstest, 
    hasCleanRecord, 
    isMarriedToGerman, 
    yearsMarried, 
    acceptsDemocraticOrder
  ]);

  const result = useMemo(() => {
    return calculateEligibility(input);
  }, [input]);

  const handleCalculateWithConfetti = () => {
    if (result.isEligibleNow) {
      triggerCelebration();
    }
  };

  const resetForm = () => {
    setYears(5);
    setPermitType('blue_card');
    setLanguageLevel('b1');
    setHasSpecialIntegration(false);
    setEmploymentStatus('employed_permanent');
    setPassedEinbuergerungstest(true);
    setHasCleanRecord(true);
    setIsMarriedToGerman(false);
    setYearsMarried(2);
    setAcceptsDemocraticOrder(true);
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-passport-100 text-passport-800 text-xs font-bold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'StAG 2024 Legal Algorithm' : 'StAG 2024 Rechtsalgorithmus'}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {language === 'en' ? 'German Citizenship Eligibility Calculator' : 'Einbürgerungs-Voraussetzungsrechner'}
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            {language === 'en'
              ? 'Select your current residency, language, and employment parameters to discover your legal qualification track.'
              : 'Geben Sie Ihre Aufenthaltsdauer, Sprachniveau und Beschäftigung ein, um Ihre Einbürgerungsansprüche sofort zu berechnen.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Column (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                <span>{language === 'en' ? 'Your Personal Profile' : 'Ihre Profilangaben'}</span>
              </h3>
              <button
                onClick={resetForm}
                className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 font-medium transition-colors"
                title="Reset all inputs"
              >
                <RotateCcw className="w-3 h-3" />
                <span>{language === 'en' ? 'Reset' : 'Zurücksetzen'}</span>
              </button>
            </div>

            {/* 1. Years in Germany */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-800">
                  {language === 'en' ? '1. Lawful Years of Residence in Germany' : '1. Rechtmäßiger Aufenthalt in Deutschland'}
                </label>
                <span className="px-3 py-1 bg-passport-50 text-passport-800 font-extrabold text-sm rounded-lg border border-passport-200">
                  {years} {years === 1 ? (language === 'en' ? 'year' : 'Jahr') : (language === 'en' ? 'years' : 'Jahre')}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="12"
                step="0.5"
                value={years}
                onChange={(e) => setYears(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-passport-800"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>0 yrs</span>
                <span className="font-semibold text-emerald-600">3 yrs (Turbo / Marriage)</span>
                <span className="font-semibold text-passport-800">5 yrs (Standard 2024)</span>
                <span>10+ yrs</span>
              </div>
            </div>

            {/* 2. Residence Permit Type */}
            <div>
              <label className="block text-sm font-bold text-slate-800 mb-2">
                {language === 'en' ? '2. Current Residence Permit Title' : '2. Aktueller Aufenthaltstitel'}
              </label>
              <select
                value={permitType}
                onChange={(e) => setPermitType(e.target.value as ResidencePermitType)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-passport-700 transition"
              >
                <option value="blue_card">EU Blue Card (§ 18g AufenthG)</option>
                <option value="settlement">Settlement Permit / Niederlassungserlaubnis (§ 18c, § 9)</option>
                <option value="skilled_worker">Skilled Worker (§ 18a, § 18b AufenthG)</option>
                <option value="eu_permanent">Permanent Residence EU (Daueraufenthalt-EU)</option>
                <option value="eu_citizen">EU / EEA Citizen (Freizügigkeit)</option>
                <option value="family_reunion">Family Reunion Permit (§§ 28, 29, 30)</option>
                <option value="asylum_recognized">Recognized Refugee / Asylum (§ 25 Abs. 1, 2)</option>
                <option value="student">Student Visa (§ 16b AufenthG) [Directly Ineligible]</option>
                <option value="tolerated">Tolerated Stay / Duldung (§ 60a) [Ineligible]</option>
                <option value="other_temporary">Other Temporary Residence Permit</option>
              </select>
              {permitType === 'student' && (
                <p className="mt-1.5 text-xs text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200 flex items-start gap-1.5">
                  <Info className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    {language === 'en'
                      ? 'Study years count towards the 3 or 5 years, but you must switch to a work permit before naturalizing!'
                      : 'Studienzeiten zählen voll an, vor Einbürgerung muss aber in einen Fachkraft-Titel gewechselt werden!'}
                  </span>
                </p>
              )}
            </div>

            {/* 3. German Language Certification */}
            <div>
              <label className="block text-sm font-bold text-slate-800 mb-2">
                {language === 'en' ? '3. Certified German Language Level' : '3. Nachgewiesenes Sprachniveau'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'a1_a2', label: 'A1 / A2', desc: 'Basic' },
                  { id: 'b1', label: 'B1', desc: 'Standard min.' },
                  { id: 'b2', label: 'B2', desc: 'Advanced' },
                  { id: 'c1_c2', label: 'C1 / C2', desc: 'Turbo track' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setLanguageLevel(item.id as LanguageLevel)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      languageLevel === item.id
                        ? 'border-passport-800 bg-passport-50/50 text-passport-950 font-bold ring-1 ring-passport-800'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className="text-sm font-bold">{item.label}</div>
                    <div className="text-[11px] text-slate-500">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Special Integration Achievements (Turbo Trigger) */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasSpecialIntegration}
                  onChange={(e) => setHasSpecialIntegration(e.target.checked)}
                  className="w-4 h-4 mt-0.5 rounded border-slate-300 text-passport-800 focus:ring-passport-700"
                />
                <div>
                  <span className="text-sm font-bold text-slate-900 block">
                    {language === 'en'
                      ? 'Special Civic or Professional Integration (§ 10 Abs. 3)'
                      : 'Besondere Integrationsleistungen (§ 10 Abs. 3 StAG)'}
                  </span>
                  <span className="text-xs text-slate-500 block mt-0.5 leading-relaxed">
                    {language === 'en'
                      ? '1+ year active volunteer service (Ehrenamt in DRK/THW/charity/sports club) OR outstanding academic/career honors.'
                      : 'Mind. 1 Jahr aktives Ehrenamt (DRK, THW, Feuerwehr, Verein) ODER herausragende akademische/berufliche Leistungen.'}
                  </span>
                </div>
              </label>
            </div>

            {/* 5. Employment & Financial Status */}
            <div>
              <label className="block text-sm font-bold text-slate-800 mb-2">
                {language === 'en' ? '4. Employment & Financial Self-Sufficiency' : '4. Erwerbstätigkeit & Lebensunterhalt'}
              </label>
              <select
                value={employmentStatus}
                onChange={(e) => setEmploymentStatus(e.target.value as EmploymentStatus)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-passport-700 transition"
              >
                <option value="employed_permanent">Employed (Permanent Contract / Unbefristet)</option>
                <option value="employed_probation">Employed (In Probation Period / Probezeit)</option>
                <option value="employed_fixed_term">Employed (Fixed-Term / Befristeter Vertrag)</option>
                <option value="freelance">Self-Employed / Freelance (Selbstständig/Gewerbe)</option>
                <option value="pensioner">Retiree / Pensioner (Rentner)</option>
                <option value="student">Student / In Vocational Training (Azubi)</option>
                <option value="unemployed_buergergeld">Receiving Citizen’s Allowance (Bürgergeld / SGB II)</option>
              </select>
            </div>

            {/* 6. Einbürgerungstest & Criminal Record */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:border-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={passedEinbuergerungstest}
                  onChange={(e) => setPassedEinbuergerungstest(e.target.checked)}
                  className="w-4 h-4 rounded text-passport-800 focus:ring-passport-700"
                />
                <span className="text-xs font-semibold text-slate-800">
                  {language === 'en'
                    ? 'Passed Einbürgerungstest (or German Degree)'
                    : 'Einbürgerungstest bestanden (oder dt. Abschluss)'}
                </span>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:border-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasCleanRecord}
                  onChange={(e) => setHasCleanRecord(e.target.checked)}
                  className="w-4 h-4 rounded text-passport-800 focus:ring-passport-700"
                />
                <span className="text-xs font-semibold text-slate-800">
                  {language === 'en'
                    ? 'Clean Record (No conviction >90 Tagessätze)'
                    : 'Straffrei (Keine Geldstrafe >90 Tagessätze)'}
                </span>
              </label>
            </div>

            {/* 7. Marriage to German Citizen Option */}
            <div className="border-t border-slate-100 pt-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isMarriedToGerman}
                  onChange={(e) => setIsMarriedToGerman(e.target.checked)}
                  className="w-4 h-4 rounded text-passport-800 focus:ring-passport-700"
                />
                <span className="text-xs font-bold text-slate-800">
                  {language === 'en'
                    ? 'Married to or in registered partnership with a German Citizen (§ 9 StAG)'
                    : 'Verheiratet mit einer/m deutschen Staatsangehörigen (§ 9 StAG)'}
                </span>
              </label>

              {isMarriedToGerman && (
                <div className="mt-3 pl-7 flex items-center gap-3">
                  <span className="text-xs text-slate-600 font-medium">
                    {language === 'en' ? 'Years of marriage:' : 'Ehedauer in Jahren:'}
                  </span>
                  <input
                    type="number"
                    min="0"
                    max="50"
                    value={yearsMarried}
                    onChange={(e) => setYearsMarried(parseInt(e.target.value) || 0)}
                    className="w-20 px-2 py-1 text-xs border border-slate-300 rounded-md font-semibold text-center"
                  />
                  <span className="text-[11px] text-slate-400">
                    {language === 'en' ? '(Minimum 2 years required)' : '(Mindestens 2 Jahre nötig)'}
                  </span>
                </div>
              )}
            </div>

            {/* Loyalty declaration checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={acceptsDemocraticOrder}
                  onChange={(e) => setAcceptsDemocraticOrder(e.target.checked)}
                  className="w-4 h-4 mt-0.5 rounded text-passport-800 focus:ring-passport-700"
                />
                <span className="text-xs text-slate-600">
                  {language === 'en'
                    ? 'I commit to the Free Democratic Basic Order (FDGO) and acknowledge Germany’s historical responsibility.'
                    : 'Ich bekenne mich zur freiheitlichen demokratischen Grundordnung (FDGO) und der historischen Verantwortung Deutschlands.'}
                </span>
              </label>
            </div>
          </div>

          {/* Result Card Column (5 cols) */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            <div className={`p-6 sm:p-7 rounded-2xl border shadow-lg transition-all ${
              result.isEligibleNow
                ? 'bg-gradient-to-b from-white to-emerald-50/50 border-emerald-300 ring-1 ring-emerald-300'
                : 'bg-white border-slate-200'
            }`}>
              {/* Badge & Track */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                  result.isEligibleNow
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                    : 'bg-amber-100 text-amber-800 border border-amber-200'
                }`}>
                  {result.isEligibleNow ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />}
                  <span>{result.isEligibleNow ? (language === 'en' ? 'Eligible Now' : 'Sofort antragsberechtigt') : (language === 'en' ? 'Prerequisites Pending' : 'Voraussetzungen offen')}</span>
                </span>

                <span className="text-xs font-mono font-bold text-slate-500">
                  {result.confidenceScore}% {language === 'en' ? 'Score' : 'Übereinstimmung'}
                </span>
              </div>

              {/* Confidence Progress Bar */}
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-5">
                <div 
                  className={`h-full transition-all duration-500 ${
                    result.confidenceScore >= 100 ? 'bg-emerald-500' :
                    result.confidenceScore >= 70 ? 'bg-amber-500' : 'bg-rose-500'
                  }`}
                  style={{ width: `${result.confidenceScore}%` }}
                />
              </div>

              {/* Title & Summary */}
              <h4 className="text-lg font-extrabold text-slate-900 leading-snug">
                {result.headline[language]}
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {result.summary[language]}
              </p>

              {/* Legal Reference Tag */}
              <div className="mt-4 p-2.5 rounded-lg bg-slate-100/80 border border-slate-200 text-xs font-mono font-semibold text-slate-700">
                ⚖️ {result.qualifyingLegalBasis}
              </div>

              {/* Missing Criteria list if any */}
              {result.missingCriteria.length > 0 && (
                <div className="mt-5 space-y-3">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    {language === 'en' ? 'Actionable Items to Resolve:' : 'Noch zu erledigende Punkte:'}
                  </div>
                  {result.missingCriteria.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 space-y-1"
                    >
                      <div className="font-bold flex items-start gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{item[language]}</span>
                      </div>
                      <div className="pl-5 text-amber-800 text-[11px] leading-relaxed">
                        👉 <strong>{language === 'en' ? 'Solution:' : 'Lösung:'}</strong> {item.actionTip[language]}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Passed Criteria Highlights */}
              {result.passedCriteria.length > 0 && (
                <div className="mt-5">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    {language === 'en' ? 'Satisfied Requirements:' : 'Erfüllte Voraussetzungen:'}
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {result.passedCriteria.map((crit, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{crit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Next Step Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col gap-2">
                {result.isEligibleNow ? (
                  <button
                    onClick={() => {
                      handleCalculateWithConfetti();
                      onNavigateToChecklist();
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-passport-800 hover:bg-passport-900 text-white font-bold text-xs shadow-md transition-all hover:scale-[1.01]"
                  >
                    <Sparkles className="w-4 h-4 text-eagleGold-400" />
                    <span>{language === 'en' ? 'View Required Documents' : 'Erforderliche Unterlagen prüfen'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={onNavigateToChecklist}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-all"
                  >
                    <span>{language === 'en' ? 'Prepare Checklist Anyway' : 'Zur Unterlagen-Checkliste'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}

                <button
                  onClick={onNavigateToLetters}
                  className="w-full flex items-center justify-center gap-1.5 text-xs font-semibold text-passport-800 hover:text-passport-900 py-1.5"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>{language === 'en' ? 'Get Official Status Letters' : 'Offizielle Briefvorlagen abrufen'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
