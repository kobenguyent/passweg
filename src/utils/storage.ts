export function getStoredChecklist(): Record<string, boolean> {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return {};
    const raw = window.localStorage.getItem('passweg_checklist_v1');
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveStoredChecklist(state: Record<string, boolean>): void {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return;
    window.localStorage.setItem('passweg_checklist_v1', JSON.stringify(state));
  } catch (err) {
    console.error('Failed to save checklist state', err);
  }
}

export function getStoredQuizScore(): { bestScore: number; total: number } | null {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return null;
    const raw = window.localStorage.getItem('passweg_quiz_score_v1');
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveStoredQuizScore(score: number, total: number): void {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return;
    window.localStorage.setItem('passweg_quiz_score_v1', JSON.stringify({ bestScore: score, total }));
  } catch (err) {
    console.error('Failed to save quiz score', err);
  }
}
