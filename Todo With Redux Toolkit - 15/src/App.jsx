import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Todo App Using Redux Toolkit
          </h1>
          <div className="mb-4">
            <AddTodo />
          </div>
          <div className="flex flex-wrap gap-y-3">
            <Todos />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
