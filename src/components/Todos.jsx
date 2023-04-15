import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/todos/todosSlice";
import TodoItem from "./TodoItem";
import SortComp from "./SortComp";
import SearchComp from "./SearchComp";

const Todos = () => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [currentArray, setCurrentArray] = useState([]);

  useEffect(() => {
    setCurrentArray([...todos]);
  }, [todos]);

  const handlerAddTodo = () => {
    const title = prompt();

    if (!title) return;

    const date = new Date();

    const todo = {
      id: new Date().getTime(),
      title,
      completed: false,
      date: date.toLocaleString(),
    };

    dispatch(addTodo(todo));
  };

  return (
    <div className="todosContainer">
      <button onClick={handlerAddTodo} className="button">
        Add todo
      </button>
      <SortComp setCurrentArray={setCurrentArray} />
      <SearchComp
        setCurrentArray={setCurrentArray}
        currentArray={currentArray}
      />
      <div className="todoList">
        {todos &&
          currentArray.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      </div>
    </div>
  );
};

export default Todos;
