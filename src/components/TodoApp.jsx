import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  useState(() => {
    const storedTodoList = JSON.parse(localStorage.getItem("todoList"));
    if (storedTodoList) {
      setTodoList(storedTodoList);
    }
  }, []);
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setEditingIndex[-1]
  };

  const handleAddTodo = (newTodo) => {
    const newTodoList = { ...todoList };
    if (!newTodoList[selectedDate]) {
      newTodoList[selectedDate] = [];
    }
    newTodoList[selectedDate] = [
      { task: newTodo, complete: false },
      ...newTodoList[selectedDate],
    ];
    setTodoList(newTodoList);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
  };
  const handleSave = (index) => {
    setEditingIndex(-1);
  };
  const handleChange = (e, index) => {
    const newTodoList = {...todoList};
    newTodoList[selectedDate][index].task = e.target.value;
    setTodoList(newTodoList);
  };

  const handleToggleComplete = (index) => {
    const newTodoList = {...todoList};
    newTodoList[selectedDate][index].completed =
      !newTodoList[selectedDate][index].completed;
    setTodoList(newTodoList);
  };

  const handleDelete = (index) => {
    const newTodoList = {...todoList};
    newTodoList[selectedDate].splice(index, 1);
    setTodoList(newTodoList);
  };

  const totalTasks = todoList[selectedDate]?.length || 0;
  const completedTasks = todoList[selectedDate]?.filter(task=> task.completed).length || 0;
  const pendingTasks = totalTasks - completedTasks

  return (
    <div className="card">
      <h1>Todo List</h1>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="dateInput"
      />
      <div className="task-summary">
        <p>Total tasks: {totalTasks}</p>
        <p>Completed tasks: {completedTasks}</p>
        <p className="pending">Pending tasks:{pendingTasks}</p>
      </div>
      <AddTodo handleAddTodo={handleAddTodo} />
      <TodoList
        todoList={todoList[selectedDate] || []}
        editingIndex={editingIndex}
        handleEdit={handleEdit}
        handleSave={handleSave}
        handleChange={handleChange}
        handleToggleComplete={handleToggleComplete}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default TodoApp;
