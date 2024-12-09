import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    name:"counter",
    initialState:{
        value:55
    },
    reducers:{
        increase_count: (state) => {
            state.value += 1
        },
        decrease_count: (state) => {
            state.value -= 1
        }
    }
})

export const {increase_count,decrease_count} = countSlice.actions;
export default countSlice.reducer;