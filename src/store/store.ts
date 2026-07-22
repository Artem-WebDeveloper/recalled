import { wordsApi } from '@/services/words';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [wordsApi.reducerPath]: wordsApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(wordsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
