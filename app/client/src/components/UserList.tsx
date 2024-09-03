import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getUsers } from '../services/api';
import { User } from '../types/User';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f4f7f6; 
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 80%;
  margin: 0 auto;
  background-color: #f4f7f6;
  border-radius: 10px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
`;

const TableHeader = styled.th`
  background-color: #4a90e2;
  color: white;
  padding: 12px;
  text-align: left;
  font-weight: bold;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #d0d0d0;
  border-left: 1px solid #e0e0e0;
  &:first-child {
    border-left: none;
    border-top-left-radius: 10px;
  }
  &:last-child {
    border-top-right-radius: 10px; 
  }
`;


const TableRow = styled.tr`
  background-color: #ffffff; 
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  &:hover {
    background-color: #f1f1f1;
  }
`;

const TableCell = styled.td`
  padding: 12px;
  border: 1px solid #e0e0e0; 
`;

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then(response => setUsers(response.data));
  }, []);

  return (
    <Container>
      <h1>Users</h1>
      <Table>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>College Name</TableHeader>
            <TableHeader>Email</TableHeader>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.collegeName}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default UserList;
