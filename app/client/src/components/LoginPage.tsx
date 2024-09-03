
import { useContext, useState } from 'react';
import styled from 'styled-components';
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

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Login must be used within an AuthProvider');
  }

  const { login } = context;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Username or email" onChange={(e:any) => setUsername(e.target.value)}/>
        <Input type="password" placeholder="Password"  onChange={(e:any) => setPassword(e.target.value)}/>
        <Button type="submit" >Submit</Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
