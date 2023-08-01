import { createContext, useState, useEffect, PropsWithChildren } from 'react';
import useEnvironmentCheck from '../custom-hooks/useEnvironmentCheck/useEnvironmentCheck';
import { mockProducts } from '../assets/mock-products';
import type { CartItem } from './cart.context';

interface ProductContextInterface {
  products: CartItem[];
}

const initialState = {
  products: [],
};

export const ProductsContext =
  createContext<ProductContextInterface>(initialState);

export const ProductsProvider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState<CartItem[]>([]);
  const isLocal = useEnvironmentCheck();

  useEffect(() => {
    const localFetch = async () => {
      try {
        if (isLocal === true) {
          await fetch('http://localhost:3000/products')
            .then((response) => response.json())
            .then((data) => setProducts(data));
        }
      } catch (e) {
        console.log(`Error: ${e}. Setting mock data`);
        setProducts(mockProducts);
      }
    };

    localFetch();
  }, [isLocal]);

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
