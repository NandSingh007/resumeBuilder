import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Store from './ReduxStore/Store';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';


// Create a root element to render the application
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
// Render the application wrapped in the necessary components
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
);
