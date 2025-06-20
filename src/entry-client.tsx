import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { Router } from './router';
import './index.css';

const App = () => {
  useEffect(() => {
    console.log("Client-side Routing", window.location.pathname); // ตรวจสอบเส้นทางในเบราว์เซอร์
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </HelmetProvider>
  );
};

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
