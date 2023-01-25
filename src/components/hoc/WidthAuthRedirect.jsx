import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function WidthAuthRedirect(Component, navigateTo) {
  const ProtectedComponent = prop => {
    const token = useSelector(state => state.register.token);
    console.log(token);
    return token !== null ? (
      <Component {...prop} />
    ) : (
      <Navigate to={navigateTo} />
    );
  };
  return ProtectedComponent;
}

export default WidthAuthRedirect;
