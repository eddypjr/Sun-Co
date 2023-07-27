import { Link } from 'react-router-dom';
import {
  LogoContainer,
  FooterLink,
  FooterContainer,
  FooterLinksContainer,
  SocialLogoContainer,
} from './footer.styles';
import blackLogo from '../../../assets/blackLogo.png';
import Instagram from '../../../assets/Instagram.svg';
import Twitter from '../../../assets/Twitter.svg';
import Youtube from '../../../assets/Youtube.svg';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterLinksContainer>
          <LogoContainer>
            <FooterLink to="/">
              <img src={blackLogo} />
            </FooterLink>
          </LogoContainer>
          <div>&#169; 2023 dot.cards text task. All rights reserved</div>
          <SocialLogoContainer>
            <FooterLink to="https://www.instagram.com/dot.cards/?hl=en">
              <img src={Instagram} />
            </FooterLink>
            <FooterLink to="https://twitter.com/DotCardsUSA">
              <img src={Twitter} />
            </FooterLink>
            <FooterLink to="https://www.youtube.com/@dotnetworking8220">
              <img src={Youtube} />
            </FooterLink>
          </SocialLogoContainer>
        </FooterLinksContainer>
      </FooterContainer>
    </>
  );
};

export default Footer;
