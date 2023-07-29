// import { useState } from "react";
import { AddButton } from './add-to-cart-button.styles';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const AddToCartButton = ({ product }) => {
  const { addItemToCart, cartItems } = useContext(CartContext);
  const addItemHandler = () => addItemToCart(product);
  console.log(cartItems);
  return (
    <>
      <AddButton onClick={addItemHandler}>Add to Cart</AddButton>
    </>
  );
};

export default AddToCartButton;
