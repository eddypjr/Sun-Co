import { useContext } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { ProductsContext } from '../../contexts/product.context';
import LeftChevron from '../../assets/svg/chevron-left.svg';

const CategoriesHeader = () => {
  const { categoriesMap } = useContext(ProductsContext);
  const { category } = useParams();


  return (
    <div className="container">
      <div className="content">
        <div className="title-home">
          <Link to="/">
            <img src={LeftChevron} />
          </Link>
          <h3>{category}</h3>
        </div>
        <div>
          <Link to="/shop/All">
            <button>All</button>
          </Link>
          {categoriesMap.map((categoryData, i) => (
            <Link to={`/shop/${categoryData.title}`} key={i}>
              <button>{categoryData.title}</button>
            </Link>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default CategoriesHeader;
