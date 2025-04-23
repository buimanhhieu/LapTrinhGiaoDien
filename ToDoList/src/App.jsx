import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from "./features/TodoList";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Danh sách công việc mẫu</h1>
      <TodoList />
    </div>
    </>
  )
}

export default App
