
import axios from 'axios';
import { Book } from '../types/Book';
import { Borrow } from '../types/Borrow';
import { User } from '../types/User';
import { Auth } from '../types/Auth';
import { getAuthToken } from './auth';
import { Backend_URL } from '../config/baseUrl';

const api = axios.create({
  baseURL: Backend_URL, 
});

api.interceptors.request.use(
  (config) => {
    const token = getAuthToken(); 
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const loginUser = (payload: Auth) => api.post('/auth/login', payload);
export const getBooks = () => api.get<Book[]>('/books');
export const addBook = (book: Omit<Book, 'id'>) => api.post('/books', book);
export const addUser = (user: Omit<User, 'id'>) => api.post('/users/register', user);
export const borrowBook = (borrow: Omit<Borrow, 'id'>) => api.post('/borrow', borrow);
export const getBorrowedBooks = () => api.get<Borrow[]>('/borrow');
export const getUsers = () => api.get('/users');


// export const fetchBooks = async () => {
//   const token = localStorage.getItem('token');
//   const response = await fetch('http://localhost:3000/api/books', {
//     headers: {
//       'Authorization': `Bearer ${token}`,
//     },
//   });
//   const data = await response.json();
//   console.log(data);
//   return data
// };