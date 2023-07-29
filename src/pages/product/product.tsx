import { useState, useEffect, useContext } from 'react';
import AddToCartBox from '../../components/addToCart/addToCart';
import ProductDescription from '../../components/product-description/product-description';
import { Container, InnerContainer, ProductImage } from './product.styles';
import { useLocation } from 'react-router-dom';
import { PhotoUrlList } from '../../products';

const Product = () => {
  const { state } = useLocation();
  const [imageUrl, setImageUrl] = useState([]);
  const { product } = state || {};
  const { description, brand, name } = product;

  useEffect(() => {
    function findMatchingStrings(imageArray, brand, name) {
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
    }

    const matchingStrings = findMatchingStrings(PhotoUrlList, brand, name);
    setImageUrl(matchingStrings);
  }, [brand, name]);

  return (
    <>
      <Container>
        <InnerContainer>
          <ProductImage />
          <AddToCartBox product={product} />
          <ProductDescription description={description} />
          <ProductImage src={imageUrl[imageUrl.length - 1]} />
        </InnerContainer>
      </Container>
    </>
  );
};

export default Product;
