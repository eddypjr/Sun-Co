import {
  CopyrightContainer,
  Container,
  Content,
  SocialLogoContainer,
} from './footer.styles';
import { FC } from 'react';
import Instagram from '../../../assets/svg/Instagram.svg';
import Twitter from '../../../assets/svg/Twitter.svg';
import Youtube from '../../../assets/svg/Youtube.svg';
import { Link } from 'react-router-dom';

const Footer: FC = () => {
  return (
    <footer>
      <Container>
        <Content>
          <Link to="/">
            <img
              src="https://i.ibb.co/NF3m1Xr/black-Logo.webp"
              alt="logo"
              loading="lazy"
            />
          </Link>
          <CopyrightContainer>
            <div>&#169; 2023 Sun Co.</div>
            <div>All rights reserved</div>
          </CopyrightContainer>
          <SocialLogoContainer>
            <Link to="https://www.instagram.com/">
              <img src={Instagram} alt="instagram-link" loading="lazy" />
            </Link>
            <Link to="https://twitter.com/">
              <img src={Twitter} alt="twitter-link" loading="lazy" />
            </Link>
            <Link to="https://www.youtube.com/">
              <img src={Youtube} alt="youtube-link" loading="lazy" />
            </Link>
          </SocialLogoContainer>
        </Content>
      </Container>
    </footer>
  );
};

export default Footer;
