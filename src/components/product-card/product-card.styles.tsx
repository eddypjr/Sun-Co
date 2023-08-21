import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.125rem;

  &:hover {
    text-decoration: solid underline #201b21 1px;
  }
`;

export const ImageContainer = styled.div`
  .blur-image {
    filter: blur(4px);
  }
  width: 100%;
  `;
  
  type ProductImageProps = {
    width: string;
  };
  
  export const ProductImage = styled.img<ProductImageProps>`
  border-radius: 1.173rem;
  display: block;
  aspect-ratio: 0.92/1;
  object-fit: fill;
  width: 100%;
  transition: all 0.25s ease-in-out;

  @media screen and (max-width: 800px) {
    width: 300px;

  }

  @media screen and (max-width: 480px) {
    width: ${({ width }) => `${width}`};
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;
`;

export const Brand = styled.div`
  color: #201b21;
  font-family: DM Sans;
  font-size: 1.25rem;

  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: -0.031rem;
`;

export const Name = styled.div`
  color: #67696e;
  font-family: Inter;
  font-size: 1rem;

  line-height: 1.25rem;
`;

export const Price = styled.div`
  color: #201b21;
  font-family: DM Sans;
  font-size: 1.125rem;

  font-weight: 500;
  line-height: 1.5rem;
  letter-spacing: -0.031rem;
`;
