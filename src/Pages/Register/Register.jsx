import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch } from 'react-redux';

import { registerUser } from 'store/register/register-operetions';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email(),
  password: Yup.string().min(6).max(12).required(),
});

{
  /* <ToastContainer
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
/>; */
}

// const notify = () => toast('Wow so easy!');

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export default function Register() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(registerUser(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" />
          <span>Name</span>
        </label>
        <label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" />
          <span>E-mail</span>
        </label>
        <label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" />
          <span>Password</span>
        </label>
        <button name="button">Register</button>
      </Form>
    </Formik>
  );
}
