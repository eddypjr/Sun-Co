import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 3.75rem;
  justify-content: space-around;
  background-color: #201b21;
  color: #d9dbe1;
  font-size: 0.875rem;
  position: fixed;
  bottom: 0;

  @media screen and (max-width: 800px) {
    font-size: 0.75rem;
    padding: 0.625rem;
    height: auto;
  }
`;

export const LogoContainer = styled.div`
  margin-left: 10%;
  display: flex;
  @media screen and (max-width: 800px) {
    margin: 0 5%;
  }
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
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
  margin-right: 10%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
  }
`;

export const CopyrightContainer = styled.div`
  display: flex;
  color: #d9dbe1;
  @media screen and (max-width: 800px) {
    order: 3;
    padding: 0.313rem 0rem;
    flex-direction: column;
  }
`;
