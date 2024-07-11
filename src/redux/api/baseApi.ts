import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  endpoints: (builder) => ({
    getProduct: builder.query({
        query: () => ({
            method: 'GET',
            url: 'products',
        }),
      }),
    addProduct: builder.mutation({
      query: (data) =>{
        console.log(data)
        return{
          method: 'POST',
          url: 'products',
          body: data
        }
      }
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductQuery, useAddProductMutation } = baseApi