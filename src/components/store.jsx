
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import todoReducer from './TodoSlice'
import themeReducer from './themeSlice'
import cartReducer from './cartSlice'
import authReducer from './authSlice'
import userReducer from './userSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    theme: themeReducer,
    cart: cartReducer,
    auth: authReducer,
    users: userReducer,

  }
})
