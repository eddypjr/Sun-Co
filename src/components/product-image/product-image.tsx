import { FC, useState } from 'react';
import { Container, ProductImage } from './product-image.styles';

type ProductImageProps = {
  thumbnail: string;
};

const ProgressiveImage: FC<ProductImageProps> = ({ thumbnail }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <Container>
        {!imageLoaded && (
          <ProductImage
            className="blur-image"
            src={thumbnail}
            alt="product-card-thumbnail"
          />
        )}
        <ProductImage
          src={thumbnail}
          alt="product-card-thumbnail"
          loading="lazy"
          onLoad={handleImageLoad}
        />
      </Container>
    </>
  );
};

export default ProgressiveImage;
