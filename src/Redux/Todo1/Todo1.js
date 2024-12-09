import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
    name:"Todo",
    initialState:{
        task:[],
        completed:[]
    },
    reducers:{
        addTodo: (state,action) => {
            state.task.push({id:Date.now(),name:action.payload,done:false})
        },
        deleteTodo: (state,action) => {
            state.task = state.task.filter((item) => (
                item.id !== action.payload
            ))
        },
        changeColor: (state,action) => {
            let neww = state.task.find((items) => (items.id === action.payload))
            if(neww){
                neww.done = !neww.done 
            }
        },
        completeTodo: (state,action) => {
            let completedTask = state.task.find((item) => item.id === action.payload)
            if(completedTask){
               state.completed.push(completedTask)
                state.task = state.task.filter((items) => items.id !== action.payload)
            }
        }
    }
})

export const {addTodo,deleteTodo,changeColor,completeTodo} = TodoSlice.actions;
export default TodoSlice.reducer;