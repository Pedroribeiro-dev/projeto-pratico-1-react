import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LoginEstado } from './contexts/login/login';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <LoginEstado>
    <App />
   </LoginEstado>

  </React.StrictMode>
);

