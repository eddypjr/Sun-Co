import { useNavigate } from 'react-router-dom';
import {
  BackgroundImage,
  Body,
  Content,
  Container,
  Blah,
} from './categories-preview.styles';
import { useContext } from 'react';
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
              <BackgroundImage src={category.imageUrl} />
              <Body>
                <h2>{category.title.toUpperCase()}</h2>
              </Body>
            </Content>
          ))}
        </Blah>
      </Container>
    </section>
  );
};

export default CategoriesPreview;
