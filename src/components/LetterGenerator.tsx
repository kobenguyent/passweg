import React, { useState } from 'react';
import { Mail, Copy, Check, Download, AlertCircle, FileText } from 'lucide-react';
import { Language, CountryCode } from '../types';
import { getLettersForCountry } from '../data/portalData';
import { countriesConfig } from '../data/countriesConfig';

interface LetterGeneratorProps {
  language: Language;
  currentCountry: CountryCode;
}

export const LetterGenerator: React.FC<LetterGeneratorProps> = ({ language, currentCountry }) => {
  const templates = getLettersForCountry(currentCountry);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(templates[0]?.id || '');
  const [formFields, setFormFields] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState<boolean>(false);

  const currentTemplate = templates.find((t) => t.id === selectedTemplateId) || templates[0];
  const meta = countriesConfig[currentCountry];

  const handleFieldChange = (fieldId: string, value: string) => {
    setFormFields((prev) => ({ ...prev, [fieldId]: value }));
  };

  const letterBody = currentTemplate.generateText(formFields);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(letterBody);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([letterBody], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `${currentTemplate.id}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold mb-3">
            <Mail className="w-3.5 h-3.5 text-blue-700" />
            <span>{language === 'en' ? 'Legal Letter Generator' : 'Behörden-Briefgenerator'}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {meta.flag} {language === 'en' ? `${meta.name.en} Official Letter Templates` : `Musterbriefe (${meta.name.de})`}
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            {language === 'en'
              ? 'Draft polite status inquiries, employer verification certificates, or statutory warning notices in formal German.'
              : 'Erstellen Sie Sachstandsanfragen, Arbeitgeberbescheinigungen oder Fristsetzungen nach § 75 VwGO auf Knopfdruck.'}
          </p>
        </div>

        {/* Template Selector Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {templates.map((template) => {
            const isSelected = selectedTemplateId === template.id;
            return (
              <button
                key={template.id}
                onClick={() => {
                  setSelectedTemplateId(template.id);
                  setFormFields({});
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  isSelected
                    ? 'bg-passport-800 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{template.title[language]}</span>
              </button>
            );
          })}
        </div>

        {/* Template Purpose Banner */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-8 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-passport-800 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <div className="text-xs font-bold text-slate-900">
              {currentTemplate.title[language]}
            </div>
            <p className="text-xs text-slate-600">
              {currentTemplate.purpose[language]} • <strong>{language === 'en' ? 'Timing:' : 'Empfohlener Zeitpunkt:'}</strong> {currentTemplate.recommendedTiming[language]}
            </p>
          </div>
        </div>

        {/* Form Inputs & Live Preview Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Fields (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-100">
              {language === 'en' ? 'Fill In Your Case Information' : 'Ihre Falldaten eintragen'}
            </h3>

            {currentTemplate.fields.map((field) => (
              <div key={field.id} className="space-y-1">
                <label className="block text-xs font-bold text-slate-700">
                  {field.label[language]}
                </label>
                <input
                  type="text"
                  placeholder={field.placeholder}
                  value={formFields[field.id] || ''}
                  onChange={(e) => handleFieldChange(field.id, e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-passport-700 focus:border-passport-700 transition"
                />
              </div>
            ))}
          </div>

          {/* Preview & Actions (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                {language === 'en' ? 'Live German Document Output' : 'Vorschau auf Deutsch'}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-xs font-semibold text-slate-700 shadow-xs transition"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? (language === 'en' ? 'Copied!' : 'Kopiert!') : (language === 'en' ? 'Copy Text' : 'Kopieren')}</span>
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-passport-800 hover:bg-passport-900 text-xs font-semibold text-white shadow-xs transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? 'Download .txt' : 'Download'}</span>
                </button>
              </div>
            </div>

            {/* Formatted Code / Text Area */}
            <pre className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-800 font-mono whitespace-pre-wrap leading-relaxed max-h-[500px] overflow-y-auto select-all">
              {letterBody}
            </pre>

            <div className="text-[11px] text-slate-500 leading-normal">
              💡 <strong>{language === 'en' ? 'Pro-Tip:' : 'Tipp:'}</strong> {language === 'en' ? 'Always send formal legal notices by "Einwurf-Einschreiben" (registered mail) so you receive an official tracking receipt confirming date of delivery.' : 'Wichtige Fristsetzungen stets per Einwurf-Einschreiben versenden, um einen rechtsverbindlichen Zustellnachweis mit Sendungsnummer zu besitzen.'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
