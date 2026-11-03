import { CountryCode, RoadmapStep, DocumentItem, QuizQuestion, TipItem, LetterTemplate } from '../types';
import { roadmapSteps as deRoadmap } from './roadmapData';
import { documentsData as deDocuments } from './documentsData';
import { quizData as deQuiz } from './quizData';
import { tipsData as deTips } from './tipsData';
import { letterTemplates as deLetters } from './letterTemplates';

import { usRoadmapSteps, usDocumentList, usQuizQuestions, usTipsData, usLetterTemplates } from './usData';
import { auRoadmapSteps, auDocumentList, auQuizQuestions, auTipsData, auLetterTemplates } from './auData';

export function getRoadmapForCountry(country: CountryCode): RoadmapStep[] {
  switch (country) {
    case 'us': return usRoadmapSteps;
    case 'au': return auRoadmapSteps;
    case 'de':
    default:
      return deRoadmap;
  }
}

export function getDocumentsForCountry(country: CountryCode): DocumentItem[] {
  switch (country) {
    case 'us': return usDocumentList;
    case 'au': return auDocumentList;
    case 'de':
    default:
      return deDocuments;
  }
}

export function getQuizForCountry(country: CountryCode): QuizQuestion[] {
  switch (country) {
    case 'us': return usQuizQuestions;
    case 'au': return auQuizQuestions;
    case 'de':
    default:
      return deQuiz;
  }
}

export function getTipsForCountry(country: CountryCode): TipItem[] {
  switch (country) {
    case 'us': return usTipsData;
    case 'au': return auTipsData;
    case 'de':
    default:
      return deTips;
  }
}

export function getLettersForCountry(country: CountryCode): LetterTemplate[] {
  switch (country) {
    case 'us': return usLetterTemplates;
    case 'au': return auLetterTemplates;
    case 'de':
    default:
      return deLetters;
  }
}
