import axios from 'axios';
import { Book } from '../types/Book';
import { Borrow } from '../types/Borrow';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Adjust based on your backend URL
});

export const getBooks = () => api.get('/books');
export const addBook = (book: Omit<Book, 'id'>) => api.post('/books', book);
export const loginUser = (user: { username: string, password: string }) => api.post('/users/login', user);
export const borrowBook = (borrow: Omit<Borrow, 'id'>) => api.post('/borrow', borrow);
export const getBorrowedBooks = () => api.get('/borrow');
