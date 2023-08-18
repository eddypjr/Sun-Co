import { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Content, DisplayImage } from './product-details.styles';
import { ProductsContext } from '../../contexts/product.context';
import AddToCartBox from '../add-to-cart-box/add-to-cart-box';
import PhotoCarousel from '../photo-carousel/photo-carousel';
import ProductDescription from '../product-description/product-description';
import type { Category } from '../../contexts/product.context';

const ProductDetails = () => {
  const { state } = useLocation();
  const { data } = useContext(ProductsContext);
  const { categoriesMap } = data;
  const { product } = state || {};
  const { description, image } = product;
  const [displayImage, setDisplayImage] = useState('');

  useEffect(() => {
    const getDisplayImage = () => {
      categoriesMap.map((category: Category) => {
        if (category.title === product.category) {
          setDisplayImage(category.imageUrl);
        }
      });
    };
    getDisplayImage();
  }, [categoriesMap, product.category]);

  return (
    <>
      <Container>
        <Content>
          <PhotoCarousel images={image} />
          <AddToCartBox product={product} />
          <ProductDescription description={description} />

          <DisplayImage src={displayImage} alt="product-display-image" />
        </Content>
      </Container>
    </>
  );
};

export default ProductDetails;
