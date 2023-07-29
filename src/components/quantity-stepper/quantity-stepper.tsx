import { useState } from 'react';
import { QtyStepper, Button, Span } from './quantity-stepper.styles';
// import plus from '../../../public/assets/svg/plus.svg'
// import minus from '../../../public/assets/svg/minus.svg';
import plus from '../../assets/svg/plus.svg';
import minus from '../../assets/svg/minus.svg';
const QuantityStepper = () => {
  const [quantity, setQuantity] = useState(1);

  // Will eventually move to context
  const handleIncrement = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 99));
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  return (
    <>
      <div>
        <QtyStepper>
          <Button onClick={handleDecrement}>
            <img src={minus} />
          </Button>
          <Span>{quantity}</Span>
          <Button onClick={handleIncrement}>
            <img src={plus} />
          </Button>
        </QtyStepper>
      </div>
    </>
  );
};

export default QuantityStepper;
