import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;

`;

export const InnerContainer = styled.p`
  width: 100%;
  // display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;


export const DescriptionHeadingText = styled.h1`
  color: var(--black, #201b21);
  font-family: DM Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.5px;
`;
export const Description = styled.p`
  color: var(--dark-grey, #67696e);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
`;

export const Underline = styled.div`
  opacity: 0.1;
  background-color: #201b21;
  height: 1px;
`;

export const BulletPoints = styled.ul`
  color: var(--dark-grey, #67696e);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
`;