import React from 'react';
import { Shield, Github, Heart } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  language: Language;
  onSelectTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onSelectTab }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-passport-800 flex items-center justify-center font-bold text-eagleGold-400 font-mono text-sm">
                PW
              </div>
              <span className="text-lg font-extrabold text-white">
                Pass<span className="text-passport-500">Weg</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {language === 'en'
                ? 'PassWeg is the modern, open-source guide and toolkit designed by and for candidates seeking German citizenship under the reformed 2024 StAG legislation.'
                : 'PassWeg ist der moderne Open-Source-Wegweiser für Einbürgerungsbewerber in Deutschland auf Basis des reformierten Staatsangehörigkeitsgesetzes 2024.'}
            </p>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3 text-xs">
              {language === 'en' ? 'Toolkit' : 'Werkzeuge'}
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onSelectTab('calculator')} className="hover:text-white transition">
                  {language === 'en' ? 'Eligibility Calculator' : 'Voraussetzungsrechner'}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('roadmap')} className="hover:text-white transition">
                  {language === 'en' ? '7-Stage Roadmap' : '7-Schritte-Ablauf'}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('countries')} className="hover:text-white transition">
                  {language === 'en' ? 'US & Australian Citizens' : 'USA- & Australien-Guide'}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('checklist')} className="hover:text-white transition">
                  {language === 'en' ? 'Document Checklist' : 'Unterlagen-Checkliste'}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('quiz')} className="hover:text-white transition">
                  {language === 'en' ? 'Einbürgerungstest Quiz' : 'BAMF-Prüfungstrainer'}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('letters')} className="hover:text-white transition">
                  {language === 'en' ? 'Official Letter Templates' : 'Brief-Muster'}
                </button>
              </li>
            </ul>
          </div>

          {/* Legal / Disclaimer */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3 text-xs flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-passport-500" />
              <span>{language === 'en' ? 'Disclaimer' : 'Rechtshinweis'}</span>
            </h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              {language === 'en'
                ? 'PassWeg is an informational community project and does not constitute formal legal counsel. For individual complex cases, consult an attorney accredited in migration law.'
                : 'PassWeg ist ein Informationsangebot und ersetzt keine individuelle Rechtsberatung durch einen zugelassenen Fachanwalt für Migrationsrecht.'}
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-1">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-passport-600 fill-passport-600 inline" />
            <span>for future German citizens worldwide.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Github className="w-3.5 h-3.5 text-slate-400" />
              <span>Deployable on GitHub Pages</span>
            </span>
            <span>StAG § 10 Reform 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
