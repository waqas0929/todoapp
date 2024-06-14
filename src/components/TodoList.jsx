import React from "react";
import Task from "./Task";

const TodoList = ({
  todoList,
  editingIndex,
  handleEdit,
  handleSave,
  handleChange,
  handleToggleComplete,
  handleDelete,
}) => {
  return (
    <ul>
      {todoList.map((task, index) => (
        <Task
          key={index}
          task={task}
          index={index}
          isEditing={index === editingIndex}
          handleEdit={handleEdit}
          handleSave={handleSave}
          handleChange={handleChange}
          handleToggleComplete={handleToggleComplete}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
