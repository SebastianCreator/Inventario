import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';
import { suppliers } from '../mock/suppliers';

const AddProductPage = ({ setCurrentPage }) => {
  const [product, setProduct] = useState({
    name: '',
    sku: '',
    stock: '',
    category: '',
    price: '',
    description: '',
    entryDate: new Date().toISOString().split('T')[0],
    supplierId: ''
  });

  const handleSubmit = (productData) => {
    console.log('Producto a agregar:', productData);
    setCurrentPage('products');
  };

  return (
    <div className=" container  py-4">
      <h2 className=" h4  fw-bold  text-foreground  mb-4">Agregar Nuevo Producto</h2>
      <div className=" card  bg-card  p-4  shadow-sm">
        <ProductForm 
          initialData={product}
          onSubmit={handleSubmit}
          onCancel={() => setCurrentPage('products')}
          suppliers={suppliers}
        />
      </div>
    </div>
  );
};

export default AddProductPage;