import {
  createContext,
  useState,
  useEffect,
  PropsWithChildren,
  useRef,
} from 'react';
import useEnvironmentCheck from '../custom-hooks/useEnvironmentCheck/useEnvironmentCheck';
import { mockProducts } from '../mock-products';

export interface Product {
  id: string;
  brand: string;
  name: string;
  description: string;
  price: number;
  image: string[] | string;
  category: string;
}

interface Category {
  [category: string]: Product[];
}
interface ProductContextInterface {
  [key: string]: Category;
}

const initialState = {
  categories: {},
};

export const ProductsContext =
  createContext<ProductContextInterface>(initialState);

export const ProductsProvider = ({ children }: PropsWithChildren) => {
  const [categories, setCategories] = useState<Category>({});

  useEffect(() => {
    setCategories(mockProducts);
  }, []);

  const value = { categories };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
