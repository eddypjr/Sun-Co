import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BannerContainer = styled.div`
  width: 80%;
  padding: 1.25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 2.5rem;
  background-color: var(--hero-bg, #eaeeef);

  @media screen and (max-width: 800px) {
    width: 90%;
    padding: 0.625rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-bottom: 1.875rem;
    border-radius: 1.25rem;
  }
`;

export const LeftBannerContainer = styled.div`
  font-family: DM Sans;

  @media screen and (max-width: 800px) {
    height: 100%;
    order: 2;
  }
`;

export const BannerH1 = styled.h1`
  color: var(--orange, #ec5e2a);
  font-family: DM Sans;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.5rem;
  letter-spacing: -0.063rem;

  @media screen and (max-width: 800px) {
    text-align: center;
    font-size: 2.25rem;
    line-height: 2.625rem;
    letter-spacing: -0.064rem;
  }
`;

export const BannerH2 = styled.h1`
color: var(--black, #201B21);
font-family: DM Sans;
font-size: 4rem;
font-style: normal;
font-weight: 700;
line-height: 73px; /* 114.063% */
letter-spacing: -0.063rem;

  @media screen and (max-width: 800px) {
    text-align: center;
    font-size: 3rem;
    line-height: 3.422rem
    letter-spacing: -0.064rem;
  }
`;

export const BannerP = styled.p`
  color: var(--dark-grey, #67696e);
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.875rem; /* 150% */
  @media screen and (max-width: 800px) {
    font-size: 0.875rem;
    line-height: 1.25rem; /* 142.857% */
  }
`;

export const ShopNowButton = styled(Link)`
  display: inline-flex;
  padding: 1.25rem 5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.625rem;
  background: var(--black, #201b21);
  color: white;
  margin-top: 1.25rem;
  font-size: 1.125rem;

  @media screen and (max-width: 800px) {
    font-size: 1rem;
    margin-top: 0;
    padding: 0.75rem 5rem;
    width: 70vw;
  }
`;

export const RightBannerContainer = styled.div`
  height: 100%;

  @media screen and (max-width: 800px) {
    padding: 1.25rem;
  }
`;

export const BannerImage = styled.img`
  width: 30vw;
  height: 100%;

  @media screen and (max-width: 1200px) {
    width: 35vw;
    height: 100%;
  }
  @media screen and (max-width: 101.5rem) {
    width: 35vw;
    height: 100%;
  }
  @media screen and (max-width: 800px) {
    width: 15.625rem;
    height: 12.5rem;
  }
`;
