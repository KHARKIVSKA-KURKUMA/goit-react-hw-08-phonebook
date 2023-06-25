import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'store/selectors';

const Restricted = ({ component: Component, to = '/login' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? <Navigate to={to} /> : <Component />;
};

export default Restricted;
