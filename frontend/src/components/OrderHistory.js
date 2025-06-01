import React, { useState } from 'react';
import axios from 'axios';

const OrderHistory = () => {
  const [userId, setUserId] = useState('');
  const [orders, setOrders] = useState([]);

  const fetchHistory = async () => {
    const res = await axios.get(`http://localhost:5002/orders/history/${userId}`);
    setOrders(res.data);
  };

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Order History</h2>
      <input placeholder="User ID" className="border p-2" value={userId} onChange={e => setUserId(e.target.value)} />
      <button onClick={fetchHistory} className="bg-gray-700 text-white px-4 py-2 rounded">Fetch</button>
      <ul className="list-disc pl-6">
        {orders.map(o => <li key={o.id}>Product: {o.product}</li>)}
      </ul>
    </div>
  );
};

export default OrderHistory;
