import AddToCartBox from '../../components/add-to-cart-box/add-to-cart-box';
import ProductDescription from '../../components/product-description/product-description';
import { Container, Content, DisplayImage } from './product.styles';
import { useLocation } from 'react-router-dom';
import PhotoCarousel from '../../components/photo-carousel/photo-carousel';
import { useContext, useEffect, useState } from 'react';
import { Category, ProductsContext } from '../../contexts/product.context';

const Product = () => {
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

export default Product;
