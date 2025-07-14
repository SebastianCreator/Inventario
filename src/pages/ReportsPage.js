import React from 'react';
import InventoryChart from '../components/InventoryChart';

const ReportsPage = () => {
  return (
    <div className="ij-container">
      <h2 className="ij-h4 ij-fw-bold ij-text-foreground ij-mb-4">Reportes</h2>
      
      <div className="ij-row ij-gap-4">
        <div className="ij-col-lg-6">
          <div className="ij-card ij-bg-card ij-p-4 ij-shadow-sm ij-h-100">
            <h5 className="ij-card-title ij-fw-semibold ij-text-card-foreground ij-mb-3">Inventario por Categoría</h5>
            <InventoryChart type="pie" />
          </div>
        </div>
        
        <div className="ij-col-lg-6">
          <div className="ij-card ij-bg-card ij-p-4 ij-shadow-sm ij-h-100">
            <h5 className="ij-card-title ij-fw-semibold ij-text-card-foreground ij-mb-3">Movimiento de Stock</h5>
            <InventoryChart type="line" />
          </div>
        </div>
        
        <div className="ij-col-12">
          <div className="ij-card ij-bg-card ij-p-4 ij-shadow-sm ij-h-100">
            <h5 className="ij-card-title ij-fw-semibold ij-text-card-foreground ij-mb-3">Productos con Stock Bajo</h5>
            <InventoryChart type="bar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;