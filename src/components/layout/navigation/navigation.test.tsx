import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navigation from './navigation';
import { BrowserRouter } from 'react-router-dom';

describe('Navigation bar', () => {
  it('Should render with the correct link', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );

    const cartLink = getByTestId('cartLink');

    expect(screen.getByText('View Cart')).toBeInTheDocument();
    expect(cartLink).toHaveAttribute('href', '/cart');
  });
});
