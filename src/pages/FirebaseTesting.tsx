import db from '../firebase';
import { collection, doc, setDoc } from 'firebase/firestore';
import React from 'react';
import GetDataList from '../components/GetDataList';

const FirebaseTeting = () => {
  const formHandler: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      inputValue: { value: string };
    };
    const value = target.inputValue.value;
    const inputRef = collection(db, 'users');
    try {
      await setDoc(doc(inputRef, 'name'), {
        data: value,
      });
      console.log('success');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <>
      <form onSubmit={formHandler}>
        <input name='inputValue' />
        <button>제출버튼</button>
      </form>
      <GetDataList />
    </>
  );
};

export default FirebaseTeting;
