import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './NavBar';
import AddBookForm from './AddBookForm';
import BookList from './BookList';
import BorrowForm from './BorrowForm';
import BorrowedList from './BorrowedList';
import UserList from './UserList';
import AddUserForm from './AddUserForm';
import useAuth from '../hooks/useAuth';

const Dashboard: React.FC = () => {
  const { token, logout } = useAuth();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <NavBar />
      {/* <button onClick={logout}>Logout</button> */}
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
