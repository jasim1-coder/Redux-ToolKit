import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "Todo",
    initialState:{
    value:[]
    },
    reducers:{
        addTodo: (state,action) =>{
          state.value.push({id: Date.now(), name: action.payload})},
        removeTodo: (state,action) =>{
           state.value =  state.value.filter((tasks) => tasks.id !== action.payload )
        }
    }
})

export const {addTodo,removeTodo} = todoSlice.actions;
export default todoSlice.reducer;