import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import PhotoCarousel from './photo-carousel';

const exampleImageUrl = [
  './assets/images/products/Off-White/1.png',
  './assets/images/products/Off-White/2.png',
  './assets/images/products/Off-White/3.png',
  './assets/images/products/Off-White/4.png',
];

describe('Photo Carousel in Product page', () => {
  it('Renders properly', () => {
    const { getByTestId } = render(<PhotoCarousel images={exampleImageUrl} />);
    const leftArrow = getByTestId('leftArrow');

    expect(leftArrow).toHaveAttribute('src');
  });
});
