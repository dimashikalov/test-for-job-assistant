import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo, updateTodo } from "../store/todos/todosSlice";

const TodoItem = ({ todo }) => {
  const [className, setClassName] = useState("");
  const dispatch = useDispatch();

  const handleToggleTodo = () => {
    dispatch(toggleTodo(todo.id));
    if (!todo.completed === true) {
      setClassName("todoCheck");
    } else {
      setClassName("");
    }
  };
  const handleRemoveTodo = () => {
    dispatch(removeTodo(todo.id));
  };
  const handleUpdateTodo = () => {
    const title = prompt();
    const newTodo = {
      id: todo.id,
      title,
    };
    dispatch(updateTodo(newTodo));
  };

  return (
    <div className={`todo ${className}`}>
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggleTodo}
          className="todoInput"
        />
        <span className="todoSpan">{todo.date}</span>
      </div>

      <div>
        <p onDoubleClick={handleUpdateTodo}>{todo.title}</p>
      </div>

      <div>
        <button className="deleteButton" onClick={handleRemoveTodo}>
          delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
