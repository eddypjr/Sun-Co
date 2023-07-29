// import { useState } from "react";
import { AddButton } from './add-to-cart-button.styles';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { Link } from 'react-router-dom';

const AddToCartButton = ({ product, quantity }) => {
  const { addItemToCart } = useContext(CartContext);
  const addItemHandler = () => addItemToCart(product, quantity);

  return (
    <>
      <AddButton onClick={addItemHandler}>
        <Link to="/">Add to Cart</Link>
      </AddButton>
    </>
  );
};

export default AddToCartButton;
