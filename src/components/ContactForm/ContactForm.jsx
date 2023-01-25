import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Space, Spin } from 'antd';
import { Button, Tooltip } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { addNewUser } from 'store/contacts/operations';
import {
  FormEl,
  InputEl,
  LabelEl,
  Span,
  WrapBtnSpin,
  WrapInputs,
} from './ContactForm.styled';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const stateObj = {
    name: setName,
    number: setNumber,
  };

  const handleDataUser = e => {
    stateObj[e.target.name](e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addNewUser({ name, number }));
  };

  return (
    <FormEl action="" data-aos="zoom-in">
      <WrapInputs>
        <LabelEl>
          <InputEl
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder=" "
            value={name}
            onChange={handleDataUser}
          />
          <Span>Name</Span>
        </LabelEl>
        <LabelEl>
          <InputEl
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder=" "
            value={number}
            onChange={handleDataUser}
          />
          <Span>Number</Span>
        </LabelEl>
      </WrapInputs>
      <WrapBtnSpin>
        <Tooltip
          title="Add new contact"
          placement="right"
          style={{
            top: 0,
            right: 0,
          }}
        >
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            style={{
              borderRadius: '50%',
            }}
            onClick={handleSubmit}
          ></Button>
        </Tooltip>
        {isLoading && (
          <Space size="middle">
            <Spin size="middle" />
          </Space>
        )}
      </WrapBtnSpin>
    </FormEl>
  );
}
