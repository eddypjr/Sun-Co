import { styled } from 'styled-components';

export const AddButton = styled.button`
  display: inline-block;
  width: 28rem;
  width: 100%;
  padding: 1.25rem 10rem;
  gap: 0.625rem;
  border-radius: 0.625rem;
  background: #201b21;
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: Inter;
  font-size: 1.125rem;

  font-weight: 700;
  line-height: 1.25rem;

  &:hover {
    background-color: #d9dbe1;
  }

  @media (max-width: 1400px) {
    padding: 1rem 6rem;
  }

  @media (801px <= width <= 1399px) {
    margin: 0.938rem 0;
    padding: 0.75rem 5rem;
  }

  @media (480px <= width <= 800px) {
    padding: 1rem 6rem;
    width: 25rem;
    margin: 0.938rem 0;
  }

  @media (width <= 479px) {
    padding: 0.75rem 5rem;
    margin: 0.938rem 0;
  }

  @media (width <= 319px) {
    padding: 0.75rem 3rem;
  }
`;
