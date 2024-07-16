import { baseApi } from "@/redux/api/baseApi";

const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        addOrder: builder.mutation({
            query: (data) =>({
                method: 'POST',
                url: 'orders',
                body: data
            })
        }),
        getAllOrders: builder.query({
            query: () =>({
                method: 'GET',
                url: 'orders'
            }),
            providesTags: ['orders'],
        })
    })
})

export const {useAddOrderMutation, useGetAllOrdersQuery} = orderApi