import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/todos/todosSlice";
import TodoItem from "./TodoItem";

const Todos = () => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handlerAddTodo = () => {
    const title = prompt();

    if (!title) return;
    const todo = {
      id: new Date().getTime(),
      title,
      completed: false,
    };

    dispatch(addTodo(todo));
  };

  console.log("todos", todos);
  return (
    <div className="todosContainer">
      <button onClick={handlerAddTodo} className="button">
        Add todo
      </button>
      <div className="todoList">
        {todos && todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      </div>
    </div>
  );
};

export default Todos;
