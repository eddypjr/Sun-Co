import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 80%;
  height: 100%;

  @media (width <= 800px) {
    width: 90%;
  }

  h2 {
    font-size: 1.75rem;
    margin-bottom: 1.563rem;
    text-align: left;
    margin-left: 5%;

    @media screen and (max-width: 800px) {
      text-align: center;
      margin-left: 0;
    }
  }
`;

export const ProductCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  column-gap: 16px;
  row-gap: 16px;

  @media (width <= 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (width <= 800px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 24px;
    row-gap: 20px;
  }
`;
