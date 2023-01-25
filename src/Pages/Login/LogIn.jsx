import React, { useEffect } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'store/register/register-operetions';

import {
  BtnEl,
  ErrorEl,
  FormEl,
  InputEl,
  LabelEl,
  SpanEl,
} from './Login.styled';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const isUserLogin = useSelector(state => state.register.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  useEffect(() => {
    if (isUserLogin) {
      navigate('/contacts');
    }
  }, [isUserLogin, navigate]);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(loginUser(values));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormEl data-aos="flip-left" data-aos-easing="ease-out-cubic">
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
          <BtnEl name="button">Login</BtnEl>
        </FormEl>
      </Formik>
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
    </>
  );
}
