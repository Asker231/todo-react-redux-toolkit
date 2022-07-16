import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

 const store  = configureStore({
    reducer:{
         items:todoSlice,
    }
 })

 export default store;