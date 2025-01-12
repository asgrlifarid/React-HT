import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({ query: () => `products` }),
    getProductById: builder.query({ query: (id) => `products/${id}` }),
    deleteProductById: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
    }),
    postNewProducts: builder.mutation({
      query: (payload) => ({
        url: `products`,
        method: "POST",
        body : payload ,
      }),
    }),
  }),
});

export const {useGetProductsQuery , useGetProductByIdQuery, useDeleteProductByIdMutation ,usePostNewProductsMutation}=productsApi