import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.125rem;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.875rem;
  width: 100%;
`;

export const ProductImage = styled.img`
  width: 95%;
  height: 18.75rem;
  border-radius: 1.173rem;
`;

export const ProductBrand = styled.div`
  color: var(--black, #201b21);
  font-family: DM Sans;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; /* 120% */
  letter-spacing: -0.031rem;
`;

export const ProductName = styled.div`
  color: var(--dark-grey, #67696e);
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 125% */
`;

export const ProductPrice = styled.div`
  color: var(--black, #201b21);
  font-family: DM Sans;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 133.333% */
  letter-spacing: -0.031rem;
`;
