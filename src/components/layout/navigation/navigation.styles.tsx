import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  margin-bottom: 25px;
  justify-content: space-around;
  border-bottom: 1px solid gray;
  @media screen and (max-width: 800px) {
    height: 60px;
    width: 100%;
    justify-content: space-between;
    padding: 10px 0px;
    margin-bottom: 20px;
  }
`;

export const ViewCartContainer = styled.div`
  display: flex;
  padding: 8px 24px;
  align-items: center;
  gap: 10px;
  border: 1px black solid;
  border-radius: 8px;
  color: black;
  background-color: white;
  @media screen and (max-width: 800px) {
    margin-right: 5%;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LogoContainer = styled.div`
  margin-left: 10%;
  @media screen and (max-width: 800px) {
    margin-left: 5%;
  }
`;

export const NavBarLinks = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
  }
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  margin-right: 10%;
  @media screen and (max-width: 800px) {
  }
`;

export const ItemCount = styled.div`
  background-color: #ec5e2a;
  width: 18px;
  height: 18px;
  text-align: center;
  border-radius: 50%;
  border: 1px solid #ec5e2a;
  outline: none;
  color: white;
  cursor: pointer;
`;
