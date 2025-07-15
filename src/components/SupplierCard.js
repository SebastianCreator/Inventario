import React from 'react';

const SupplierCard = ({ supplier, onEdit }) => {
  return (
    <div className=" card  bg-card  text-card-foreground  shadow-sm  h-100">
      <div className=" card-body  flex  flex-col">
        <div className=" flex  justify-between  align-items-start  mb-3">
          <div>
            <h5 className=" card-title  fw-semibold">{supplier.name}</h5>
            <p className=" card-subtitle  text-muted">{supplier.category}</p>
          </div>
          <span className=" badge  bg-info  text-card-foreground">
            {supplier.products} productos
          </span>
        </div>
        <p className=" card-text  text-muted  flex-grow-1">{supplier.contact}</p>
        <div className=" flex  justify-between  align-center  mt-3">
          <span className=" text-muted">{supplier.email}</span>
          <div className=" flex  gap-2">
            <button 
              onClick={onEdit}
              className=" btn  btn-sm  btn-outline-primary"
            >
              Editar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierCard;