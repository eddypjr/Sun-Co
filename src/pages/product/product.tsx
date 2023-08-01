import { useState, useEffect } from 'react';
import AddToCartBox from '../../components/addToCart/add-to-cart-box';
import ProductDescription from '../../components/product-description/product-description';
import { Container, InnerContainer, ProductImage } from './product.styles';
import { useLocation } from 'react-router-dom';
import { PhotoUrlList } from '../../products';
import PhotoCarousel from '../../components/photo-carousel/photo-carousel';
import useEnvironmentCheck from '../../custom-hooks/useEnvironmentCheck/useEnvironmentCheck';
import {
  findImagesContainingBrandOrName,
  findMatchingStrings,
} from '../../helpers/helpers';

const Product = () => {
  const { state } = useLocation();
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const { product } = state || {};
  const { description, brand, name } = product;
  const isLocal = useEnvironmentCheck();

  useEffect(() => {
    // Using different filtering functions depending on dev or production
    // This is due to file paths changing after bundling for deployment
    const matchingImages =
      isLocal === true
      ? findMatchingStrings(PhotoUrlList, brand, name)
      : findImagesContainingBrandOrName(PhotoUrlList, brand, name)

    setImageUrls(matchingImages);
  }, [brand, name, isLocal]);

  return (
    <>
      <Container>
        <InnerContainer>
          <PhotoCarousel images={imageUrls} />
          <AddToCartBox product={product} />
          <ProductDescription description={description} />
          <ProductImage
            src={imageUrls[imageUrls.length - 1]}
            alt="product-display-image"
          />
        </InnerContainer>
      </Container>
    </>
  );
};

export default Product;
