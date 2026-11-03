import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  CheckCircle2, 
  AlertTriangle, 
  RotateCcw, 
  Sparkles, 
  ExternalLink 
} from 'lucide-react';
import { 
  Language, 
  CountryCode,
  ResidencePermitType, 
  LanguageLevel, 
  EmploymentStatus,
  EligibilityResult
} from '../types';
import { calculateEligibility } from '../utils/eligibility';
import { calculateUSEligibility } from '../utils/usEligibility';
import { calculateAUEligibility } from '../utils/auEligibility';
import { triggerCelebration } from '../utils/confetti';
import { countriesConfig } from '../data/countriesConfig';

interface EligibilityCalculatorProps {
  language: Language;
  currentCountry: CountryCode;
  setCurrentCountry: (country: CountryCode) => void;
  onNavigateToChecklist: () => void;
  onNavigateToLetters: () => void;
  onNavigateToCountries?: () => void;
}

export const EligibilityCalculator: React.FC<EligibilityCalculatorProps> = ({
  language,
  currentCountry,
  setCurrentCountry,
  onNavigateToChecklist,
  onNavigateToLetters,
  onNavigateToCountries
}) => {
  // Germany State
  const [countryOfOrigin, setCountryOfOrigin] = useState<'all' | 'us' | 'au' | 'other'>('all');
  const [deYears, setDeYears] = useState<number>(5);
  const [dePermitType, setDePermitType] = useState<ResidencePermitType>('blue_card');
  const [deLanguageLevel, setDeLanguageLevel] = useState<LanguageLevel>('b1');
  const [deHasSpecialIntegration, setDeHasSpecialIntegration] = useState<boolean>(false);
  const [deEmploymentStatus, setDeEmploymentStatus] = useState<EmploymentStatus>('employed_permanent');
  const [dePassedEinbuergerungstest, setDePassedEinbuergerungstest] = useState<boolean>(true);
  const [deHasCleanRecord, setDeHasCleanRecord] = useState<boolean>(true);
  const [deIsMarriedToGerman, setDeIsMarriedToGerman] = useState<boolean>(false);
  const [deYearsMarried, setDeYearsMarried] = useState<number>(2);
  const [deAcceptsDemocraticOrder, setDeAcceptsDemocraticOrder] = useState<boolean>(true);

  // US State
  const [usLprYears, setUsLprYears] = useState<number>(5);
  const [usIsMarriedToCitizen, setUsIsMarriedToCitizen] = useState<boolean>(false);
  const [usYearsMarried, setUsYearsMarried] = useState<number>(3);
  const [usMonthsPhysicalPresence, setUsMonthsPhysicalPresence] = useState<number>(36);
  const [usHasContinuousResidence, setUsHasContinuousResidence] = useState<boolean>(true);
  const [usMonthsInState, setUsMonthsInState] = useState<number>(6);
  const [usSelectiveService, setUsSelectiveService] = useState<boolean>(true);
  const [usFiledTaxes, setUsFiledTaxes] = useState<boolean>(true);
  const [usGoodMoralCharacter, setUsGoodMoralCharacter] = useState<boolean>(true);
  const [usWillingToTakeOath, setUsWillingToTakeOath] = useState<boolean>(true);
  const [usBasicEnglishCivics, setUsBasicEnglishCivics] = useState<boolean>(true);

  // Australia State
  const [auYearsInAustralia, setAuYearsInAustralia] = useState<number>(4);
  const [auMonthsAsPR, setAuMonthsAsPR] = useState<number>(12);
  const [auDaysAbsent4Years, setAuDaysAbsent4Years] = useState<number>(120);
  const [auDaysAbsent12Months, setAuDaysAbsent12Months] = useState<number>(30);
  const [auPassesCharacterTest, setAuPassesCharacterTest] = useState<boolean>(true);
  const [auUnderstandsEnglishValues, setAuUnderstandsEnglishValues] = useState<boolean>(true);
  const [auPlansToReside, setAuPlansToReside] = useState<boolean>(true);

  // Memoized Calculation
  const result: EligibilityResult = useMemo(() => {
    if (currentCountry === 'us') {
      return calculateUSEligibility({
        yearsAsPermanentResident: usLprYears,
        isMarriedToUSCitizen: usIsMarriedToCitizen,
        yearsMarriedToCitizen: usYearsMarried,
        monthsPhysicallyPresentInUS: usMonthsPhysicalPresence,
        hasContinuousResidence: usHasContinuousResidence,
        monthsInCurrentState: usMonthsInState,
        registeredSelectiveService: usSelectiveService,
        filedRequiredTaxes: usFiledTaxes,
        hasGoodMoralCharacter: usGoodMoralCharacter,
        willingToTakeOath: usWillingToTakeOath,
        basicEnglishAndCivics: usBasicEnglishCivics,
      });
    }

    if (currentCountry === 'au') {
      return calculateAUEligibility({
        yearsInAustralia: auYearsInAustralia,
        monthsAsPermanentResident: auMonthsAsPR,
        daysAbsentLast4Years: auDaysAbsent4Years,
        daysAbsentLast12Months: auDaysAbsent12Months,
        passesCharacterTest: auPassesCharacterTest,
        understandsEnglishAndValues: auUnderstandsEnglishValues,
        plansToResideInAustralia: auPlansToReside,
      });
    }

    // Default: Germany
    return calculateEligibility({
      yearsInGermany: deYears,
      permitType: dePermitType,
      languageLevel: deLanguageLevel,
      hasSpecialIntegration: deHasSpecialIntegration,
      employmentStatus: deEmploymentStatus,
      passedEinbuergerungstest: dePassedEinbuergerungstest,
      hasCleanCriminalRecord: deHasCleanRecord,
      isMarriedToGerman: deIsMarriedToGerman,
      yearsMarried: deYearsMarried,
      acceptsDemocraticOrder: deAcceptsDemocraticOrder,
      countryOfOrigin,
    });
  }, [
    currentCountry,
    countryOfOrigin,
    deYears, dePermitType, deLanguageLevel, deHasSpecialIntegration, deEmploymentStatus,
    dePassedEinbuergerungstest, deHasCleanRecord, deIsMarriedToGerman, deYearsMarried, deAcceptsDemocraticOrder,
    usLprYears, usIsMarriedToCitizen, usYearsMarried, usMonthsPhysicalPresence, usHasContinuousResidence,
    usMonthsInState, usSelectiveService, usFiledTaxes, usGoodMoralCharacter, usWillingToTakeOath, usBasicEnglishCivics,
    auYearsInAustralia, auMonthsAsPR, auDaysAbsent4Years, auDaysAbsent12Months, auPassesCharacterTest,
    auUnderstandsEnglishValues, auPlansToReside
  ]);

  const handleCelebrate = () => {
    if (result.isEligibleNow) {
      triggerCelebration();
    }
  };

  const resetAll = () => {
    setDeYears(5);
    setDePermitType('blue_card');
    setDeLanguageLevel('b1');
    setDeHasSpecialIntegration(false);
    setDeEmploymentStatus('employed_permanent');
    setDePassedEinbuergerungstest(true);
    setDeHasCleanRecord(true);
    setDeIsMarriedToGerman(false);
    setDeYearsMarried(2);
    setDeAcceptsDemocraticOrder(true);
    setCountryOfOrigin('all');

    setUsLprYears(5);
    setUsIsMarriedToCitizen(false);
    setUsMonthsPhysicalPresence(36);
    setUsHasContinuousResidence(true);
    setUsMonthsInState(6);
    setUsSelectiveService(true);
    setUsFiledTaxes(true);
    setUsGoodMoralCharacter(true);

    setAuYearsInAustralia(4);
    setAuMonthsAsPR(12);
    setAuDaysAbsent4Years(120);
    setAuDaysAbsent12Months(30);
    setAuPassesCharacterTest(true);
  };

  const meta = countriesConfig[currentCountry];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>{meta.flag} {meta.governingLaw}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {language === 'en' 
              ? `${meta.name.en} Citizenship Eligibility Calculator` 
              : `Voraussetzungsrechner: ${meta.name.de}`}
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            {language === 'en'
              ? `Select your profile criteria to calculate your legal eligibility under ${meta.governingLaw}.`
              : `Tragen Sie Ihre Daten ein, um Ihren Einbürgerungsanspruch nach ${meta.governingLaw} sofort zu berechnen.`}
          </p>

          {/* Quick country switcher inside calculator */}
          <div className="flex justify-center gap-2 mt-4">
            {(['de', 'us', 'au'] as CountryCode[]).map((cCode) => (
              <button
                key={cCode}
                onClick={() => setCurrentCountry(cCode)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                  currentCountry === cCode
                    ? 'bg-slate-900 text-white'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {countriesConfig[cCode].flag} {countriesConfig[cCode].name[language]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Column (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                <span>{meta.flag} {language === 'en' ? 'Your Profile Parameters' : 'Ihre Profilangaben'}</span>
              </h3>
              <button
                onClick={resetAll}
                className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 font-medium transition-colors"
                title="Reset all inputs"
              >
                <RotateCcw className="w-3 h-3" />
                <span>{language === 'en' ? 'Reset' : 'Zurücksetzen'}</span>
              </button>
            </div>

            {/* GERMANY INPUTS */}
            {currentCountry === 'de' && (
              <>
                {/* 1. Lawful Years */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-slate-800">
                      {language === 'en' ? '1. Lawful Years in Germany' : '1. Rechtmäßiger Aufenthalt in Deutschland'}
                    </label>
                    <span className="px-3 py-1 bg-passport-50 text-passport-800 font-extrabold text-sm rounded-lg border border-passport-200">
                      {deYears} {deYears === 1 ? (language === 'en' ? 'year' : 'Jahr') : (language === 'en' ? 'years' : 'Jahre')}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="12"
                    step="0.5"
                    value={deYears}
                    onChange={(e) => setDeYears(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-passport-800"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>0 yrs</span>
                    <span className="font-semibold text-emerald-600">3 yrs (Turbo / Marriage)</span>
                    <span className="font-semibold text-passport-800">5 yrs (Standard 2024)</span>
                    <span>10+ yrs</span>
                  </div>
                </div>

                {/* 2. Residence Permit Title */}
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2">
                    {language === 'en' ? '2. Current Residence Permit Title' : '2. Aktueller Aufenthaltstitel'}
                  </label>
                  <select
                    value={dePermitType}
                    onChange={(e) => setDePermitType(e.target.value as ResidencePermitType)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm font-medium focus:ring-2 focus:ring-passport-700"
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
                </div>

                {/* 3. German Language */}
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
                        onClick={() => setDeLanguageLevel(item.id as LanguageLevel)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          deLanguageLevel === item.id
                            ? 'border-passport-800 bg-passport-50 text-passport-950 font-bold ring-1 ring-passport-800'
                            : 'border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <div className="text-sm font-bold">{item.label}</div>
                        <div className="text-[11px] text-slate-500">{item.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Special Integration */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={deHasSpecialIntegration}
                      onChange={(e) => setDeHasSpecialIntegration(e.target.checked)}
                      className="w-4 h-4 mt-0.5 rounded text-passport-800"
                    />
                    <div>
                      <span className="text-sm font-bold text-slate-900 block">
                        {language === 'en' ? 'Special Civic or Professional Integration (§ 10 Abs. 3)' : 'Besondere Integrationsleistungen (§ 10 Abs. 3)'}
                      </span>
                      <span className="text-xs text-slate-500 block mt-0.5">
                        {language === 'en' ? '1+ year volunteer work (Ehrenamt in DRK/THW/club) or honors degree.' : 'Mind. 1 Jahr aktives Ehrenamt (DRK, THW, Verein) oder Spitzenleistungen.'}
                      </span>
                    </div>
                  </label>
                </div>

                {/* 5. Income & Employment */}
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2">
                    {language === 'en' ? '4. Employment & Financial Status' : '4. Erwerbstätigkeit & Lebensunterhalt'}
                  </label>
                  <select
                    value={deEmploymentStatus}
                    onChange={(e) => setDeEmploymentStatus(e.target.value as EmploymentStatus)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm font-medium"
                  >
                    <option value="employed_permanent">Employed (Permanent Contract / Unbefristet)</option>
                    <option value="employed_probation">Employed (In Probation / Probezeit)</option>
                    <option value="employed_fixed_term">Employed (Fixed-Term / Befristet)</option>
                    <option value="freelance">Self-Employed / Freelance (Selbstständig)</option>
                    <option value="pensioner">Retiree / Pensioner (Rentner)</option>
                    <option value="student">Student / In Vocational Training (Azubi)</option>
                    <option value="unemployed_buergergeld">Receiving Citizen’s Allowance (Bürgergeld / SGB II)</option>
                  </select>
                </div>

                {/* Einbürgerungstest & Criminal Record */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={dePassedEinbuergerungstest}
                      onChange={(e) => setDePassedEinbuergerungstest(e.target.checked)}
                      className="w-4 h-4 rounded text-passport-800"
                    />
                    <span className="text-xs font-semibold text-slate-800">
                      {language === 'en' ? 'Passed Einbürgerungstest' : 'Einbürgerungstest bestanden'}
                    </span>
                  </label>

                  <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={deHasCleanRecord}
                      onChange={(e) => setDeHasCleanRecord(e.target.checked)}
                      className="w-4 h-4 rounded text-passport-800"
                    />
                    <span className="text-xs font-semibold text-slate-800">
                      {language === 'en' ? 'Clean Record (≤ 90 Tagessätze)' : 'Straffrei (≤ 90 Tagessätze)'}
                    </span>
                  </label>
                </div>
              </>
            )}

            {/* US INPUTS */}
            {currentCountry === 'us' && (
              <>
                {/* 1. LPR Years */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-slate-800">
                      {language === 'en' ? '1. Years as Permanent Resident (Green Card Holder)' : '1. Jahre als Green Card Inhaber'}
                    </label>
                    <span className="px-3 py-1 bg-blue-50 text-blue-900 font-extrabold text-sm rounded-lg border border-blue-200">
                      {usLprYears} {usLprYears === 1 ? (language === 'en' ? 'year' : 'Jahr') : (language === 'en' ? 'years' : 'Jahre')}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.25"
                    value={usLprYears}
                    onChange={(e) => setUsLprYears(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>0 yrs</span>
                    <span className="font-semibold text-blue-700">2.75 yrs (90-day early marriage)</span>
                    <span className="font-semibold text-slate-900">4.75 yrs (90-day early general)</span>
                    <span>10 yrs</span>
                  </div>
                </div>

                {/* 2. Marriage Track */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={usIsMarriedToCitizen}
                      onChange={(e) => setUsIsMarriedToCitizen(e.target.checked)}
                      className="w-4 h-4 mt-0.5 rounded text-blue-900"
                    />
                    <div>
                      <span className="text-sm font-bold text-slate-900 block">
                        {language === 'en' ? 'Married to a U.S. Citizen for at least 3 years (INA § 319)' : 'Seit mindestens 3 Jahren mit US-Bürger verheiratet (§ 319)'}
                      </span>
                      <span className="text-xs text-slate-500 block mt-0.5">
                        {language === 'en' ? 'Allows naturalizing after only 3 years as a permanent resident instead of 5.' : 'Ermöglicht Einbürgerung bereits nach 3 statt 5 Jahren.'}
                      </span>
                    </div>
                  </label>
                  {usIsMarriedToCitizen && (
                    <div className="mt-2 pl-7 flex items-center gap-2">
                      <span className="text-xs text-slate-600 font-semibold">{language === 'en' ? 'Years married:' : 'Ehejahre:'}</span>
                      <input
                        type="number"
                        min="0"
                        max="50"
                        value={usYearsMarried}
                        onChange={(e) => setUsYearsMarried(parseInt(e.target.value) || 0)}
                        className="w-16 px-2 py-1 text-xs border border-slate-300 rounded font-semibold text-center"
                      />
                    </div>
                  )}
                </div>

                {/* 3. Physical Presence Months */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-sm font-bold text-slate-800">
                      {language === 'en' ? '2. Months Physically Present in U.S. Soil' : '2. Monate physische US-Anwesenheit'}
                    </label>
                    <span className="text-xs font-bold font-mono text-slate-700">{usMonthsPhysicalPresence} months</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="60"
                    value={usMonthsPhysicalPresence}
                    onChange={(e) => setUsMonthsPhysicalPresence(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>0 mos</span>
                    <span className="font-semibold text-emerald-700">18 mos (Spouse min)</span>
                    <span className="font-semibold text-blue-800">30 mos (Standard min)</span>
                    <span>60 mos</span>
                  </div>
                </div>

                {/* Checkboxes for Continuous Residence & Taxes */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={usHasContinuousResidence}
                      onChange={(e) => setUsHasContinuousResidence(e.target.checked)}
                      className="w-4 h-4 rounded text-blue-900"
                    />
                    <span className="text-xs font-semibold text-slate-800">
                      {language === 'en' ? 'No single trip outside U.S. > 6 months (Continuous Residence)' : 'Keine einzelne Auslandsreise über 6 Monate'}
                    </span>
                  </label>

                  <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={usFiledTaxes}
                      onChange={(e) => setUsFiledTaxes(e.target.checked)}
                      className="w-4 h-4 rounded text-blue-900"
                    />
                    <span className="text-xs font-semibold text-slate-800">
                      {language === 'en' ? 'Filed all required IRS tax returns (Last 5 years)' : 'Alle IRS-Steuererklärungen der letzten 5 Jahre abgegeben'}
                    </span>
                  </label>

                  <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={usSelectiveService}
                      onChange={(e) => setUsSelectiveService(e.target.checked)}
                      className="w-4 h-4 rounded text-blue-900"
                    />
                    <span className="text-xs font-semibold text-slate-800">
                      {language === 'en' ? 'Registered with Selective Service (males aged 18-26) or exempt' : 'Selective Service Registrierung (Männer 18-26) erfüllt/befreit'}
                    </span>
                  </label>

                  <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={usGoodMoralCharacter}
                      onChange={(e) => setUsGoodMoralCharacter(e.target.checked)}
                      className="w-4 h-4 rounded text-blue-900"
                    />
                    <span className="text-xs font-semibold text-slate-800">
                      {language === 'en' ? 'Good Moral Character (No disqualifying crimes / paid child support)' : 'Good Moral Character (keine schweren Vorstrafen, Unterhalt gezahlt)'}
                    </span>
                  </label>

                  <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={usBasicEnglishCivics}
                      onChange={(e) => setUsBasicEnglishCivics(e.target.checked)}
                      className="w-4 h-4 rounded text-blue-900"
                    />
                    <span className="text-xs font-semibold text-slate-800">
                      {language === 'en' ? 'Basic English literacy & prepared for 10-Question Civics Test' : 'Grundkenntnisse Englisch & Civics-Test'}
                    </span>
                  </label>

                  <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={usWillingToTakeOath}
                      onChange={(e) => setUsWillingToTakeOath(e.target.checked)}
                      className="w-4 h-4 rounded text-blue-900"
                    />
                    <span className="text-xs font-semibold text-slate-800">
                      {language === 'en' ? 'Willing to take the Oath of Allegiance to the United States' : 'Bereitschaft zum Treueeid (Oath of Allegiance)'}
                    </span>
                  </label>
                </div>
              </>
            )}

            {/* AUSTRALIA INPUTS */}
            {currentCountry === 'au' && (
              <>
                {/* 1. Years in Australia */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-slate-800">
                      {language === 'en' ? '1. Lawful Years Living in Australia' : '1. Aufenthaltsjahre in Australien'}
                    </label>
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-900 font-extrabold text-sm rounded-lg border border-emerald-200">
                      {auYearsInAustralia} {auYearsInAustralia === 1 ? (language === 'en' ? 'year' : 'Jahr') : (language === 'en' ? 'years' : 'Jahre')}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.5"
                    value={auYearsInAustralia}
                    onChange={(e) => setAuYearsInAustralia(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-800"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>0 yrs</span>
                    <span className="font-semibold text-emerald-700">4 yrs (Required minimum)</span>
                    <span>10 yrs</span>
                  </div>
                </div>

                {/* 2. Permanent Resident Months */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-sm font-bold text-slate-800">
                      {language === 'en' ? '2. Months as an Australian Permanent Resident (PR)' : '2. Monate als Permanent Resident (PR)'}
                    </label>
                    <span className="text-xs font-bold font-mono text-slate-700">{auMonthsAsPR} months</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="48"
                    value={auMonthsAsPR}
                    onChange={(e) => setAuMonthsAsPR(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-800"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>0 mos</span>
                    <span className="font-semibold text-emerald-700">12 mos (Required minimum)</span>
                    <span>48 mos</span>
                  </div>
                </div>

                {/* 3. Travel Limits (4y and 12m) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                    <label className="text-xs font-bold text-slate-800 block">
                      {language === 'en' ? 'Days Absent in Past 4 Years:' : 'Abwesenheit letzte 4 Jahre:'}
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="1000"
                      value={auDaysAbsent4Years}
                      onChange={(e) => setAuDaysAbsent4Years(parseInt(e.target.value) || 0)}
                      className="w-full px-2.5 py-1.5 text-xs border border-slate-300 rounded-md font-semibold"
                    />
                    <span className="text-[11px] text-slate-500 block">
                      {language === 'en' ? 'Max allowed: 365 days' : 'Maximal 365 Tage erlaubt'}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                    <label className="text-xs font-bold text-slate-800 block">
                      {language === 'en' ? 'Days Absent in Past 12 Months:' : 'Abwesenheit letzte 12 Monate:'}
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="365"
                      value={auDaysAbsent12Months}
                      onChange={(e) => setAuDaysAbsent12Months(parseInt(e.target.value) || 0)}
                      className="w-full px-2.5 py-1.5 text-xs border border-slate-300 rounded-md font-semibold"
                    />
                    <span className="text-[11px] text-slate-500 block">
                      {language === 'en' ? 'Max allowed: 90 days' : 'Maximal 90 Tage erlaubt'}
                    </span>
                  </div>
                </div>

                {/* Character & Values Check */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={auPassesCharacterTest}
                      onChange={(e) => setAuPassesCharacterTest(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-800"
                    />
                    <span className="text-xs font-semibold text-slate-800">
                      {language === 'en' ? 'Character Requirement: Clean police record (AFP Code 33)' : 'Charakterliche Eignung: Einwandfreies Führungszeugnis (AFP)'}
                    </span>
                  </label>

                  <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={auUnderstandsEnglishValues}
                      onChange={(e) => setAuUnderstandsEnglishValues(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-800"
                    />
                    <span className="text-xs font-semibold text-slate-800">
                      {language === 'en' ? 'Prepared for 20-Question Test & Australian Values Pledge' : 'Bereit für den 20-Fragen-Test & Australian Values Pledge'}
                    </span>
                  </label>

                  <label className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={auPlansToReside}
                      onChange={(e) => setAuPlansToReside(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-800"
                    />
                    <span className="text-xs font-semibold text-slate-800">
                      {language === 'en' ? 'Intention to reside in Australia or maintain close continuing association' : 'Absicht zum dauerhaften Aufenthalt bzw. enge Bindung'}
                    </span>
                  </label>
                </div>
              </>
            )}
          </div>

          {/* Results Column (5 cols) */}
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
                  <span>{result.isEligibleNow ? (language === 'en' ? 'Eligible to Apply' : 'Antragsberechtigt') : (language === 'en' ? 'Criteria Open' : 'Kriterien offen')}</span>
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
                    {language === 'en' ? 'Requirements to Satisfy:' : 'Noch zu erledigende Punkte:'}
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
                        👉 <strong>{language === 'en' ? 'Action:' : 'Lösung:'}</strong> {item.actionTip[language]}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Passed Criteria Highlights */}
              {result.passedCriteria.length > 0 && (
                <div className="mt-5">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    {language === 'en' ? 'Satisfied Legal Criteria:' : 'Erfüllte Voraussetzungen:'}
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

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col gap-2">
                <button
                  onClick={() => {
                    handleCelebrate();
                    onNavigateToChecklist();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all"
                >
                  <Sparkles className="w-4 h-4 text-eagleGold-400" />
                  <span>{language === 'en' ? 'View Document Checklist' : 'Unterlagen-Checkliste anzeigen'}</span>
                </button>

                <button
                  onClick={onNavigateToLetters}
                  className="w-full flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 py-1.5"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>{language === 'en' ? 'View Official Letters' : 'Behörden-Musterbriefe abrufen'}</span>
                </button>

                {onNavigateToCountries && (
                  <button
                    onClick={onNavigateToCountries}
                    className="w-full flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 py-1"
                  >
                    <span>{language === 'en' ? '🌐 View Dual Citizenship Guide' : '🌐 Doppelpass-Leitfaden'}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
