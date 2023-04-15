import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todosReducer from "../store/todos/todosSlice";
export const rootReducer = combineReducers({
  todos: todosReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
