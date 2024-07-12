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
  }),
});

export const { useGetProductQuery, useAddProductMutation, useGetSingleProductQuery, useAddRatingsMutation } = productApi;
export default productApi; 