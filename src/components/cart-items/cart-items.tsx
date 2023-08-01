import {
  Brand,
  Container,
  Image,
  ImageContainer,
  InnerContainer,
  MiddleColumn,
  Name,
  Price,
  RemoveButton,
  MiddleColumnBottom,
  Underline,
} from './cart-items.styles';
import { FC, useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import QuantityStepper from '../quantity-stepper/quantity-stepper';
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
            <MiddleColumnBottom>
              <QuantityStepper
                handleIncrement={addItemHandler}
                handleDecrement={subtractItemHandler}
                quantity={quantity ?? 0}
              />
              <RemoveButton onClick={removeItemHandler}>Remove</RemoveButton>
            </MiddleColumnBottom>
          </MiddleColumn>
          <div>
            <Price>${price}</Price>
          </div>
        </InnerContainer>
        <Underline />
      </Container>
    </>
  );
};

export default CartItems;
