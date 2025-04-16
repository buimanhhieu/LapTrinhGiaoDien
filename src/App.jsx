import './App.css'
import Reducer from './components/Reducer'
import UseState from './components/UseState'
import UseReduxCounter from './components/UseReduxCounter'
import TodoList from './components/TodoList'

function App() {
  return (
    <>
      <span>UseReducer</span><br />
      <Reducer /><br />
      <span>===============================================</span><br />
      <span>UseState</span><br />
      <UseState /><br />
      <span>===============================================</span><br />
      <span>Redux Toolkit</span><br />
      <UseReduxCounter /><br />
      <span>===============================================</span><br />
      
        <br />
      <TodoList /><br />
      <span>===============================================</span><br />
    </>
  )
}

export default App
