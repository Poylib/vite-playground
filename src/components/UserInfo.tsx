import { User } from '../interface';

const UserInfo = ({ user }: User) => {
  console.log(user);

  return (
    <>
      <p>{user.name}</p>
      <p>{user.age}</p>
    </>
  );
};
export default UserInfo;
