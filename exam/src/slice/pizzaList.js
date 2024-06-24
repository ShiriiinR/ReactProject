import { createApi } from '@reduxjs/toolkit/query/react'
import pizzasData from "../data/pizzasData.json";

export const pizzaList = createApi({
    reducerPath: "pizzaData",
    baseQuery: () => Promise.resolve({data: pizzasData}),
    tagTypes: ['Pizza'],
    endpoints: (builder) => ({
        getPizzas: builder.query({
            query: () => '/pizzas',
            providesTags: ['Pizza'],
        }),
        
    })
})
export const {useGetPizzasQuery} = pizzaList;