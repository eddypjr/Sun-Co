import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from '../global.styles'
import Navigation from './pages/navigation/navigation';
import Home from './pages/home/home';
import Cart from './pages/cart/cart';
// import './App.css';

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
        </Route>
          <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
