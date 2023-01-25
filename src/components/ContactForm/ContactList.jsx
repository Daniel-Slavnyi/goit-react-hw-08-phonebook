import React, { useEffect } from 'react';

import { useState } from 'react';
import { useSelector } from 'react-redux';

import AOS from 'aos';
import 'aos/dist/aos.css';

import ContactItem from './ContactItem';
import {
  FilterInput,
  FilterLabel,
  FilterSpanEl,
  UlElem,
} from './ContactList.styled';

export default function ContactList() {
  const [filter, setFilter] = useState('');
  const users = useSelector(state => state.contacts.items);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const filteredUser = users.filter(user =>
    user.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  return (
    <>
      <FilterLabel>
        <FilterInput
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          type="text"
          placeholder=" "
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
        <FilterSpanEl data-aos="flip-left" data-aos-easing="ease-out-cubic">
          Filter
        </FilterSpanEl>
      </FilterLabel>
      <UlElem>
        {filteredUser.map(obj => (
          <ContactItem user={obj} key={obj.id} />
        ))}
      </UlElem>
    </>
  );
}
