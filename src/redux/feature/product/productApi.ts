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
      }),
      providesTags: ['products'],
    }),
    addRatings: builder.mutation({
      query: ({ _id, rating }) => {
        return {
          method: 'PUT',
          url: `products/ratings/${_id}`,
          body: { rating }
        };
      },
      invalidatesTags: ['products'],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['products'],
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...data }) => ({
        method: 'PUT',
        url: `products/${id}`,
        body: data,
      }),
      invalidatesTags: ['products'],
    }),
  }),
});

export const { useGetProductQuery, useAddProductMutation, useGetSingleProductQuery, useAddRatingsMutation, useDeleteProductMutation, useUpdateProductMutation } = productApi;
export default productApi; 