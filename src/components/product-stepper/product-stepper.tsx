import { FC, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLinkDiv } from './product-stepper.styles';
import ProductCard from '../product-card/product-card';
import { ProductsContext } from '../../contexts/product.context';
import type { Product } from '../../contexts/product.context';

const ProductStepper: FC = () => {
  const { data } = useContext(ProductsContext);
  const { categoriesMap } = data;
  const initialLatestDrops =
    categoriesMap
      .find((catgry) => catgry.title === 'Sneakers')
      ?.items.slice(0, 4) || [];

  const [latestDrops, setLatestDrops] = useState<Product[]>(initialLatestDrops);

  useEffect(() => {
    const sneakersCategory = categoriesMap.find(
      (catgry) => catgry.title === 'Sneakers'
    );
    if (sneakersCategory) {
      setLatestDrops(sneakersCategory.items.slice(0, 4));
    }
  }, [categoriesMap]);

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
