import React from 'react';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import WidthAuthRedirect from 'components/hoc/WidthAuthRedirect';
import { fetchUsers } from 'store/contacts/operations';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactForm/ContactList';

import { Wrapper } from './Contacts.styled';

function Contacts() {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.register.user.name);

  useEffect(() => {
    if (userName === null) {
      return;
    }
    dispatch(fetchUsers());
  }, [dispatch, userName]);

  return (
    <Wrapper>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <ContactForm />
      <ContactList />
    </Wrapper>
  );
}

const ProtectedContactPage = WidthAuthRedirect(Contacts, '/');

export default ProtectedContactPage;
