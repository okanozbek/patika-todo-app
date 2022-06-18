import { useState } from "react";
import FilterTodo from "./FilterTodo";
const Form = ({ todos, setTodos, setStatus }) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      setTodos([
        ...todos,
        { id: Math.random() * 100, text: inputValue, completed: false },
      ]);
      setInputValue("");
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="todo__input-wrapper">
          <input
            type="text"
            onChange={onChangeInput}
            className="todo__input"
            value={inputValue}
            name="todo"
            placeholder="To Do"
          />
          <div className="todo__input-buttons">
            <button type="submit">Add</button>
            <FilterTodo setStatus={setStatus} />
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
