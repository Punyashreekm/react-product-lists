import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const theProductsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.escuelajs.co/api/v1",
  }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: ({ page }) => `/products?offset=${page}&limit=10`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery } = theProductsApi;
// live_o1SUeL9S4XrzgeSfz5LbUY7PEm9o6rwt8ztkK7Tf6EZ3e1XesJ35ibr4Bbt2zJKm
