import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // Local state for editing
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  // Save the updated todo
  const saveEditHandler = () => {
    if (editText.trim() === "") {
      alert("Todo text cannot be empty!");
      return;
    }
    dispatch(editTodo({ id: editingId, text: editText }));
    setEditingId(null);
    setEditText("");
  };

  return (
    <ul className="list-none space-y-4 w-full">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex flex-col sm:flex-row justify-between items-center bg-gradient-to-r from-gray-800 to-gray-700 px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          {editingId === todo.id ? (
            // Edit mode
            <div className="flex flex-1 items-center gap-2">
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="bg-gray-800 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 text-base outline-none text-gray-100 py-2 px-4 transition-all duration-200 ease-in-out w-full max-w-md mr-3"
              />
              <button
                onClick={saveEditHandler}
                className="text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded-full transition-all duration-300 ease-in-out"
              >
                ✅
              </button>
              <button
                onClick={() => {
                  setEditingId(null);
                  setEditText("");
                }}
                className="text-white bg-gray-500 border-0 py-2 px-4 focus:outline-none hover:bg-gray-600 rounded-full transition-all duration-300 ease-in-out"
              >
                ❌
              </button>
            </div>
          ) : (
            // Display mode
            <div className="flex flex-1 items-center">
              <span className="text-white text-lg font-medium w-full">
                {todo.text}
              </span>
              <button
                onClick={() => {
                  setEditingId(todo.id);
                  setEditText(todo.text); // Pre-fill input with current text
                }}
                className="text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded-full transition-all duration-300 ease-in-out ml-3"
              >
                ✏️
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded-full transition-all duration-300 ease-in-out ml-3"
              >
                🗑️
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Todos;
