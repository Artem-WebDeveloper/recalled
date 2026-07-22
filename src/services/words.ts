import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { WordDetail } from '@/types';

export const wordsApi = createApi({
  reducerPath: 'wordsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SUPABASE_URL}/rest/v1`,
    headers: {
      apikey: import.meta.env.VITE_SUPABASE_API_KEY,
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_API_KEY}`,
    },
  }),

  endpoints: (builder) => ({
    getWords: builder.query<WordDetail[], void>({
      query: () => '/words?select=*',
    }),
  }),
});

export const { useGetWordsQuery } = wordsApi;
