import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addTodo,removeTodo } from '../Redux/Todo/todoSlice'
function TodoList() {
    const state = useSelector((state) => state.todo.value)
    const dispatch = useDispatch()
    const[task,setTask] = useState('')
console.log(state)

    const handleAdd = () => {
        if(task.trim()) {
            dispatch(addTodo(task));
        setTask('')}
    }
    const handleRemove = (id) => {
        dispatch(removeTodo(id))
    }

  return (
    <div>
       
        <div> <h1>TodoList</h1>
            <input type="text" value={task} placeholder='add new task'  onChange={(e) => setTask(e.target.value)} required/>
        <button onClick={handleAdd}>add</button></div>
        <div>
        <ul>
        {state.map((task) => (
            <li key={task.id}>
                {task.name}
                <button onClick={handleRemove(task.id)}>remove</button>
            </li>
        ))}
        </ul>
        </div>


    </div>
  )
}

export default TodoList