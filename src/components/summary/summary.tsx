import {
  Container,
  Heading,
  InnerContainer,
  InnerTop,
  InnerBottom,
  SummaryDetails,
  Total,
  Underline,
  Spacing,
} from './summary.styles';
import CheckoutButton from '../checkout/checkout';

const Summary = () => {
  return (
    <>
      <Container>
        <InnerContainer>
          <InnerTop>
            <Heading>Summary</Heading>
            <div>
              <SummaryDetails>Subtotal</SummaryDetails>
              <SummaryDetails>Shipping and delivery</SummaryDetails>
              <SummaryDetails>Tax</SummaryDetails>
              <SummaryDetails>Discount</SummaryDetails>
            </div>
          </InnerTop>
          <Underline />
          <InnerBottom>
            <Total>Total</Total>
          </InnerBottom>
          <Spacing>
            <CheckoutButton />
          </Spacing>
        </InnerContainer>
      </Container>
    </>
  );
};

export default Summary;
