import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  h1 {
    color: #201b21;
    font-family: DM Sans;
    font-size: 1.5rem;

    font-weight: 700;
    line-height: 2rem;
    letter-spacing: -0.031rem;
  }

  p {
    color: #67696e;
    font-family: Inter;
    font-size: 1.125rem;

    line-height: 1.5rem;
  }
`;

export const Underline = styled.div`
  opacity: 0.1;
  background-color: #201b21;
  height: 0.063rem;
`;

export const BulletPoints = styled.ul`
  color: #67696e;
  font-family: Inter;
  font-size: 1.125rem;

  line-height: 1.5rem;
`;
