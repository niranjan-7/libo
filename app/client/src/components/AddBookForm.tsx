import React, { useState } from 'react';
import { addBook } from '../services/api';
import { Book } from '../types/Book';

const AddBookForm: React.FC = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState(0);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newBook: Omit<Book, 'id'> = { name, author, pages };
    addBook(newBook).then(response => {
      console.log('Book added:', response.data);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <input type="number" value={pages} onChange={e => setPages(Number(e.target.value))} />
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
