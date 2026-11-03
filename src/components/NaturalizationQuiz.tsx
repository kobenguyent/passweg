import React, { useState } from 'react';
import { 
  GraduationCap, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Sparkles, 
  Award,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import { Language } from '../types';
import { quizData } from '../data/quizData';
import { triggerCelebration } from '../utils/confetti';
import { saveStoredQuizScore } from '../utils/storage';

interface NaturalizationQuizProps {
  language: Language;
}

export const NaturalizationQuiz: React.FC<NaturalizationQuizProps> = ({ language }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const currentQ = quizData[currentIndex];
  const totalQuestions = quizData.length;

  const handleSelectOption = (optionIndex: number) => {
    if (selectedAnswers[currentQ.id] !== undefined) return; // already answered

    const updated = { ...selectedAnswers, [currentQ.id]: optionIndex };
    setSelectedAnswers(updated);
    setShowExplanation(true);

    // If this was the last question, conclude
    if (currentIndex === totalQuestions - 1) {
      setTimeout(() => {
        setIsFinished(true);
        const correctCount = Object.keys(updated).filter(
          id => updated[Number(id)] === quizData.find(q => q.id === Number(id))?.correctIndex
        ).length;
        saveStoredQuizScore(correctCount, totalQuestions);
        if (correctCount >= Math.ceil(totalQuestions * 0.515)) {
          triggerCelebration();
        }
      }, 1200);
    }
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setShowExplanation(false);
    setIsFinished(false);
  };

  const score = Object.keys(selectedAnswers).filter(
    id => selectedAnswers[Number(id)] === quizData.find(q => q.id === Number(id))?.correctIndex
  ).length;

  const isPassing = score >= Math.ceil(totalQuestions * 0.515);

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-purple-700" />
            <span>{language === 'en' ? 'BAMF Test Simulator (33 Qs Format)' : 'BAMF Einbürgerungstest Simulator'}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {language === 'en' ? 'Naturalization Exam Practice' : 'Einbürgerungstest Prüfungstrainer'}
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            {language === 'en'
              ? 'Test your knowledge on the German constitution, history, and the new 2024 additions on antisemitism & democratic values.'
              : 'Offizielle Prüfungsfragen zu Grundgesetz, Geschichte und den neuen 2024er-Fragen zu Antisemitismus und Demokratie.'}
          </p>
        </div>

        {!isFinished ? (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
            {/* Progress Bar & Status */}
            <div className="flex items-center justify-between text-xs font-bold text-slate-500">
              <span className="font-mono">
                {language === 'en' ? 'Question' : 'Frage'} {currentIndex + 1} / {totalQuestions}
              </span>
              <div className="flex items-center gap-2">
                {currentQ.is2024New && (
                  <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold border border-amber-200 flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" />
                    {language === 'en' ? 'New 2024 Reform Q' : 'Neue Reformfrage 2024'}
                  </span>
                )}
                <span className="text-passport-800 font-mono">
                  {score} {language === 'en' ? 'Correct' : 'Richtig'}
                </span>
              </div>
            </div>

            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div 
                className="h-full bg-passport-800 transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>

            {/* Question Title */}
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              {currentQ.question[language]}
            </h3>

            {/* Options */}
            <div className="space-y-3">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedAnswers[currentQ.id] === idx;
                const isAnswered = selectedAnswers[currentQ.id] !== undefined;
                const isCorrect = idx === currentQ.correctIndex;

                let optionClass = 'border-slate-200 bg-white hover:border-slate-300 text-slate-800';
                if (isAnswered) {
                  if (isCorrect) {
                    optionClass = 'border-emerald-500 bg-emerald-50/70 text-emerald-950 font-bold';
                  } else if (isSelected) {
                    optionClass = 'border-rose-500 bg-rose-50/70 text-rose-950 font-bold';
                  } else {
                    optionClass = 'border-slate-100 bg-slate-50/50 text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswered}
                    className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between gap-3 ${optionClass}`}
                  >
                    <span>{opt[language]}</span>
                    {isAnswered && (
                      <span className="shrink-0">
                        {isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                        {isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-600" />}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation card */}
            {showExplanation && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5 animate-fadeIn">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-passport-800" />
                  <span>{language === 'en' ? 'BAMF Background & Legal Context:' : 'Hintergrund & rechtliche Erläuterung:'}</span>
                </div>
                <p className="leading-relaxed">
                  {currentQ.explanation[language]}
                </p>
              </div>
            )}

            {/* Navigation Button */}
            {selectedAnswers[currentQ.id] !== undefined && (
              <div className="pt-2 flex justify-end">
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-passport-800 hover:bg-passport-900 text-white font-bold text-xs shadow-sm transition"
                >
                  <span>{currentIndex < totalQuestions - 1 ? (language === 'en' ? 'Next Question' : 'Nächste Frage') : (language === 'en' ? 'View Final Results' : 'Ergebnis anzeigen')}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Finished Screen */
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-8 text-center space-y-6">
            <div className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center ${
              isPassing ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
            }`}>
              {isPassing ? <Award className="w-8 h-8" /> : <GraduationCap className="w-8 h-8" />}
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-slate-900">
                {isPassing 
                  ? (language === 'en' ? 'Congratulations! You Passed!' : 'Herzlichen Glückwunsch! Bestanden!') 
                  : (language === 'en' ? 'Almost Passed! Review and Retry' : 'Knapp verfehlt! Noch etwas üben')}
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                {isPassing
                  ? (language === 'en' ? `You answered ${score} out of ${totalQuestions} questions correctly. You easily met the legal requirement (> 51.5% correct).` : `Sie haben ${score} von ${totalQuestions} Fragen richtig beantwortet. Die gesetzliche Bestehensgrenze ist sicher erreicht.`)
                  : (language === 'en' ? `You achieved ${score} out of ${totalQuestions} points. 17 correct answers are required on the official 33-question BAMF test.` : `Sie haben ${score} von ${totalQuestions} Punkten erzielt. Im echten BAMF-Test sind 17 von 33 Punkten zum Bestehen nötig.`)}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-sm mx-auto text-xs text-slate-600 space-y-1">
              <div>🎯 <strong>{language === 'en' ? 'Passing Benchmark:' : 'Bestehensgrenze:'}</strong> 17 / 33 {language === 'en' ? 'questions' : 'Fragen'}</div>
              <div>⏱️ <strong>{language === 'en' ? 'Official Exam Time:' : 'Offizielle Prüfungszeit:'}</strong> 60 {language === 'en' ? 'minutes' : 'Minuten'}</div>
              <div>💶 <strong>{language === 'en' ? 'Official Exam Fee:' : 'Prüfungsgebühr:'}</strong> 25 €</div>
            </div>

            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-passport-800 hover:bg-passport-900 text-white font-bold text-xs shadow transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Restart Practice Quiz' : 'Test wiederholen'}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
