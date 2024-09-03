import { useContext } from 'react';
import styled from 'styled-components';
import BookList from './BookList';
import AuthContext from '../context/AuthContext';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  width: 100%;
  box-sizing: border-box; /* Ensure padding is included in the width */
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f4f7f6;
  overflow-x: hidden; /* Hide horizontal overflow */
`;

const LogoutButton = styled.button`
  background-color: #e74c3c; 
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c0392b;
  }

  &:focus {
    outline: none;
  }
`;

const Home = () => {
  const authContext = useContext(AuthContext);

  const handleLogout = () => {
    authContext?.logout();
  };

  return (
    <PageContainer>
      <HeaderContainer>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </HeaderContainer>
      <BookList />
    </PageContainer>
  );
};

export default Home;
