import type z from 'zod';
import type { WordSchema } from './schemas';

export type Word = z.infer<typeof WordSchema>;

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

export type PaginationPageItem = number | 'ellipsis';
