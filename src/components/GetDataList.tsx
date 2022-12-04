import db from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';

const GetDataList = () => {
  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, 'users'));
      querySnapshot.forEach(doc => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    })();
  }, []);
  return (
    <>
      <ul>
        <li>리스트</li>
      </ul>
    </>
  );
};

export default GetDataList;
