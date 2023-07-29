import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  border-radius: 20px;
  background: var(--white, #fff);
  box-shadow: 0px 4.444444179534912px 66.66666412353516px 0px
    rgba(0, 0, 0, 0.08);
  font-family: DM Sans;
`;

export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
`;

export const InnerTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 20px;
  margin-left: 13%;
`;

export const InnerBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 13%;
`;

export const Spacing = styled.div`
  padding-top: 5%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Underline = styled.div`
  opacity: 0.1;
  background-color: #201b21;
  height: 1px;
`;

export const Heading = styled.h1`
  color: var(--black, #201b21);
  font-family: DM Sans;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 133.333% */
  letter-spacing: -1px;
`;
export const Total = styled.div`
  font-size: 24px;
`;
export const SummaryDetails = styled.div`
  font-size: 20px;
  padding: 10px 0px;
`;
