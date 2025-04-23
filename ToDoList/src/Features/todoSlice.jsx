import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    { id: 1, name: "Học ReactJS", completed: false },
    { id: 2, name: "Làm bài kiểm tra", completed: true },
    { id: 3, name: "Làm bài tập Redux", completed: false },
  ],
  filter: 'all', // 'all', 'completed', 'incomplete'
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        name: action.payload,
        completed: false,
      });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload; // Cập nhật trạng thái filter
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;
