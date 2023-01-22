import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DeleteOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import { deleteUser } from 'store/contacts/operations';
import { LiElem, UlElem } from './ContactList.styled';
import { NavLink, useLocation } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.contacts.items);

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 20,
    });
  }, []);

  const handleDeletUser = id => {
    dispatch(deleteUser(id));
  };

  return (
    <UlElem>
      {users.map(user => (
        <LiElem key={user.id} data-aos="zoom-in">
          <NavLink to={`/contacts/${user.id}`} state={{ from: location }}>
            <p>
              {user.name} : {user.number}
            </p>
          </NavLink>
          <Tooltip title="delete" placement="right">
            <Button
              type="primary"
              shape="circle"
              icon={<DeleteOutlined />}
              onClick={() => {
                handleDeletUser(user.id);
              }}
            />
          </Tooltip>
        </LiElem>
      ))}
    </UlElem>
  );
}
