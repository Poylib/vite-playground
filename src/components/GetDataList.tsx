import db from '../firebase';
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
  );
};

export default GetDataList;
