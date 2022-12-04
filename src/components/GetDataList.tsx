import db from '../firebase';
<<<<<<< HEAD
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { UserData } from '../interface';

const GetDataList = () => {
  const [nameList, setNameList] = useState<UserData[]>([]);

  useEffect(() => {
    (async () => {
      let dataArr: UserData[] = [];
      const querySnapshot = await getDocs(collection(db, 'users'));
      querySnapshot.docs.map(el => {
        const { data } = el.data();
        dataArr.push(data);
      });
      setNameList(dataArr);
    })();
  }, []);
  return (
    <ul>
      {nameList.map((list, index) => {
        return (
          <li key={index}>
            <p>
              name: {list.name} <br />
              age: {list.age}
            </p>
          </li>
        );
      })}
    </ul>
=======
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
>>>>>>> 138f016 (Add firebase test (#2))
  );
};

export default GetDataList;
