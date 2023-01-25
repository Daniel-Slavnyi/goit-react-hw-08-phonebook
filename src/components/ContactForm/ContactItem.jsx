import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { DeleteOutlined, EditOutlined, CheckOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { ubdateUser, deleteUser } from 'store/contacts/operations';

import {
  LiElem,
  WrappBtn,
  WrappInput,
  Form,
  InputEl,
  LabelEl,
  SpanEl,
} from './ContactList.styled';

export default function ContactItem({ user }) {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [isOpenedChange, setIsOpenedChange] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 20,
    });
  }, []);

  const handleChange = () => {
    const objDataUser = {
      ...user,
      name: name || user.name,
      number: number || user.number,
    };
    dispatch(ubdateUser(objDataUser));
    setName('');
    setNumber('');
  };

  const handleDeletUser = id => {
    dispatch(deleteUser(id));
  };

  return (
    <>
      <LiElem data-aos="zoom-in">
        <WrappInput>
          <p>
            {user.name} : {user.number}
          </p>

          {isOpenedChange && (
            <Form action="" data-aos="zoom-in">
              <LabelEl>
                <InputEl
                  type="text"
                  placeholder=" "
                  onChange={e => setName(e.target.value)}
                  value={name}
                />
                <SpanEl>Name</SpanEl>
              </LabelEl>
              <LabelEl>
                <InputEl
                  type="tel"
                  placeholder=" "
                  onChange={e => setNumber(e.target.value)}
                  value={number}
                />
                <SpanEl>Number</SpanEl>
              </LabelEl>
              <Tooltip title="Ok" placement="right">
                <Button
                  type="primary"
                  shape="circle"
                  icon={<CheckOutlined />}
                  onClick={handleChange}
                />
              </Tooltip>
            </Form>
          )}
        </WrappInput>
        <WrappBtn>
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
          <Tooltip title="change" placement="right">
            <Button
              type="primary"
              shape="circle"
              icon={<EditOutlined />}
              onClick={() => setIsOpenedChange(prev => !prev)}
            />
          </Tooltip>
        </WrappBtn>
      </LiElem>
    </>
  );
}
