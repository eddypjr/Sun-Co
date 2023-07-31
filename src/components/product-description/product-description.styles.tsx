import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const InnerContainer = styled.div`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DescriptionHeadingText = styled.h1`
  color: var(--black, #201b21);
  font-family: DM Sans;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2rem; /* 133.333% */
  letter-spacing: -0.031rem;
`;

export const Description = styled.p`
  color: var(--dark-grey, #67696e);
  font-family: Inter;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 133.333% */
`;

export const Underline = styled.div`
  opacity: 0.1;
  background-color: #201b21;
  height: 0.063rem;
`;

export const BulletPoints = styled.ul`
  color: var(--dark-grey, #67696e);
  font-family: Inter;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 133.333% */
`;
