import { createSlice } from "@reduxjs/toolkit";


export const colorSlice = createSlice({
    name: "color",
    initialState:{
        value:'blue'
    },
    reducers:{
        changeColor:(state,action) => {
            state.value = action.payload.color
        }
    }
})
export const {changeColor} = colorSlice.actions

export default colorSlice.reducer