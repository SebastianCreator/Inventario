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
    <form onSubmit={handleSubmit} className=" row  gap-3">
      <div className=" col-md-6">
        <label htmlFor="productName" className=" form-label  text-muted">Nombre del Producto</label>
        <input
          type="text"
          className=" form-control"
          id="productName"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className=" col-md-6">
        <label htmlFor="productSku" className=" form-label  text-muted">Código del Producto (SKU)</label>
        <input
          type="text"
          className=" form-control"
          id="productSku"
          name="sku"
          value={formData.sku}
          onChange={handleChange}
          required
        />
      </div>

      <div className=" col-md-6">
        <label htmlFor="productStock" className=" form-label  text-muted">Cantidad de Items (Stock)</label>
        <input
          type="number"
          className=" form-control"
          id="productStock"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          min="0"
          required
        />
      </div>
      <div className=" col-md-6">
        <label htmlFor="productCategory" className=" form-label  text-muted">Categoría</label>
        <select
          className=" form-select"
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

      <div className=" col-md-6">
        <label htmlFor="productPrice" className=" form-label  text-muted">Precio ($)</label>
        <input
          type="number"
          className=" form-control"
          id="productPrice"
          name="price"
          value={formData.price}
          onChange={handleChange}
          min="0"
          step="0.01"
          required
        />
      </div>
      <div className=" col-md-6">
        <label htmlFor="entryDate" className=" form-label  text-muted">Fecha de Entrada</label>
        <input
          type="date"
          className=" form-control"
          id="entryDate"
          name="entryDate"
          value={formData.entryDate}
          onChange={handleChange}
          required
        />
      </div>

      <div className=" col-12">
        <label htmlFor="productSupplier" className=" form-label  text-muted">Proveedor</label>
        <select
          className=" form-select"
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

      <div className=" col-12">
        <label htmlFor="productDescription" className=" form-label  text-muted">Descripción</label>
        <textarea
          className=" form-control"
          id="productDescription"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="3"
        />
      </div>

      <div className=" col-12  flex  justify-end  gap-3  pt-4">
        <button
          type="button"
          onClick={onCancel}
          className=" btn  btn-outline-secondary"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className=" btn  btn-primary"
        >
          {isEditing ? 'Actualizar Producto' : 'Guardar Producto'}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;