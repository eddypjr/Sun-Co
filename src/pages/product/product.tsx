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
    const findImagesContainingBrandOrName = (
      imageUrls: string[],
      brand: string,
      name: string
    ): string[] => {
      const regexBrand = brand.replace(/\s/g, '[\\s-]*'); // Convert the brand to a regular expression pattern
      const regexName = name.replace(/\s/g, '[\\s-]*'); // Convert the name to a regular expression pattern

      const brandRegex = new RegExp(regexBrand, 'i');
      const nameRegex = new RegExp(regexName, 'i');

      return imageUrls.filter((str) => brandRegex.test(str) || nameRegex.test(str));
    };

    const matchingImages = findImagesContainingBrandOrName(
      PhotoUrlList,
      brand,
      name
    );
    setImageUrls(matchingImages);
  }, [brand, name]);

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
