import {
  CartHeading,
  CartHeadingDiv,
  Container,
  InnerContainer,
  InnerGrid,
  LeftContainer,
  RightContainer,
} from './cart.styles';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CartItems from '../../components/cart-items/cart-items';
import Summary from '../../components/summary/summary';

const Cart = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <>
      <Container>
        <InnerContainer>
          <InnerGrid>
            <LeftContainer>
              <CartHeadingDiv>
                <CartHeading>Your Bag</CartHeading>
              </CartHeadingDiv>
              {cartItems.map((item, i) => {
                return <CartItems item={item} key={i} />;
              })}
            </LeftContainer>
            <RightContainer>
              <Summary cartTotal={cartTotal} />
            </RightContainer>
          </InnerGrid>
        </InnerContainer>
      </Container>
    </>
  );
};

export default Cart;
