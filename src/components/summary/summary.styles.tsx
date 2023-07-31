import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 800px) {
    justify-content: center;
    width: 90vw;
    height: 389px;
    margin-left: 5%;
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  background: var(--white, #fff);
  box-shadow: 0px 4.444444179534912px 66.66666412353516px 0px
    rgba(0, 0, 0, 0.08);
`;

export const InnerTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 20px;
  margin-left: 10%;
`;

export const Bottom = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  color: var(--black, #201b21);
  font-family: DM Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 120% */
  letter-spacing: -0.5px;
  margin-left: 10%;
`;

export const InnerLeft = styled.div`
  width: 80%;
  display: grid;
`;
export const InnerRight = styled.div`
  width: 80%;
  display: grid;
  justify-content: end;
  row-gap: 20px;
  text-align: right;
`;

export const Spacing = styled.div`
  padding: 5% 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Underline = styled.div`
  opacity: 0.1;
  background-color: #201b21;
  height: 1px;
  margin: 5% 0;
`;

export const Heading = styled.h1`
  color: var(--black, #201b21);
  font-family: DM Sans;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 133.333% */
  letter-spacing: -1px;

  @media screen and (max-width: 800px) {
    font-size: 28px;
    line-height: 36px; /* 128.571% */
    letter-spacing: -1px;
  }
`;
export const Total = styled.div`
  color: var(--black, #201b21);
  font-family: DM Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.5px;

  @media screen and (max-width: 800px) {
    font-size: 18px;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.375px;
  }
`;

export const SummaryContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: var(--black, #201b21);
  font-family: DM Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 120% */
  letter-spacing: -0.5px;

  @media screen and (max-width: 800px) {
    font-size: 16px;
    line-height: 18px; /* 112.5% */
    letter-spacing: -0.375px;
  }
`;

export const SummaryLeft = styled.div`
  width: 80%;
  display: grid;
`;

export const SummaryRight = styled.div`
  width: 80%;
  display: grid;
  justify-content: end;
  row-gap: 20px;
  text-align: right;
`;

export const SummaryDetails = styled.div`
  font-size: 20px;
  width: 100%;
  background-color: blue;
  padding: 10px 0px;
  justify-content: space-between;
`;

export const Discount = styled.div`
  color: orange;
`;

export const FinalPrice = styled.div`
  color: var(--black, #201b21);
  text-align: right;
  font-family: DM Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.5px;

  @media screen and (max-width: 800px) {
    font-size: 15px;
    line-height: 18px; /* 120% */
    letter-spacing: -0.375px;
  }
`;

export const Checkout = styled(Link)`
  display: flex;
  width: 456px;
  padding: 20px 80px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: var(--black, #201b21);
  color: white;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;

  @media screen and (max-width: 800px) {
    display: flex;
    width: 70vw;
    padding: 12px 80px;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;