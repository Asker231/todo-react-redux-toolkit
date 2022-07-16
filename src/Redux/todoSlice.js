import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name:'todo',
    initialState:{
        arr:[
     
        ]
    },reducers:{
        addItem(state,action){
            state.arr.push(action.payload.transcript)
        }
    }
})

export const {addItem} = todoSlice.actions;
export default todoSlice.reducer;