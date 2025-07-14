import React, { useState } from 'react';

const SupplierForm = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState(initialData || {
    name: '',
    category: '',
    contact: '',
    email: '',
    products: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="ij-row ij-gap-3">
      <div className="ij-col-md-6">
        <label htmlFor="supplierName" className="ij-form-label ij-text-muted">Nombre</label>
        <input
          type="text"
          className="ij-form-control"
          id="supplierName"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="ij-col-md-6">
        <label htmlFor="supplierCategory" className="ij-form-label ij-text-muted">Categoría</label>
        <input
          type="text"
          className="ij-form-control"
          id="supplierCategory"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="ij-col-md-6">
        <label htmlFor="supplierContact" className="ij-form-label ij-text-muted">Contacto</label>
        <input
          type="text"
          className="ij-form-control"
          id="supplierContact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="ij-col-md-6">
        <label htmlFor="supplierProducts" className="ij-form-label ij-text-muted">Productos</label>
        <input
          type="number"
          className="ij-form-control"
          id="supplierProducts"
          name="products"
          value={formData.products}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="ij-col-12">
        <label htmlFor="supplierEmail" className="ij-form-label ij-text-muted">Email</label>
        <input
          type="email"
          className="ij-form-control"
          id="supplierEmail"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="ij-col-12 ij-flex ij-justify-end ij-gap-3 ij-pt-4">
        <button
          type="button"
          className="ij-btn ij-btn-outline-secondary"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="ij-btn ij-btn-primary"
        >
          Guardar
        </button>
      </div>
    </form>
  );
};

export default SupplierForm;