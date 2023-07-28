import styled  from 'styled-components';
import { Link } from 'react-router-dom';

export const Checkout = styled(Link)`
  display: flex;
  width: 456px;
  padding: 20px 80px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: var(--black, #201b21);
  color: white;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;
