import { Link } from 'react-router-dom';
import ZustandTest from '../components/ZustandTest';
import useStore from '../context/store';

const UserCheck = () => {
  const { increasePopulation, removeAllBears } = useStore();

  return (
    <>
      <ZustandTest />
      <button onClick={increasePopulation}>one up</button>
      <button onClick={removeAllBears}>remove all</button>
    </>
  );
};

export default UserCheck;
