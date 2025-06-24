import React, { useState } from 'react';
import axios from 'axios';

const CreateOrder = () => {
  const [userId, setUserId] = useState('');
  const [product, setProduct] = useState('');

  const createOrder = async () => {
    await axios.post(`${process.env.BACKEND_ORDERS_URL}`, { user_id: userId, product });
    alert('Order placed!');
  };

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Create Order</h2>
      <input placeholder="User ID" className="border p-2" value={userId} onChange={e => setUserId(e.target.value)} />
      <input placeholder="Product Name" className="border p-2" value={product} onChange={e => setProduct(e.target.value)} />
      <button onClick={createOrder} className="bg-purple-500 text-white px-4 py-2 rounded">Place Order</button>
    </div>
  );
};

export default CreateOrder;
