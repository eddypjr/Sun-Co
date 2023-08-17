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
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Product } from '../../contexts/product.context';

type ProductCardProps = {
  product: Product;
};

const ProductCard: FC<ProductCardProps> = React.memo(({ product }) => {
  const { brand, name, price, image } = product;
  const thumbnail = image[0];
  const [imageLoaded, setImageLoaded] = useState(false);
  const { category } = useParams();

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <Container>
        <ImageContainer>
          {!imageLoaded && (
            <ProductImage
              width={!category ? '250px' : '100%'}
              className="blur-image"
              src={thumbnail}
              alt="product-card-thumbnail"
            />
          )}
          <ProductImage
            width={!category ? '250px' : '100%'}
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
