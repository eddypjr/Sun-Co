import { QtyStepper, Button, Span } from './quantity-stepper.styles';
import plus from '../../assets/svg/plus.svg';
import minus from '../../assets/svg/minus.svg';
const QuantityStepper = ({ handleIncrement, handleDecrement, quantity }) => {
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
