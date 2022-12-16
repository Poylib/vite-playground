import db from '../firebase';
import { collection, doc, setDoc } from 'firebase/firestore';
import GetDataList from '../components/GetDataList';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const formHandler: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
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
      });
      alert(`회원번호는 ${randomNum} 입니다.`);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };
  return (
    <>
      <form onSubmit={formHandler}>
        <p>회원가입</p>
        <input type='text' name='nameInput' />
        <input type='number' name='ageInput' />
        <button>제출버튼</button>
      </form>
      <Link to='/login'>go Login</Link>
      <GetDataList />
    </>
  );
};

export default SignUp;
