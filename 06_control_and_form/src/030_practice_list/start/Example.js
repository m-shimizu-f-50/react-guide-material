import Profile from './components/Profile.js';
const Example = () => {
  const practiceList = [
    {
      name: 'Geo',
      age: 18,
      hobbies: ['sports', 'music'],
    },
    {
      name: 'Tom',
      age: 25,
      hobbies: ['movie', 'music'],
    },
    {
      name: 'Lisa',
      age: 21,
      hobbies: ['sports', 'travel'],
    },
  ];
  return (
    <>
      <h3>練習問題</h3>
      <p>
        Profileコンポーネントを使用して、完成コードと同じ画面を作成してください。
      </p>
      <p>
        また、Profileコンポーネント内のリスト表示部分にkeyを設定して、ワーニング表示がされないようにしてください。
      </p>
      <ul>
        {practiceList.map((practice) => (
          <li key={practice.name}>
            <Profile {...practice} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;
