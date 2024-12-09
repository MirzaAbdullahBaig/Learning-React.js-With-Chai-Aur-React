import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: []
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      if (action.payload.trim() === "") {
        return; // Exit without doing anything if the todo is empty
      }
      const todo = {
        id: nanoid(),
        text: action.payload
      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todos) => todos.id !== action.payload)
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((todo) => todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo)
    },
  }
})

export const { addTodo, removeTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer