import { useState } from 'react';

const Example = () => {
  const personObj = { name: 'Tom', age: 18 };
  const [obj, setObj] = useState(personObj);

  const changeName = (e) => {
    setObj({ ...obj, name: e.target.value });
  };
  const changeAge = (e) => {
    setObj({ name: obj.name, age: e.target.value });
  };

  const reset = () => {
    setObj({ name: '', age: '' });
  };

  return (
    <>
      <h1>Name:{obj.name}</h1>
      <h1>Age:{obj.age}</h1>

      <input type='text' onChange={changeName} value={obj.name}></input>
      <input type='number' onChange={changeAge} value={obj.age}></input>
      <button onClick={reset}>リセット</button>
    </>
  );
};

export default Example;
