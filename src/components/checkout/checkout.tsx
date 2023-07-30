import { Checkout } from './checkout.styles';
import rightArrow from '../../assets/svg/rightArrow.svg';
import { FC } from 'react';

const CheckoutButton: FC = () => {
  return (
    <>
      <Checkout to="">
        Checkout <img src={rightArrow} />
      </Checkout>
    </>
  );
};

export default CheckoutButton;
