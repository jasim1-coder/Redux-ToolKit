import { configureStore } from "@reduxjs/toolkit";
import colorReducer from './color/colorSlice'
import counterReducer from './count/countSlice'
// import TodoReducer from './Todo/todoSlice'
import cartReducer from './cart/cartslice'
import taskManagerReducer from './TaskManager/Task'
import FetchDataReducer from './FetchData/Fetchdata'
import ThunkFetchReducer from './Thunk/ThunkEg'
import TodoReducer from './Todo1/Todo1'

export default configureStore({
    reducer:{
        color:colorReducer,
        count: counterReducer,
        // todo: TodoReducer,
        cart: cartReducer,
        task: taskManagerReducer,
        fetch: FetchDataReducer,
        ThunkFetch : ThunkFetchReducer,
        Todo1: TodoReducer
    }
})