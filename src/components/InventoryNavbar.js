import React, { useState } from 'react';

const InventoryNavbar = ({ setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="ij-navbar ij-shadow-lg ij-sticky-top">
      <div className="ij-container-fluid">
        <span 
          className="ij-navbar-brand ij-cursor-pointer"
          onClick={() => handleNavigation('dashboard')}
        >
          InventoryJoin
        </span>
        
        <button 
          className="ij-navbar-toggler" 
          type="button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="navbarNav" 
          aria-expanded={isMenuOpen ? "true" : "false"} 
          aria-label="Toggle navigation"
        >
          <span className="ij-navbar-toggler-icon"></span>
        </button>

        <div className={`ij-navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="ij-navbar-nav ij-ms-auto">
            <li className="ij-nav-item">
              <button 
                className="ij-nav-link"
                onClick={() => handleNavigation('dashboard')}
              >
                Inicio
              </button>
            </li>
            <li className="ij-nav-item">
              <button 
                className="ij-nav-link"
                onClick={() => handleNavigation('products')}
              >
                Productos
              </button>
            </li>
            <li className="ij-nav-item">
              <button 
                className="ij-nav-link"
                onClick={() => handleNavigation('suppliers')}
              >
                Proveedores
              </button>
            </li>
            <li className="ij-nav-item">
              <button 
                className="ij-nav-link"
                onClick={() => handleNavigation('reports')}
              >
                Reportes
              </button>
            </li>
            <li className="ij-nav-item">
              <button 
                className="ij-nav-link"
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