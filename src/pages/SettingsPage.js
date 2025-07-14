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
    <div className="ij-container">
      <h2 className="ij-h4 ij-fw-bold ij-text-foreground ij-mb-4">Configuración</h2>
      
      <div className="ij-card ij-bg-card ij-p-4 ij-shadow-sm">
        <h5 className="ij-card-title ij-fw-semibold ij-text-card-foreground ij-mb-3">Preferencias</h5>
        <div className="ij-row ij-gap-3">
          <div className="ij-col-12">
            <label htmlFor="themeSelect" className="ij-form-label ij-text-muted">Tema</label>
            <select 
              className="ij-form-select"
              id="themeSelect"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option value="Oscuro">Oscuro</option>
              <option value="Claro">Claro</option>
              <option value="Automático">Automático</option>
            </select>
          </div>
          
          <div className="ij-col-12">
            <label className="ij-form-label ij-text-muted">Notificaciones</label>
            <div className="ij-form-check">
              <input 
                type="checkbox" 
                className="ij-form-check-input" 
                id="lowStockAlerts"
                checked={lowStockAlerts}
                onChange={(e) => setLowStockAlerts(e.target.checked)}
              />
              <label className="ij-form-check-label ij-text-foreground" htmlFor="lowStockAlerts">Alertas de stock bajo</label>
            </div>
            <div className="ij-form-check">
              <input 
                type="checkbox" 
                className="ij-form-check-input" 
                id="reminders"
                checked={reminders}
                onChange={(e) => setReminders(e.target.checked)}
              />
              <label className="ij-form-check-label ij-text-foreground" htmlFor="reminders">Recordatorios</label>
            </div>
          </div>
        </div>

        {saveMessage && (
          <p className="ij-text-success ij-text-center ij-mt-4">{saveMessage}</p>
        )}

        <div className="ij-flex ij-justify-end ij-mt-4">
          <button
            onClick={handleSave}
            className="ij-btn ij-btn-primary ij-shadow-sm"
          >
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;