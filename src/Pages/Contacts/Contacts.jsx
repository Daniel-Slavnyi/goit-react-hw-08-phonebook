import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactForm/ContactList';
import React from 'react';

export default function Contacts() {
  return (
    <div>
      <ContactForm />
      <ContactList />
    </div>
  );
}
