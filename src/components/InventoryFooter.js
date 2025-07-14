import React from 'react';

const InventoryFooter = () => {
  return (
    <footer className="ij-bg-card ij-text-card-foreground ij-py-4">
      <div className="ij-container">
        <div className="ij-row">
          <div className="ij-col-md-4 ij-mb-3 ij-mb-md-0">
            <h5 className="ij-fw-semibold ij-mb-3">Contacto</h5>
            <p className="ij-text-muted">info@inventoryjoin.com</p>
            <p className="ij-text-muted">+52 55 1234 5678</p>
          </div>
          <div className="ij-col-md-4 ij-mb-3 ij-mb-md-0">
            <h5 className="ij-fw-semibold ij-mb-3">Horario</h5>
            <p className="ij-text-muted">Lunes a Viernes</p>
            <p className="ij-text-muted">9:00 - 18:00 hrs</p>
          </div>
          <div className="ij-col-md-4">
            <h5 className="ij-fw-semibold ij-mb-3">Redes Sociales</h5>
            <div className="ij-flex ij-gap-3">
              <a href="#" className="ij-text-muted ij-text-decoration-none ij-nav-link">Facebook</a>
              <a href="#" className="ij-text-muted ij-text-decoration-none ij-nav-link">Twitter</a>
              <a href="#" className="ij-text-muted ij-text-decoration-none ij-nav-link">Instagram</a>
            </div>
          </div>
        </div>
        <div className="ij-border-top ij-pt-4 ij-mt-4 ij-text-center ij-text-muted">
          <p>&copy; 2023 InventoryJoin. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default InventoryFooter;