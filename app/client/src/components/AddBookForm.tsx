import React, { useState } from 'react';
import { addBook } from '../services/api';
import { Book } from '../types/Book';

const AddBookForm: React.FC = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState<string | number>('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !author || !pages) {
      setError('All fields are required.');
      return;
    }

    const newBook: Omit<Book, 'id'> = { name, author, pages: Number(pages) };
    addBook(newBook).then(response => {
      console.log('Book added:', response.data);
      setName('');
      setAuthor('');
      setPages('');
      setError('');
    }).catch(error => {
      console.error('Error adding book:', error);
    });
  };

  return (
    <>
      <style>
        {`
          input[type=number]::-webkit-outer-spin-button,
          input[type=number]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          input[type=number] {
            -moz-appearance: textfield;
          }
        `}
      </style>
      <h1>Add a book</h1>
      <form onSubmit={handleSubmit}>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" value={author} onChange={e => setAuthor(e.target.value)} />
        </div>
        <div>
          <label>Pages:</label>
          <input
            type="number"
            value={pages}
            onChange={e => setPages(e.target.value ? Number(e.target.value) : '')}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </>
  );
};

export default AddBookForm;
