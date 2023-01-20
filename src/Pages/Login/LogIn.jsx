import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUser } from 'store/register/register-operetions';

const schema = Yup.object().shape({
  email: Yup.string().email(),
  password: Yup.string().min(6).max(12).required(),
});

const initialValues = {
  email: '',
  password: '',
};

export default function LogIn() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(loginUser(values));
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
          <Field type="email" name="email" />
          <ErrorMessage name="email" />
          <span>E-mail</span>
        </label>
        <label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" />
          <span>Password</span>
        </label>
        <button name="button">Login</button>
      </Form>
    </Formik>
  );
}
