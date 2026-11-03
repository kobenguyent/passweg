import confetti from 'canvas-confetti';

export function triggerCelebration(): void {
  try {
    // Left burst
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: ['#7a1c2d', '#d4af37', '#1e293b', '#e11d48']
    });

    // Right burst
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: ['#7a1c2d', '#d4af37', '#1e293b', '#e11d48']
    });
  } catch (err) {
    console.debug('Confetti animation suppressed', err);
  }
}
