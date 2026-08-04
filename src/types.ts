export type Word = {
  id: number;
  word: string;
  translation: string;
  examples: { english: string; translation: string }[];
  repetitions: number;
  created_at: string;
  next_review_at: string;
};

export type WordPreview = Pick<Word, 'id' | 'word' | 'translation'>;
export type WordCreate = Pick<Word, 'word' | 'translation' | 'examples'>;

export type SessionWord = Word & { attempts: number };

export type WordApi = {
  id: number;
  word: string;
  translate: string;
};
