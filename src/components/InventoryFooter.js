import React from 'react';

const InventoryFooter = () => {
  return (
    <footer className=" bg-card  text-card-foreground  py-4  footer">
      <div className=" container">
        <div className=" row">
          <div className=" col-md-4  mb-3  mb-md-0">
            <h5 className=" fw-semibold  mb-3">Contacto</h5>
            <p className=" text-muted">info@inventoryjoin.com</p>
            <p className=" text-muted">+52 55 1234 5678</p>
          </div>
          <div className=" col-md-4  mb-3  mb-md-0">
            <h5 className=" fw-semibold  mb-3">Horario</h5>
            <p className=" text-muted">Lunes a Viernes</p>
            <p className=" text-muted">9:00 - 18:00 hrs</p>
          </div>
          <div className=" col-md-4">
            <h5 className=" fw-semibold  mb-3">Redes Sociales</h5>
            <div className=" flex  gap-3">
              <a href="#" className=" text-muted  text-decoration-none  nav-link">Facebook</a>
              <a href="#" className=" text-muted  text-decoration-none  nav-link">Twitter</a>
              <a href="#" className=" text-muted  text-decoration-none  nav-link">Instagram</a>
            </div>
          </div>
        </div>
        <div className=" border-top  pt-4  mt-4  text-center  text-muted">
          <p>&copy; 2026 InventoryJoin. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default InventoryFooter;