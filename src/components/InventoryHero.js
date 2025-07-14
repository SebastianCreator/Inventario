import React from 'react';

const InventoryHero = () => {
  return (
    <div className="ij-bg-card ij-py-5 ij-px-3 ij-rounded ij-shadow-sm">
      <div className="ij-container">
        <div className="ij-flex ij-flex-col ij-flex-md-row ij-justify-between ij-align-center">
          <div className="ij-mb-4 ij-mb-md-0">
            <h1 className="ij-display-5 ij-fw-bold ij-text-foreground ij-mb-2">Resumen de Inventario</h1>
            <p className="ij-lead ij-text-muted">Total de productos: 24 | Stock bajo: 3</p>
          </div>
          <button className="ij-btn ij-btn-primary ij-btn-lg ij-shadow-sm">
            Agregar Producto
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryHero;