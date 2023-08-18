import {
  Bottom,
  Container,
  Content,
  SummaryContainer,
  SummaryLeft,
  SummaryRight,
  SummaryTop,
  Underline,
} from './summary.styles';
import { FC, useEffect, useState } from 'react';
import PaymentForm from '../payment-form/payment-form';

type SummaryProps = {
  cartTotal: number;
};

const Summary: FC<SummaryProps> = ({ cartTotal }) => {
  const [total, setNewTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const totalAfterFees = cartTotal + 20 - 6;

      setNewTotal(totalAfterFees);
    };
    calculateTotal();
  }, [cartTotal]);

  return (
    <>
      <Container>
        <Content>
          <SummaryContainer>
            <h1>Summary</h1>
            <SummaryTop>
              <SummaryLeft>
                <div>Subtotal</div>
                <div>Shipping and delivery</div>
                <div>Tax</div>
                <div>Discount</div>
              </SummaryLeft>
              <SummaryRight>
                <div>${cartTotal}</div>
                <div>$20</div>
                <div>$6.00</div>
                <div className="discount">-$6.00</div>
              </SummaryRight>
            </SummaryTop>
          </SummaryContainer>
          <Underline />
          <Bottom>
            <div className="total">
              <div>Total</div>
            </div>
            <div className="total" id="final-price">
              <div data-testid="finalPrice">${total}</div>
            </div>
          </Bottom>
          <PaymentForm total={total} />
        </Content>
      </Container>
    </>
  );
};

export default Summary;
