import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: "Học ReactJS", completed: false },
  { id: 2, name: "Làm bài kiểm tra", completed: true },
];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        name: action.payload,
        completed: false,
      });
    },
    // Tạm thời chưa xử lý xóa hoặc toggle
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
