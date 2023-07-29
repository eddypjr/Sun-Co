import {
  CopyrightContainer,
  FooterLink,
  FooterContainer,
  FooterLinksContainer,
  LogoContainer,
  SocialLogoContainer,
} from './footer.styles';
import blackLogo from '../../../assets/images/blackLogo.png'
import Instagram from '../../../assets/svg/Instagram.svg';
import Twitter from '../../../assets/svg/Twitter.svg';
import Youtube from '../../../assets/svg/Youtube.svg';

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
          <CopyrightContainer>
            <div>&#169; 2023 dot.cards text task.</div>
            <div>All rights reserved</div>
          </CopyrightContainer>
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
