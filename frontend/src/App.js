import React from 'react';
import CreateUser from './components/CreateUser';
import CreateProduct from './components/CreateProduct';
import ProductList from './components/ProductList';
import CreateOrder from './components/CreateOrder';
import OrderHistory from './components/OrderHistory';

function App() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4">🛍 CloudShop UI</h1>
      <CreateUser />
      <CreateProduct />
      <ProductList />
      <CreateOrder />
      <OrderHistory />
    </div>
  );
}

export default App;
