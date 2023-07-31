import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const InnerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 42px;
  

  @media screen and (max-width: 800px) {
    justify-items: center;
  }
`;

export const LeftContainer = styled.div`
  display: grid;
  row-gap: 20px;
  @media screen and (max-width: 800px) {
    grid-row-start: 2;
    grid-row-end: 2;
    justify-items: center;
    margin-left: 5%;
  }
`;

export const RightContainer = styled.div`
  display: grid;
`;

export const InnerContainer = styled.div`
  width: 80%;
  display: grid;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const CartHeading = styled.h1`
  color: var(--black, #201b21);
  font-family: DM Sans;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 133.333% */
  letter-spacing: -1px;

  @media screen and (max-width: 800px) {
    font-size: 28px;
    line-height: 36px; /* 128.571% */
    letter-spacing: -1px;
  }
`;

export const CartHeadingDiv = styled.div`
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
