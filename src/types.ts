export type Word = {
  id: number;
  word: string;
  translation: string;
  examples: { english: string; translation: string }[];
  repetitions: number;
  created_at: string;
  next_review_at: string;
};
export type SessionMode = 'training' | 'practice' | null;
export type SessionWord = Word & { attempts: number };

export type WordPreview = Pick<Word, 'id' | 'word' | 'translation'>;
export type WordCreate = Pick<Word, 'word' | 'translation' | 'examples'>;
export type WordSessionUpdate = Pick<Word, 'id' | 'repetitions' | 'next_review_at'>;

export type WordApi = {
  id: number;
  word: string;
  translate: string;
};
