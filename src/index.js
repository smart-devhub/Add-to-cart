import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import CartContexProvider from './Context/CardContext';


ReactDOM.render(
  <CartContexProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </CartContexProvider>,
  document.getElementById('root')
);
