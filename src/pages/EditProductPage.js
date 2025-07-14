import React, { useState, useEffect } from 'react';
import ProductForm from '../components/ProductForm';
import { products } from '../mock/products';
import { suppliers } from '../mock/suppliers';

const EditProductPage = ({ setCurrentPage, productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(productId));
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [productId]);

  const handleSubmit = (updatedProduct) => {
    console.log('Producto actualizado:', updatedProduct);
    setCurrentPage('products');
  };

  if (!product) {
    return <div className="ij-text-foreground ij-text-center ij-py-4">Cargando producto...</div>;
  }

  return (
    <div className="ij-container ij-py-4">
      <h2 className="ij-h4 ij-fw-bold ij-text-foreground ij-mb-4">Editar Producto</h2>
      <div className="ij-card ij-bg-card ij-p-4 ij-shadow-sm">
        <ProductForm 
          initialData={product}
          onSubmit={handleSubmit}
          onCancel={() => setCurrentPage('products')}
          isEditing={true}
          suppliers={suppliers}
        />
      </div>
    </div>
  );
};

export default EditProductPage;