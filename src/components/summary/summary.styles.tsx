import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 800px) {
    justify-content: center;
    width: 90vw;
    height: 24.31rem;
    margin-left: 5%;
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 1.25rem;
  background: var(--white, #fff);
  box-shadow: 0rem 0.278rem 4.167rem 0rem rgba(0, 0, 0, 0.08);
`;

export const SummaryTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 1.25rem;
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
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 120% */
  letter-spacing: -0.031rem;
  margin-left: 10%;
`;

export const BottomLeft = styled.div`
  width: 80%;
  display: grid;
`;
export const BottomRight = styled.div`
  width: 80%;
  display: grid;
  justify-content: end;
  row-gap: 1.25rem;
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
  height: 0.063rem;
  margin: 5% 0;
`;

export const Heading = styled.h1`
  color: var(--black, #201b21);
  font-family: DM Sans;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3rem; /* 133.333% */
  letter-spacing: -0.063rem;

  @media screen and (max-width: 800px) {
    font-size: 1.75rem;
    line-height: 2.25rem; /* 128.571% */
    letter-spacing: -0.063rem;
  }
`;
export const Total = styled.div`
  color: var(--black, #201b21);
  font-family: DM Sans;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2rem; /* 133.333% */
  letter-spacing: -0.031rem;

  @media screen and (max-width: 800px) {
    font-size: 1.125rem;
    line-height: 1.5rem; /* 133.333% */
    letter-spacing: -0.023rem;
  }
`;

export const SummaryContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: var(--black, #201b21);
  font-family: DM Sans;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 120% */
  letter-spacing: -0.031rem;

  @media screen and (max-width: 800px) {
    font-size: 1rem;
    line-height: 1.125rem; /* 112.5% */
    letter-spacing: -0.023rem;
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
  row-gap: 1.25rem;
  text-align: right;
`;

export const SummaryDetails = styled.div`
  font-size: 1.25rem;
  width: 100%;
  background-color: blue;
  padding: 0.625rem 0rem;
  justify-content: space-between;
`;

export const Discount = styled.div`
  color: orange;
`;

export const FinalPrice = styled.div`
  color: var(--black, #201b21);
  text-align: right;
  font-family: DM Sans;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 133.333% */
  letter-spacing: -0.031rem;

  @media screen and (max-width: 800px) {
    font-size: 0.938rem;
    line-height: 1.125rem; /* 120% */
    letter-spacing: -0.023rem;
  }
`;

export const Checkout = styled(Link)`
  display: flex;
  width: 28.5rem;
  padding: 1.25rem 5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.625rem;
  background: var(--black, #201b21);
  color: white;
  font-family: Inter;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;

  @media screen and (max-width: 800px) {
    display: flex;
    width: 70vw;
    padding: 0.75rem 5rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
  }
`;
