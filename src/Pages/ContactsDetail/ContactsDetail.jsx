import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactsDetail() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const { id } = useParams();

  const prevLocation = useLocation();
  const users = useSelector(state => state.contacts.items);

  useEffect(() => {
    setCurrentUser(users.find(user => user.id === id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(currentUser);
  return (
    <div data-aos="zoom-in">
      <Link to={prevLocation.state.from}>goback</Link>
      <p>name {currentUser.name}</p>
      <p>name {currentUser.number}</p>
    </div>
  );
}
