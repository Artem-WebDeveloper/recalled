export type AddWordFormValues = {
  englishWord: string;
  translateWord: string;
  examples: Example[];
};

type Example = {
  english: string;
  translate: string;
};
