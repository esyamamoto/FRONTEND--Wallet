import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux';

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <Provider store={ store }>
      <App />
    </Provider>,
  ); // colcoar Provider -- disponibiliza os estados da store para todos os componentes da aplicação
