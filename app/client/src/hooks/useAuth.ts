
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthHeaders must be used within an AuthProvider');
  }
  return context.getAuthHeaders();
};

export default useAuth;
