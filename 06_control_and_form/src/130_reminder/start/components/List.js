const List = ({ todos, completeTodos }) => {
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    completeTodos(newTodos);
  };
  return (
    <>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <button onClick={() => deleteTodo(todo.id)}>完了</button>
            <label htmlFor={todo.content}>{todo.content}</label>
          </div>
        );
      })}
    </>
  );
};

export default List;
