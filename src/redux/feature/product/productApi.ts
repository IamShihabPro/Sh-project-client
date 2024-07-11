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
          query: (data) =>{
            console.log(data)
            return{
              method: 'POST',
              url: 'products',
              body: data
            }
          },
          invalidatesTags: ['products'],
        }),
        getSingleProduct: builder.query({
          query: (id) =>({
            method: 'GET',
            url: `products/${id}`,
          })
        })
      }),
})

export const { useGetProductQuery, useAddProductMutation, useGetSingleProductQuery } = productApi