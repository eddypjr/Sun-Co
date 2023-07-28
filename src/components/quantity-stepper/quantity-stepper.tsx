import { useState } from 'react';
import { QtyStepper, Button, Span } from './quantity-stepper.styles';
import plus from '../../assets/plus.svg';
import minus from '../../assets/minus.svg';
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
    <QtyStepper>
      <Button onClick={handleDecrement}>
        <img src={minus} />
      </Button>
      <Span>{quantity}</Span>
      <Button onClick={handleIncrement}>
        <img src={plus} />
      </Button>
    </QtyStepper>
    </>
  );
};

export default QuantityStepper;
