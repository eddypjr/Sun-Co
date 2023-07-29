import { useState, useEffect, useContext } from 'react';
import AddToCartBox from '../../components/addToCart/addToCart';
import ProductDescription from '../../components/product-description/product-description';
import { Container, InnerContainer, ProductImage } from './product.styles';
import { ProductsContext } from '../../contexts/product.context';
import { useLocation } from 'react-router-dom';

const Product = () => {
  const { state } = useLocation();
  const { product } = state || {};
  const { description } = product;

  return (
    <>
      <Container>
        <InnerContainer>
          <ProductImage>image</ProductImage>
          <AddToCartBox product={product} />
          <ProductDescription description={description} />
          <ProductImage>image</ProductImage>
        </InnerContainer>
      </Container>
    </>
  );
};

export default Product;
