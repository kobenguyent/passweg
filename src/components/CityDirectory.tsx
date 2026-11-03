import React from 'react';
import { Building2, ExternalLink, Clock, Laptop } from 'lucide-react';
import { Language } from '../types';
import { cityGuides } from '../data/cityGuides';

interface CityDirectoryProps {
  language: Language;
}

export const CityDirectory: React.FC<CityDirectoryProps> = ({ language }) => {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold mb-3">
            <Building2 className="w-3.5 h-3.5 text-passport-800" />
            <span>{language === 'en' ? 'Local Authorities Guide' : 'Kommunaler Behörden-Guide'}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {language === 'en' ? 'Major City Processing Portals & Realities' : 'Großstadt-Portale & Bearbeitungszeiten'}
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            {language === 'en'
              ? 'Naturalization procedures differ by federal state and municipality. Find links to your city’s official portal and local processing timelines.'
              : 'Verfahrensweisen variieren je nach Bundesland und Stadt. Hier finden Sie direkte Zugänge zu den Einbürgerungsportalen und realistische Zeithorizonte.'}
          </p>
        </div>

        {/* City Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cityGuides.map((guide) => (
            <div
              key={guide.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{guide.city}</h3>
                    <span className="text-xs font-medium text-slate-500">{guide.state}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1">
                    <Laptop className="w-3 h-3 text-passport-800" />
                    <span>{guide.applicationMode}</span>
                  </span>
                </div>

                {/* Wait time */}
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                  <Clock className="w-4 h-4 text-passport-700 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">{language === 'en' ? 'Estimated Wait:' : 'Wartezeit:'}</span>{' '}
                    <span>{guide.averageWaitMonths}</span>
                  </div>
                </div>

                {/* Key Insight */}
                <div className="text-xs text-slate-600 leading-relaxed">
                  <p className="font-bold text-slate-900 mb-1">{language === 'en' ? 'Local Status:' : 'Besonderheit:'}</p>
                  <p>{guide.keyInsight[language]}</p>
                </div>

                {/* Contact Tip */}
                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs text-amber-950 leading-relaxed">
                  <strong>💡 {language === 'en' ? 'Local Tip:' : 'Praxistipp:'}</strong> {guide.contactTip[language]}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-slate-100 mt-4">
                <a
                  href={guide.portalUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition"
                >
                  <span>{guide.portalName}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
