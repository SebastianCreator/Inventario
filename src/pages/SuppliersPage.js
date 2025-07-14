import React, { useState } from 'react';
import SupplierCard from '../components/SupplierCard';
import SupplierForm from '../components/SupplierForm';
import { suppliers } from '../mock/suppliers';

const SuppliersPage = () => {
  const [showSupplierForm, setShowSupplierForm] = useState(false);
  const [currentSupplier, setCurrentSupplier] = useState(null);

  return (
    <div className="ij-container">
      <div className="ij-flex ij-justify-between ij-align-center ij-mb-4">
        <h2 className="ij-h4 ij-fw-bold ij-text-foreground">Proveedores</h2>
        <button 
          onClick={() => {
            setCurrentSupplier(null);
            setShowSupplierForm(true);
          }}
          className="ij-btn ij-btn-primary"
        >
          + Nuevo Proveedor
        </button>
      </div>

      {showSupplierForm ? (
        <div className="ij-card ij-bg-card ij-p-4 ij-shadow-sm ij-mb-4">
          <SupplierForm 
            initialData={currentSupplier} 
            onSubmit={(data) => {
              console.log('Proveedor guardado:', data);
              setShowSupplierForm(false);
            }} 
          />
        </div>
      ) : (
        <div className="ij-row ij-row-cols-1 ij-row-cols-md-2 ij-row-cols-lg-3 ij-gap-4">
          {suppliers.map(supplier => (
            <div className="ij-col" key={supplier.id}>
              <SupplierCard 
                supplier={supplier} 
                onEdit={() => {
                  setCurrentSupplier(supplier);
                  setShowSupplierForm(true);
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SuppliersPage;