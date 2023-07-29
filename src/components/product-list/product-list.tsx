import { useContext, FC } from 'react';
import { ProductsContext } from '../../contexts/product.context';
import ProductCard from '../product-card/product-card';
import {
  Container,
  ProductsContainer,
  ExploreText,
  NavLinkDiv,
} from './product-list.styles';
import { Link, Route, Routes } from 'react-router-dom';
import Product from '../../pages/product/product';

const ProductList: FC = () => {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <Container>
        <ExploreText>Explore the latest drops</ExploreText>
        <ProductsContainer>
          {products.map((product) => (
            <NavLinkDiv key={product['id']}>
              <Link to={`/product/${product['id']}`} state={{ product }}>
                <ProductCard product={product} />
              </Link>
            </NavLinkDiv>
          ))}
        </ProductsContainer>
      </Container>
    </>
  );
};

export default ProductList;
