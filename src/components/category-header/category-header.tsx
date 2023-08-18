import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../contexts/product.context';
import {
  Category,
  Container,
  Content,
  Title,
  FilterButtons,
} from './category-header.styles';

const CategoriesHeader = () => {
  const { data } = useContext(ProductsContext);
  const { categoriesMap } = data;
  const { category } = useParams();

  return (
    <section>
      <Container>
        <Content>
          <Title>
            <h3>{category}</h3>
          </Title>
          <FilterButtons className="filter-buttons">
            <Category to="/shop/All">
              <button>All</button>
            </Category>
            {categoriesMap.map((categoryData, i) => (
              <Category to={`/shop/${categoryData.title}`} key={i}>
                <button>{categoryData.title}</button>
              </Category>
            ))}
          </FilterButtons>
        </Content>
      </Container>
    </section>
  );
};

export default CategoriesHeader;
