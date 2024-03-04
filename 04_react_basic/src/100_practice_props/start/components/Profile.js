import './Profile.css';

const Profile = (props) => {
  const { name, age, country } = props;
  return (
    <div className='profile'>
      <p>{name}</p>
      <p>{age}</p>
      <p>{country}</p>
    </div>
  );
};

export default Profile;
