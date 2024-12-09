import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increase_count,decrease_count } from '../Redux/count/countSlice'

function Counter() {
    const state = useSelector(state => state.count.value)
    const dispatch = useDispatch()
    const increment = () => {
        dispatch(increase_count())
    }
    const decrement = () => {
        dispatch(decrease_count())
    }
  return (
    <div>
        <div>Count : {state}</div>
    <button onClick={increment}>increment</button>
    
    <button onClick={decrement}>deccrement</button>
    </div>)
}

export default Counter