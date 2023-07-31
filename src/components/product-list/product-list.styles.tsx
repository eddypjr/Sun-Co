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
    width: 95%;
    display: flex;
    flex-direction: column;
    margin-left: 5%;
  }
`;

export const ExploreText = styled.h1`
  align-self: flex-start;
  margin-left: 10%;
  color: var(--black, #201b21);
  font-family: DM Sans;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3rem; /* 133.333% */
  letter-spacing: -0.063rem;

  @media screen and (max-width: 800px) {
    margin-left: 5%;
    color: var(--black, #201b21);
    font-family: DM Sans;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.25rem; /* 128.571% */
    letter-spacing: -0.063rem;
  }
`;
