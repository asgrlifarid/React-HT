import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoriesApi = createApi({
    reducerPath: "categories",
    baseQuery: fetchBaseQuery({ baseUrl: "https://northwind.vercel.app/api/" }),
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: () => `categories`,
            providesTags: ["Categories"],
        }),
        getCategoryById: builder.query({
            query: (id) => `categories/${id}`,
            providesTags: ["Category"],
          }),
          deleteCategoryById: builder.mutation({
            query: (id) => ({
              url: `categories/${id}`,
              method: "DELETE",
            }),
            invalidatesTags: ["Categories"],
          }),
          postNewCategory: builder.mutation({
            query: (payload) => ({
              url: `categories`,
              method: "POST",
              body: payload,
            }),
            invalidatesTags: ["Categories"],
          }),
    })

})
export const {
    useGetAllCategoriesQuery,
    useGetCategoryByIdQuery,
    useDeleteCategoryByIdMutation,
    usePostNewCategoryMutation,

  } = categoriesApi;