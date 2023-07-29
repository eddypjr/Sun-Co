import Summary from '../../components/summary/summary';
import CartItems from '../../components/cart-items/cart-items';
import {
  CartHeading,
  CartHeadingDiv,
  Container,
  InnerContainer,
  GridContainer,
  LeftContainer,
  RightContainer
} from './cart.styles';
import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/cart.context';

const Cart = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  

  console.log('cartTotal', cartTotal);

  return (
    <>
      <Container>
        <CartHeadingDiv>
          <CartHeading>Your Bag</CartHeading>
        </CartHeadingDiv>
        <InnerContainer>
          <GridContainer>
            <LeftContainer>
              {cartItems.map((item, i) => {
                return (
                    <CartItems item={item} key={i} />
                );
              })}
            </LeftContainer>
            <RightContainer>
              <Summary cartTotal={cartTotal } />
            </RightContainer>
          </GridContainer>
        </InnerContainer>
      </Container>
    </>
  );
};

export default Cart;
