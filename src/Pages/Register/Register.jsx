import React, { useEffect } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch } from 'react-redux';

import { registerUser } from 'store/register/register-operetions';
import {
  BtnEl,
  ErrorEl,
  FormEl,
  InputEl,
  LabelEl,
  SpanEl,
} from './Register.styled';
import AOS from 'aos';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email(),
  password: Yup.string().min(6).max(12).required(),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export default function Register() {
  const dispatch = useDispatch();
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(registerUser(values));
    resetForm();
  };

  return (
    <>
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
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormEl data-aos="flip-left" data-aos-easing="ease-out-cubic">
          <LabelEl>
            <InputEl type="text" name="name" placeholder=" " />
            <SpanEl>Name</SpanEl>
            <ErrorEl>
              <ErrorMessage name="name" />
            </ErrorEl>
          </LabelEl>
          <LabelEl>
            <InputEl type="email" name="email" placeholder=" " required />
            <SpanEl>E-mail</SpanEl>
            <ErrorEl>
              <ErrorMessage name="email" />
            </ErrorEl>
          </LabelEl>
          <LabelEl>
            <InputEl type="password" name="password" placeholder=" " />
            <SpanEl>Password</SpanEl>
            <ErrorEl>
              <ErrorMessage name="password" />
            </ErrorEl>
          </LabelEl>
          <BtnEl name="button">Register</BtnEl>
        </FormEl>
      </Formik>
    </>
  );
}
