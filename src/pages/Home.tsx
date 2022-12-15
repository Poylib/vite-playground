import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  return (
    <StyledHome>
      <li>
        <Link to='/search'>Debouncing Test</Link>
      </li>
      <li>
        <Link to='/fb'>firebase Test</Link>
      </li>
      <li>
        <Link to='/login'>UserCheck Test ( zustand )</Link>
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
  }
`;
