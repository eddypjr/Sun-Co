import styled from 'styled-components';

export const ProductImage = styled.img`
  width: 100%;
  height: 90%;
  max-height: 600px;
`;

export const Container = styled.div`
  display: grid;
  justify-items: center;

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2.625rem;
  width: 80%;
  justify-items: center;
  row-gap: 2.625rem;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: center;
    row-gap: 2.188rem;
    margin-bottom: 5%;
  }
`;
