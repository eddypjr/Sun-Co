import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductsContainer = styled.div`
  width: 80%;
  display: flex;

  @media screen and (max-width: 800px) {
    width: 95%;
    display: flex;
    flex-direction: column;
    margin-left: 5%;
  }
`;

export const SlideContainer = styled.div`
  @media screen and (max-width: 800px) {
    display: flex;
    flex-wrap: nowrap;
  }
`;

export const ExploreText = styled.h1`
  align-self: flex-start;
  margin-left: 10%;
  color: var(--black, #201b21);
  font-family: DM Sans;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 133.333% */
  letter-spacing: -1px;

  @media screen and (max-width: 800px) {
    margin-left: 5%;
    color: var(--black, #201b21);
    font-family: DM Sans;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 128.571% */
    letter-spacing: -1px;
  }
`;

export const NavLinkDiv = styled.div`
  width: 100%;

  @media screen and (max-width: 800px) {
    padding-bottom: 10px;
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
    width: 35px;
    height: 35px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid white;
    outline: none;
    color: white;
    cursor: pointer;
    box-shadow: 0px 4.444444179534912px 66.66666412353516px 0px
      rgba(0, 0, 0, 0.4);
  }
`;

export const ArrowsDiv = styled.div`

@media screen and (max-width: 800px) {
    width: 100%;
    display: flex;
    position: absolute;
  }
`;
