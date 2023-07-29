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
  position: relative;
  margin-top: 5%;
  bottom: 0;
  
  @media screen and (max-width: 800px) {
    height: 80px;
    width: 100%;
    justify-content: space-evenly;
    font-size: 12px;
    padding: 10px;
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
    padding: 5px 0px;
    flex-direction: column;
  }
`;
