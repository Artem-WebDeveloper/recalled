export type Word = {
  id: number;
  word: string;
  translate: string;
};

export type WordDetail = Word & {
  is_learned: boolean;
  examples: { en: string; ru: string }[];
};
