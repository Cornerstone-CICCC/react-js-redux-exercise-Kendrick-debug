import { configureStore } from "@reduxjs/toolkit";
import UserReducer from '../../src/components/User/userslice'
export const store = configureStore({
    reducer: {
        user: UserReducer
    }
})


export type AppDispatch = typeof store.dispatch