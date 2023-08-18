import {
  Container,
  Content,
  ProductsContainer,
  ArrowsContainer,
  Circle,
  Arrow,
} from './latest-drops.styles';
import { FC, useRef } from 'react';
import Products from './products/products';
import LeftChevron from '../../assets/svg/chevron-left.svg';
import RightChevron from '../../assets/svg/chevron-right.svg';

const LatestDrops: FC = () => {
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
              <Products />
            </ProductsContainer>

            <ArrowsContainer>
              <Circle>
                <Arrow
                  src={LeftChevron}
                  onClick={() => scroll(50)}
                  alt="left-chevron"
                />
              </Circle>
              <Circle>
                <Arrow
                  src={RightChevron}
                  onClick={() => scroll(-50)}
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

export default LatestDrops;
