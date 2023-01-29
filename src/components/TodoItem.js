import React from "react";

const TodoItem = () => {
  return (
    <li key={index} className="todo-item">
      <input type="checkbox" defaultChecked={item.checked} />
      <p>{item.text}</p>
      <button onClick={() => handleDelete(index)} type="button">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
