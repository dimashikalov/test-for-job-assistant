import React from "react";
import { useSelector } from "react-redux";

const SortComp = ({ setCurrentArray }) => {
  const { todos } = useSelector((state) => state.todos);

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
    <div>
      <select className="select" onChange={handleChange}>
        <option value="all" selected>
          Выберите тип сортировки
        </option>
        <option value="dateDown">Сортировать по дате: по убыванию</option>
        <option value="dateUp">Сортировать по дате: по возрастанию</option>
        <option value="checkOn">Сортировать по статусу: выполненные</option>
        <option value="checkOff">Сортировать по статусу: не выполненные</option>
      </select>
    </div>
  );
};

export default SortComp;
