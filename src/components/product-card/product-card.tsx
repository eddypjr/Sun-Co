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
import type { Product } from '../../contexts/product.context';
type ProductCardProps = {
  product: Product;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { brand, name, price, image } = product;

  return (
    <>
      {typeof image === 'string' && (
        <Container>
          <ProductImage src={image} alt="product-card-thumbnail" />
          <ProductContainer>
            <Brand>{brand}</Brand>
            <Name>{name}</Name>
          </ProductContainer>
          <Price>${price}</Price>
        </Container>
      )}
    </>
  );
};

export default ProductCard;
