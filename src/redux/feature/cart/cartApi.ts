import { baseApi } from "@/redux/api/baseApi";

const cartApi = baseApi.injectEndpoints({

  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => ({
        method: 'GET',
        url: 'carts',
      }),
      providesTags: ['carts'],
    }),
    addCart: builder.mutation({
      query: (data) => ({
        method: 'POST',
        url: 'carts',
        body: data
      }),
      invalidatesTags: ['carts'],
    }),
    getSingleCart: builder.query({
      query: (id) => ({
        method: 'GET',
        url: `carts/${id}`,
      }),
      providesTags: ['carts'],
    }),   
  }),
});

export const { useGetCartQuery, useGetSingleCartQuery, useAddCartMutation } = cartApi;
export default cartApi; 