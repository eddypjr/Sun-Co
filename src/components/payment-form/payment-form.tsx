import {
  Container,
  Content,
  StyledForm,
  Title,
  Row,
  CardContainer,
  PayNowButton,
  ButtonSpinner,
} from './payment-form.styles';
import { FC, FormEvent, useState, useContext } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import { StripeCardElement } from '@stripe/stripe-js';

type PaymentFormProps = {
  total: number;
};

const PaymentForm: FC<PaymentFormProps> = ({ total }) => {
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const { clearCart } = useContext(CartContext);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true);
    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ amount: total * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement) as StripeCardElement,
        billing_details: {
          name: 'Guest',
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert(
          'Payment Successful. Thank you for placing an order with Sun Co.'
        );
        clearCart();
      }
    }
    navigate('/');
  };

  return (
    <Container>
      <Content>
        <Title>Checkout</Title>
        <StyledForm onSubmit={paymentHandler}>
          <Row>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </Row>
          <input type="email" placeholder="Email" />
          <Row>
            <input type="tel" placeholder="Phone Number" />
          </Row>
          <input type="text" placeholder="Address" />
          <Row>
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
            <input type="text" placeholder="Zip" />
          </Row>
          <CardContainer>
            <label>Card Details</label>
            <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
          </CardContainer>

          <PayNowButton disabled={isProcessingPayment}>
            {isProcessingPayment ? <ButtonSpinner /> : 'Pay Now'}
          </PayNowButton>
        </StyledForm>
      </Content>
    </Container>
  );
};

export default PaymentForm;
