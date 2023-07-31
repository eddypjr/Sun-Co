import { FC, useState } from 'react';
import {
  BottomContainer,
  Circle,
  Container,
  Slide,
  SlideContainer,
  Arrow,
  Indicators,
  Indicator,
  IndicatorInactive,
} from './photo-carousel.styles';
import LeftChevron from '../../assets/svg/chevron-left.svg';
import RightChevron from '../../assets/svg/chevron-right.svg';

type PhotoCarouselProps = {
  images: string[];
};

const PhotoCarousel: FC<PhotoCarouselProps> = ({ images }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === images.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? images.length - 1 : slide - 1);
  };

  return (
    <>
      <Container>
        <SlideContainer>
          {images.map((img, i) => {
            return slide === i && <Slide src={img} key={i} />;
          })}
        </SlideContainer>
        <BottomContainer>
          <Circle>
            <Arrow
              src={LeftChevron}
              onClick={prevSlide}
              data-testid="leftArrow"
            />
          </Circle>

          <Indicators>
            {images.map((_, i) => {
              return slide === i ? (
                <Indicator key={i}></Indicator>
              ) : (
                <IndicatorInactive key={i}></IndicatorInactive>
              );
            })}
          </Indicators>
          <Circle>
            <Arrow src={RightChevron} onClick={nextSlide} />
          </Circle>
        </BottomContainer>
      </Container>
    </>
  );
};

export default PhotoCarousel;
