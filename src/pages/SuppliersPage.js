import React, { useState } from 'react';
import SupplierCard from '../components/SupplierCard';
import SupplierForm from '../components/SupplierForm';
import { suppliers } from '../mock/suppliers';

const SuppliersPage = () => {
  const [showSupplierForm, setShowSupplierForm] = useState(false);
  const [currentSupplier, setCurrentSupplier] = useState(null);

  return (
    <div className=" container">
      <div className=" flex  justify-between  align-center  mb-4">
        <h2 className=" h4  fw-bold  text-foreground">Proveedores</h2>
        <button 
          onClick={() => {
            setCurrentSupplier(null);
            setShowSupplierForm(true);
          }}
          className=" btn  btn-primary"
        >
          + Nuevo Proveedor
        </button>
      </div>

      {showSupplierForm ? (
        <div className=" card  bg-card  p-4  shadow-sm  mb-4">
          <SupplierForm 
            initialData={currentSupplier} 
            onSubmit={(data) => {
              console.log('Proveedor guardado:', data);
              setShowSupplierForm(false);
            }} 
          />
        </div>
      ) : (
        <div className=" row  row-cols-1  row-cols-md-2  row-cols-lg-3  gap-4">
          {suppliers.map(supplier => (
            <div className=" col" key={supplier.id}>
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