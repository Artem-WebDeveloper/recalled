import type { Word } from '@/types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type SessionState = {
  queue: Array<Word & { attempts: number }>;
  completed: Array<Word & { attempts: number }>;
  currentIndexWord: number;
  isCompleted: boolean;
};

const initialState: SessionState = {
  queue: [],
  completed: [],
  currentIndexWord: 0,
  isCompleted: false,
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    addSessionWords: (state, action: PayloadAction<Word[]>) => {
      state.isCompleted = false;
      state.queue = action.payload.map((word) => ({ ...word, remembered: false, attempts: 0 }));
    },

    nextWord: (state, action: PayloadAction<boolean>) => {
      const curWord = state.queue[state.currentIndexWord];

      if (action.payload === true) {
        state.completed.push(curWord);
        state.queue.splice(state.currentIndexWord, 1);
      } else {
        curWord.attempts++;
        state.currentIndexWord++;
      }

      if (state.currentIndexWord >= state.queue.length) {
        state.currentIndexWord = 0;
      }

      if (state.queue.length === 0) {
        state.isCompleted = true;
      }
    },
  },
});

export const { addSessionWords, nextWord } = sessionSlice.actions;

export default sessionSlice.reducer;

/* while (curWord.remembered === false) {
        if (state.queue.length > state.currentIndexWord) {
          state.currentIndexWord++;
        } else if (state.queue.length === state.currentIndexWord) {
          state.currentIndexWord = 0;
        }
      } */

/* 
        
        
      // если вспомнил
      if (action.payload === true) {
        curWord.remembered = true;
      }
      // если не вспомнил
      else {
        curWord.attempts++;
      }

      state.currentIndexWord++;

      const isComplete = state.queue.every((word) => word.remembered);

      while (state.queue[state.currentIndexWord + 1].remembered !== false) {
        if (state.queue.length > state.currentIndexWord) {
          state.currentIndexWord++;
        } else if (state.queue.length - 1 === state.currentIndexWord) {
          state.currentIndexWord = 0;
        }
      }
        */
