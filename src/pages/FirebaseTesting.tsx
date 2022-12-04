import db from '../firebase';
import { collection, doc, setDoc } from 'firebase/firestore';
import React from 'react';
import GetDataList from '../components/GetDataList';

const FirebaseTeting = () => {
  const formHandler: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
<<<<<<< HEAD
      nameInput: { value: string };
      ageInput: { value: number };
    };
    const nameValue = target.nameInput.value;
    const ageValue = target.ageInput.value;
    const inputRef = collection(db, 'users');
    const randomNum = String(Math.floor(Math.random() * 1000000000));
    try {
      await setDoc(doc(inputRef, randomNum), {
        data: {
          name: nameValue,
          age: ageValue,
        },
=======
      inputValue: { value: string };
    };
    const value = target.inputValue.value;
    const inputRef = collection(db, 'users');
    try {
      await setDoc(doc(inputRef, 'name'), {
        data: value,
>>>>>>> 138f016 (Add firebase test (#2))
      });
      console.log('success');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <>
      <form onSubmit={formHandler}>
<<<<<<< HEAD
        <input name='nameInput' />
        <input name='ageInput' />
=======
        <input name='inputValue' />
>>>>>>> 138f016 (Add firebase test (#2))
        <button>제출버튼</button>
      </form>
      <GetDataList />
    </>
  );
};

export default FirebaseTeting;
