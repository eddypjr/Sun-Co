import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  // background-color: red;
`;

export const InnerContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const ImageContainer = styled.div`
 width: 100%;
`;

export const Image = styled.img`
  border-radius: 18.77px;
  width: 165px;
  height: 166px;
  flex-shrink: 0;
`;

export const SecondColumnBottom = styled.div`
  // width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const MiddleColumn = styled.div`
  width: 100%;
`;

export const Brand = styled.div`
  color: var(--black, #201b21);
  font-family: DM Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 120% */
  letter-spacing: -0.5px;
`;

export const Name = styled.div`
  color: var(--dark-grey, #67696e);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
`;

export const ThirdColumn = styled.div`
  width: 100%;
`;

export const Price = styled.div`
  color: var(--black, #201b21);
  text-align: right;
  font-family: DM Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.5px;
`;
