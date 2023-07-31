import {
  Container,
  ExploreText,
  ProductsContainer,
} from './product-list.styles';
import { FC } from 'react';
import useIsMobile from '../../custom-hooks/useIsMobile/useIsMobile';
import MobileProductStepper from '../mobile-product-stepper/mobile-product-stepper';
import ProductStepper from '../product-stepper/product-stepper';

const ProductList: FC = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <Container>
        <ExploreText>Explore the latest drops</ExploreText>
        <ProductsContainer>
          {isMobile ? <MobileProductStepper /> : <ProductStepper />}
        </ProductsContainer>
      </Container>
    </>
  );
};

export default ProductList;
