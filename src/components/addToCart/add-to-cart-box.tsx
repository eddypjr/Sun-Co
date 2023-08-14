import {
  Bottom,
  ButtonContainer,
  Container,
  Content,
  Top,
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
    <Container>
      <Content>
        <Top>
          <h1>{brand}</h1>
          <h2>{name}</h2>
          <h3>${price}</h3>
        </Top>
        <Underline />
        <Bottom>
          <p>Quantity</p>
          <QuantityStepper
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            quantity={quantity}
          />
          <ButtonContainer>
            <AddToCartButton product={product} quantity={quantity} />
          </ButtonContainer>
        </Bottom>
      </Content>
    </Container>
  );
};

export default AddToCartBox;
