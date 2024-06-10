import React, { useState } from 'react';
import { addUser } from '../services/api';
import { User } from '../types/User';  // Assuming you have a User type defined

const AddUserForm: React.FC = () => {
  const [name, setName] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !collegeName || !email) {
      setError('All fields are required.');
      return;
    }

    const newUser: Omit<User,'id'> = { name, collegeName, email };
    addUser(newUser).then(response => {
      console.log('User added:', response.data);
      setName('');
      setCollegeName('');
      setEmail('');
      setError('');
    }).catch(error => {
      console.error('Error adding user:', error);
      setError('Error adding user.');
    });
  };

  return (
    <>
      <h1>Add a User</h1>
      <form onSubmit={handleSubmit}>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label>College Name:</label>
          <input type="text" value={collegeName} onChange={e => setCollegeName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <button type="submit">Add User</button>
      </form>
    </>
  );
};

export default AddUserForm;
