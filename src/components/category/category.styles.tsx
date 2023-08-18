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

  @media (width <= 480px) {
    object-fit: contain;
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
  column-gap: 1rem;
  row-gap: 1rem;

  @media (width <= 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
