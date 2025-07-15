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
    <form onSubmit={handleSubmit} className=" row  gap-3">
      <div className=" col-md-6">
        <label htmlFor="supplierName" className=" form-label  text-muted">Nombre</label>
        <input
          type="text"
          className=" form-control"
          id="supplierName"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className=" col-md-6">
        <label htmlFor="supplierCategory" className=" form-label  text-muted">Categoría</label>
        <input
          type="text"
          className=" form-control"
          id="supplierCategory"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className=" col-md-6">
        <label htmlFor="supplierContact" className=" form-label  text-muted">Contacto</label>
        <input
          type="text"
          className=" form-control"
          id="supplierContact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className=" col-md-6">
        <label htmlFor="supplierProducts" className=" form-label  text-muted">Productos</label>
        <input
          type="number"
          className=" form-control"
          id="supplierProducts"
          name="products"
          value={formData.products}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className=" col-12">
        <label htmlFor="supplierEmail" className=" form-label  text-muted">Email</label>
        <input
          type="email"
          className=" form-control"
          id="supplierEmail"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className=" col-12  flex  justify-end  gap-3  pt-4">
        <button
          type="button"
          className=" btn  btn-outline-secondary"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className=" btn  btn-primary"
        >
          Guardar
        </button>
      </div>
    </form>
  );
};

export default SupplierForm;