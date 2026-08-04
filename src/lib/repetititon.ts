import type { SessionWord } from '@/types';

export const REVIEW_INTERVALS = [1, 3, 7, 14, 30] as const;

const RETRY_INTERVAL_DAYS = 1;
const DOWNGRADE_AFTER_ATTEMPTS = 4;

export function calculateReviewPayload(completedQueue: SessionWord[]) {
  const updatedData = completedQueue.map((word) => {
    return {
      id: word.id,
      repetitions: getRepetitions(word.attempts, word.repetitions),
      next_review_at: getInterval(word.attempts, word.repetitions),
    };
  });

  return updatedData;
}

function getInterval(attempts: number, repetitions: number) {
  const now = new Date();
  if (attempts > 1) {
    now.setDate(now.getDate() + RETRY_INTERVAL_DAYS);
    return now.toISOString();
  }
  const days = REVIEW_INTERVALS[repetitions] ?? REVIEW_INTERVALS[REVIEW_INTERVALS.length - 1];
  now.setDate(now.getDate() + days);
  return now.toISOString();
}

function getRepetitions(attempts: number, repetitions: number) {
  if (attempts === 1) {
    repetitions++;
  } else if (attempts > DOWNGRADE_AFTER_ATTEMPTS) {
    repetitions = Math.max(0, repetitions - 1);
  }

  return repetitions;
}
