import React, { useState, useEffect } from 'react';

const ProductForm = ({ initialData, onSubmit, onCancel, isEditing, suppliers }) => {
  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

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
        <label htmlFor="productName" className="ij-form-label ij-text-muted">Nombre del Producto</label>
        <input
          type="text"
          className="ij-form-control"
          id="productName"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="ij-col-md-6">
        <label htmlFor="productSku" className="ij-form-label ij-text-muted">Código del Producto (SKU)</label>
        <input
          type="text"
          className="ij-form-control"
          id="productSku"
          name="sku"
          value={formData.sku}
          onChange={handleChange}
          required
        />
      </div>

      <div className="ij-col-md-6">
        <label htmlFor="productStock" className="ij-form-label ij-text-muted">Cantidad de Items (Stock)</label>
        <input
          type="number"
          className="ij-form-control"
          id="productStock"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          min="0"
          required
        />
      </div>
      <div className="ij-col-md-6">
        <label htmlFor="productCategory" className="ij-form-label ij-text-muted">Categoría</label>
        <select
          className="ij-form-select"
          id="productCategory"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Seleccionar...</option>
          <option value="Electrónicos">Electrónicos</option>
          <option value="Oficina">Oficina</option>
          <option value="Hogar">Hogar</option>
          <option value="Alimentos">Alimentos</option>
          <option value="Ropa">Ropa</option>
        </select>
      </div>

      <div className="ij-col-md-6">
        <label htmlFor="productPrice" className="ij-form-label ij-text-muted">Precio ($)</label>
        <input
          type="number"
          className="ij-form-control"
          id="productPrice"
          name="price"
          value={formData.price}
          onChange={handleChange}
          min="0"
          step="0.01"
          required
        />
      </div>
      <div className="ij-col-md-6">
        <label htmlFor="entryDate" className="ij-form-label ij-text-muted">Fecha de Entrada</label>
        <input
          type="date"
          className="ij-form-control"
          id="entryDate"
          name="entryDate"
          value={formData.entryDate}
          onChange={handleChange}
          required
        />
      </div>

      <div className="ij-col-12">
        <label htmlFor="productSupplier" className="ij-form-label ij-text-muted">Proveedor</label>
        <select
          className="ij-form-select"
          id="productSupplier"
          name="supplierId"
          value={formData.supplierId}
          onChange={handleChange}
          required
        >
          <option value="">Seleccionar...</option>
          {suppliers && suppliers.map(supplier => (
            <option key={supplier.id} value={supplier.id}>{supplier.name}</option>
          ))}
        </select>
      </div>

      <div className="ij-col-12">
        <label htmlFor="productDescription" className="ij-form-label ij-text-muted">Descripción</label>
        <textarea
          className="ij-form-control"
          id="productDescription"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="3"
        />
      </div>

      <div className="ij-col-12 ij-flex ij-justify-end ij-gap-3 ij-pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="ij-btn ij-btn-outline-secondary"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="ij-btn ij-btn-primary"
        >
          {isEditing ? 'Actualizar Producto' : 'Guardar Producto'}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;