import { FC } from 'react';
import {
  BulletPoints,
  Container,
  InnerContainer,
  DescriptionHeadingText,
  Description,
  Underline,
} from './product-description.styles';

type ProductDescriptionProps = {
  description: string;
}

const ProductDescription: FC<ProductDescriptionProps> = ({ description }) => {
  return (
    <>
      <Container>
        <InnerContainer>
          <DescriptionHeadingText>Description</DescriptionHeadingText>
          <Underline />
          <Description>
            {description}
          </Description>
          <div>
            <BulletPoints>
              <li>Regular fit</li>
              <li>Lace closure</li>
              <li>Rubber outsole with vulcanized look</li>
              <li>Imported</li>
            </BulletPoints>
          </div>
        </InnerContainer>
      </Container>
    </>
  );
};

export default ProductDescription;
