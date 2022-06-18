import React, { useState, useEffect } from "react";
import Item from "./Item";
const List = ({ todos, setTodos, filteredStatus }) => {
  const [noCompletedTodo, setNoCompletedTodo] = useState([]);

  useEffect(() => {
    setNoCompletedTodo(todos.filter((todo) => todo.completed === false));
  }, [todos]);

  return (
    <>
      <ul className="todo__list-wrapper">
        {filteredStatus.map((todo) => (
          <li key={todo.id}>
            <Item todo={todo} todos={todos} setTodos={setTodos} />
          </li>
        ))}
        {filteredStatus.length < 1 && (
          <li className="not__found"> To do not found.</li>
        )}
      </ul>
      <div className="no__todo-length">
        {noCompletedTodo.length > 0
          ? `${noCompletedTodo.length} tasks left to do`
          : "Nothing left to do"}
      </div>
    </>
  );
};

export default List;
