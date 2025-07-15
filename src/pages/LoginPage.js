// LoginPage.js (Este archivo ya no se usa en el flujo principal, pero se mantiene por si se quiere reintroducir la autenticación)
import React, { useState } from 'react';

const LoginPage = ({ setCurrentPage, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (username === 'user' && password === 'password') {
      const fakeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJpYXQiOjE2NzgyOTYwMDAsImV4cCI6MTY3ODI5OTYwMH0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
      localStorage.setItem('jwt_token', fakeToken);
      onLoginSuccess();
    } else {
      setError('Usuario o contraseña incorrectos.');
    }
  };

  return (
    <div className=" flex  justify-center  align-center  min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <div className=" card  bg-card  p-4  shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className=" card-title  text-center  text-foreground  mb-4">Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <div className=" mb-3">
            <label htmlFor="username" className=" form-label  text-muted">Usuario</label>
            <input
              type="text"
              className=" form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className=" mb-4">
            <label htmlFor="password" className=" form-label  text-muted">Contraseña</label>
            <input
              type="password"
              className=" form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className=" alert  alert-danger  text-center  py-2">{error}</div>}
          <button type="submit" className=" btn  btn-primary  w-100  mb-3">Entrar</button>
          <p className=" text-center  text-muted">
            ¿No tienes cuenta?{' '}
            <button 
              type="button" 
              className=" btn  btn-link  p-0" 
              onClick={() => setCurrentPage('register')}
            >
              Regístrate aquí
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;