import {
  Container,
  ProductContainer,
  ProductImage,
  ProductBrand,
  ProductName,
  ProductPrice,
} from './product-card.styles';
import { FC } from 'react';
import type { CartItem } from '../../contexts/cart.context';

type ProductCardProps = {
  product: CartItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { brand, name, price, image } = product;

  return (
    <>
      <Container>
        <ProductImage src={image} />
        <ProductContainer>
          <ProductBrand>{brand}</ProductBrand>
          <ProductName>{name}</ProductName>
        </ProductContainer>
        <ProductPrice>${price}</ProductPrice>
      </Container>
    </>
  );
};

export default ProductCard;
