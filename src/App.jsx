import './App.css'
import Reducer from './feature/Reducer'
import UseState from './feature/UseState'
import UseReduxCounter from './feature/UseReduxCounter'
import TodoList from './feature/TodoList'
import Theme from './feature/Theme'
import { useSelector } from 'react-redux'
import Cart from './feature/Cart'
import Auth from './feature/Auth'
import UserList from './feature/UserList'
import Counter from './feature/Counter'
import BmiForm from './feature/BmiForm'

import EventManager from './feature/EventManager'



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

      <span>Auth </span><br />
      <Auth /><br />
      <span>===============================================</span><br />

      <span>Đồng bộ dữ liệu từ API (Async Thunk) </span><br />
      <UserList /><br />
      <span>===============================================</span><br />

      <span>Counter nâng cao có reset và tăng theo step</span><br />
      <Counter /><br />
      <span>===============================================</span><br />

      <span> Form tính toán đơn giản (BMI, thuế...)</span><br />
      <BmiForm /><br />
      <span>===============================================</span><br />

      <span> Quản lý sự kiện (Event Management)</span><br />
      <EventManager /><br />
      <span>===============================================</span><br />
    </>
  )
}

export default App
