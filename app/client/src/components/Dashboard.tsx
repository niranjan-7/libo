import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import AddBookForm from './AddBookForm';
import BookList from './BookList';
import BorrowForm from './BorrowForm';
import BorrowedList from './BorrowedList';
import UserList from './UserList';
import AddUserForm from './AddUserForm';

const Dashboard: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="books" element={<BookList />} />
        <Route path="add-book" element={<AddBookForm />} />
        <Route path="borrow" element={<BorrowForm />} />
        <Route path="borrowed" element={<BorrowedList />} />
        <Route path="users" element={<UserList />} />
        <Route path="add-user" element={<AddUserForm />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
