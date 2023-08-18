import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;

  h1 {
    color: #201b21;
    font-family: DM Sans;
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: -0.063rem;

    @media screen and (max-width: 800px) {
      color: #201b21;
      font-family: DM Sans;
      font-size: 1.75rem;
      line-height: 2.25rem;
      letter-spacing: -0.063rem;
    }
  }

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const ProductsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1.2rem;
  transition: all 0.25s ease-in-out;

  @media screen and (max-width: 800px) {
    display: flex;
    gap: 1.5rem;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    scroll-behavior: smooth;
    position: relative;
  }
`;

export const Arrow = styled.img`
  @media screen and (max-width: 800px) {
    width: 1.75rem;
    height: 2rem;
    color: white;
    cursor: pointer;
  }
`;

export const Circle = styled.div`
  @media screen and (max-width: 800px) {
    background-color: white;
    width: 2.188rem;
    height: 2.188rem;
    text-align: center;
    border-radius: 50%;
    border: 0.063rem solid white;
    color: white;
    cursor: pointer;
    margin: 0 0.625rem;
    box-shadow: 0rem 0.278rem 4.167rem 0rem rgba(0, 0, 0, 0.08);
  }
`;

export const ArrowsContainer = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 1.563rem 0;
    display: flex;
  }
`;
