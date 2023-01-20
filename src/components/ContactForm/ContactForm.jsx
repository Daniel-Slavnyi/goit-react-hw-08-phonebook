import React from 'react';
import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const stateObj = {
    name: setName,
    number: setNumber,
  };

  const handleDataUser = e => {
    stateObj[e.target.name](e.target.value);
  };

  return (
    <form action="">
      <label htmlFor="">
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleDataUser}
        />
        <span>Name</span>
      </label>
      <label htmlFor="">
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleDataUser}
        />
        <span>Number</span>
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}
