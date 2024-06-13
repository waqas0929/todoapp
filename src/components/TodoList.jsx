import React from "react";

import Task from "./Task";

const TodoList = ({
  todoList,
  handleEdit,
  handleToggleComplete,
  handleDelete,
}) => {
  return (
    <ul>
      {todoList.map((task, index) => (
        <Task
          key={index}
          task={task}
          handleEdit={() => handleEdit(index)}
          handleToggleComplete={() => handleToggleComplete(index)}
          handleDelete={() => handleDelete(index)}
        />
      ))}
    </ul>
  );
};

export default TodoList
