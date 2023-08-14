import {
  BulletPoints,
  Container,
  Content,
  Underline,
} from './product-description.styles';
import { FC } from 'react';

type ProductDescriptionProps = {
  description: string;
};

const ProductDescription: FC<ProductDescriptionProps> = ({ description }) => {
  return (
    <>
      <section>
        <Container>
          <Content>
            <h1>Description</h1>
            <Underline />
            <p>{description}</p>
            <div>
              <BulletPoints>
                <li>Regular fit</li>
                <li>Lace closure</li>
                <li>Rubber outsole with vulcanized look</li>
                <li>Imported</li>
              </BulletPoints>
            </div>
          </Content>
        </Container>
      </section>
    </>
  );
};

export default ProductDescription;
