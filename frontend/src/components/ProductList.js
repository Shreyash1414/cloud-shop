import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:30001/products')
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Product Catalog</h2>
      <ul className="list-disc pl-6">
        {products.map(p => <li key={p.id}>{p.name} - ₹{p.price}</li>)}
      </ul>
    </div>
  );
};

export default ProductList;
