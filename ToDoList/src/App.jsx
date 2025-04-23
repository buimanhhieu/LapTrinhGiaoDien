import AddTodo from "./features/AddTodo";
import TodoList from "./features/TodoList";
import './app.css';
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 w-full text-black">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Danh sách công việc</h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
