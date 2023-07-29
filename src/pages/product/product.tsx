
import AddToCartBox from '../../components/addToCart/addToCart';
import ProductDescription from '../../components/product-description/product-description';
import { Container, InnerContainer, ProductImage } from './product.styles';

const Product = () => {
  return (
    <>
      <Container>
        <InnerContainer>
          <ProductImage>image</ProductImage>
          <AddToCartBox />
          <ProductDescription />
          <ProductImage>image</ProductImage>
        </InnerContainer>
      </Container>
    </>
  );
};

export default Product;
