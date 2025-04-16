import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, toggleTodo, removeTodo } from '../components/TodoSlice'

function TodoList() {
  const [input, setInput] = useState('')
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const handleAdd = () => {
    if (input.trim() !== '') {
      dispatch(addTodo(input))
      setInput('')
    }
  }

  return (
    <div>
      <h2>To-do List</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nhập công việc..."
      />
      <button onClick={handleAdd}>Thêm</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => dispatch(toggleTodo(todo.id))} style={{ backgroundColor: 'green', margin: '20px' }}>   Done</button>
            <button onClick={() => dispatch(removeTodo(todo.id))} style={{backgroundColor:'red'}}>   Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
