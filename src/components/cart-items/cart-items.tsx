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
  RemoveButton,
  SecondColumnBottom,
  ThirdColumn,
} from './cart-items.styles';
import { FC, useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import type { CartItem } from '../../contexts/cart.context';

type CartItemsProps = {
  item: CartItem;
};

const CartItems: FC<CartItemsProps> = ({ item }) => {
  const { addItemToCart, subtractItemFromCart, removeItemFromCart } =
    useContext(CartContext);
  const { image, brand, name, price, quantity } = item;

  const addItemHandler = () => addItemToCart(item, 1);
  const subtractItemHandler = () => subtractItemFromCart(item);
  const removeItemHandler = () => removeItemFromCart(item);

  return (
    <>
      <Container>
        <InnerContainer>
          <ImageContainer>
            <Image src={image} />
          </ImageContainer>
          <MiddleColumn>
            <Brand>{brand}</Brand>
            <Name>{name}</Name>
            <SecondColumnBottom>
              <QuantityStepper
                handleIncrement={addItemHandler}
                handleDecrement={subtractItemHandler}
                quantity={quantity}
              />
              <RemoveButton onClick={removeItemHandler}>Remove</RemoveButton>
            </SecondColumnBottom>
          </MiddleColumn>
          <ThirdColumn>
            <Price>${price}</Price>
          </ThirdColumn>
        </InnerContainer>
      </Container>
    </>
  );
};

export default CartItems;
