import {
  Container,
  Content,
  ProductsContainer,
  ArrowsContainer,
  Circle,
  Arrow,
} from './product-list.styles';
import { FC, useRef } from 'react';
import ProductStepper from '../product-stepper/product-stepper';
import LeftChevron from '../../assets/svg/chevron-left.svg';
import RightChevron from '../../assets/svg/chevron-right.svg';

const ProductList: FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const scroll = (percentage: number) => {
    if (ref.current) {
      const containerWidth = ref.current.offsetWidth;
      const scrollOffset = containerWidth * (percentage / 100);
      ref.current.scrollLeft -= scrollOffset;
    }
  };

  return (
    <>
      <section>
        <Container>
          <Content>
            <h1>Explore the latest drops</h1>
            <ProductsContainer ref={ref}>
              <ProductStepper />
            </ProductsContainer>

            <ArrowsContainer>
              <Circle>
                <Arrow
                  src={LeftChevron}
                  onClick={() => scroll(30)}
                  alt="left-chevron"
                />
              </Circle>
              <Circle>
                <Arrow
                  src={RightChevron}
                  onClick={() => scroll(-30)}
                  alt="right-chevron"
                />
              </Circle>
            </ArrowsContainer>
          </Content>
        </Container>
      </section>
    </>
  );
};

export default ProductList;
