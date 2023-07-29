// import { useState } from "react";
import { AddButton } from './add-to-cart-button.styles';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const AddToCartButton = ({ product, quantity }) => {
  const { addItemToCart, cartItems } = useContext(CartContext);
  const addItemHandler = () => addItemToCart(product, quantity);

  return (
    <>
      <AddButton onClick={addItemHandler}>Add to Cart</AddButton>
    </>
  );
};

export default AddToCartButton;
