const Login = () => {
  const formHandler: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      memberNum: { value: string };
    };
    const memberNumValue = target.memberNum.value;
  };
  return (
    <>
      <form onSubmit={formHandler}>
        <input placeholder='회원번호 입력' name='memberNum' />
      </form>
    </>
  );
};
export default Login;
