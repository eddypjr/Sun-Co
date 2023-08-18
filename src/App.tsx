import { FC, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from '../global.styles';
import Home from './pages/home/home';
import Layout from './components/layout/layout';
import LoadingSpinner from '../src/components/loading-spinner/loading-spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = lazy(() => import('./pages/checkout/checkout'));
const Product = lazy(() => import('./pages/product/product'));
const Shop = lazy(() => import('./pages/shop/shop'));

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="product/*" element={<Product />} />
            <Route path="shop/*" element={<Shop />} />
          </Route>
        </Routes>
        <ToastContainer />
      </Suspense>
    </>
  );
};

export default App;
