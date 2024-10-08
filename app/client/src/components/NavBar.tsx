import React from 'react';
import { NavLink } from 'react-router-dom';

import './css/NavBar.css'

const NavBar: React.FC = () => {
  
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   navigate('/');
  // };

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/dashboard/books" className={({ isActive }) => isActive ? 'active' : undefined}>Books</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/add-book" className={({ isActive }) => isActive ? 'active' : undefined}>Add Book</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/borrow" className={({ isActive }) => isActive ? 'active' : undefined}>Borrow Book</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/borrowed" className={({ isActive }) => isActive ? 'active' : undefined}>Borrowed Books</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/users" className={({ isActive }) => isActive ? 'active' : undefined}>Users List</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/add-user" className={({ isActive }) => isActive ? 'active' : undefined}>Add User</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
