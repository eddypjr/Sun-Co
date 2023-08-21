import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProductsProvider } from './contexts/product.context.tsx';
import { CartProvider } from './contexts/cart.context.tsx';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe/stripe.utils.ts';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.tsx';

import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
          <Elements stripe={stripePromise}>
            <ScrollToTop />
            <App />
          </Elements>
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
