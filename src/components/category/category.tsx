import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Content, ProductCardContainer } from './category.styles';
import { Product, ProductsContext } from '../../contexts/product.context';
import { Link } from 'react-router-dom';
import CategoriesHeader from '../category-header/category-header';
import ProductCard from '../product-card/product-card';
import type { Category } from '../../contexts/product.context';

const Category = () => {
  const { category } = useParams();
  const { data } = useContext(ProductsContext);
  const { categoriesMap } = data;
  const [categoryProducts, setCategoryProducts] = useState<Product[] | []>([]);

  useEffect(() => {
    function extractItemsFromNestedArray(arr: Category[]) {
      const finalArray: Product[] = [];

      arr.forEach((catgry: Category) => {
        if (category === 'All' || catgry.title === category) {
          finalArray.push(...catgry.items);
        }
      });

      return finalArray;
    }

    const extractedItems = extractItemsFromNestedArray(categoriesMap);
    setCategoryProducts(extractedItems);
  }, [categoriesMap, category]);

  return (
    <>
      <CategoriesHeader />
      <section>
        <Container>
          <Content>
            <ProductCardContainer>
              {categoryProducts.map((product: Product, i) => (
                <Link
                  to={`/product/${product['name']}`}
                  state={{ product }}
                  key={i}
                >
                  <ProductCard product={product} />
                </Link>
              ))}
            </ProductCardContainer>
          </Content>
        </Container>
      </section>
    </>
  );
};

export default Category;
