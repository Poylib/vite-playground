import useStore from '../context/store';

const ZustandTest = () => {
  const { bears } = useStore();
  return (
    <>
      <p>{bears}</p>
    </>
  );
};

export default ZustandTest;
