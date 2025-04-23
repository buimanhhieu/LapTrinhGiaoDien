import { useSelector } from "react-redux";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center justify-between border p-3 rounded shadow-sm bg-white"
        >
          <span className={`flex-1 ${todo.completed ? "line-through text-gray-500" : ""}`}>
            {todo.name}
          </span>
          <span className="mx-2">{todo.completed ? "✅" : "❌"}</span>
          <button className="text-red-500 hover:text-red-700">Xoá</button>
        </div>
      ))}
    </div>
  );
}
