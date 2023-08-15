import AddToCartBox from '../../components/addToCart/add-to-cart-box';
import ProductDescription from '../../components/product-description/product-description';
import { Container, Content, ProductImage } from './product.styles';
import { useLocation } from 'react-router-dom';
import PhotoCarousel from '../../components/photo-carousel/photo-carousel';

const Product = () => {
  const { state } = useLocation();
  const { product } = state || {};
  const { description, image } = product;

  return (
    <>
      <Container>
        <Content>
          <PhotoCarousel images={image} />
          <AddToCartBox product={product} />
          <ProductDescription description={description} />

          <ProductImage
            src={image[image.length - 1]}
            alt="product-display-image"
          />
        </Content>
      </Container>
    </>
  );
};

export default Product;
