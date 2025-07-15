// RegisterPage.js (Este archivo ya no se usa en el flujo principal, pero se mantiene por si se quiere reintroducir la autenticación)
import React, { useState } from 'react';

const RegisterPage = ({ setCurrentPage }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    console.log('Registrando usuario:', { username, email, password });
    setSuccess('¡Registro exitoso! Ahora puedes iniciar sesión.');
    setTimeout(() => {
      setCurrentPage('login');
    }, 2000);
  };

  return (
    <div className=" flex  justify-center  align-center  min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <div className=" card  bg-card  p-4  shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className=" card-title  text-center  text-foreground  mb-4">Registrarse</h2>
        <form onSubmit={handleRegister}>
          <div className=" mb-3">
            <label htmlFor="regUsername" className=" form-label  text-muted">Usuario</label>
            <input
              type="text"
              className=" form-control"
              id="regUsername"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className=" mb-3">
            <label htmlFor="regEmail" className=" form-label  text-muted">Email</label>
            <input
              type="email"
              className=" form-control"
              id="regEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className=" mb-3">
            <label htmlFor="regPassword" className=" form-label  text-muted">Contraseña</label>
            <input
              type="password"
              className=" form-control"
              id="regPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className=" mb-4">
            <label htmlFor="confirmPassword" className=" form-label  text-muted">Confirmar Contraseña</label>
            <input
              type="password"
              className=" form-control"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className=" alert  alert-danger  text-center  py-2">{error}</div>}
          {success && <div className=" alert  alert-success  text-center  py-2">{success}</div>}
          <button type="submit" className=" btn  btn-primary  w-100  mb-3">Registrar</button>
          <p className=" text-center  text-muted">
            ¿Ya tienes cuenta?{' '}
            <button 
              type="button" 
              className=" btn  btn-link  p-0" 
              onClick={() => setCurrentPage('login')}
            >
              Inicia sesión aquí
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;