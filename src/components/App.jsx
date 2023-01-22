import LogIn from '../Pages/Login/LogIn';
import { Route, Routes } from 'react-router-dom';
import Contacts from '../Pages/Contacts/Contacts';
import HomePage from '../Pages/HomePage/HomePage';
import LayoutM from '../Pages/Layout/Layout';

import Register from '../Pages/Register/Register';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshCurrentUser } from 'store/register/register-operetions';
import ContactsDetail from 'Pages/ContactsDetail/ContactsDetail';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutM />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contacts/:id" element={<ContactsDetail />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};
