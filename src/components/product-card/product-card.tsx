import {
  Brand,
  Container,
  Name,
  Price,
  ProductContainer,
  ImageContainer,
  ProductImage,
} from './product-card.styles';
import { FC } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Product } from '../../contexts/product.context';

type ProductCardProps = {
  product: Product;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { brand, name, price, image } = product;
  const thumbnail = image[0];
  const [imageLoaded, setImageLoaded] = useState(false);
  const { category } = useParams();

  return (
    <>
      <Container>
        <ImageContainer>
          <ProductImage
            width={!category ? '250px' : '100%'}
            className="blur-image"
            src={thumbnail}
            alt="product-card-thumbnail"
            style={{ display: imageLoaded ? 'none' : 'block' }}
          />

          <ProductImage
            width={!category ? '250px' : '100%'}
            src={thumbnail}
            alt="product-card-thumbnail"
            onLoad={() => setImageLoaded(true)}
          />
        </ImageContainer>

        <ProductContainer>
          <Brand>{brand}</Brand>
          <Name>{name}</Name>
        </ProductContainer>
        <Price>${price}</Price>
      </Container>
    </>
  );
};

export default ProductCard;
