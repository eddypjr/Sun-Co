import { Checkout } from './checkout.styles';
import rightArrow from '../../assets/rightArrow.svg';

const CheckoutButton = () => {
  // use Link instead of div for buttons
  return (
    <>
      <Checkout to="">
        Checkout <img src={rightArrow} />
      </Checkout>
    </>
  );
};

export default CheckoutButton;
