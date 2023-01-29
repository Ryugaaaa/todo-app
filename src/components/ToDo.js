import React, { useState } from "react";

import "./ToDo.css";

const ToDo = () => {
  const _toDoItems = [
    { id: 1, text: "Todo 1", checked: true },
    { id: 2, text: "Todo 2", checked: false },
    { id: 3, text: "Todo 3", checked: false },
    { id: 4, text: "Todo 4", checked: true },
  ];

  const [toDoItems, setToDoItems] = useState(_toDoItems);

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: _toDoItems.length + 1,
      text: inputValue,
      checked: true,
    };
    setToDoItems((oldArray) => [...oldArray, newItem]);
    setInputValue("");
  };

  const handleDelete = (index) => {
    const result = toDoItems.filter((_, i) => i !== index);
    setToDoItems(result);
  };

  return (
    <div className="">
      <h3>Todo App</h3>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => handleChange(e)}
          value={inputValue}
          type="text"
          placeholder="..."
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {toDoItems.map((item, index) => {
          return (
            <li key={index} className="todo-item">
              <input type="checkbox" defaultChecked={item.checked} />
              <p>{item.text}</p>
              <button onClick={() => handleDelete(index)} type="button">
                Delete
              </button>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default ToDo;
