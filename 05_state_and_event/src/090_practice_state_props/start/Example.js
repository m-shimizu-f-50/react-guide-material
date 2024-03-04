import { useState } from 'react';
const Example = () => {
  const [num, setNum] = useState(0);
  return (
    <>
      <h3>練習問題</h3>
      <p>
        カウントの更新（CountUpdate）と表示（CountResult）を別のコンポーネントに分離してください。Exampleコンポーネント内で現在のカウントの値を管理するstateを一つ定義してこれまでのレクチャーで実装したようなカウンターを作成してください。
      </p>
      このコメントアウトを外して利用！
      <CountResult title='カウント' num={num} />
      <CountUpdate setNum={setNum} />
    </>
  );
};
const CountResult = ({ title, num }) => (
  <h3>
    {title}: {num}
  </h3>
);

const CountUpdate = ({ setNum }) => {
  const countUp = () => {
    setNum((num) => num + 1);
  };
  const countDown = () => {
    /* countから1マイナス */
    setNum((num) => num - 1);
  };
  return (
    <>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
