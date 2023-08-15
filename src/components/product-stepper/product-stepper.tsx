import { FC, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLinkDiv } from './product-stepper.styles';
import ProductCard from '../product-card/product-card';
import { ProductsContext } from '../../contexts/product.context';
import type { Product } from '../../contexts/product.context';

const ProductStepper: FC = () => {
  const { categoriesMap } = useContext(ProductsContext);
  const [latestDrops, setLatestDrops] = useState<Product[] | []>([]);

  useEffect(() => {
    const getProducts = () => {
      return categoriesMap.map((catgry) => {
        if (catgry.title === 'sneakers') {
          setLatestDrops(catgry.items);
        }
      });
    };

    getProducts();
  }, [categoriesMap]);

  // console.log(latestDrops);
  return (
    <>
      {latestDrops.map(
        (product, i) =>
          i < 4 && (
            <NavLinkDiv key={product['id']}>
              <Link to={`/product/${product['name']}`} state={{ product }}>
                <ProductCard product={product} />
              </Link>
            </NavLinkDiv>
          )
      )}
    </>
  );
};

export default ProductStepper;
