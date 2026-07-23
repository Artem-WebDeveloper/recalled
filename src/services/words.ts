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

export const { useGetWordsQuery, useAddWordMutation } = wordsApi;
