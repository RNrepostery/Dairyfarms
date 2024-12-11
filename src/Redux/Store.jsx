import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice"; 
import AuthSlice from "./AuthSlice";
const store = configureStore({
    reducer:{
        cart:CartSlice,
        user:AuthSlice,

    }
})

export default store;