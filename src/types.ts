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

export type WordDetail = Word & {
  created_at: Date;
  next_review_at: Date;
  examples: { en: string; ru: string }[];
  repetitions: number;
};

export type WordApi = {
  id: number;
  word: string;
  translate: string;
};
