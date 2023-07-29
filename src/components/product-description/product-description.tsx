import {
  BulletPoints,
  Container,
  InnerContainer,
  DescriptionHeadingText,
  Description,
  Underline,
} from './product-description.styles';

const ProductDescription = () => {

  return (
    <>
      <Container>
        <InnerContainer>
          <DescriptionHeadingText>Description</DescriptionHeadingText>
          <Underline />
          <Description>
            Energize your look with a fresh take on heritage adidas style. The
            adidas Daily 3.0 Shoes cut a classic profile with a modern suede
            upper. Your walk across campus or commute across town has never
            looked or felt this good.
          </Description>
          <BulletPoints>
            <li>Regular fit</li>
            <li>Lace closure</li>
            <li>Rubber outsole with vulcanized look</li>
            <li>Imported</li>
          </BulletPoints>
        </InnerContainer>
      </Container>
    </>
  );
};

export default ProductDescription;
