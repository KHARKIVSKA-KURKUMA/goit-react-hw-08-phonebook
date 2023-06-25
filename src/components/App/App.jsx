import { ToastContainer } from 'react-toastify';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'store/auth/authThunks';
import { lazy, useEffect } from 'react';
import Restricted from 'components/Routes/Restricted';
import Private from 'components/Routes/Private';
/* -------------------------------------------------------------------------- */
const SignInPage = lazy(() => import('../../pages/SignIn-page/SignInPage'));
const SignUpPage = lazy(() => import('pages/SignUp-page/SignUpPage'));
const ContactsPage = lazy(() => import('pages/Contacts-page/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <ToastContainer autoClose={1500} theme="colored" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/login" />} />
          <Route
            path="login"
            element={<Restricted component={SignInPage} to="/contacts" />}
          />
          <Route
            path="register"
            element={<Restricted component={SignUpPage} to="/contacts" />}
          />
          <Route
            path="contacts"
            element={<Private component={ContactsPage} to="/login" />}
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
export default App;
