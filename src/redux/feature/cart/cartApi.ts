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
    updateCart: builder.mutation({
      query: ({ id, ...data }) => ({
        method: 'PUT',
        url: `carts/${id}`,
        body: data,
      }),
      invalidatesTags: ['carts'],
    }),
    deleteCart: builder.mutation({
      query: (id) => ({
        method: 'DELETE',
        url: `carts/${id}`,
      }),
      invalidatesTags: ['carts'],
    }),
  }),
});

export const { useGetCartQuery, useGetSingleCartQuery, useAddCartMutation, useDeleteCartMutation, useUpdateCartMutation } = cartApi;
export default cartApi; 