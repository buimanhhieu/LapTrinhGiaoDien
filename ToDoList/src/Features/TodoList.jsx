import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "./todoSlice";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeTodo(id)); // Gọi action xóa công việc
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id)); // Gọi action toggle công việc
  };

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center justify-between p-3 border rounded-lg shadow-sm bg-white"
        >
          {/* Phần nút Toggle và tên công việc */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleToggle(todo.id)} // Toggle hoàn thành
              className={`py-1 px-3 rounded-full text-white ${
                todo.completed ? "bg-green-500" : "bg-gray-400"
              }`}
            >
              {todo.completed ? "Hoàn thành" : "Chưa hoàn thành"}
            </button>
            <span
              className={`flex-1 ${todo.completed ? "line-through text-gray-500" : ""}`}
            >
              {todo.name}
            </span>
          </div>

          {/* Nút Xoá màu đỏ */}
          <button
            onClick={() => handleDelete(todo.id)}
            className="text-red-500 hover:text-red-700 py-1 px-3 rounded-lg border border-red-500"
          >
            Xoá
          </button>
        </div>
      ))}
    </div>
  );
}
