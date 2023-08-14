import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 80%;
  display: grid;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2.625rem;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
`;

export const GridLeft = styled.div`
  display: grid;
  row-gap: 1.25rem;
  align-content: start;

  @media screen and (max-width: 800px) {
    grid-row-start: 2;
    grid-row-end: 2;
    justify-items: center;
    width: 90%;
    order: 3;
  }

  .bag-label {
    width: 100%;
    @media (650px <= width <= 800px) {
      margin-top: 1rem;
    }
  }

  h1 {
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
  }
`;

export const GridRight = styled.div`
  display: grid;
  width: 100%;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;
