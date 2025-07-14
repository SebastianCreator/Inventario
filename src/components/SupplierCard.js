import React from 'react';

const SupplierCard = ({ supplier, onEdit }) => {
  return (
    <div className="ij-card ij-bg-card ij-text-card-foreground ij-shadow-sm ij-h-100">
      <div className="ij-card-body ij-flex ij-flex-col">
        <div className="ij-flex ij-justify-between ij-align-items-start ij-mb-3">
          <div>
            <h5 className="ij-card-title ij-fw-semibold">{supplier.name}</h5>
            <p className="ij-card-subtitle ij-text-muted">{supplier.category}</p>
          </div>
          <span className="ij-badge ij-bg-info ij-text-card-foreground">
            {supplier.products} productos
          </span>
        </div>
        <p className="ij-card-text ij-text-muted ij-flex-grow-1">{supplier.contact}</p>
        <div className="ij-flex ij-justify-between ij-align-center ij-mt-3">
          <span className="ij-text-muted">{supplier.email}</span>
          <div className="ij-flex ij-gap-2">
            <button 
              onClick={onEdit}
              className="ij-btn ij-btn-sm ij-btn-outline-primary"
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