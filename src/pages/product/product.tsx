import { useState, useEffect } from 'react';
import AddToCartBox from '../../components/addToCart/add-to-cart-box';
import ProductDescription from '../../components/product-description/product-description';
import { Container, InnerContainer, ProductImage } from './product.styles';
import { useLocation } from 'react-router-dom';
import { PhotoUrlList } from '../../products';
import PhotoCarousel from '../../components/photo-carousel/photo-carousel';

const Product = () => {
  const { state } = useLocation();
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const { product } = state || {};
  const { description, brand, name } = product;

  useEffect(() => {
    const findMatchingStrings = (
      imageArray: string[],
      brand: string,
      name: string
    ) => {
      const regex = new RegExp(`\\/products\\/${brand}\\/`, 'i');
      const matchingStrings = imageArray.filter((str) => regex.test(str));

      const productName = name.replace(/\s+/g, '').toLowerCase();
      const productNameRegex = new RegExp(`/Nike/${productName}/`, 'i');

      // Nike has two different products, further filtering needed
      const nikeImages = imageArray.filter((str) => productNameRegex.test(str));

      if (brand === 'Nike') {
        return nikeImages;
      }
      return matchingStrings;
    };

    const matchingStrings = findMatchingStrings(PhotoUrlList, brand, name);
    setImageUrls(matchingStrings);
  }, [brand, name]);

  return (
    <>
      <Container>
        <InnerContainer>
          <PhotoCarousel images={imageUrls} />
          <AddToCartBox product={product} />
          <ProductDescription description={description} />
          <ProductImage src={imageUrls[imageUrls.length - 1]} />
        </InnerContainer>
      </Container>
    </>
  );
};

export default Product;
