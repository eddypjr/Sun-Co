import { createContext, useState, useEffect, PropsWithChildren } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export type Product = {
  id: string;
  brand: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  category: string;
};

export type Category = {
  title: string;
  imageUrl: string;
  items: Product[];
};

export type CategoryMap = {
  [key: string]: Category[];
};

export const ProductsContext = createContext<CategoryMap>({});

export const ProductsProvider = ({ children }: PropsWithChildren) => {
  const [categoriesMap, setCategoriesMap] = useState<Category[]>([]);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
