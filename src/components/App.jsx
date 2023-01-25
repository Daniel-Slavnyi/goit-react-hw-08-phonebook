import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchUsers } from '../store/contacts/operations';
import { refreshCurrentUser } from 'store/register/register-operetions';

import HomePage from '../Pages/HomePage/HomePage';
import LayoutM from 'Pages/Layout/LayoutM';
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
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};
