import React, { useState } from 'react';

const SettingsPage = () => {
  const [theme, setTheme] = useState('Oscuro');
  const [lowStockAlerts, setLowStockAlerts] = useState(true);
  const [reminders, setReminders] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const handleSave = () => {
    console.log('Preferencias guardadas:', { theme, lowStockAlerts, reminders });
    setSaveMessage('¡Cambios guardados con éxito!');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  return (
    <div className=" container">
      <h2 className=" h4  fw-bold  text-foreground  mb-4">Configuración</h2>
      
      <div className=" card  bg-card  p-4  shadow-sm">
        <h5 className=" card-title  fw-semibold  text-card-foreground  mb-3">Preferencias</h5>
        <div className=" row  gap-3">
          <div className=" col-12">
            <label htmlFor="themeSelect" className=" form-label  text-muted">Tema</label>
            <select 
              className=" form-select"
              id="themeSelect"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option value="Oscuro">Oscuro</option>
              <option value="Claro">Claro</option>
              <option value="Automático">Automático</option>
            </select>
          </div>
          
          <div className=" col-12">
            <label className=" form-label  text-muted">Notificaciones</label>
            <div className=" form-check">
              <input 
                type="checkbox" 
                className=" form-check-input" 
                id="lowStockAlerts"
                checked={lowStockAlerts}
                onChange={(e) => setLowStockAlerts(e.target.checked)}
              />
              <label className=" form-check-label  text-foreground" htmlFor="lowStockAlerts">Alertas de stock bajo</label>
            </div>
            <div className=" form-check">
              <input 
                type="checkbox" 
                className=" form-check-input" 
                id="reminders"
                checked={reminders}
                onChange={(e) => setReminders(e.target.checked)}
              />
              <label className=" form-check-label  text-foreground" htmlFor="reminders">Recordatorios</label>
            </div>
          </div>
        </div>

        {saveMessage && (
          <p className=" text-success  text-center  mt-4">{saveMessage}</p>
        )}

        <div className=" flex  justify-end  mt-4">
          <button
            onClick={handleSave}
            className=" btn  btn-primary  shadow-sm"
          >
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;