import { Route, Routes } from 'react-router-dom';
import Contacts from './Pages/Layout/Contacts';
import LayoutM from './Pages/Layout/Layout/Layout';
import LogIn from './Pages/Layout/LogIn';
import Register from './Pages/Layout/Register';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutM />}>
          <Route path="contacts" element={<Contacts />} />
          <Route path="login" element={<LogIn />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};
