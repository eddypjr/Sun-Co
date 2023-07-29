import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  
`;

export const InnerContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 25%;
  column-gap: 42px;
`;

export const MiddleColumn = styled.div`
  width: 100%;
  margin-left: 10%;
  display: grid;
  row-gap: 0px;
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

export const RemoveButton = styled.button`
  color: #67696e;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 150% */
  text-decoration-line: underline;
  width: 63px;
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;
