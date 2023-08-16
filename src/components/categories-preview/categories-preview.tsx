import {
  BackgroundImage,
  Body,
  Content,
  Container,
  Blah,
} from './categories-preview.styles';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductsContext } from '../../contexts/product.context';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(ProductsContext);
  const navigate = useNavigate();

  return (
    <section>
      <Container>
        <Blah>
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
        </Blah>
      </Container>
    </section>
  );
};

export default CategoriesPreview;
