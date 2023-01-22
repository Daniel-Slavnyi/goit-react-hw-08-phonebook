import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactForm/ContactList';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchUsers } from 'store/contacts/operations';
import { Wrapper } from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <Wrapper>
      <ContactForm />
      <ContactList />
    </Wrapper>
  );
}
