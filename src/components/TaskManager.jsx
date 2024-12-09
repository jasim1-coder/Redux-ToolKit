import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { add,done,change } from '../Redux/TaskManager/Task'

function TaskManager() {
    const state = useSelector((state) => (state.task.Taskss))
    const completed = useSelector((state) => (state.task.completed))
    const dispatch = useDispatch()
    const[name,setName] = useState('')
    const handleAdd = (name) => {
        dispatch(add(name))
        setName('')
    }
    const handleDone = (index) => {
        dispatch(done(index))
    }
    const handleChange =(index) => {
        dispatch(change(index))
    }
  return (
    <div><h1>TaskManager</h1>
       
        <div>
            <input type="text" value={name}  placeholder='add new Task' onChange={(e) => setName(e.target.value)}/> <button onClick={() => handleAdd(name)}>add</button>
            </div>
        <div>
            Tasks
            <ul>
            {state.map((items,index) => (
                <li key={index} style={{backgroundColor: items.color == true ? "red" : "grey"}}>
                    {items.name}
                    <button onClick={() => handleChange(index)}>change</button>
                    <button onClick={() => handleDone(index)}>Done</button>
                </li>
            ))}
            </ul>
        </div>
        <div><h2>completed Task</h2>
        <ul>
        { completed.map((items) => (
            <li>{items.name}</li>
        ))
        }
    </ul></div>
    </div>
  

  )
}

export default TaskManager