import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import useAuthHeaders from '../hooks/useAuthHeaders';

interface PrivateRouteProps {
  component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const { token } = useAuthHeaders();

  return (
    <Route
      {...rest}
      element={token ? <Component /> : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
