import React from "react";

const mockTodos = [
  { id: 1, name: "Học ReactJS", completed: false },
  { id: 2, name: "Làm bài kiểm tra", completed: true },
  { id: 3, name: "Đọc tài liệu Tailwind", completed: false },
];

export default function TodoList() {
  return (
    <div className="space-y-2">
      {mockTodos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center justify-between border p-3 rounded shadow-sm bg-white"
        >
          <span className={`flex-1 ${todo.completed ? "line-through text-gray-500" : ""}`}>
            {todo.name}
          </span>
          <span className="mx-2">
            {todo.completed ? "✅" : "❌"}
          </span>
          <button className="text-red-500 hover:text-red-700">Xoá</button>
        </div>
      ))}
    </div>
  );
}
