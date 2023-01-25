import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function PublicRoute() {
  const token = useSelector(state => state.register.token);
  return token ? <Navigate to="/contacts" /> : <Outlet />;
}
