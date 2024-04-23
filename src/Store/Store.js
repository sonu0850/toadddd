import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice/authSlice";


const Store = configureStore({
reducer:{
    authSlice

}
})

export default Store