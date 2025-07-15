import React, { useState } from 'react';

const InventoryNavbar = ({ setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <nav className=" navbar  shadow-lg ">
      <div className=" container-fluid">
        <span 
          className=" navbar-brand  cursor-pointer"
          onClick={() => handleNavigation('dashboard')}
        >
          InventoryJoin
        </span>
        
        <button 
          className=" navbar-toggler" 
          type="button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="navbarNav" 
          aria-expanded={isMenuOpen ? "true" : "false"} 
          aria-label="Toggle navigation"
        >
          <span className=" navbar-toggler-icon"></span>
        </button>

        <div className={` navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className=" navbar-nav  ms-auto">
            <li className=" nav-item">
              <button 
                className=" nav-link"
                onClick={() => handleNavigation('dashboard')}
              >
                Inicio
              </button>
            </li>
            <li className=" nav-item">
              <button 
                className=" nav-link"
                onClick={() => handleNavigation('products')}
              >
                Productos
              </button>
            </li>
            <li className=" nav-item">
              <button 
                className=" nav-link"
                onClick={() => handleNavigation('suppliers')}
              >
                Proveedores
              </button>
            </li>
            <li className=" nav-item">
              <button 
                className=" nav-link"
                onClick={() => handleNavigation('reports')}
              >
                Reportes
              </button>
            </li>
            <li className=" nav-item">
              <button 
                className=" nav-link"
                onClick={() => handleNavigation('settings')}
              >
                Configuración
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default InventoryNavbar;