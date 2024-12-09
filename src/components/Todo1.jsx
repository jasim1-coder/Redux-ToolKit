import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addTodo,deleteTodo,changeColor,completeTodo } from '../Redux/Todo1/Todo1'

function Todo1() {
    const dispatch = useDispatch()
    const statee = useSelector((state) => state.Todo1.task)
    const complete = useSelector((state) => state.Todo1.completed)

    const[tas,setTas] = useState('')

    const handleAdd = (e) => {
        e.preventDefault()
        dispatch(addTodo(tas))
        setTas('')
    }
    // const handleDelete = (id) => {
    //     dispatch(removeTodo(id))
    // }
console.log(statee)
console.log(complete)


  return (
    <div>
        <h1>Todo List</h1>
        <input type="text" placeholder='add task' value={tas}  required onChange={(e) => setTas(e.target.value)} />
        <button  onClick={handleAdd}>add</button>
        

    <div><h1>Task</h1>
    <ul>
        {
            statee.map((taskk) => (
                <li style={{color: taskk.done ? 'green':'black'}} key={taskk.id}>{taskk.name}    <button onClick={() => dispatch(changeColor(taskk.id))}>done</button><button onClick={() => dispatch(deleteTodo(taskk.id))}>delete</button>
                <button onClick={() => dispatch(completeTodo(taskk.id))}>Completed</button>
                </li>
            ))
        }
        </ul></div>

        <div><h1>completed tasks</h1>
        <ul>
        {complete.map((items) => (
            <li key={items.id}>{items.name}</li>
        ))}

        </ul>
        </div>

        </div>
  )
}

export default Todo1