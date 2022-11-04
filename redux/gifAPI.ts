import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURL = process.env.NEXT_PUBLIC_GIPHY_API_URL;

export const gifAPI = createApi({
  reducerPath: 'gifAPI',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getRandomGIF: builder.query({
      query: () =>
        `/search?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}&q=loking&limit=55&offset=0&rating=g&lang=en`,
    }),
    searchGIF: builder.query({
      query: (searchQuery) =>
        `/search?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}&q=${searchQuery}&limit=25&offset=0&rating=g&lang=en`,
    }),
  }),
});

export const { useGetRandomGIFQuery, useSearchGIFQuery } = gifAPI;
