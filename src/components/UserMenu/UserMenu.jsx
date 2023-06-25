import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'store/auth/authThunks';
import { setUserName } from 'store/selectors';
import { Decr, UserBarWrap, Button } from './UserMenu.styled';
import LogoutIcon from '@mui/icons-material/Logout';

const UserMenu = () => {
  const dispatch = useDispatch();
  const Name = useSelector(setUserName);
  return (
    <UserBarWrap>
      <Decr>Hello, {Name}</Decr>
      <Button type="button" onClick={() => dispatch(logOut())}>
        <LogoutIcon /> Log Out
      </Button>
    </UserBarWrap>
  );
};

export default UserMenu;
