import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivetaRoute() {
  const token = useSelector(state => state.register.token);
  return token ? <Outlet /> : <Navigate to="/" />;
}
