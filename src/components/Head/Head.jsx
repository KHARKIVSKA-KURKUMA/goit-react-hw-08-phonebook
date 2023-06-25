import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from 'store/selectors';
import styled from 'styled-components';

const Head = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <NavContainer>
          <Link to="register">Sign Up</Link>
          <Link to="login">Sign In</Link>
        </NavContainer>
      )}
    </>
  );
};

export default Head;

const Link = styled(NavLink)`
  padding: 12px 20px;
  color: #000000;
  border-radius: 10px;
  background-color: transparent;
  font-family: 'Lexend Peta', sans-serif;
  text-decoration: none;
  transition: background-color 300ms linear;
  &:hover,
  &:focus {
    background-color: #cfd382;
  }
  &.active {
    background-color: #fdc886;
  }
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-right: 30px;
  background-color: #f5f2ea;
  padding-top: 20px;
`;
