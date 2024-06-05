import React, { useState } from 'react';
import { borrowBook } from '../services/api';
import { Borrow } from '../types/Borrow';

const BorrowForm: React.FC = () => {
  const [userId, setUserId] = useState(0);
  const [bookId, setBookId] = useState(0);
  const [borrowDate, setBorrowDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newBorrow: Omit<Borrow, 'id'> = { userId, bookId, borrowDate, returnDate };
    borrowBook(newBorrow).then(response => {
      console.log('Book borrowed:', response.data);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>User ID:</label>
        <input type="number" value={userId} onChange={e => setUserId(Number(e.target.value))} />
      </div>
      <div>
        <label>Book ID:</label>
        <input type="number" value={bookId} onChange={e => setBookId(Number(e.target.value))} />
      </div>
      <div>
        <label>Borrow Date:</label>
        <input type="date" value={borrowDate} onChange={e => setBorrowDate(e.target.value)} />
      </div>
      <div>
        <label>Return Date:</label>
        <input type="date" value={returnDate} onChange={e => setReturnDate(e.target.value)} />
      </div>
      <button type="submit">Borrow Book</button>
    </form>
  );
};

export default BorrowForm;
