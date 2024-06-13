import { useState, useEffect } from "react";
// const { useState } = require("react");
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const TodoApp = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  useState(() => {
    const storedTodoList = JSON.parse(localStorage.getItem("todoList"));
    if (storedTodoList) {
      setTodoList(storedTodoList);
    }
  }, [todoList]);

  const handleAddTodo = (newTodo) => {
    setTodoList([{ task: newTodo, completed: false }, ...todoList]);
  };

  const handleEdit = (index,) => {
    const newTask  = prompt ("Enter new task", todoList[index].task)
  if(newTask !== null && newTask.trim() !== ""){
    const newTodoList = [...todoList];
    newTodoList[index].task = newTask;
    setTodoList(newTodoList);
  }
  };

  const handleToggleComplete = (index) => {
    const newTodoList = [...todoList];
    newTodoList[index].completed = !newTodoList[index].completed;
    setTodoList(newTodoList);
  };

  const handleDelete = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  return (
    <div className="card">
      <h1>Todo List</h1>
      <AddTodo handleAddTodo={handleAddTodo} />
      <TodoList
        todoList={todoList}
        handleEdit={handleEdit}
        handleToggleComplete={handleToggleComplete}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default TodoApp;
