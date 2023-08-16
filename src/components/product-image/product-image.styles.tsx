import styled from 'styled-components';

export const Container = styled.div`
  .blur-image {
    filter: blur(4px);
  }
  width: 100%;
`;

export const ProductImage = styled.img`
  border-radius: 1.173rem;
  display: block;
  height: 400px;
  width: 100%;
  transition: all 0.25s ease-in-out;

  @media screen and (max-width: 800px) {
    height: 300px;
    width: 300px;
  }
`;
