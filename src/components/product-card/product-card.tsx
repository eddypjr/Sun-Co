import React from 'react';
import {
  Brand,
  Container,
  Name,
  Price,
  ProductContainer,
} from './product-card.styles';
import { FC } from 'react';
import ProgressiveImage from '../product-image/product-image';
import type { Product } from '../../contexts/product.context';

type ProductCardProps = {
  product: Product;
};

const ProductCard: FC<ProductCardProps> = React.memo(({ product }) => {
  const { brand, name, price, image } = product;
  const thumbnail = image[0];

  return (
    <>
      <Container>
        <ProgressiveImage thumbnail={thumbnail} />

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
