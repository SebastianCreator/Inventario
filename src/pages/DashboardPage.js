import React from 'react';
import InventoryHero from '../components/InventoryHero';
import StatsCard from '../components/StatsCard';
import InventoryNavbar from '../components/InventoryNavbar'; // Importar Navbar aquí

const DashboardPage = ({ setCurrentPage }) => { // Recibir setCurrentPage
  return (
    <>
      <div className=" container">
        <InventoryHero />
        <div className=" row  gap-4  mt-4">
          <div className=" col-md-4">
            <StatsCard 
              title="Productos Totales" 
              value="24" 
              icon="📦" 
              trend="up" 
            />
          </div>
          <div className=" col-md-4">
            <StatsCard 
              title="Stock Bajo" 
              value="3" 
              icon="⚠️" 
              trend="down" 
            />
          </div>
          <div className=" col-md-4">
            <StatsCard 
              title="Proveedores" 
              value="8" 
              icon="🏢" 
              trend="neutral" 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;