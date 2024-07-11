import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => ({
        method: 'GET',
        url: 'products',
      }),
      providesTags: ['products'],
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        method: 'POST',
        url: 'products',
        body: data
      }),
      invalidatesTags: ['products'],
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        method: 'GET',
        url: `products/${id}`,
      })
    }),
    updateProduct: builder.mutation({
      query: ({ _id, ratings }) => ({
        method: 'PUT',
        url: `products/${_id}`,
        body: { ratings }
      }),
      invalidatesTags: ['products'],
    }),
  }),
});

export const { useGetProductQuery, useAddProductMutation, useGetSingleProductQuery, useUpdateProductMutation } = productApi;
