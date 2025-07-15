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
    return <div className=" text-foreground  text-center  py-4">Cargando producto...</div>;
  }

  return (
    <div className=" container  py-4">
      <h2 className=" h4  fw-bold  text-foreground  mb-4">Editar Producto</h2>
      <div className=" card  bg-card  p-4  shadow-sm">
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