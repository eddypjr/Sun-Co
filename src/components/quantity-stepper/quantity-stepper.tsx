import { QtyStepper, Button, Span } from './quantity-stepper.styles';
import { FC } from 'react';

type QuantityStepperProps = {
  handleIncrement: () => void;
  handleDecrement: () => void;
  quantity: number;
};

const QuantityStepper: FC<QuantityStepperProps> = ({
  handleIncrement,
  handleDecrement,
  quantity,
}) => {
  return (
    <>
      <div>
        <QtyStepper>
          <Button onClick={handleDecrement}>&#8722;</Button>
          <Span>{quantity}</Span>
          <Button onClick={handleIncrement}>&#43;</Button>
        </QtyStepper>
      </div>
    </>
  );
};

export default QuantityStepper;
