import styled from 'styled-components';

export const ProductImage = styled.img`
  border-radius: 20px;
  width: 100%;
  margin-top: 5%;

  @media screen and (max-width: 800px) {
    padding-bottom: 100px;
  }
`;

export const Container = styled.div`
  height: 100vh;
  display: grid;
  justify-items: center;
  margin-bottom: 5%;

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

export const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 42px;
  width: 80%;
  justify-items: center;
  row-gap: 10px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: center;
    row-gap: 35px;
  }
`;
