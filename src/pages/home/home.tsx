import Banner from '../../components/banner/banner';
import LatestDrops from '../../components/latest-drops/latest-drops';
import CategoriesPreview from '../../components/categories-preview/categories-preview';

const Home = () => {
  return (
    <>
      <Banner />
      <CategoriesPreview />
      <LatestDrops />
    </>
  );
};

export default Home;
