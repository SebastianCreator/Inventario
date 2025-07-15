import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../mock/products';

const ProductsPage = ({ setCurrentPage, setSelectedProductId }) => {
  return (
    <div className=" container">
      <div className=" flex  justify-between  align-center  mb-4">
        <h2 className=" h4  fw-bold  text-foreground">Gestión de Productos</h2>
        <button 
          onClick={() => setCurrentPage('add-product')}
          className=" btn  btn-primary"
        >
          + Nuevo Producto
        </button>
      </div>

      <div className=" row  row-cols-1  row-cols-md-2  row-cols-lg-3  gap-4">
        {products.map(product => (
          <div className=" col" key={product.id}>
            <ProductCard 
              product={product} 
              onEdit={() => {
                setSelectedProductId(product.id);
                setCurrentPage('edit-product');
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;