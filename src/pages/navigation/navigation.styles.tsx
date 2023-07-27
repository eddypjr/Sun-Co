import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
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
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px black solid;
  border-radius: 8px;
  margin-right: 5%;
  @media screen and (max-width: 800px) {
    margin-right: 2%;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LogoContainer = styled.div`
  margin-left: 5%;
  @media screen and (max-width: 800px) {
    margin-left: 2%;
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
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
  }
`;
