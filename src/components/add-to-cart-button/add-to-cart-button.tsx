// import { useState } from "react";
import { AddButton } from './add-to-cart-button.styles';
import { FC, useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { Link } from 'react-router-dom';
import type { CartItem } from '../../contexts/cart.context';

export type AddToCartButtonProps = {
  product: CartItem;
  quantity: number;
};

const AddToCartButton: FC<AddToCartButtonProps> = ({ product, quantity }) => {
  const { addItemToCart } = useContext(CartContext);
  const addItemHandler = () => addItemToCart(product, quantity);

  return (
    <>
      <Link to="/">
        <AddButton onClick={addItemHandler}>Add to Cart</AddButton>
      </Link>
    </>
  );
};

export default AddToCartButton;
