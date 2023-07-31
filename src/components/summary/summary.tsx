import {
  Bottom,
  Checkout,
  Container,
  Discount,
  FinalPrice,
  Heading,
  InnerContainer,
  SummaryTop,
  BottomLeft,
  BottomRight,
  Spacing,
  SummaryContainer,
  SummaryLeft,
  SummaryRight,
  Total,
  Underline,
} from './summary.styles';
import { FC, useEffect, useState } from 'react';
import rightArrow from '../../assets/svg/rightArrow.svg';

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
        <InnerContainer>
          <SummaryTop>
            <Heading>Summary</Heading>
            <SummaryContainer>
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
                <Discount>-$6.00</Discount>
              </SummaryRight>
            </SummaryContainer>
          </SummaryTop>
          <Underline />
          <Bottom>
            <BottomLeft>
              <Total>Total</Total>
            </BottomLeft>
            <BottomRight>
              <FinalPrice data-testid="finalPrice">${total}</FinalPrice>
            </BottomRight>
          </Bottom>
          <Spacing>
            <Checkout to="">
              Checkout <img src={rightArrow} />
            </Checkout>
          </Spacing>
        </InnerContainer>
      </Container>
    </>
  );
};

export default Summary;
