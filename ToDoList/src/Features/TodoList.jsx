import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo, setFilter } from "./todoSlice";

export default function TodoList() {
  const { todos, filter } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // Lọc danh sách công việc theo filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true; // 'all' filter sẽ trả về tất cả công việc
  });

  // Tính tổng số công việc và số công việc hoàn thành
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div className="space-y-4">
      {/* Các nút lọc */}
      <div className="flex justify-center gap-4 mb-4">
        <button
          onClick={() => handleFilterChange("all")}
          className={`py-1 px-3 rounded-lg ${filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Tất cả
        </button>
        <button
          onClick={() => handleFilterChange("completed")}
          className={`py-1 px-3 rounded-lg ${filter === "completed" ? "bg-green-500 text-white" : "bg-gray-200"}`}
        >
          Đã hoàn thành
        </button>
        <button
          onClick={() => handleFilterChange("incomplete")}
          className={`py-1 px-3 rounded-lg ${filter === "incomplete" ? "bg-red-500 text-white" : "bg-gray-200"}`}
        >
          Chưa hoàn thành
        </button>
      </div>

      {/* Hiển thị tổng số công việc */}
      <div className="flex justify-between items-center text-lg font-semibold">
        <span>Tổng: {totalTodos}</span>
        <span>Hoàn thành: {completedTodos}</span>
      </div>

      {/* Danh sách công việc */}
      {filteredTodos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center justify-between p-3 border rounded-lg shadow-sm bg-white"
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleToggle(todo.id)}
              className={`py-1 px-3 rounded-full text-white ${todo.completed ? "bg-green-500" : "bg-gray-400"}`}
            >
              {todo.completed ? "Hoàn thành" : "Chưa hoàn thành"}
            </button>
            <span
              className={`flex-1 ${todo.completed ? "line-through text-gray-500" : ""}`}
            >
              {todo.name}
            </span>
          </div>
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
