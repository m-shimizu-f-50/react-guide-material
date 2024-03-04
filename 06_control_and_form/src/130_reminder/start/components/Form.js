import { useState } from 'react';

const Form = ({ createTodo }) => {
  const [inputVal, setInputVal] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!inputVal) return;
    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: inputVal,
    };

    createTodo(newTodo);

    setInputVal('');
  };

  return (
    <>
      <form onSubmit={addTodo}>
        <input
          type='text'
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button>追加</button>
      </form>
    </>
  );
};

export default Form;
