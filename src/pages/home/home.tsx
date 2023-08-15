import Banner from '../../components/banner/banner';
import ProductList from '../../components/product-list/product-list';
import CategoriesPreview from '../../components/categories-preview/categories-preview';

const Home = () => {
  return (
    <>
      <Banner />
      <CategoriesPreview />
      <ProductList />
    </>
  );
};

export default Home;
