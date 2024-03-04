import { useState } from 'react';
import Form from './components/Form';
import List from './components/List';

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: '店予約する',
    },
    {
      id: 2,
      content: '卵買う',
    },
    {
      id: 3,
      content: '郵便出す',
    },
  ];
  const [todos, setTodos] = useState(todosList);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const completeTodos = (newTodos) => {
    setTodos(newTodos);
  };

  return (
    <>
      <h1>Reminder</h1>
      <List todos={todos} completeTodos={completeTodos} />

      <Form createTodo={createTodo} />
    </>
  );
};

export default Todo;
