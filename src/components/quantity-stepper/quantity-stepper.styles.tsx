import styled from "styled-components"

export const QtyStepper = styled.div`
  border-radius: 10px;
  border: 1px solid #e9ebee;
  box-shadow: 0px 4.444444179534912px 66.66666412353516px 0px
    rgba(0, 0, 0, 0.08);
  display: inline-flex;
  padding: 12px 16px;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 800px) {
    justify-content: center;
    display: inline-flex;
    padding: 9px 12px;
    align-items: center;
    gap: 12px;
  }
`;

export const Span = styled.span`
  color: var(--black, #201b21);
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  width: 24px;

  @media screen and (max-width: 800px) {
    color: var(--black, #201b21);
    text-align: center;
    font-family: Inter;
    font-size: 13.5px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 133.333% */
    width: 18px;
  }
`;

export const Button = styled.div`
  width: 24px;
  height: 24px;

  @media screen and (max-width: 800px) {
    width: 24px;
    height: 24px;
  }
`;