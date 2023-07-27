import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  margin-bottom: 25px;
  justify-content: space-around;
  margin-bottom: 25px;
  border-bottom: 1px solid gray;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px 20px;
    margin-bottom: 20px;
  }
`;

export const LeftContainer = styled.div`

`

export const LogoContainer = styled(Link)`
border: 1px solid black;
  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0px;
  }
`;

export const NavBarLinks = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  border: 1px black solid;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0px;
  }
`;