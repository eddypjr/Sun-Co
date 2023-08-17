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
  categories: CategoryImageAndTitle[];
  data: {
    [key: string]: Category[];
  };
};

export type CategoryImageAndTitle = {
  title: string;
  imageUrl: string;
};

export const ProductsContext = createContext<CategoryMap>({
  data: {},
  categories: [],
});

export const ProductsProvider = ({ children }: PropsWithChildren) => {
  const [categoriesMap, setCategoriesMap] = useState<Category[]>([]);
  const [categories, setCategories] = useState<CategoryImageAndTitle[]>([]);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);

      const categoriesList = await Promise.all(
        categoryMap.map(async (category) => ({
          title: category.title,
          imageUrl: category.imageUrl,
        }))
      );

      setCategories(categoriesList);
    };

    getCategoriesMap();
  }, []);

  const value = { data: { categoriesMap }, categories };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
