import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes';

import GlobalStyles from './styles/globalStyles';
import { ToastContainer } from 'react-toastify';
import AppProvider from './hooks';

import { Elements } from '@stripe/react-stripe-js';
import stripePromise from './config/stripeConfig';

import { ThemeProvider } from 'styled-components';
import { standardTheme } from './styles/themes/standerd';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
    <AppProvider>
    <Elements stripe={stripePromise}>
      <BrowserRouter>
      <Router />
      </BrowserRouter>
    </Elements>
    <GlobalStyles />
    <ToastContainer autoClose={3000}/>
    </AppProvider>
    </ThemeProvider>
  </StrictMode>,
)
