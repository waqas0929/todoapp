import React from "react";

const Task = ({ task, handleEdit, handleToggleComplete, handleDelete }) => {
  return (
    <li className={task.completed ? "completed" : ""}>
      <span>{task.task}</span>
      {!task.completed && (
        <>
          <button className="editButton" onClick={handleEdit}>
            Edit
          </button>
          <button className="completeButton" onClick={handleToggleComplete}>
            Complete
          </button>
        </>
      )}
      {task.completed && (
        <button className="undoButton" onClick={handleToggleComplete}>
          Undo
        </button>
      )}
      <button className="deleteButton" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Task;
