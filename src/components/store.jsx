
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import todoReducer from './TodoSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
  }
})
