import { FC, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from '../global.styles';

const Home = lazy(() => import('./pages/home/home'));
const Cart = lazy(() => import('./pages/cart/cart'));
const Layout = lazy(() => import('./components/layout/layout'));
const Product = lazy(() => import('./pages/product/product'));
const Shop = lazy(() => import('./pages/shop/shop'));

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<div>Loading ...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="product/*" element={<Product />} />
            <Route path="shop/*" element={<Shop />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
