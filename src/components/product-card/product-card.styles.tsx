import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.125rem;

  @media screen and (max-width: 800px) {
    // width: 30vw;
  }

  @media screen and (max-width: 480px) {
    // width: 50vw;
  }

  &:hover {
    text-decoration: solid underline #201b21 1px;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;
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
    // width: 100%;
    height: 300px;
  }

  @media (width <= 600px) {
    // width: 95%;
    height: 250px;
  }
`;

export const Brand = styled.div`
  color: var(--black, #201b21);
  font-family: DM Sans;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; /* 120% */
  letter-spacing: -0.031rem;
`;

export const Name = styled.div`
  color: var(--dark-grey, #67696e);
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 125% */
`;

export const Price = styled.div`
  color: var(--black, #201b21);
  font-family: DM Sans;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 133.333% */
  letter-spacing: -0.031rem;

  &:hover {
    // text-decoration: none;
  }
`;
