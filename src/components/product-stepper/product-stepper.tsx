import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavLinkDiv } from './product-stepper.styles';
import ProductCard from '../product-card/product-card';
import { ProductsContext } from '../../contexts/product.context';

const ProductStepper: FC = () => {
  const { products } = useContext(ProductsContext);

  return (
    <>
      {products.map((product) => {
        return (
          <NavLinkDiv key={product['id']}>
            <Link to={`/product/${product['id']}`} state={{ product }}>
              <ProductCard product={product} />
            </Link>
          </NavLinkDiv>
        );
      })}
    </>
  );
};

export default ProductStepper;
