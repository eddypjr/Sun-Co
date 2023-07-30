import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductsContainer = styled.div`
  width: 80%;
  display: flex;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const ExploreText = styled.h1`
  align-self: flex-start;
  margin-left: 10%;
  color: var(--black, #201b21);
  font-family: DM Sans;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 133.333% */
  letter-spacing: -1px;

  @media screen and (max-width: 800px) {
    margin-left: 5%;
    color: var(--black, #201b21);
    font-family: DM Sans;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 128.571% */
    letter-spacing: -1px;
  }
`;

export const NavLinkDiv = styled.div`
  width: 100%;
`;
