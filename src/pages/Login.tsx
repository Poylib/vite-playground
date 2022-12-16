import { getDoc, doc } from 'firebase/firestore';
import { useState } from 'react';
import UserInfo from '../components/UserInfo';
import db from '../firebase';

const Login = () => {
  const [user, setUser] = useState({
    name: '',
    age: '',
  });
  const formHandler: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      memberNum: { value: string };
    };
    const docRef = doc(db, 'users', target.memberNum.value);
    try {
      const data = (await getDoc(docRef)).data();
      if (data !== undefined) {
        setUser({ name: data.data.name, age: data.data.age });
      }
    } catch {
      console.log('Error loading document: ', e);
    }
  };

  return (
    <>
      <form onSubmit={formHandler}>
        <input placeholder='회원번호 입력' name='memberNum' />
      </form>
      <UserInfo user={user} />
    </>
  );
};

export default Login;
