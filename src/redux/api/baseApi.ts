import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://camping-shop-ecommerce-server.vercel.app/api' }),
  tagTypes: ['products', 'carts', 'orders'],
  endpoints: () => ({
  }),
})
