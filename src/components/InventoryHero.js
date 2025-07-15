import React from 'react';

const InventoryHero = () => {
  return (
    <div className=" bg-card  py-5  px-3  rounded  shadow-sm">
      <div className=" container">
        <div className=" flex  flex-col  flex-md-row  justify-between  align-center">
          <div className=" mb-4  mb-md-0">
            <h1 className=" display-5  fw-bold  text-foreground  mb-2">Resumen de Inventario</h1>
            <p className=" lead  text-muted">Total de productos: 24 | Stock bajo: 3</p>
          </div>
          <button className=" btn  btn-primary  btn-lg  shadow-sm">
            Agregar Producto
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryHero;