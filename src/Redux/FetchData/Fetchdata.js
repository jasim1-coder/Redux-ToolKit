import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getData = createAsyncThunk('api/items', () => {
    return axios('https://jsonplaceholder.typicode.com/users')
    .then((response) =>  response.data);
    
})

export const FetchSlice = createSlice({
    name:'FetchData',
    initialState:{
        items:[],
        loading:false,
        error:''
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase
        (getData.fulfilled, (state,action) => {
            state.loading = false;
            state.items = action.payload
        })
        .addCase(getData.pending, (state,action) => {
            state.loading = true;
        })
        .addCase(
        getData.rejected, (state,action) => {
            state.loading = false;
            state.error = 'some error occured'
        })
    }

})

export {getData};
export default FetchSlice.reducer
