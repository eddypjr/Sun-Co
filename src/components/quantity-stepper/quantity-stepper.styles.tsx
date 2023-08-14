import styled from 'styled-components';

export const QtyStepper = styled.div`
  border-radius: 0.625rem;
  border: 0.063rem solid #e9ebee;
  box-shadow: 0rem 0.278rem 4.167rem 0rem rgba(0, 0, 0, 0.08);
  display: inline-flex;
  padding: 0.75rem 1rem;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 800px) {
    justify-content: center;
    display: inline-flex;
    padding: 0.563rem 0.75rem;
    align-items: center;
    gap: 0.75rem;
  }
`;

export const Span = styled.span`
  color: var(--black, #201b21);
  text-align: center;
  font-family: Inter;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  width: 1.5rem;

  @media screen and (max-width: 800px) {
    color: var(--black, #201b21);
    text-align: center;
    font-family: Inter;
    font-size: 0.844rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.125rem; /* 133.333% */
    width: 1.125rem;
  }
`;

export const Button = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
