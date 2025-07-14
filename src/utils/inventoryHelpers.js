export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN'
  }).format(amount);
};

export const getStockStatus = (quantity) => {
  if (quantity > 10) return 'high';
  if (quantity > 3) return 'medium';
  return 'low';
};

// DONE