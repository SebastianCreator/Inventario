import React from 'react';

const InventoryChart = ({ type }) => {
  return (
    <div className={`ij-card ij-bg-card ij-p-3 ij-h-100 ij-flex ij-align-center ij-justify-center ${type === 'pie' ? 'ij-ratio ij-ratio-1x1' : ''}`}>
      <p className="ij-text-muted ij-text-center">
        {type === 'pie' && 'Gráfico circular de categorías aparecería aquí'}
        {type === 'line' && 'Gráfico lineal de movimiento de stock aparecería aquí'}
        {type === 'bar' && 'Gráfico de barras de stock bajo aparecería aquí'}
      </p>
    </div>
  );
};

export default InventoryChart;