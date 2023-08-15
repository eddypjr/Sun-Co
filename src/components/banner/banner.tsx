import {
  BannerLeft,
  BannerRight,
  Container,
  Content,
  ShopNowButton,
} from './banner.styles';
import { FC } from 'react';
import rightArrow from '../../assets/svg/rightArrow.svg';

const Banner: FC = () => {
  return (
    <section>
      <Container>
        <Content>
          <BannerLeft>
            <h1>25% OFF</h1>
            <h2>Summer Sale</h2>
            <p>Discover our summer styles with discount</p>
            <ShopNowButton to="/cart">
              Shop Now <img src={rightArrow} alt="right-arrow" />
            </ShopNowButton>
          </BannerLeft>
          <BannerRight>
            <img
              src="https://i.ibb.co/prgDHYk/banner.webp"
              alt="banner-image"
            />
          </BannerRight>
        </Content>
      </Container>
    </section>
  );
};

export default Banner;
