// src/hooks/useAuthHeaders.ts
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const useAuthHeaders = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthHeaders must be used within an AuthProvider');
  }
  return context.getAuthHeaders();
};

export default useAuthHeaders;
