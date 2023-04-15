import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    toggleTodo(state, action) {
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;

          localStorage.setItem("todos", JSON.stringify(state.todos));
        }
      });
    },
    updateTodo(state, action) {
      const { id, title } = action.payload;
      state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = title;

          localStorage.setItem("todos", JSON.stringify(state.todos));
        }
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, toggleTodo, updateTodo, removeTodo } =
  todosSlice.actions;

export default todosSlice.reducer;
