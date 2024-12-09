import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const ThunkFetch = createSlice({
    name:'ThunkData',
    initialState:{
        items:[],
        loading : false,
        error:''
    },
    reducers:{
        fetchStart: (state) =>{
                state.loading = true
        },
        fetchSuccess: (state,action) =>{
            state.loading = false;
            state.items = action.payload
        },
        fetchRejected: (state) =>{
            state.error = 'An error occured'
        },
    }
})


export const fetchData = () => async (dispatch) => {
    dispatch(fetchStart())
    try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch(fetchSuccess(response.data))
    console.log(fetchSuccess(response.data))
    }catch(error){
        dispatch(fetchRejected())
    }
}


export const {fetchStart,fetchRejected,fetchSuccess} = ThunkFetch.actions;
export default ThunkFetch.reducer;