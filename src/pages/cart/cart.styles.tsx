import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 42px;
`;

export const LeftContainer = styled.div`
  display: grid;
  row-gap: 20px;
`;

export const RightContainer = styled.div`
  display: grid;
`;

export const InnerContainer = styled.div`
  width: 80%;
  display: grid;
  column-gap: 42px;
  // grid-template-columns: repeat(, 1fr);
`;

export const CartHeading = styled.h1`
  color: var(--black, #201b21);
  font-family: DM Sans;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 133.333% */
  letter-spacing: -1px;
`;

export const CartHeadingDiv = styled.div`
  width: 80%;
`;
