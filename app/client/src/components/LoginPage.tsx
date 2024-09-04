import { useContext, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import AuthContext from '../context/AuthContext';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button<{ loading: boolean }>`
  padding: 10px;
  background-color: ${({ loading }) => (loading ? '#6c757d' : '#007bff')};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: ${({ loading }) => (loading ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ loading }) => (loading ? '#6c757d' : '#0056b3')};
  }

  &:disabled {
    opacity: 0.6;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const ErrorMessage = styled.div<{ exiting: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #f8d7da;
  color: #721c24;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 300px;
  animation: ${({ exiting }) => (exiting ? slideOut : slideIn)} 0.5s ease forwards;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #721c24;
  font-size: 18px;
  cursor: pointer;
  margin-left: 15px;
`;

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [exiting, setExiting] = useState(false);
  const [loading, setLoading] = useState(false);
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Login must be used within an AuthProvider');
  }

  const { login } = context;

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(username)) {
      setError('Invalid email format.');
      setUsername('');
      setPassword('');
      return;
    }

    setLoading(true);
    try {
      await login(username, password);
    } catch (error) {
      setError('Login failed: Incorrect username or password.');
      setUsername('');
      setPassword('');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setExiting(true);
        setTimeout(() => {
          setError(null);
          setExiting(false);
        }, 500);
      }, 10000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [error]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Heading>LIBO</Heading>
        <Input
          type="text"
          placeholder="Username or email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" loading={loading} disabled={loading}>
          {loading ? 'Loading...' : 'Submit'}
        </Button>
      </Form>

      {error && (
        <ErrorMessage exiting={exiting}>
          {error}
          <CloseButton
            onClick={() => {
              setExiting(true);
              setTimeout(() => {
                setError(null);
                setExiting(false);
              }, 500);
            }}
          >
            ×
          </CloseButton>
        </ErrorMessage>
      )}
    </Container>
  );
};

export default LoginPage;
