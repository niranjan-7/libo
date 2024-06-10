import axios from 'axios';
import { Book } from '../types/Book';
import { Borrow } from '../types/Borrow';
import { User } from '../types/User';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Adjust based on your backend URL
});

export const getBooks = () => api.get('/books');
export const addBook = (book: Omit<Book, 'id'>) => api.post('/books', book);
export const addUser = (book: Omit<User, 'id'>) => api.post('/users/register', book);
export const borrowBook = (borrow: Omit<Borrow, 'id'>) => api.post('/borrow', borrow);
export const getBorrowedBooks = () => api.get('/borrow');
export const getUsers = () => api.get('/users');