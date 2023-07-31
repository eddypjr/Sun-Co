import styled from 'styled-components';

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
    margin: 0 10px;
    box-shadow: 0px 4.444444179534912px 66.66666412353516px 0px
      rgba(0, 0, 0, 0.4);
  }
`;

export const ArrowsDiv = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
  }
`;
