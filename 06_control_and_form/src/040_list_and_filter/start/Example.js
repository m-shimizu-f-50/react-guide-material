import { useState } from 'react';

const animals = ['Dog', 'Cat', 'Rat'];

const Example = () => {
  const [filterVal, setFilterVal] = useState('');
  return (
    <>
      <h3>配列のフィルター</h3>
      <input
        type='text'
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      ></input>
      <ul>
        {animals
          .filter((animal) => animal.indexOf(filterVal) !== -1)
          .map((animal) => (
            <li>{animal}</li>
          ))}
      </ul>
    </>
  );
};

export default Example;