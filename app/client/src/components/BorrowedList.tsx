import React, { useEffect, useState } from 'react';
import { getBorrowedBooks } from '../services/api';
import { Borrow } from '../types/Borrow';

const BorrowedList: React.FC = () => {
  const [borrowedBooks, setBorrowedBooks] = useState<Borrow[]>([]);

  useEffect(() => {
    getBorrowedBooks().then(response => setBorrowedBooks(response.data));
  }, []);

  return (
    <div>
      <h1>Borrowed Books</h1>
      <ul>
        {borrowedBooks.map(borrow => (
          <li key={borrow.id}>
            User ID: {borrow.userId} - Book ID: {borrow.bookId} - Borrow Date: {borrow.borrowDate} - Return Date: {borrow.returnDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BorrowedList;
