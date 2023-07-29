import Summary from '../../components/summary/summary';
import CartItems from '../../components/cart-items/cart-items';
import {
  CartHeading,
  CartHeadingDiv,
  Container,
  InnerContainer,
} from './cart.styles';

const Cart = () => {
  return (
    <>
      <Container>
        <CartHeadingDiv>
          <CartHeading>Your Bag</CartHeading>
        </CartHeadingDiv>
        <InnerContainer>
          <CartItems />
          <Summary />
        </InnerContainer>
      </Container>
    </>
  );
};

export default Cart;
