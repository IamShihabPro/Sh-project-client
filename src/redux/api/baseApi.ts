import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5173' }),
  tagTypes: ['products', 'carts', 'orders'],
  endpoints: () => ({
  }),
})
