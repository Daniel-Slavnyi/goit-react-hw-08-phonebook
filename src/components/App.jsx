import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchUsers } from '../store/contacts/operations';
import { refreshCurrentUser } from 'store/register/register-operetions';

import HomePage from '../Pages/HomePage/HomePage';
import LayoutM from 'Pages/Layout/LayoutM';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivetaRoute from './PrivetaRoute/PrivetaRoute';

const Contacts = lazy(() => import('../Pages/Contacts/Contacts'));
const LogIn = lazy(() => import('../Pages/Login/LogIn'));
const Register = lazy(() => import('../Pages/Register/Register'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUser());
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutM />}>
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/" element={<PrivetaRoute />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
