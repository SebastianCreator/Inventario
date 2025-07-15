import react, { useState, useEffect } from 'react';
import DashboardPage from './pages/DashboardPage';
import ProductsPage from './pages/ProductsPage';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';
import SuppliersPage from './pages/SuppliersPage';
import ReportsPage from './pages/ReportsPage';
import SettingsPage from './pages/SettingsPage';
import InventoryFooter from './components/InventoryFooter';
import InventoryNavbar from './components/InventoryNavbar'; // Importar Navbar
import './styles.css'; // Asegúrate de que la ruta sea correcta


const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard'); // Inicia directamente en el dashboard
  const [selectedProductId, setSelectedProductId] = useState(null);

  // No hay estado de autenticación ya que se eliminó el login/register

  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard':
        return <DashboardPage setCurrentPage={setCurrentPage} />; // Pasar setCurrentPage al Dashboard
      case 'products':
        return <ProductsPage 
                 setCurrentPage={setCurrentPage} 
                 setSelectedProductId={setSelectedProductId} 
               />;
      case 'add-product':
        return <AddProductPage setCurrentPage={setCurrentPage} />;
      case 'edit-product':
        return <EditProductPage 
                 setCurrentPage={setCurrentPage} 
                 productId={selectedProductId} 
               />;
      case 'suppliers':
        return <SuppliersPage />;
      case 'reports':
        return <ReportsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <DashboardPage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className=" flex  flex-col  min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <InventoryNavbar setCurrentPage={setCurrentPage} /> {/* Renderizar Navbar aquí */}
      <main className=" flex-grow-1  py-4  px-3">
        <div className=" container-fluid">
          {renderPage()}
        </div>
      </main>
      <InventoryFooter />
    </div>
  );
};

export default App;