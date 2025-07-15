import React from 'react';

const ProductCard = ({ product, onEdit }) => {
  return (
    <div className=" card  bg-card  text-card-foreground  shadow-sm  h-100">
      <div className=" card-body  flex  flex-col">
        <div className=" flex  justify-between  align-items-start  mb-3">
          <div>
            <h5 className=" card-title  fw-semibold">{product.name}</h5>
            <p className=" card-subtitle  text-muted">{product.category}</p>
          </div>
          <span className={` badge ${
            product.stock > 10 ? ' bg-success' : ' bg-warning  text-card-foreground'
          }`}>
            {product.stock} en stock
          </span>
        </div>
        <p className=" card-text  text-muted  flex-grow-1">{product.description}</p>
        <div className=" flex  justify-between  align-center  mt-3">
          <span className=" fs-5  fw-bold  text-primary">${product.price}</span>
          <div className=" flex  gap-2">
            <button 
              onClick={onEdit}
              className=" btn  btn-sm  btn-outline-primary"
            >
              Editar
            </button>
            <button className=" btn  btn-sm  btn-outline-danger">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;