import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  .price {
    color: #201b21;
    text-align: right;
    font-family: DM Sans;
    font-size: 1.125rem;

    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: -0.031rem;

    @media screen and (max-width: 800px) {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
`;

export const ImageContainer = styled.div`
  width: 100%;

  img {
    border-radius: 1.173rem;
    width: 12.5rem;
    height: 12.5rem;
    flex-shrink: 0;

    @media screen and (min-width: 800px) and (max-width: 1200px) {
      width: 7.813rem;
      height: 7.813rem;
    }

    @media screen and (min-width: 480px) and (max-width: 799px) {
      width: 9.375rem;
      height: 9.375rem;
    }

    @media screen and (min-width: 300px) and (max-width: 480px) {
      width: 7.188rem;
      height: 7.188rem;
    }

    @media screen and (max-width: 300px) {
      width: 5rem;
      height: 5rem;
    }
  }
`;

export const MiddleColumn = styled.div`
  width: 100%;
  margin-left: 10%;
  display: grid;
  row-gap: 0rem;

  @media screen and (max-width: 800px) {
    margin-left: 15%;
  }

  .brand {
    color: #201b21;
    font-family: DM Sans;
    font-size: 1.25rem;

    font-weight: 700;
    line-height: 1.5rem;
    letter-spacing: -0.031rem;

    @media screen and (max-width: 800px) {
      font-size: 1rem;
      line-height: 1.25rem;
    }
  }

  .name {
    color: #67696e;
    font-family: Inter;
    font-size: 1.125rem;

    line-height: 1.5rem;

    @media screen and (max-width: 800px) {
      font-size: 0.875rem;
      line-height: 1.125rem;
    }
  }
`;

export const MiddleColumnBottom = styled.div`
  margin-top: 25%;
  grid-template-columns: repeat(2, 1fr);
  display: grid;
  column-gap: 2.625rem;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 0%;
  }
`;

export const RemoveButton = styled.button`
  color: #67696e;
  font-family: Inter;
  font-size: 1rem;

  font-weight: 700;
  line-height: 1.5rem;
  text-decoration-line: underline;
  width: 3.938rem;
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.25rem;
    margin: 5% 0;
  }

  &:hover {
    filter: brightness(125%);
  }
`;

export const Underline = styled.div`
  height: 0.063rem;
  border: 0.063rem solid #e9ebee;
  margin: 5% 0;
`;
