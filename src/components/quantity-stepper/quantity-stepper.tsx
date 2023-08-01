import { QtyStepper, Button, Span } from './quantity-stepper.styles';
import plus from '../../assets/svg/plus.svg';
import minus from '../../assets/svg/minus.svg';
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
          <Button onClick={handleDecrement}>
            <img src={minus} alt="minus"/>
          </Button>
          <Span>{quantity}</Span>
          <Button onClick={handleIncrement}>
            <img src={plus} alt="plus"/>
          </Button>
        </QtyStepper>
      </div>
    </>
  );
};

export default QuantityStepper;
