import { FC } from 'react';
import {
  Container,
  ProductContainer,
  ProductImage,
  ProductBrand,
  ProductName,
  ProductPrice,
} from './product-card.styles';

export type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { brand, name, price } = product;

  return (
    <>
      <Container>
        <ProductImage />
        <ProductContainer>
          <ProductBrand>{brand}</ProductBrand>
          <ProductName>{name}</ProductName>
        </ProductContainer>
          <ProductPrice>{price}</ProductPrice>
      </Container>
    </>
  );
};

export default ProductCard;
