import React, { useState } from 'react';
import { 
  Globe2, 
  CheckCircle2, 
  ExternalLink, 
  Plane, 
  DollarSign, 
  FileText, 
  ShieldCheck,
  Building,
  ArrowRightLeft
} from 'lucide-react';
import { Language } from '../types';
import { countryGuidesData } from '../data/countryGuides';

interface CountryGuidesProps {
  language: Language;
  onNavigateToCalculator: () => void;
}

export const CountryGuides: React.FC<CountryGuidesProps> = ({
  language,
  onNavigateToCalculator,
}) => {
  const [activeCountry, setActiveCountry] = useState<'us' | 'au'>('us');

  const guide = countryGuidesData.find((g) => g.id === activeCountry) || countryGuidesData[0];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold mb-3">
            <Globe2 className="w-3.5 h-3.5 text-blue-700" />
            <span>{language === 'en' ? 'Country-Specific Expat Hub' : 'Länderspezifischer Ratgeber'}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {language === 'en' ? 'Dual Citizenship for US & Australian Citizens' : 'Doppelpass für US- und australische Bürger'}
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            {language === 'en'
              ? 'Complete guidance on keeping your home passport, acquiring birth certificate apostilles, managing IRS taxes or Aussie superannuation, and border-crossing rules.'
              : 'Rechtssichere Anleitungen zur Beibehaltung der Heimatstaatsbürgerschaft, DFAT- und US-Bundesstaat-Apostillen, IRS-Steuern, Superannuation und Passkontrollen.'}
          </p>
        </div>

        {/* Country Selector Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 bg-slate-200/80 rounded-2xl gap-2 shadow-inner">
            <button
              onClick={() => setActiveCountry('us')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                activeCountry === 'us'
                  ? 'bg-white text-slate-900 shadow-md ring-1 ring-slate-200 scale-102'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="text-xl">🇺🇸</span>
              <span>{language === 'en' ? 'United States' : 'USA (Vereinigte Staaten)'}</span>
            </button>

            <button
              onClick={() => setActiveCountry('au')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                activeCountry === 'au'
                  ? 'bg-white text-slate-900 shadow-md ring-1 ring-slate-200 scale-102'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="text-xl">🇦🇺</span>
              <span>{language === 'en' ? 'Australia' : 'Australien'}</span>
            </button>
          </div>
        </div>

        {/* Hero Card for Selected Country */}
        <div className="bg-gradient-to-r from-passport-950 via-passport-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{guide.flag}</span>
                <div>
                  <h3 className="text-2xl font-extrabold text-white">
                    {guide.name[language]}
                  </h3>
                  <p className="text-xs text-eagleGold-300 font-mono">
                    {guide.passportName[language]} + {language === 'en' ? 'German Reisepass' : 'Deutscher Reisepass'}
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                {guide.tagline[language]}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shrink-0 text-center sm:text-right">
              <div className="flex items-center justify-center sm:justify-end gap-1.5 text-emerald-400 font-bold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>{language === 'en' ? 'Dual Nationality 100% Legal' : 'Doppelpass 100 % erlaubt'}</span>
              </div>
              <div className="text-[11px] text-slate-300 mt-1">
                {language === 'en' ? 'No loss of citizenship in either country' : 'Kein Verlust der Staatsangehörigkeit'}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Pillar 1: Dual Citizenship Legality */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-passport-800 font-bold text-sm uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>{language === 'en' ? 'Dual Citizenship Legality' : 'Rechtslage zur Mehrstaatigkeit'}</span>
            </div>
            <h4 className="text-base font-extrabold text-slate-900">
              {language === 'en' ? 'Automatic Retention of Your Passport' : 'Automatische Beibehaltung Ihres Passes'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {guide.dualCitizenshipLegality.summary[language]}
            </p>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700">
              ⚖️ <strong>{language === 'en' ? 'Legal Basis:' : 'Rechtsgrundlage:'}</strong> {guide.dualCitizenshipLegality.legalBasis}
            </div>
          </div>

          {/* Pillar 2: Travel & Border Control Protocol */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-passport-800 font-bold text-sm uppercase tracking-wider">
              <Plane className="w-4 h-4 text-sky-600" />
              <span>{language === 'en' ? 'Two-Passport Travel Rules' : 'Reiseregeln mit zwei Pässen'}</span>
            </div>
            <h4 className="text-base font-extrabold text-slate-900">
              {language === 'en' ? 'Which Passport to Present at the Border?' : 'Welcher Pass wird an der Grenze gezeigt?'}
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-600">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <strong>🇪🇺 {language === 'en' ? 'Germany / Schengen Border:' : 'Grenze Deutschland / Schengen:'}</strong>{' '}
                {guide.travelRules.leavingGermany[language]}
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <strong>{guide.flag} {language === 'en' ? `${guide.name.en} Border:` : `Grenze ${guide.name.de}:`}</strong>{' '}
                {guide.travelRules.enteringHomeCountry[language]}
              </div>
            </div>
            <div className="text-[11px] font-mono text-slate-500">
              📜 {guide.travelRules.statutoryLaw}
            </div>
          </div>

          {/* Pillar 3: Apostille & Civil Document Procurement */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-passport-800 font-bold text-sm uppercase tracking-wider">
              <FileText className="w-4 h-4 text-purple-600" />
              <span>{language === 'en' ? 'Birth Certificate & Apostille' : 'Geburtsurkunde & Apostille'}</span>
            </div>
            <h4 className="text-base font-extrabold text-slate-900">
              {guide.apostilleGuide.authority}
            </h4>
            <div className="space-y-2">
              {guide.apostilleGuide.howToStepByStep.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-800 font-bold text-xs shrink-0 flex items-center justify-center mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step[language]}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs text-slate-500">
              <span>⏱️ {guide.apostilleGuide.processingTime}</span>
              <span>💶 {guide.apostilleGuide.costs}</span>
              <a
                href={guide.apostilleGuide.officialLink}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 font-semibold text-passport-800 hover:underline"
              >
                <span>{language === 'en' ? 'Official Link' : 'Offizielle Website'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Pillar 4: Tax, Pension & Financial Implications */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-passport-800 font-bold text-sm uppercase tracking-wider">
              <DollarSign className="w-4 h-4 text-emerald-600" />
              <span>{language === 'en' ? 'Taxes, Pension & Finances' : 'Steuern, Rente & Finanzen'}</span>
            </div>
            <h4 className="text-base font-extrabold text-slate-900">
              {language === 'en' ? 'Tax Status After Naturalization' : 'Steuerstatus nach der Einbürgerung'}
            </h4>
            <p className="text-xs text-slate-600">
              {guide.taxAndFinance.summary[language]}
            </p>
            <div className="space-y-2">
              {guide.taxAndFinance.keyObligations.map((item, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <span className="font-bold text-slate-900 block mb-0.5">{item.title}</span>
                  <span className="text-slate-600 leading-relaxed">{item.desc[language]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Travel Protocol Walkthrough Carousel / Box */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm mb-10 space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
            <ArrowRightLeft className="w-5 h-5 text-passport-800" />
            <span>
              {language === 'en'
                ? `The Two-Passport Airport Walkthrough (${guide.flag} ⇄ 🇩🇪 Germany)`
                : `Flughafen-Praxis mit zwei Pässen (${guide.flag} ⇄ 🇩🇪 Deutschland)`}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="font-extrabold text-passport-800 uppercase tracking-wide block">
                1. {language === 'en' ? 'Airline Check-In / Booking' : 'Flugbuchung & Check-in'}
              </span>
              <p className="text-slate-600 leading-relaxed">
                {language === 'en'
                  ? `Provide the passport matching your destination country. When flying to ${guide.name.en}, enter your ${guide.passportName.en} details. When flying to Germany, enter your German passport.`
                  : `Hinterlegen Sie den Pass Ihres Ziellandes. Beim Flug nach ${guide.name.de} Ihren ${guide.passportName.de}; beim Flug nach Deutschland Ihren deutschen Pass.`}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="font-extrabold text-passport-800 uppercase tracking-wide block">
                2. {language === 'en' ? 'Leaving / Entering Schengen' : 'Schengen-Grenzkontrolle'}
              </span>
              <p className="text-slate-600 leading-relaxed">
                {language === 'en'
                  ? 'Always present your German Passport or Personalausweis to the German Federal Police (Bundespolizei) or automatic e-Gates. It is illegal for German citizens to use foreign passports at German borders.'
                  : 'Stets den deutschen Pass oder Personalausweis bei der Bundespolizei / an den automatischen e-Gates vorzeigen. Die Nutzung des ausländischen Passes ist nach § 1 PassG verboten.'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="font-extrabold text-passport-800 uppercase tracking-wide block">
                3. {language === 'en' ? `Entering ${guide.name.en}` : `Einreise nach ${guide.name.de}`}
              </span>
              <p className="text-slate-600 leading-relaxed">
                {language === 'en'
                  ? `Present your ${guide.passportName.en} at border control. You have an unconditional statutory right of entry as a citizen without tourist visas or ESTA/ETA requirements.`
                  : `Zeigen Sie Ihren ${guide.passportName.de} bei der Grenzkontrolle. Als Staatsbürger haben Sie unbeschränktes Einreiserecht ohne Touristenvisa oder ESTA/ETA.`}
              </p>
            </div>
          </div>
        </div>

        {/* Consular Offices in Germany */}
        <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xs font-bold text-slate-900 flex items-center justify-center sm:justify-start gap-1.5">
              <Building className="w-4 h-4 text-passport-800" />
              <span>{guide.consularServicesInGermany.name}</span>
            </div>
            <div className="text-xs text-slate-600">
              {language === 'en' ? 'Locations in Germany:' : 'Standorte in Deutschland:'}{' '}
              <span className="font-semibold text-slate-800">{guide.consularServicesInGermany.locations.join(' • ')}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={guide.consularServicesInGermany.website}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 hover:bg-slate-50 shadow-xs transition"
            >
              <span>{language === 'en' ? 'Consular Website' : 'Konsularportal'}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <button
              onClick={onNavigateToCalculator}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-passport-800 hover:bg-passport-900 text-xs font-bold text-white shadow-xs transition"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-eagleGold-400" />
              <span>{language === 'en' ? 'Check My Eligibility' : 'Voraussetzungen berechnen'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
