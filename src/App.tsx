import { Routes, Route } from 'react-router-dom';
import Navigation from './pages/navigation/navigation';
import Home from './pages/home/home';
import './App.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;