import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <ul className="list-none space-y-4 w-full">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex flex-col sm:flex-row justify-between items-center bg-gradient-to-r from-gray-800 to-gray-700 px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-white text-lg font-medium mb-3 sm:mb-0">
              <input
                type="checkbox"
                className="cursor-pointer mr-3"
                // checked={}
                // onChange={}
              />
              {todo.text}
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => dispatch(editTodo(todo.id))} // Edit handler
                className="text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded-full transition-all duration-300 ease-in-out flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 3.487a1.5 1.5 0 012.121 2.121l-8.475 8.475a4.5 4.5 0 01-2.121 1.061L6.56 16.56a.75.75 0 01-.97-.97l1.416-1.416a4.5 4.5 0 011.06-2.121l8.476-8.476zm-.963 2.187L7.425 14.149a2.25 2.25 0 00-.53.883l-.695 2.085 2.085-.695c.35-.116.648-.314.883-.53l8.475-8.476a.75.75 0 00-1.061-1.061z"
                  />
                </svg>
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded-full transition-all duration-300 ease-in-out flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
