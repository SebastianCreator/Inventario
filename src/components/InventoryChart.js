import React from 'react';

const InventoryChart = ({ type }) => {
  return (
    <div className={` card  bg-card  p-3  h-100  flex  align-center  justify-center ${type === 'pie' ? ' ratio  ratio-1x1' : ''}`}>
      <p className=" text-muted  text-center">
        {type === 'pie' && 'Gráfico circular de categorías aparecería aquí'}
        {type === 'line' && 'Gráfico lineal de movimiento de stock aparecería aquí'}
        {type === 'bar' && 'Gráfico de barras de stock bajo aparecería aquí'}
      </p>
    </div>
  );
};

export default InventoryChart;