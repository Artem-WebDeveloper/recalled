import type { SessionMode, SessionWord, Word } from '@/types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type SessionState = {
  mode: SessionMode;
  queue: Array<SessionWord>;
  totalWords: number;
  completed: Array<SessionWord>;
  currentIndexWord: number;
  isCompleted: boolean;
};

const initialState: SessionState = {
  mode: null,
  totalWords: 0,
  queue: [],
  completed: [],
  currentIndexWord: 0,
  isCompleted: false,
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    changeMode: (state, action: PayloadAction<SessionMode>) => {
      state.mode = action.payload;
      state.queue = [];
      state.completed = [];
      state.totalWords = 0;
      state.currentIndexWord = 0;
      state.isCompleted = false;
    },

    startSession: (state, action: PayloadAction<Word[]>) => {
      state.isCompleted = false;
      state.queue = action.payload.map((word) => ({ ...word, remembered: false, attempts: 0 }));
      state.totalWords = action.payload.length;
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

export const { changeMode, startSession, nextWord } = sessionSlice.actions;

export default sessionSlice.reducer;
