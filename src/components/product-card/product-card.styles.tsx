import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  width: 100%;
`;

export const ProductImage = styled.img`
  width: 95%;
  height: 300px;
  border-radius: 18.77px;
`;

export const ProductBrand = styled.div`
  color: var(--black, #201b21);
  font-family: DM Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 120% */
  letter-spacing: -0.5px;
`;

export const ProductName = styled.div`
  color: var(--dark-grey, #67696e);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
`;

export const ProductPrice = styled.div`
  color: var(--black, #201b21);
  font-family: DM Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.5px;
`;
