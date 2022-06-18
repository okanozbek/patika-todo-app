import React, { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredStatus, setFilteredStatus] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredStatus(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredStatus(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredStatus(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="todo__wrapper">
      <h1>To Do App</h1>
      <Form todos={todos} setTodos={setTodos} setStatus={setStatus} />
      <List todos={todos} setTodos={setTodos} filteredStatus={filteredStatus} />
    </div>
  );
};

export default ToDo;
