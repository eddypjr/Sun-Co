import { useNavigate } from 'react-router-dom';
import {
  BackgroundImage,
  Body,
  Content,
  Container,
  Blah,
} from './categories-preview.styles';

const CategoriesPreview = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      route: 'shop/womens',
    },
    {
      id: 3,
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      route: 'shop/hats',
    },
    {
      id: 2,
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      route: 'shop/mens',
    },
    {
      id: 4,
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      route: 'shop/jackets',
    },
    {
      id: 5,
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      route: 'shop/sneakers',
    },
  ];

  return (
    <section>
      <Container>
        <Blah>
          {categories.map((category) => (
            <Content
              key={category.title}
              onClick={() => navigate(category.route)}
            >
              <BackgroundImage imageUrl={category.imageUrl} />
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
