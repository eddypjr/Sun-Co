import { useState } from 'react';
import {
  BottomContainer,
  Container,
  Slide,
  SlideHidden,
  Arrow,
  Indicators,
  Indicator,
  IndicatorInactive,
} from './photo-carousel.styles';
import LeftChevron from '../../assets/svg/chevron-left.svg';
import RightChevron from '../../assets/svg/chevron-right.svg';

const PhotoCarousel = ({ images }) => {
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
        {images.map((img, i) => {
          return slide === i ? (
            <Slide src={img} key={i} />
          ) : (
            <SlideHidden src={img} key={i} />
          );
        })}
        <BottomContainer>
          <Arrow src={LeftChevron} onClick={prevSlide} />

          <Indicators>
            {images.map((_, i) => {
              return slide === i ? (
                <Indicator key={i}></Indicator>
              ) : (
                <IndicatorInactive key={i}></IndicatorInactive>
              );
            })}
          </Indicators>
          <Arrow src={RightChevron} onClick={nextSlide} />
        </BottomContainer>
      </Container>
    </>
  );
};

export default PhotoCarousel;
