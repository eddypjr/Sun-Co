import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Content, ProductCardContainer } from './category.styles';
import { Product, ProductsContext } from '../../contexts/product.context';
import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card';

const Category = () => {
  const { category } = useParams();
  const { categories } = useContext(ProductsContext);
  const [catState, setCatState] = useState<Product[] | []>([]);

  useEffect(() => {
    const getCategory = () => {
      return Object.entries(categories).map((catgry, i) => {
        if (catgry[0] === category) {
          setCatState(catgry[1]);
        }
      });
    };
    getCategory();
  }, [categories, category]);

  return (
    <>
      <section>
        <Container>
          <Content>
            <div>
              <h2>{category}</h2>
            </div>
            <ProductCardContainer>
              {catState &&
                catState.map((product: Product, i) => (
                  <Link to={`/product/${product['name']}`} state={{ product }}>
                    <ProductCard product={product} key={i} />
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
