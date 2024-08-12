import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


interface PrivateRouteProps {
  component: React.ComponentType<any>;
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, path }) => {
  const { token } = useAuth();

  return (
    <Routes>
      <Route
      path={path}
      element={token ? <Component /> : <Navigate to="/login" />}
      />
    </Routes>
    
  );
};

export default PrivateRoute;
