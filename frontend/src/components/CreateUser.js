import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const createUser = async () => {
    await axios.post('http://localhost:5000/users', { name, email });
    alert('User created!');
  };

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Create User</h2>
      <input placeholder="Name" className="border p-2" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Email" className="border p-2" value={email} onChange={e => setEmail(e.target.value)} />
      <button onClick={createUser} className="bg-blue-500 text-white px-4 py-2 rounded">Add User</button>
    </div>
  );
};

export default CreateUser;
