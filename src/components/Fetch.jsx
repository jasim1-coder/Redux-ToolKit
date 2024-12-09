import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getData } from '../Redux/FetchData/Fetchdata'

function Fetch() {
    const dispatch = useDispatch()
    const {items,loading,error} = useSelector((state) => state.fetch)

    // useEffect(() => {
    //     dispatch(getData())
    // },[dispatch])



    const handleFetchData = () => {
        dispatch(getData())
    }
  return (
    <div>
        <button onClick={handleFetchData}>Fetch Users</button>
        {/* if(loading) return <p>Loading....</p>
        if(error) return <p>Error: {error}</p> */}
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
            {items.length > 0 && (<table border="1" >
            <thead>
                <tr>
                
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Username</th>     
                </tr>
            </thead>
            <tbody>
            { items.map((user) => (

                <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
            </tr>
        ))}

            </tbody>

        </table>)}
        
    </div>
  )
}

export default Fetch