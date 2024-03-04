import { useState } from 'react';

const Example = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  return (
    <>
      <p>ボタンAを{num1}回押しました</p>
      <button onClick={() => setNum1(num1 + 1)}>ボタンA</button>
      <p>ボタンBを{num2}回押しました</p>
      <button onClick={() => setNum2(num2 + 1)}>ボタンA</button>
      <p>ボタンCを{num3}回押しました</p>
      <button onClick={() => setNum3(num3 + 1)}>ボタンA</button>
    </>
  );
};

export default Example;
