import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd, quantity) => {
  // first determine if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  //if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + quantity }
        : cartItem
    );
  }
  // else, add the new cart item
  return [...cartItems, { ...productToAdd, quantity: quantity }];
};

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  cartTotal: 0,
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = (productToAdd, quantity) => {
    setCartItems(addCartItem(cartItems, productToAdd, quantity));
  };

  const value = {
    cartItems,
    addItemToCart,
    cartTotal,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
