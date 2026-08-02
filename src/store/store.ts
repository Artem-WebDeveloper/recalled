import { wordsApi } from '@/services/words';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import sessionReducer from './sessionSlice';

export const store = configureStore({
  reducer: {
    [wordsApi.reducerPath]: wordsApi.reducer,
    session: sessionReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(wordsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
