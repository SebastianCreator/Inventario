import React from 'react';

const ProductCard = ({ product, onEdit }) => {
  return (
    <div className="ij-card ij-bg-card ij-text-card-foreground ij-shadow-sm ij-h-100">
      <div className="ij-card-body ij-flex ij-flex-col">
        <div className="ij-flex ij-justify-between ij-align-items-start ij-mb-3">
          <div>
            <h5 className="ij-card-title ij-fw-semibold">{product.name}</h5>
            <p className="ij-card-subtitle ij-text-muted">{product.category}</p>
          </div>
          <span className={`ij-badge ${
            product.stock > 10 ? 'ij-bg-success' : 'ij-bg-warning ij-text-card-foreground'
          }`}>
            {product.stock} en stock
          </span>
        </div>
        <p className="ij-card-text ij-text-muted ij-flex-grow-1">{product.description}</p>
        <div className="ij-flex ij-justify-between ij-align-center ij-mt-3">
          <span className="ij-fs-5 ij-fw-bold ij-text-primary">${product.price}</span>
          <div className="ij-flex ij-gap-2">
            <button 
              onClick={onEdit}
              className="ij-btn ij-btn-sm ij-btn-outline-primary"
            >
              Editar
            </button>
            <button className="ij-btn ij-btn-sm ij-btn-outline-danger">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;