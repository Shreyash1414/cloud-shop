import React, { useState } from 'react';
import axios from 'axios';

const CreateProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const createProduct = async () => {
    await axios.post('http://localhost:5001/products', { name, price });
    alert('Product created!');
  };

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Create Product</h2>
      <input placeholder="Name" className="border p-2" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Price" className="border p-2" value={price} onChange={e => setPrice(e.target.value)} />
      <button onClick={createProduct} className="bg-green-500 text-white px-4 py-2 rounded">Add Product</button>
    </div>
  );
};

export default CreateProduct;
