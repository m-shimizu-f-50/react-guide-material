import AnimalItem from './AnimalItem';

const AnimalList = ({ animals }) => {
  return (
    <ul>
      {animals.map((animal) => {
        return <AnimalItem key={animal} animal={animal} />;
      })}
    </ul>
  );
};

export default AnimalList;
