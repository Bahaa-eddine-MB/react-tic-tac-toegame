import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './TheGame/tictactoeGame';
import reportWebVitals from './reportWebVitals';
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
