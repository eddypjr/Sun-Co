import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 3.75rem;
  border-bottom: 0.063rem solid #e9ebee;
  margin-bottom: 1.563rem;

  a {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 95%;
    flex-wrap: wrap;
    font-size: 0.75rem;
    padding: 0.625rem;
    height: auto;
  }
`;

export const NavBarLinks = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
