import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getBooks } from '../services/api';
import { Book } from '../types/Book';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f4f7f6;
  overflow-x: hidden;
`;

const Heading = styled.h1`
  font-size: 32px;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 80%;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
`;

const TableHeader = styled.th`
  background-color: #4a90e2;
  color: white;
  padding: 12px;
  text-align: left;
  font-weight: bold;
  border-bottom: 2px solid #d0d0d0;
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

const Loading = styled.div`
  font-size: 18px;
  color: #4a90e2;
  margin-top: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #4a90e2;
  margin-top: 10px;
  text-align: center;
`;

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getBooks().then(response => {
      setBooks(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <Heading>PSG Library</Heading>
      <Description>Greetings user, check out our books collection</Description>
      {loading ? (
        <Loading>Loading books...</Loading>
      ) : (
        <Table>
          <thead>
            <tr>
              <TableHeader>ID</TableHeader>
              <TableHeader>Name</TableHeader>
              <TableHeader>Author</TableHeader>
              <TableHeader>Pages</TableHeader>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <TableRow key={index + 1}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{book.name}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.pages}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default BookList;
