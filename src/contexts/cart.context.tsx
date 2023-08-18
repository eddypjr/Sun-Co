import { createContext, useState, useEffect, PropsWithChildren } from 'react';

export type CartItem = {
  id: string;
  name: string;
  category: string;
  brand: string;
  description: string;
  price: number;
  image: string;
  quantity?: number;
};

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CartItem,
  quantity: number
) => {
  // first determine if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  //if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: (cartItem?.quantity ?? 0) + quantity }
        : cartItem
    );
  }
  // else, add the new cart item
  return [...cartItems, { ...productToAdd, quantity: quantity }];
};

const subtractCartItem = (
  cartItems: CartItem[],
  productToSubtract: CartItem
) => {
  return cartItems.map((cartItem) => {
    if (cartItem.id === productToSubtract.id && (cartItem?.quantity ?? 0) > 1) {
      return { ...cartItem, quantity: (cartItem?.quantity ?? 0) - 1 };
    }
    return { ...cartItem };
  });
};

const removeCartItem = (cartItems: CartItem[], productToRemove: CartItem) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};

interface CartContextInterface {
  cartItems: CartItem[];
  addItemToCart: (productToAdd: CartItem, quantity: number) => void;
  subtractItemFromCart: (productToSubtract: CartItem) => void;
  removeItemFromCart: (productToRemove: CartItem) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

export const CartContext = createContext<CartContextInterface>({
  cartItems: [],
  addItemToCart: () => {},
  subtractItemFromCart: () => {},
  removeItemFromCart: () => {},
  clearCart: () => {},
  cartTotal: 0,
  cartCount: 0,
});

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);
  const [cartTotal, setCartTotal] = useState<number>(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => (total += cartItem.quantity ?? 0),
      0
    );

    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => (total += (cartItem.quantity ?? 0) * cartItem.price),
      0
    );

    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd: CartItem, quantity: number) => {
    setCartItems(addCartItem(cartItems, productToAdd, quantity));
  };

  const subtractItemFromCart = (productToSubtract: CartItem) => {
    setCartItems(subtractCartItem(cartItems, productToSubtract));
  };

  const removeItemFromCart = (productToRemove: CartItem) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    addItemToCart,
    subtractItemFromCart,
    removeItemFromCart,
    clearCart,
    cartTotal,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
