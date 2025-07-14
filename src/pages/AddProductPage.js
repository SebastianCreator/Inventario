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
    <div className="ij-container ij-py-4">
      <h2 className="ij-h4 ij-fw-bold ij-text-foreground ij-mb-4">Agregar Nuevo Producto</h2>
      <div className="ij-card ij-bg-card ij-p-4 ij-shadow-sm">
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