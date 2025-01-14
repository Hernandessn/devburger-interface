import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

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
    <RouterProvider router={router}/>
    </Elements>
    <GlobalStyles />
    <ToastContainer autoClose={3000}/>
    </AppProvider>
    </ThemeProvider>
  </StrictMode>,
)
