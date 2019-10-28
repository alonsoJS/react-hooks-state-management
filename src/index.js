import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { StoreProvider } from './store/store';
const app = (
  <StoreProvider>
    <App />
  </StoreProvider>
);
ReactDOM.render(app, document.getElementById('lp-pom-root'));
