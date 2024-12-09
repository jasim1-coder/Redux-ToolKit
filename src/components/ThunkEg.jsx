import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchData } from '../Redux/Thunk/ThunkEg';

function ThunkEg() {
    const dispatch = useDispatch();
    const {items,loading,error} = useSelector((state) => state.ThunkFetch);
    
    useEffect(() => {
        dispatch(fetchData())
    },[dispatch])

    
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>
  return (
    <div>
        <ul>
        {
            items.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))
        }
        </ul>
    </div>
  )
}

export default ThunkEg