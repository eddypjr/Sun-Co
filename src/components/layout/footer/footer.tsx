import {
  CopyrightContainer,
  FooterLink,
  FooterContainer,
  FooterLinksContainer,
  LogoContainer,
  SocialLogoContainer,
} from './footer.styles';
import { FC } from 'react';
import blackLogo from '../../../assets/images/blackLogo.png';
import Instagram from '../../../assets/svg/Instagram.svg';
import Twitter from '../../../assets/svg/Twitter.svg';
import Youtube from '../../../assets/svg/Youtube.svg';

const Footer: FC = () => {
  return (
    <>
      <FooterContainer>
        <FooterLinksContainer>
          <LogoContainer>
            <FooterLink to="/">
              <img src={blackLogo} alt="logo" />
            </FooterLink>
          </LogoContainer>
          <CopyrightContainer>
            <div>&#169; 2023 dot.cards text task.</div>
            <div>All rights reserved</div>
          </CopyrightContainer>
          <SocialLogoContainer>
            <FooterLink to="https://www.instagram.com/dot.cards/?hl=en">
              <img src={Instagram} alt="instagram-link" />
            </FooterLink>
            <FooterLink to="https://twitter.com/DotCardsUSA">
              <img src={Twitter} alt="twitter-link" />
            </FooterLink>
            <FooterLink to="https://www.youtube.com/@dotnetworking8220">
              <img src={Youtube} alt="youtube-link" />
            </FooterLink>
          </SocialLogoContainer>
        </FooterLinksContainer>
      </FooterContainer>
    </>
  );
};

export default Footer;
