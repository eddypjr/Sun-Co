import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import PhotoCarousel from './photo-carousel';

const exampleImageUrl = [
  'https://i.ibb.co/nwT6w1w/Off-White-1.webp',
  'https://i.ibb.co/C5w4Mpr/Off-White-4.webp',
  'https://i.ibb.co/3dRMfNL/Off-White-5.webp',
];

describe('Photo Carousel in Product page', () => {
  it('Renders properly', () => {
    const { getByTestId } = render(<PhotoCarousel images={exampleImageUrl} />);
    const leftArrow = getByTestId('leftArrow');

    expect(leftArrow).toHaveAttribute('src');
  });
});
