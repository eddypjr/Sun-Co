import {
  Brand,
  Container,
  InnerBottom,
  InnerContainer,
  InnerTop,
  Name,
  Price,
  Quantity,
  Spacing,
  Underline,
} from './add-to-cart-box.styles';
import { FC, useState } from 'react';
import AddToCartButton from '../add-to-cart-button/add-to-cart-button';
import QuantityStepper from '../quantity-stepper/quantity-stepper';
import type { CartItem } from '../../contexts/cart.context';

type AddToCartBoxProps = {
  product: CartItem;
};

const AddToCartBox: FC<AddToCartBoxProps> = ({ product }) => {
  const { brand, name, price } = product;
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 99));
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  return (
    <>
      <Container>
        <InnerContainer>
          <InnerTop>
            <Brand>{brand}</Brand>
            <Name>{name}</Name>
            <Price>${price}</Price>
          </InnerTop>
          <Underline />
          <InnerBottom>
            <Quantity>Quantity</Quantity>
            <QuantityStepper
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              quantity={quantity}
            />
          </InnerBottom>
          <Spacing>
            <AddToCartButton product={product} quantity={quantity} />
          </Spacing>
        </InnerContainer>
      </Container>
    </>
  );
};

export default AddToCartBox;
