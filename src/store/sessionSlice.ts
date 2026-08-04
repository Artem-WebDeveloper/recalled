import type { SessionWord, Word } from '@/types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type SessionState = {
  queue: Array<SessionWord>;
  completed: Array<SessionWord>;
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
    startSession: (state, action: PayloadAction<Word[]>) => {
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

export const { startSession, nextWord } = sessionSlice.actions;

export default sessionSlice.reducer;
