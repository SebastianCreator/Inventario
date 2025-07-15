import React from 'react';
import InventoryChart from '../components/InventoryChart';

const ReportsPage = () => {
  return (
    <div className=" container">
      <h2 className=" h4  fw-bold  text-foreground  mb-4">Reportes</h2>
      
      <div className=" row  gap-4">
        <div className=" col-lg-6">
          <div className=" card  bg-card  p-4  shadow-sm  h-100">
            <h5 className=" card-title  fw-semibold  text-card-foreground  mb-3">Inventario por Categoría</h5>
            <InventoryChart type="pie" />
          </div>
        </div>
        
        <div className=" col-lg-6">
          <div className=" card  bg-card  p-4  shadow-sm  h-100">
            <h5 className=" card-title  fw-semibold  text-card-foreground  mb-3">Movimiento de Stock</h5>
            <InventoryChart type="line" />
          </div>
        </div>
        
        <div className=" col-12">
          <div className=" card  bg-card  p-4  shadow-sm  h-100">
            <h5 className=" card-title  fw-semibold  text-card-foreground  mb-3">Productos con Stock Bajo</h5>
            <InventoryChart type="bar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;