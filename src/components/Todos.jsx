import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/todos/todosSlice";
import TodoItem from "./TodoItem";

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

  const sortOnDateDown = () => {
    let sortArray = [...todos].sort((a, b) => b.id - a.id);
    setCurrentArray(sortArray);
  };
  const sortOnDateUp = () => {
    let sortArray = [...todos].sort((a, b) => a.id - b.id);
    setCurrentArray(sortArray);
  };

  const sortOnCheckedOn = () => {
    setCurrentArray(todos.filter((todo) => todo.completed === true));
  };
  const sortOnCheckedOff = () => {
    setCurrentArray(todos.filter((todo) => todo.completed === false));
  };

  const handleChange = (e) => {
    let select = e.target.value;

    if (select === "dateDown") return sortOnDateDown();
    if (select === "dateUp") return sortOnDateUp();
    if (select === "checkOn") return sortOnCheckedOn();
    if (select === "checkOff") return sortOnCheckedOff();
  };
  return (
    <div className="todosContainer">
      <button onClick={handlerAddTodo} className="button">
        Add todo
      </button>

      <select className="select" onChange={handleChange}>
        <option value="all" selected>
          Выберите тип сортировки
        </option>
        <option value="dateDown">Сортировать по дате: по убыванию</option>
        <option value="dateUp">Сортировать по дате: по возрастанию</option>
        <option value="checkOn">Сортировать по статусу: выполненные</option>
        <option value="checkOff">Сортировать по статусу: не выполненные</option>
      </select>
      <div className="todoList">
        {todos &&
          currentArray.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      </div>
    </div>
  );
};

export default Todos;
