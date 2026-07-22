export type Word = {
  id: number;
  word: string;
  translate: string;
};

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
