import {
  BackgroundImage,
  Body,
  Content,
  Container,
  Categories,
} from './categories-preview.styles';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductsContext } from '../../contexts/product.context';

const CategoriesPreview = () => {
  const { data } = useContext(ProductsContext);
  const { categoriesMap } = data;
  const navigate = useNavigate();

  return (
    <section>
      <Container>
        <Categories>
          {categoriesMap.map((category) => (
            <Content
              key={category.title}
              onClick={() => navigate(`shop/${category.title}`)}
            >
              <BackgroundImage
                src={category.imageUrl}
                aria-label="category-image"
              />

              <Body>
                <h2 aria-label={category.title.toUpperCase()}>
                  {category.title.toUpperCase()}
                </h2>
              </Body>
            </Content>
          ))}
        </Categories>
      </Container>
    </section>
  );
};

export default CategoriesPreview;
