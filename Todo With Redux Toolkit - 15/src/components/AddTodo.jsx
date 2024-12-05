import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo} from '../feature/todo/addTodo'

function AddTodo() {
  const [input, setInput] = useState("")
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo)
  }

  return (
    <form onSubmit={addTodoHandler} className="">
      <input
        type="text"
        className="bg-gray-800"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}

export default AddTodo;
