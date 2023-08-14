import {
  Container,
  ProductContainer,
  ProductImage,
  Brand,
  Name,
  Price,
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
        <ProductImage src={image} alt="product-card-thumbnail" />
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
