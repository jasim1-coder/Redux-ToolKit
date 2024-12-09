import { createSlice } from "@reduxjs/toolkit";


export const TaskManager = createSlice({
    name:"taskManager",
    initialState:{
        Taskss:[],
        completed:[]
    },
    reducers:{
        add: (state,action) => {
            state.Taskss.push({name:action.payload,color:false})
        },
        done: (state,action) => {
            state.completed.push(state.Taskss.find((items,index) => index === action.payload))

            state.Taskss = state.Taskss.filter((items,index) => index !== action.payload)
        },
        change: (state,action) =>{
            let task = state.Taskss[action.payload];
            if(task){
                task.color = true
            }
        }
    }
}) 
export const {add,done,change} = TaskManager.actions;
export default TaskManager.reducer;