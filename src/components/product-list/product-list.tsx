import { useContext, FC } from 'react';
import { ProductsContext } from '../../contexts/product.context';
import ProductCard from '../product-card/product-card';
import {
  Container,
  ProductsContainer,
  ExploreText,
} from './product-list.styles';
// import Thumbnails from '../../../public/images/products/thumbnails/cosmic-unity-3.png';

const ProductList: FC = () => {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <Container>
        <ExploreText>Explore the latest drops</ExploreText>
        <ProductsContainer>
          {products.map((product) => (
            <ProductCard key={product['id']} product={product} />
          ))}
        </ProductsContainer>
      </Container>
    </>
  );
};

export default ProductList;
