import { styled } from 'styled-components';

export const AddButton = styled.button`
  display: flex;
  width: 456px;
  padding: 20px 80px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: var(--black, #201b21);
  color: var(--white, #fff);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 111.111% */

  @media screen and (max-width: 800px) {
    width: 302px;
    padding: 14px 80px;
  }
`;
