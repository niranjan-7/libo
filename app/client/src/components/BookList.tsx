import React, { useEffect, useState } from 'react';
import { getBooks } from '../services/api';
import { Book } from '../types/Book';

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks().then(response => setBooks(response.data));
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.name} by {book.author} - {book.pages} pages</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
