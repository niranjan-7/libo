import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';

interface AuthContextType {
  token: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  getAuthHeaders: () => Record<string, string>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      navigate('/home');
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const login = async (username: string, password: string) => {
    try {
      const response = await loginUser({ username, password });
      const { access_token } = response.data;

      localStorage.setItem('token', access_token);
      setToken(access_token);
      navigate('/home');
    } catch (error) {
      console.error('Login failed:', error);
      throw new Error('Login failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate('/login');
  };

  const getAuthHeaders = () => ({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  });

  return (
    <AuthContext.Provider value={{ token, login, logout, getAuthHeaders }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
