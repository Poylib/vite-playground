import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <Link to='/'>Home</Link>
    </StyledHeader>
  );
};

const StyledHeader = styled.div``;

export default Header;
