import styled from 'styled-components';

export const Container = styled.div`
  .blur-image {
    filter: blur(4px);
  }
`;
export const ProductImage = styled.img`
  width: 100%;
  border-radius: 1.173rem;
  height: 350px;
  display: block;
  object-position: center;
  aspect-ratio: 1/1;
  object-fit: cover;

  @media screen and (max-width: 800px) {
    height: 300px;
  }

  @media (width <= 600px) {
    height: 250px;
  }
`;
