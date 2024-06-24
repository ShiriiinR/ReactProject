import { configureStore } from '@reduxjs/toolkit'
import { pizzaList } from './slice/pizzaList'

export const store = configureStore(
    {
        reducer: {
            [pizzaList.reducerPath]: pizzaList.reducer,


            
        },
        middleware: getMiddleware =>
            getMiddleware().concat(pizzaList.middleware)
    }
)