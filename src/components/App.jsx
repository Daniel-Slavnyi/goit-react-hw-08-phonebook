import LogIn from '../Pages/Login/LogIn';
import { Route, Routes } from 'react-router-dom';
import Contacts from '../Pages/Contacts/Contacts';
import HomePage from '../Pages/HomePage/HomePage';
import LayoutM from '../Pages/Layout/Layout';

import Register from '../Pages/Register/Register';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutM />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="login" element={<LogIn />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};
