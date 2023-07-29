import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  border-radius: 20px;
  background: var(--white, #fff);
  box-shadow: 0px 4.444444179534912px 66.66666412353516px 0px
    rgba(0, 0, 0, 0.08);
`;

export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
`;

export const InnerTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 40%;
  margin-left: 13%;
`;

export const Brand = styled.h1`
  color: var(--black, #201b21);
  font-size: 24px;
  font-style: normal;
  font-family: DM Sans;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.5px;
`;

export const Name = styled.h2`
  color: var(--dark-grey, #67696e);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
`;
export const Price = styled.h1`
  color: var(--black, #201b21);
  font-size: 24px;
  font-style: normal;
  font-family: DM Sans;
  font-weight: 500;
  line-height: 24px; /* 100% */
  letter-spacing: -0.5px;
`;

export const Quantity = styled.h1`
  color: var(--black, #201b21);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 111.111% */
  letter-spacing: -0.5px;
`;

export const InnerBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 13%;
`;

export const Spacing = styled.div`
  padding-top: 5%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Underline = styled.div`
  opacity: 0.1;
  background-color: #201b21;
  height: 1px;
`;
