import {
  Container,
  ProductsContainer,
  ExploreText,
  NavLinkDiv,
} from './product-list.styles';
import { useContext, FC } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../contexts/product.context';
import ProductCard from '../product-card/product-card';

const ProductList: FC = () => {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <Container>
        <ExploreText>Explore the latest drops</ExploreText>
        <ProductsContainer>
          {products.map((product, i) => (
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
