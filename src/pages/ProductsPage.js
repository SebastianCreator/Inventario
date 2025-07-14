import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../mock/products';

const ProductsPage = ({ setCurrentPage, setSelectedProductId }) => {
  return (
    <div className="ij-container">
      <div className="ij-flex ij-justify-between ij-align-center ij-mb-4">
        <h2 className="ij-h4 ij-fw-bold ij-text-foreground">Gestión de Productos</h2>
        <button 
          onClick={() => setCurrentPage('add-product')}
          className="ij-btn ij-btn-primary"
        >
          + Nuevo Producto
        </button>
      </div>

      <div className="ij-row ij-row-cols-1 ij-row-cols-md-2 ij-row-cols-lg-3 ij-gap-4">
        {products.map(product => (
          <div className="ij-col" key={product.id}>
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