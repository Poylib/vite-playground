import { Link } from 'react-router-dom';

const Text = () => {
  return (
    <>
      <h1>첫 배포</h1>
      <h1>두번째 배포</h1>
      <h1>세번째 배포</h1>
      <h1>레포지토리 배포 확인 후 재배포 테스트</h1>
      <Link to='/search'>검색 페이지로 이동</Link>
    </>
  );
};
export default Text;
