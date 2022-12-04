import db from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import React, { useRef } from 'react';

const FirebaseTeting = () => {
  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      inputValue: { value: string };
    };
    const value = target.inputValue.value;
    console.log(value);
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
