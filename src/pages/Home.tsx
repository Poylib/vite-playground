import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  return (
    <StyledHome>
      <li>
        <Link to='/search'>Debouncing Test</Link>
      </li>
      <li>
        <Link to='/signup'>Signup</Link>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <Link to='/zt'>UserCheck Test ( zustand )</Link>
      </li>
    </StyledHome>
  );
};
export default Home;

const StyledHome = styled.ul`
  li {
    margin: 10px 0;
    padding: 10px;
    font-size: 30px;
    a {
      display: block;
      margin: 10px 0;
    }
  }
`;
