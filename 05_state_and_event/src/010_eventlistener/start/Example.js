import { useState } from 'react';

const Example = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      {value}
    </>
  );
};

export default Example;
