import {
  BannerContainer,
  BannerH1,
  BannerH2,
  BannerImage,
  BannerP,
  Container,
  ImageContainer,
  LeftBannerContainer,
  ShopNowButton,
} from './banner.styles';
import banner from '../../assets/images/banner.png';
import rightArrow from '../../assets/svg/rightArrow.svg';
import { FC } from 'react';

const Banner: FC = () => {
  return (
    <>
      <Container>
        <BannerContainer>
          <LeftBannerContainer>
            <BannerH1>25% OFF</BannerH1>
            <BannerH2>Summer Sale</BannerH2>
            <BannerP>Discover our summer styles with discount</BannerP>
            <ShopNowButton to="/cart">
              Shop Now <img src={rightArrow} />
            </ShopNowButton>
          </LeftBannerContainer>
          <ImageContainer>
            <BannerImage src={banner} />
          </ImageContainer>
        </BannerContainer>
      </Container>
    </>
  );
};

export default Banner;
