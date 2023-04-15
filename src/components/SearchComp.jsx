import React, { useState } from "react";
import { useSelector } from "react-redux";

const SearchComp = ({ setCurrentArray, currentArray }) => {
  const { todos } = useSelector((state) => state.todos);
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSearchTodo = (e) => {
    let searchValue = value.toLowerCase();
    if (searchValue === "") {
      setCurrentArray(todos);
      return;
    }
    const searchTodo = todos.filter((todo) => {
      return todo.title.toLowerCase().includes(value);
    });
    setCurrentArray(searchTodo);
    setValue("");
    console.log("va,", searchValue);
  };
  return (
    <div>
      <input
        type="text"
        className="searchInput"
        placeholder="Search..."
        value={value}
        onChange={handleInputChange}
      />
      <button className="deleteButton" onClick={handleSearchTodo}>
        Search
      </button>
    </div>
  );
};

export default SearchComp;
