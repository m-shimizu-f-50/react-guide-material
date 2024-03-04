import { useState } from 'react';
import AnimalList from './components/AnimalList';
import AnimalFilter from './components/AnimalFilter';

const Example = () => {
  const animals = ['Dog', 'Cat', 'Rat'];

  const [filterVal, setFilterVal] = useState('');

  const filterAnimals = animals.filter((animal) => {
    const isMatch = animal.indexOf(filterVal) !== -1;
    return isMatch;
  });

  return (
    <>
      <AnimalFilter filterVal={filterVal} setFilterVal={setFilterVal} />
      <AnimalList animals={filterAnimals} />
    </>
  );
};

export default Example;
