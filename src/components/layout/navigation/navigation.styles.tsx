import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  display: flex;
  width: 100%;
  height: 3.75rem;
  margin-bottom: 1.563rem;
  justify-content: space-around;
  border-bottom: 0.063rem solid #e9ebee;
  @media screen and (max-width: 800px) {
    height: 3.75rem;
    justify-content: space-between;
    padding: 0.625rem 0rem;
    margin-bottom: 1.25rem;
  }
`;

export const ViewCartContainer = styled.div`
  display: flex;
  padding: 0.5rem 1.5rem;
  align-items: center;
  gap: 0.625rem;
  border: 0.063rem #201b21 solid;
  border-radius: 0.5rem;
  color: #201b21;
  background-color: white;
  @media screen and (max-width: 800px) {
    justify-content: space-between;
    align-items: center;
    padding: 0.375rem 1.125rem;
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
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  margin-right: 10%;
  @media screen and (max-width: 800px) {
    margin-right: 10%;
  }
`;

export const ItemCount = styled.div`
  background-color: #ec5e2a;
  width: 1.125rem;
  height: 1.125rem;
  text-align: center;
  border-radius: 50%;
  border: 0.063rem solid #ec5e2a;
  outline: none;
  color: white;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    font-size: 0.875rem;
  }
`;
