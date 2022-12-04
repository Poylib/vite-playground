import db from '../firebase';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { async } from '@firebase/util';

const GetDataList = () => {
  const [nameList, setNameList] = useState(['list']);
  useEffect(() => {
    (async () => {
      // const docRef = doc(db, 'users');
      const docRefs = collection(db, 'users');
      const docSnap = await getDocs(docRefs);
      docSnap.forEach(doc => {
        // console.log(doc.id, ' => ', doc.data());
        const { data } = doc.data();
        setNameList([data]);
      });
    })();
  }, []);
  return (
    <>
      <ul>
        {nameList.map((name, index) => {
          return <li key={index}>{name}</li>;
        })}
      </ul>
    </>
  );
};

export default GetDataList;
