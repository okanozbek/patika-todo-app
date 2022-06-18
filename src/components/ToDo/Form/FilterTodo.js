const FilterTodo = ({ setStatus }) => {
  const onChangeHandle = (e) => {
    setStatus(e.target.value);
  };
  return (
    <>
      <select onChange={onChangeHandle} name="todos" className="filter__todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Un Completed</option>
      </select>
    </>
  );
};

export default FilterTodo;
