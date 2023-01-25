import React from 'react';

import { useState } from 'react';
import { useSelector } from 'react-redux';

import ContactItem from './ContactItem';
import { UlElem } from './ContactList.styled';

export default function ContactList() {
  const [filter, setFilter] = useState('');
  const users = useSelector(state => state.contacts.items);

  const filteredUser = users.filter(user =>
    user.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  return (
    <>
      <input
        type="text"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <UlElem>
        {filteredUser.map(obj => (
          <ContactItem user={obj} key={obj.id} />
        ))}
      </UlElem>
    </>
  );
}
