import React from "react";

const Task = ({
  task,
  index,
  isEditing,
  handleEdit,
  handleSave,
  handleToggleComplete,
  handleDelete,
  handleChange,
}) => {
  return (
    <li className={task.completed ? "completed" : ""}>
      {isEditing ? (
        <>
          <textarea
            value={task.task}
            onChange={(e) => handleChange(e, index)}
            autoFocus
          />
          <button className="saveButton" onClick={() => handleSave(index)}>
            Update
          </button>
        </>
      ) : (
        <span className={task.completed ? "task-completed" : "" }>{task.task}</span>
      )}
      {!task.completed && !isEditing && (
        <>
          <button className="editButton" onClick={() => handleEdit(index)}>
            Edit
          </button>
          <button className="completeButton" onClick={() => handleToggleComplete(index)}>
            Complete
          </button>
        </>
      )}
      {task.completed && !isEditing && (
        <button className="undoButton" onClick={() => handleToggleComplete(index)}>
          Undo
        </button>
      )}
      <button className="deleteButton" onClick={() => handleDelete(index)}>
        Delete
      </button>
    </li>
  );
};

export default Task;
