import styled from 'styled-components';

export const NavLinkDiv = styled.div`
  width: 100%;

  @media screen and (max-width: 800px) {
    padding-bottom: 0.625rem;
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
    outline: none;
    color: white;
    cursor: pointer;
    margin: 0 0.625rem;
    box-shadow: 0rem 0.278rem 4.167rem 0rem rgba(0, 0, 0, 0.08);
  }
`;

export const ArrowsDiv = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
  }
`;
