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
        })
      }),
})

export const { useGetProductQuery, useAddProductMutation } = productApi