import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Word, WordCreate, WordSessionUpdate } from '@/types';

export const wordsApi = createApi({
  reducerPath: 'wordsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/`,
    prepareHeaders: (headers) => {
      headers.set('apikey', import.meta.env.VITE_SUPABASE_API_KEY);
      headers.set('Authorization', `Bearer ${import.meta.env.VITE_SUPABASE_API_KEY}`);
      return headers;
    },
  }),
  tagTypes: ['Words'],

  endpoints: (builder) => ({
    getWords: builder.query<Word[], void>({
      query: () => 'words?select=*',
      providesTags: ['Words'],
    }),

    addWord: builder.mutation<Word, WordCreate>({
      query(body) {
        return {
          url: 'words',
          method: 'POST',
          body,
          headers: { 'Content-Type': 'application/json', Prefer: 'return=representation' },
        };
      },
      invalidatesTags: ['Words'],
    }),

    getRandomWords: builder.query<Word[], { wordsLimit: number }>({
      query: ({ wordsLimit }) => ({
        url: 'rpc/get_random_words',
        method: 'POST',
        body: {
          words_limit: wordsLimit,
        },
      }),
    }),

    getTrainingWords: builder.query<Word[], { newLimit: number; reviewLimit: number }>({
      query: (limits) => {
        return {
          url: 'rpc/get_training_words',
          method: 'POST',
          body: {
            new_limit: limits.newLimit,
            review_limit: limits.reviewLimit,
          },
        };
      },
      providesTags: ['Words'],
    }),

    updateSessionWords: builder.mutation<Word[], WordSessionUpdate[]>({
      query: (words) => {
        return {
          url: 'rpc/update_session_words',
          method: 'POST',
          body: {
            words,
          },
        };
      },
      invalidatesTags: ['Words'],
    }),
  }),
});

export const {
  useGetWordsQuery,
  useAddWordMutation,
  useUpdateSessionWordsMutation,
  useGetRandomWordsQuery,
  useGetTrainingWordsQuery,
} = wordsApi;
