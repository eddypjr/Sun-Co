import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductsContext } from '../../contexts/product.context';
import {
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
            <Link to="/shop/All">
              <button>All</button>
            </Link>
            {categoriesMap.map((categoryData, i) => (
              <Link to={`/shop/${categoryData.title}`} key={i}>
                <button>{categoryData.title}</button>
              </Link>
            ))}
          </FilterButtons>
        </Content>
      </Container>
    </section>
  );
};

export default CategoriesHeader;
