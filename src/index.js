import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='/technical-boost/'>
       <App />
       </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

