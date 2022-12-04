import db from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import React from 'react';

const FirebaseTeting = () => {
  const formHandler: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      inputValue: { value: string };
    };
    const value = target.inputValue.value;
    try {
      const docRef = await addDoc(collection(db, 'testing'), {
        data: value,
      });
      console.log('Document written with ID: ', docRef.id);
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
    </>
  );
};

export default FirebaseTeting;
