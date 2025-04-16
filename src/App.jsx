import './App.css'
import Reducer from './feature/Reducer'
import UseState from './feature/UseState'
import UseReduxCounter from './feature/UseReduxCounter'
import TodoList from './feature/TodoList'
import Theme from './feature/Theme'
import { useSelector } from 'react-redux'
import Cart from './feature/Cart'

function App() {
  const theme = useSelector(state => state.theme)
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
      <div className={theme === 'dark' ? 'dark' : 'light'}>
      <Theme />
    </div>
      <span>===============================================</span><br />

      <span>Shopping Cart </span><br />
      <Cart /><br />
      <span>===============================================</span><br />
    </>
  )
}

export default App
