import React, { useState } from "react";

const AddTodo = ({ handleAddTodo }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      handleAddTodo(todo);
      setTodo("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Type your task here"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="todoInput"
      />
      <button className="addButton" type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
