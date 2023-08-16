import { Routes, Route } from 'react-router-dom';
import Category from '../../components/category/category';
import CategoriesHeader from '../../components/categories-header/categories-header';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesHeader />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
