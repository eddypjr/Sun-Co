import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-around;
  background-color: black;
  color: #d9dbe1;
  font-size: 14px;
  position: absolute;
  bottom: 0;
  @media screen and (max-width: 800px) {
    height: 60px;
    width: 100%;
    justify-content: space-evenly;
    font-size: 12px;
  }
`;

export const LogoContainer = styled.div`
  margin-left: 5%;
  display: flex;
  @media screen and (max-width: 800px) {
    margin-left: 5%;
  }
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
  }
`;

export const FooterLink = styled(Link)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
  }
`;

export const SocialLogoContainer = styled.div`
  margin-right: 5%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    margin-right: 5%;
  }
`;
