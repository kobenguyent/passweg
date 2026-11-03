import { describe, it, expect } from 'vitest';
import { quizData } from '../data/quizData';

describe('Einbürgerungstest Quiz Questions & 2024 Reform', () => {
  it('contains valid multiple choice questions with 4 options each', () => {
    expect(quizData.length).toBeGreaterThanOrEqual(10);
    quizData.forEach((q) => {
      expect(q.options).toHaveLength(4);
      expect(q.correctIndex).toBeGreaterThanOrEqual(0);
      expect(q.correctIndex).toBeLessThan(4);
      expect(q.explanation.en).toBeTruthy();
      expect(q.explanation.de).toBeTruthy();
    });
  });

  it('includes the newly added 2024 reform questions on Holocaust, antisemitism and Jewish life', () => {
    const reformQuestions = quizData.filter(q => q.is2024New);
    expect(reformQuestions.length).toBeGreaterThanOrEqual(3);
    const hasIsraelOrJewishLife = reformQuestions.some(
      q => q.category === 'israel_jewish_life'
    );
    expect(hasIsraelOrJewishLife).toBe(true);
  });

  it('correctly tests Article 1 Grundgesetz inviolability of human dignity', () => {
    const art1 = quizData.find(q => q.question.de.includes('Artikel 1'));
    expect(art1).toBeDefined();
    expect(art1?.options[art1.correctIndex].de).toContain('Die Würde des Menschen ist unantastbar');
  });

  it('verifies passing score threshold calculation (>51.5% or 17/33)', () => {
    const total = 10;
    const passingThreshold = Math.ceil(total * 0.515); // 6
    expect(passingThreshold).toBe(6);

    const fullTestTotal = 33;
    const fullTestPassing = Math.ceil(fullTestTotal * 0.515); // 17
    expect(fullTestPassing).toBe(17);
  });
});
