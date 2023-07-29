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

const subtractCartItem = (cartItems, productToSubtract) => {
  return cartItems.map((cartItem) => {
    if (cartItem.id === productToSubtract.id && cartItem.quantity > 1) {
      return { ...cartItem, quantity: cartItem.quantity - 1 };
    }
    return { ...cartItem };
  });
};

const removeCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  subtractItemFromCart: () => {},
  removeItemFromCart: () => {},
  cartTotal: 0,
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => (total += cartItem.quantity * cartItem.price),
      0
    );

    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd, quantity) => {
    setCartItems(addCartItem(cartItems, productToAdd, quantity));
  };

  const subtractItemFromCart = (productToSubtract) => {
    setCartItems(subtractCartItem(cartItems, productToSubtract));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const value = {
    cartItems,
    addItemToCart,
    subtractItemFromCart,
    removeItemFromCart,
    cartTotal,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
