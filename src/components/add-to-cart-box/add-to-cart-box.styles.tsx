import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-radius: 1.25rem;
  background: var(--white, #fff);
  box-shadow: 0rem 0.278rem 4.167rem 0rem rgba(0, 0, 0, 0.08);

  @media screen and (max-width: 800px) {
    margin: 5% 0;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Top = styled.div`
  width: 90%;
  display: flex;
  height: 50%;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: #201b21;
    font-size: 1.5rem;
    font-style: normal;
    font-family: DM Sans;
    font-weight: 700;
    line-height: 2rem;
    letter-spacing: -0.031rem;

    @media screen and (max-width: 800px) {
      font-size: 1.125rem;
      line-height: 1.5rem; /* 133.333% */
      letter-spacing: -0.023rem;
    }
  }

  h2 {
    color: #67696e;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 120% */

    @media screen and (max-width: 800px) {
      font-size: 0.938rem;
      line-height: 1.125rem; /* 120% */
    }
  }

  h3 {
    color: #201b21;
    font-size: 1.5rem;
    font-style: normal;
    font-family: DM Sans;
    font-weight: 500;
    line-height: 1.5rem; /* 100% */
    letter-spacing: -0.031rem;

    @media screen and (max-width: 800px) {
      font-size: 1.125rem;
      line-height: 1.125rem; /* 100% */
      letter-spacing: -0.023rem;
    }
  }
`;

export const Bottom = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  height: 50%;

  @media screen and (max-width: 800px) {
    height: 100%;
  }

  p {
    color: #201b21;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25rem; /* 111.111% */
    letter-spacing: -0.031rem;
    margin-top: 1.563rem;

    @media screen and (max-width: 800px) {
      font-size: 0.844rem;
      line-height: 0.938rem; /* 111.111% */
      letter-spacing: -0.023rem
      margin-top: 0.938rem;
    }
  }

`;

export const Underline = styled.div`
  opacity: 0.1;
  background-color: #201b21;
  height: 0.063rem;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
