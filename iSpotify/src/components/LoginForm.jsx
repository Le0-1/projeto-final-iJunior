import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Lógica de autenticação aqui
    navigate('/playlist');
  };

  return (
    <div className="login-page">
        <div className="login-container">
      <div className="title">iSpotify</div>
      <div className="subtitle">Música para todos.</div>
      <div className="input-group">
        <input type="email" placeholder="Email" />
        <EmailIcon className="icon" />
      </div>
      <div className="input-group">
        <input type="password" placeholder="Senha" />
        <LockIcon className="icon" />
      </div>
      <button className="login-button" onClick={handleLogin}>Entrar</button>
      <p className="signup-text">Não tem um conta? <a href="/signup">Inscreva-se</a></p>
    </div>
    </div>
    );
};

export default LoginForm;