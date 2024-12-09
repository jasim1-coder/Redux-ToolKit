import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        basket:[]
    },
    reducers:{
        addToCart: (state,action) => {
            state.basket.push({...action.payload,isInCart : true})
        },
        removeFromCart : (state,action) => {
            state.basket = state.basket.filter((items) => items.id !== action.payload )      }
    }
})

export const {addToCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;