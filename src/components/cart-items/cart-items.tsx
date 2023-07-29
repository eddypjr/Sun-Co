import QuantityStepper from '../quantity-stepper/quantity-stepper';
import {
  Brand,
  Container,
  InnerContainer,
  ImageContainer,
  Image,
  MiddleColumn,
  Name,
  Price,
  SecondColumnBottom,
  ThirdColumn,
} from './cart-items.styles';
import RemoveButton from '../remove/remote-button';
import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { Quantity } from '../addToCart/addToCart.styles';
const CartItems = () => {
  const { cartItems } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 99));
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  console.log(cartItems);
  return (
    <>
      <Container>
        {cartItems.map((item, i) => {
          return (
            <InnerContainer key={i}>
              <ImageContainer>
                <Image src={item.image} />
              </ImageContainer>
              <MiddleColumn>
                <Brand>{item.brand}</Brand>
                <Name>{item.name}</Name>
                <SecondColumnBottom>
                  <QuantityStepper
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
                    quantity={item.quantity}
                  />
                  <RemoveButton />
                </SecondColumnBottom>
              </MiddleColumn>
              <ThirdColumn>
                <Price>{item.price}</Price>
              </ThirdColumn>
            </InnerContainer>
          );
        })}
      </Container>
    </>
  );
};

export default CartItems;
