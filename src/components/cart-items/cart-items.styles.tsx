import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  .price {
    color: var(--black, #201b21);
    text-align: right;
    font-family: DM Sans;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; /* 133.333% */
    letter-spacing: -0.031rem;

    @media screen and (max-width: 800px) {
      font-size: 0.875rem;
      line-height: 1.25rem; /* 142.857% */
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
    width: 10.313rem;
    height: 10.313rem;
    flex-shrink: 0;

    @media screen and (max-width: 800px) {
      width: 11.563rem;
      height: 11.563rem;
    }
  }
`;

export const MiddleColumn = styled.div`
  width: 100%;
  margin-left: 10%;
  display: grid;
  row-gap: 0rem;
  // background-color: red;

  @media screen and (max-width: 800px) {
    margin-left: 15%;
  }

  .brand {
    color: var(--black, #201b21);
    font-family: DM Sans;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem; /* 120% */
    letter-spacing: -0.031rem;

    @media screen and (max-width: 800px) {
      font-size: 1rem;
      line-height: 1.25rem; /* 125% */
    }
  }

  .name {
    color: var(--dark-grey, #67696e);
    font-family: Inter;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 133.333% */

    @media screen and (max-width: 800px) {
      font-size: 0.875rem;
      line-height: 1.125rem; /* 128.571% */
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

export const Image = styled.img`
  border-radius: 1.173rem;
  width: 10.313rem;
  height: 10.313rem;
  flex-shrink: 0;

  @media screen and (max-width: 800px) {
    width: 11.563rem;
    height: 11.563rem;
  }
`;

export const RemoveButton = styled.button`
  color: var(--dark-grey, #67696e);
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; /* 150% */
  text-decoration-line: underline;
  width: 3.938rem;
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  @media screen and (max-width: 800px) {
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.25rem; /* 142.857% */
    margin: 5% 0;
  }
`;

export const Underline = styled.div`
  height: 0.063rem;
  border: 0.063rem solid #e9ebee;
  margin: 5% 0;
`;
