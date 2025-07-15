import React from 'react';
import InventoryNavbar from './InventoryNavbar';
import InventoryFooter from './InventoryFooter';

const InventoryLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <InventoryNavbar />
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <InventoryFooter />
    </div>
  );
};

export default InventoryLayout;