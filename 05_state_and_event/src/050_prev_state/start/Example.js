import { useState } from 'react';

const Example = () => {
  const [num, setNum] = useState(0);
  return (
    <>
      <p>現在のカウント数：{num}</p>
      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
    </>
  );
};

export default Example;
