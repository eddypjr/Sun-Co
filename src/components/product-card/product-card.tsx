import React from 'react';
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
import type { Product } from '../../contexts/product.context';
import { useState } from 'react';

type ProductCardProps = {
  product: Product;
};

const ProductCard: FC<ProductCardProps> = React.memo(({ product }) => {
  const { brand, name, price, image } = product;
  const thumbnail = image[0];
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <Container>
        <ImageContainer>
          {!imageLoaded && (
            <ProductImage
              className="blur-image"
              src={thumbnail}
              alt="product-card-thumbnail"
            />
          )}
          <ProductImage
            src={thumbnail}
            alt="product-card-thumbnail"
            loading="lazy"
            onLoad={handleImageLoad}
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
});

export default ProductCard;
