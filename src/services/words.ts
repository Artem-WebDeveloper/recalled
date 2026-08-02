import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Word, WordCreate } from '@/types';

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

    getPracticingNewWords: builder.query<Word[], void>({
      query: () => 'words?select=*&repetitions=eq.0&order=created_at.desc&limit=5',
      providesTags: ['Words'],
    }),

    getPracticingReviewWords: builder.query<Word[], void>({
      query: () =>
        'words?select=*&repetitions=gt.0&next_review_at=lte.now()&order=next_review_at.asc&limit=15',
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
  }),
});

export const {
  useGetWordsQuery,
  useGetPracticingNewWordsQuery,
  useGetPracticingReviewWordsQuery,
  useAddWordMutation,
} = wordsApi;
