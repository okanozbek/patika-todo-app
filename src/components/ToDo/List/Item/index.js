const Item = ({ todo, todos, setTodos }) => {
  const handleOnChange = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const handleRemoveOnClick = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <label
      htmlFor={`todo-${todo.id}`}
      className={`todo__item-container ${todo.completed ? "completed" : ""}`}
    >
      <div>
        <input
          type="checkbox"
          name="status"
          id={`todo-${todo.id}`}
          className={`${todo.completed ? "completed" : ""}`}
          onChange={handleOnChange}
          checked={todo.completed}
        />
        <span className={`${todo.completed ? "completed" : ""}`}>
          {todo.text}
        </span>
      </div>
      <button className="trash__button" onClick={handleRemoveOnClick}>
        <img
          src="/assets/icons/times-icon.svg"
          width={20}
          height={20}
          alt="remove-todo"
        />
      </button>
    </label>
  );
};

export default Item;
