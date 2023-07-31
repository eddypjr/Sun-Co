import { styled } from 'styled-components';

export const AddButton = styled.button`
  display: flex;
  width: 28.5rem;
  padding: 1.25rem 5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.625rem;
  background: var(--black, #201b21);
  color: var(--white, #fff);
  font-family: Inter;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem; /* 111.111% */

  @media screen and (max-width: 800px) {
    width: 18.75rem;
    padding: 0.875rem 5rem;
  }
`;
